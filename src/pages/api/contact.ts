import type { APIRoute } from "astro";
import { Resend } from "resend";

// Este endpoint corre en el servidor (no se prerenderiza).
export const prerender = false;

const TO = "contacto@fragsa.mx";
const FROM = "Formulario G2B <formularios@send.g2b.com.mx>";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
  if (!apiKey) {
    return json({ ok: false, error: "Servicio de correo no configurado." }, 500);
  }

  let data: Record<string, string>;
  try {
    const form = await request.formData();
    data = Object.fromEntries(
      [...form.entries()].map(([k, v]) => [k, String(v).trim()])
    );
  } catch {
    return json({ ok: false, error: "Solicitud inválida." }, 400);
  }

  const nombre = data.nombre ?? "";
  const correo = data.correo ?? "";
  const empresa = data.empresa ?? "";
  const telefono = data.telefono ?? "";
  const interes = data.interes ?? "";
  const mensaje = data.mensaje ?? "";
  const website = data.website ?? ""; // honeypot anti-spam

  // Bot detectado: respondemos ok sin enviar nada.
  if (website) return json({ ok: true }, 200);

  if (!nombre || !correo) {
    return json({ ok: false, error: "Faltan el nombre o el correo." }, 400);
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  if (!emailOk) {
    return json({ ok: false, error: "El correo no es válido." }, 400);
  }

  const rows: [string, string][] = [
    ["Nombre", nombre],
    ["Correo", correo],
    ["Empresa / Dependencia", empresa],
    ["Teléfono", telefono],
    ["Interés", interes],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0A235B;max-width:560px;margin:0 auto">
      <h2 style="color:#0A235B;border-bottom:3px solid #1693C9;padding-bottom:8px">
        Nuevo mensaje desde g2b.com.mx
      </h2>
      <table style="width:100%;border-collapse:collapse;margin:16px 0">
        ${rows
          .filter(([, v]) => v)
          .map(
            ([label, v]) => `
          <tr>
            <td style="padding:6px 12px 6px 0;color:#838488;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td>
            <td style="padding:6px 0;font-size:14px;font-weight:600">${escape(v)}</td>
          </tr>`
          )
          .join("")}
      </table>
      <div style="margin-top:8px">
        <div style="color:#838488;font-size:13px;margin-bottom:4px">Mensaje</div>
        <div style="font-size:14px;line-height:1.5;white-space:pre-wrap;background:#F7F8FC;border-radius:8px;padding:14px">${
          escape(mensaje) || "<em style='color:#838488'>(sin mensaje)</em>"
        }</div>
      </div>
    </div>`;

  const text = rows
    .filter(([, v]) => v)
    .map(([label, v]) => `${label}: ${v}`)
    .concat(["", "Mensaje:", mensaje || "(sin mensaje)"])
    .join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: correo,
      subject: `Contacto web · ${nombre}${empresa ? ` (${empresa})` : ""}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return json({ ok: false, error: "No se pudo enviar el mensaje." }, 502);
    }

    return json({ ok: true }, 200);
  } catch (err) {
    console.error("Contact endpoint error:", err);
    return json({ ok: false, error: "Error inesperado del servidor." }, 500);
  }
};

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
