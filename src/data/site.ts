/* ============================================================
   G2B CONSTRUCTORA — Datos del sitio
   ✅ = dato VALIDADO contra el CV Corporativo 2026 (PDF)
   ⏳ = PENDIENTE de confirmar con el cliente (NO inventar)
   ============================================================ */

export const brand = {
  name: "Grupo Constructor G2B",
  group: "Grupo Constructor G2B", // ✅
  concept: "Infraestructura que transforma México.", // ✅ rector NUEVO (doc 2026)
  taglines: {
    // ✅ tomados textualmente del documento del grupo
    primary: "Construimos hoy el futuro de México.",
    team: "Un solo grupo, toda la capacidad para construir el futuro de México.",
    closing: "Unidos somos más fuertes, juntos llegamos más lejos.",
  },
  pillars: ["Ingeniería", "Construcción", "Resultados"], // ✅
  values: ["Integración", "Calidad", "Compromiso", "Seguridad", "Innovación", "Sostenibilidad", "Colaboración", "Resultados"], // ✅ (doc 2026)
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

/* Público objetivo (✅) — usado por /v2 (versión anterior) */
export const audiences = {
  gobierno: ["CONAGUA", "Municipios", "Estados", "Organismos operadores de agua", "Secretarías de infraestructura"],
  privado: ["Desarrolladores inmobiliarios", "Parques industriales", "Constructoras", "Industria manufacturera", "Agroindustria", "Empresas de tratamiento de agua"],
};

/* ============================================================
   GRUPO CONSTRUCTOR G2B — estructura nueva (doc 2026)
   ✅ validado contra "Grupo constructor G2B.pdf"
   ============================================================ */

/* Las 5 empresas especializadas del grupo */
export const companies = [
  {
    slug: "camex",
    name: "CAMEX",
    specialty: "Hidrocarburos, asfaltos y pavimentación",
    desc: "Importación, comercialización y suministro de hidrocarburos, asfaltos modificados, emulsiones y mezclas asfálticas. Especialistas en pavimentación, conservación carretera, urbanización y estabilización de suelos.",
    services: ["Hidrocarburos", "Asfaltos modificados", "Emulsiones", "Mezclas asfálticas", "Pavimentación y conservación vial"],
    note: "+20 años · Plantas en Silao (GTO) y Cadereyta (NL)",
    color: "#C72A1C",
    icon: "road",
    website: "", // ⏳ PENDIENTE
    logo: "",   // ⏳ PENDIENTE — ruta /img/logos/camex.svg
    img: "/img/empresas/camex.png",
  },
  {
    slug: "fragsa",
    name: "FRAGSA",
    specialty: "Edificación e ingeniería de instalaciones",
    desc: "Edificación industrial, comercial e institucional e infraestructura: naves industriales, centros comerciales, hoteles de gran turismo e instalaciones especiales.",
    services: ["Edificación industrial", "Naves industriales", "Centros comerciales", "Hoteles y turismo", "Instalaciones especiales"],
    color: "#163C7A",
    icon: "building",
    website: "", // ⏳ PENDIENTE
    logo: "",   // ⏳ PENDIENTE
    img: "/img/empresas/fragsa.png",
  },
  {
    slug: "jalie-vali",
    name: "JALIE-VALI",
    specialty: "Infraestructura hidráulica, sanitaria y obra civil",
    desc: "Plantas de tratamiento de agua, sistemas de conducción, redes hidráulicas y sanitarias, colectores, drenaje profundo, desazolves, recuperación de cauces y rehabilitación de presas.",
    services: ["Plantas de tratamiento (PTAR)", "Redes hidráulicas y sanitarias", "Colectores y drenaje profundo", "Desazolves y cauces", "Rehabilitación de presas"],
    color: "#3F7E2F",
    icon: "droplet",
    website: "", // ⏳ PENDIENTE
    logo: "",   // ⏳ PENDIENTE
    img: "/img/empresas/jalie-vali.png",
  },
  {
    slug: "gemco",
    name: "GEMCO",
    specialty: "Desarrollo inmobiliario, industrial y comercial",
    desc: "Diseño, desarrollo, construcción y comercialización de espacios industriales, comerciales y corporativos, con gestión integral de proyectos.",
    services: ["Diseño arquitectónico e ingeniería", "Construcción de alto nivel", "Proyectos a la medida", "Gestión integral", "Desarrollo y comercialización"],
    color: "#E2641A",
    icon: "factory",
    website: "https://www.gemco-construccion.com/", // ✅
    logo: "",   // ⏳ PENDIENTE
    img: "/img/empresas/gemco.png",
  },
  {
    slug: "vigasa",
    name: "VIGASA",
    specialty: "Estructuras de acero, fabricación y montaje",
    desc: "Ingeniería, diseño, fabricación y montaje de estructuras de acero para proyectos industriales, logísticos y comerciales: puentes metálicos, naves y edificios verticales. Tecnología BIM e ISO 9001.",
    services: ["Ingeniería y diseño (BIM)", "Fabricación industrializada", "Puentes metálicos", "Naves y centros logísticos", "Montaje especializado"],
    color: "#2C7BBF",
    icon: "beam",
    website: "https://www.vigasa.mx/", // ✅
    logo: "",   // ⏳ PENDIENTE
    img: "/img/empresas/vigasa.png",
  },
];

/* Modelo integral — proyectos llave en mano */
export const integralModel = [
  { n: 1, title: "Planeación", desc: "Definición técnica y estratégica de cada proyecto." },
  { n: 2, title: "Ingeniería y diseño", desc: "Ingeniería de detalle y modelado BIM." },
  { n: 3, title: "Suministro y fabricación", desc: "Materiales propios y fabricación industrializada." },
  { n: 4, title: "Construcción", desc: "Ejecución con maquinaria y equipo propios." },
  { n: 5, title: "Logística", desc: "Operación simultánea de múltiples frentes de obra." },
  { n: 6, title: "Operación", desc: "Puesta en marcha y operación de la infraestructura." },
];

/* Áreas de especialidad del grupo */
export const specialties = [
  { label: "Infraestructura", icon: "road" },
  { label: "Ingeniería", icon: "ruler" },
  { label: "Edificación", icon: "building" },
  { label: "Energía", icon: "bolt" },
  { label: "Obra hidráulica", icon: "droplet" },
  { label: "Pavimentación", icon: "road" },
  { label: "Estructuras metálicas", icon: "beam" },
  { label: "Desarrollo industrial", icon: "factory" },
];

/* Diferenciadores del grupo */
export const differentiators = [
  { t: "Capacidad integral", d: "Soluciones completas bajo un solo grupo." },
  { t: "Infraestructura propia", d: "Maquinaria, plantas y equipo propios." },
  { t: "Ejecución simultánea", d: "Múltiples frentes de obra al mismo tiempo." },
  { t: "Experiencia y respaldo", d: "Trayectoria comprobada a nivel nacional." },
  { t: "Solidez y confianza", d: "Capacidad técnica, operativa y financiera." },
  { t: "Impacto nacional", d: "Proyectos estratégicos para el desarrollo de México." },
];

/* Para quién trabajamos (grupo) */
export const audiencesGroup = [
  { icon: "gov", title: "Gobierno", desc: "Dependencias, municipios, estados y organismos para obra pública e infraestructura estratégica." },
  { icon: "chart", title: "Inversionistas", desc: "Proyectos de alto impacto con solidez financiera y ejecución confiable." },
  { icon: "building", title: "Desarrolladores", desc: "Desarrollos inmobiliarios, industriales y comerciales llave en mano." },
];
