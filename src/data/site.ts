/* ============================================================
   G2B CONSTRUCTORA — Datos del sitio
   ✅ = dato VALIDADO contra el CV Corporativo 2026 (PDF)
   ⏳ = PENDIENTE de confirmar con el cliente (NO inventar)
   ============================================================ */

export const brand = {
  name: "G2B Constructora",
  group: "Grupo Constructor G2B", // ✅
  concept: "Infraestructura que conecta, agua que transforma, comunidades que crecen.", // ✅ concepto rector
  taglines: {
    // ✅ tomados textualmente del PDF
    primary: "Ingeniería que protege hoy, desarrollo que trasciende mañana.",
    team: "Equipo que construye soluciones, experiencia que genera resultados.",
    closing: "Seguimos construyendo juntos el futuro.",
  },
  pillars: ["Ingeniería", "Construcción", "Resultados"], // ✅
  values: ["Compromiso", "Calidad", "Responsabilidad"], // ✅ (en el CV)
  // ⏳ Datos de contacto pendientes del cliente:
  contact: {
    phone: "", // ⏳ PENDIENTE
    email: "", // ⏳ PENDIENTE
    whatsapp: "", // ⏳ PENDIENTE
    address: "", // ⏳ PENDIENTE
  },
  founded: "", // ⏳ PENDIENTE — año de fundación
};

/* Indicadores de prueba — TODOS validados en el PDF */
export const stats = [
  { value: 943, prefix: "$", suffix: "M+", label: "Invertidos en obra ejecutada", note: "$943,188,292.78 MXN" }, // ✅
  { value: 170000, prefix: "+", suffix: "", label: "Plántulas entregadas", note: "Especies nativas y endémicas" }, // ✅
  { value: 50, prefix: "+", suffix: "", label: "Equipos y plantas propias", note: "Maquinaria pesada y especializada" }, // ✅ (suma de flota)
  { value: 5, prefix: "", suffix: "", label: "Líneas de solución", note: "Infraestructura integral del agua" }, // ✅
];

/* Las 5 unidades de negocio — validadas en ficha + PDF */
export const solutions = [
  {
    slug: "infraestructura-hidraulica",
    title: "Infraestructura Hidráulica",
    short: "Plantas, redes, conducción, colectores y drenaje profundo.",
    icon: "droplet",
    services: [
      "Plantas de tratamiento de agua",
      "Redes hidráulicas",
      "Sistemas de conducción",
      "Colectores",
      "Drenaje profundo",
      "Infraestructura pluvial",
      "Obras de protección hidráulica",
      "Desazolves",
      "Recuperación de cauces",
      "Urbanización hidráulica",
    ],
    benefits: [
      "Gestión eficiente del agua",
      "Protección contra inundaciones",
      "Desarrollo urbano sostenible",
      "Infraestructura resiliente",
    ],
  },
  {
    slug: "ptar-tratamiento-agua",
    title: "PTAR y Tratamiento de Agua",
    short: "Plantas de Tratamiento de Aguas Residuales con tecnología MoMo.",
    icon: "recycle",
    featured: true, // servicio estrella
    services: [
      "Diseño, construcción y operación de PTARs",
      "PTAR Abierta",
      "PTAR Cerrada",
      "PTAR Oculta",
      "PTAR Geomembrana",
      "PTAR Lagunar",
    ],
    benefits: [
      "Tratamiento eficiente",
      "Reúso sostenible",
      "Restauración ambiental",
      "Impacto comunitario",
      "Rentabilidad operativa",
    ],
    // ✅ del PDF — claims técnicos (revisar redacción "sin uso de electricidad" con cliente)
    tech: {
      name: "Tecnología MoMo",
      points: [
        "Remoción eficiente de contaminantes",
        "Eliminación de hasta 95% de lodos",
        "Bajo consumo energético", // PDF dice "sin uso de electricidad" — ⏳ confirmar antes de publicar tal cual
        "Reúso del agua tratada",
      ],
    },
    compliance: "Alineados a NOM-001, NOM-002, NOM-003 y estándares ESG", // ✅
  },
  {
    slug: "proteccion-hidraulica",
    title: "Infraestructura de Protección Hidráulica",
    short: "Desazolves, recuperación de cauces y control pluvial.",
    icon: "shield",
    services: [
      "Desazolves",
      "Recuperación de cauces",
      "Protección de márgenes",
      "Encauzamientos",
      "Presas",
      "Obras de control pluvial",
    ],
    benefits: [
      "Prevención de inundaciones",
      "Recuperación hidráulica",
      "Protección ambiental",
      "Alta capacidad operativa",
    ],
  },
  {
    slug: "redes-sanitarias-pluviales",
    title: "Redes Sanitarias y Pluviales",
    short: "Redes, colectores, cárcamos y obras de urbanización.",
    icon: "network",
    services: [
      "Redes sanitarias",
      "Redes pluviales",
      "Colectores",
      "Alcantarillado",
      "Cárcamos",
      "Líneas de impulsión",
      "Pozos de visita",
      "Bocas de tormenta",
      "Pozos de absorción",
    ],
    benefits: [
      "Sistemas confiables",
      "Manejo eficiente del agua",
      "Prevención de inundaciones",
      "Cumplimiento normativo",
    ],
  },
  {
    slug: "pavimentacion",
    title: "Pavimentación",
    short: "Pavimentación asfáltica e hidráulica, vialidades y urbanización.",
    icon: "road",
    services: [
      "Pavimentación asfáltica",
      "Carpeta asfáltica",
      "Rehabilitación",
      "Señalamiento",
      "Terracerías",
      "Pavimentación hidráulica",
      "Calles y vialidades",
      "Urbanización",
    ],
    benefits: [
      "Mayor durabilidad",
      "Menor mantenimiento",
      "Mejor transitabilidad",
      "Mayor valor urbano",
    ],
  },
];

/* El Modelo G2B — 5 fases (✅ validado) */
export const modelo = [
  { n: 1, title: "Captación y conducción", desc: "Captamos y conducimos el agua hacia la infraestructura hidráulica." },
  { n: 2, title: "Tratamiento en planta", desc: "Plantas de tratamiento que recuperan con tecnología propia." },
  { n: 3, title: "Reúso del agua", desc: "Reutilización para riego, agricultura, áreas verdes e industria." },
  { n: 4, title: "Restauración ambiental", desc: "Reforestamos y preservamos cuencas, márgenes y ecosistemas." },
  { n: 5, title: "Desarrollo territorial", desc: "Generamos valor económico, social y ambiental en las comunidades." },
];

/* Capacidad operativa — TODAS las cifras validadas en el PDF (pág. 7) */
export const capacity = {
  "Maquinaria pesada": [
    { item: "Excavadoras", qty: 10 },
    { item: "Excavadoras anfibias", qty: 3 },
    { item: "Retroexcavadoras", qty: 15 },
    { item: "Tractores bulldozer", qty: 2 },
    { item: "Cargadores frontales", qty: 4 },
    { item: "Motoniveladoras", qty: 4 },
    { item: "Vibrocompactadores", qty: 4 },
    { item: "Compactadores terraceros", qty: 4 },
  ],
  "Equipo especializado": [
    { item: "Perforadoras", qty: 3 },
    { item: "Plantas de asfalto", qty: 2 },
    { item: "Plantas de concreto", qty: 2 },
    { item: "Ollas de concreto", qty: 10 },
    { item: "Pavimentadoras", qty: 2 },
    { item: "Fresadoras", qty: 2 },
    { item: "Circuitos de trituración", qty: 4 },
  ],
  "Transporte": [
    { item: "Camiones de volteo", qty: 7 },
    { item: "Góndolas", qty: 2 },
    { item: "Camión plataforma (dolly)", qty: 1 },
    { item: "Freightliner", qty: 4 },
    { item: "Volvo 2017", qty: 1 },
  ],
};

/* Experiencia comercial — montos validados (PDF pág. 8) */
export const experience = {
  total: "$943,188,292.78",
  byType: [
    { label: "Desazolves de canales, arroyos y presas", amount: 158084700.0 },
    { label: "Drenaje sanitario", amount: 124068716.8 },
    { label: "Drenaje pluvial", amount: 89772856.0 },
    { label: "Pavimento hidráulico", amount: 86961353.7 },
    { label: "Cárcamos, generador y tablero de transferencia", amount: 26441182.8 },
    { label: "Pavimento asfáltico", amount: 23959604.1 },
  ],
  bySector: [
    { label: "Iniciativa pública", amount: 509288413.4 },
    { label: "Iniciativa privada", amount: 433899879.38 },
  ],
};

/* Público objetivo (✅) */
export const audiences = {
  gobierno: ["CONAGUA", "Municipios", "Estados", "Organismos operadores de agua", "Secretarías de infraestructura"],
  privado: ["Desarrolladores inmobiliarios", "Parques industriales", "Constructoras", "Industria manufacturera", "Agroindustria", "Empresas de tratamiento de agua"],
};
