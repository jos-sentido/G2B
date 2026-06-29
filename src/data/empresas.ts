/* ============================================================
   DETALLE POR EMPRESA — áreas de especialidad que cada compañía
   ejecuta dentro del Grupo Constructor G2B.
   ✅ Basado en el CV Corporativo 2026 y el doc "Grupo constructor G2B".
   ⚠️ Copy descriptivo de cada especialidad (qué implica el servicio),
      NO inventa cifras, clientes ni certificaciones no documentadas.
   ============================================================ */

export interface EmpresaArea {
  title: string;
  desc: string;
  items: string[];
  icon: string;
}

export interface EmpresaDetail {
  /* Posicionamiento corto bajo el nombre */
  tagline: string;
  /* Intro — qué resuelve la empresa dentro del grupo (1–2 párrafos) */
  intro: string[];
  /* Áreas de especialidad en detalle */
  areas: EmpresaArea[];
  /* En qué tipo de proyectos/sectores se aplica */
  aplicaciones: string[];
  /* Respaldo documentado (hechos del PDF) — opcional */
  respaldo?: string[];
  /* Cómo encaja en el modelo llave en mano del grupo */
  rolEnGrupo: string;
}

export const empresaDetail: Record<string, EmpresaDetail> = {
  /* ---------------------------------------------------------- */
  camex: {
    tagline: "Hidrocarburos, asfaltos y pavimentación",
    intro: [
      "CAMEX integra el suministro de materiales asfálticos con la ejecución de obra de pavimentación. Importa, comercializa y produce hidrocarburos, asfaltos modificados, emulsiones y mezclas, y los lleva hasta la obra terminada: vialidades, carreteras y urbanización.",
      "Al controlar desde la materia prima hasta la carpeta colocada, el grupo asegura calidad de mezcla, tiempos de entrega y continuidad de obra sin depender de proveedores externos.",
    ],
    areas: [
      {
        title: "Hidrocarburos y asfaltos",
        desc: "Importación, comercialización y suministro de productos asfálticos para obra propia y de terceros.",
        items: ["Asfaltos AC-20", "Asfaltos modificados con polímero", "Cementos asfálticos", "Suministro a pie de obra"],
        icon: "droplet",
      },
      {
        title: "Emulsiones y mezclas asfálticas",
        desc: "Producción de emulsiones y mezclas con control de calidad en planta propia.",
        items: ["Emulsiones catiónicas", "Mezcla asfáltica en caliente", "Riegos de liga e impregnación", "Dosificación controlada"],
        icon: "recycle",
      },
      {
        title: "Pavimentación y conservación carretera",
        desc: "Colocación, rehabilitación y mantenimiento de carpetas asfálticas en vialidades y carreteras.",
        items: ["Carpeta asfáltica", "Bacheo y rehabilitación", "Sello y conservación", "Señalamiento"],
        icon: "road",
      },
      {
        title: "Urbanización y estabilización de suelos",
        desc: "Preparación de terracerías y bases para urbanización y desarrollo vial.",
        items: ["Terracerías", "Estabilización de suelos", "Bases y subbases", "Vialidades urbanas"],
        icon: "factory",
      },
    ],
    aplicaciones: ["Carreteras y vialidades", "Urbanización de desarrollos", "Parques industriales", "Conservación carretera"],
    respaldo: ["+20 años de experiencia", "Planta en Silao, Guanajuato", "Planta en Cadereyta, Nuevo León"],
    rolEnGrupo: "Provee el componente de pavimentación y materiales asfálticos en los proyectos llave en mano del grupo.",
  },

  /* ---------------------------------------------------------- */
  fragsa: {
    tagline: "Edificación e ingeniería de instalaciones",
    intro: [
      "FRAGSA ejecuta edificación industrial, comercial e institucional, así como la infraestructura e instalaciones especiales que cada inmueble requiere. Desde naves y centros logísticos hasta hoteles de gran turismo, cubre la obra civil y las instalaciones en un solo frente.",
      "Su especialidad es traducir un proyecto arquitectónico en obra construida con calidad, integrando estructura, acabados e instalaciones electromecánicas.",
    ],
    areas: [
      {
        title: "Edificación industrial",
        desc: "Naves industriales y centros logísticos diseñados para operación productiva.",
        items: ["Naves industriales", "Centros logísticos", "Cimentaciones y firmes", "Cubiertas y fachadas"],
        icon: "factory",
      },
      {
        title: "Edificación comercial",
        desc: "Espacios comerciales de alta afluencia con acabados y especificaciones de marca.",
        items: ["Centros comerciales", "Locales y plazas", "Obra de acabados", "Adecuaciones comerciales"],
        icon: "building",
      },
      {
        title: "Hotelería y turismo",
        desc: "Edificación de hoteles de gran turismo y desarrollos del sector hospitalidad.",
        items: ["Hoteles de gran turismo", "Áreas de servicio", "Acabados de alta especificación", "Amenidades"],
        icon: "building",
      },
      {
        title: "Instalaciones especiales",
        desc: "Ingeniería e integración de instalaciones electromecánicas e hidrosanitarias.",
        items: ["Instalación eléctrica", "Hidrosanitaria", "Aire acondicionado y ventilación", "Sistemas contra incendio"],
        icon: "bolt",
      },
    ],
    aplicaciones: ["Parques y naves industriales", "Centros comerciales", "Hoteles y turismo", "Edificación institucional"],
    respaldo: ["Edificación industrial, comercial e institucional", "Naves, centros comerciales y hoteles de gran turismo", "Instalaciones especiales integradas en obra"],
    rolEnGrupo: "Aporta la edificación y las instalaciones especiales dentro de los desarrollos del grupo.",
  },

  /* ---------------------------------------------------------- */
  "jalie-vali": {
    tagline: "Infraestructura hidráulica, sanitaria y obra civil",
    intro: [
      "JALIE-VALI concentra toda la especialidad hídrica del grupo: capta, conduce, trata y reutiliza el agua, además de proteger el territorio frente a inundaciones. Construye y opera plantas de tratamiento, redes hidráulicas y sanitarias, colectores, drenaje profundo y obras de protección.",
      "Es la empresa con mayor monto de obra ejecutada del grupo en obra pública, con experiencia comprobada en saneamiento, drenaje y desazolves a escala municipal y estatal.",
    ],
    areas: [
      {
        title: "Infraestructura hidráulica",
        desc: "Sistemas que captan y conducen el agua hacia la infraestructura de tratamiento.",
        items: ["Redes hidráulicas", "Sistemas de conducción", "Colectores", "Drenaje profundo", "Urbanización hidráulica"],
        icon: "droplet",
      },
      {
        title: "PTAR y tratamiento de agua",
        desc: "Diseño, construcción y operación de Plantas de Tratamiento de Aguas Residuales con tecnología MoMo.",
        items: ["PTAR abierta, cerrada y oculta", "PTAR geomembrana y lagunar", "Remoción eficiente de contaminantes", "Reúso del agua tratada"],
        icon: "recycle",
      },
      {
        title: "Protección hidráulica",
        desc: "Obras que previenen inundaciones y recuperan la capacidad de cauces y presas.",
        items: ["Desazolves de canales y arroyos", "Recuperación de cauces", "Protección de márgenes", "Encauzamientos y presas"],
        icon: "shield",
      },
      {
        title: "Redes sanitarias y pluviales",
        desc: "Infraestructura para el manejo confiable de aguas residuales y pluviales.",
        items: ["Redes sanitarias y pluviales", "Cárcamos y líneas de impulsión", "Pozos de visita y absorción", "Bocas de tormenta"],
        icon: "network",
      },
    ],
    aplicaciones: ["CONAGUA y organismos operadores", "Municipios y estados", "Saneamiento urbano", "Protección contra inundaciones"],
    respaldo: ["Tecnología MoMo (hasta 95% menos lodos)", "Alineados a NOM-001, NOM-002 y NOM-003", "Mayor monto de obra ejecutada del grupo"],
    rolEnGrupo: "Ejecuta el ciclo completo del agua y la obra civil hidráulica de los proyectos del grupo.",
  },

  /* ---------------------------------------------------------- */
  gemco: {
    tagline: "Desarrollo inmobiliario, industrial y comercial",
    intro: [
      "GEMCO desarrolla espacios industriales, comerciales y corporativos de principio a fin: diseño, ingeniería, construcción y comercialización. Gestiona el proyecto como un activo, no solo como una obra.",
      "Su valor está en la gestión integral: convierte una necesidad de espacio en un desarrollo construido, rentable y listo para operar o comercializar.",
    ],
    areas: [
      {
        title: "Diseño arquitectónico e ingeniería",
        desc: "Definición técnica y de diseño de cada desarrollo a la medida del cliente.",
        items: ["Diseño arquitectónico", "Ingeniería de proyecto", "Proyectos a la medida", "Factibilidad y planeación"],
        icon: "ruler",
      },
      {
        title: "Desarrollo industrial",
        desc: "Espacios industriales diseñados para operación logística y productiva.",
        items: ["Parques industriales", "Naves y bodegas", "Built-to-suit", "Espacios logísticos"],
        icon: "factory",
      },
      {
        title: "Comercial y corporativo",
        desc: "Desarrollos comerciales y corporativos de alto nivel.",
        items: ["Espacios corporativos", "Desarrollos comerciales", "Construcción de alto nivel", "Acabados premium"],
        icon: "building",
      },
      {
        title: "Gestión y comercialización",
        desc: "Gestión integral del desarrollo, desde la construcción hasta su colocación en el mercado.",
        items: ["Gestión integral de proyecto", "Desarrollo y comercialización", "Administración de obra", "Entrega llave en mano"],
        icon: "chart",
      },
    ],
    aplicaciones: ["Desarrolladores e inversionistas", "Parques industriales", "Espacios comerciales y corporativos", "Proyectos built-to-suit"],
    respaldo: ["Diseño, construcción y comercialización integral", "Proyectos a la medida (built-to-suit)", "Espacios industriales, comerciales y corporativos"],
    rolEnGrupo: "Estructura y desarrolla los proyectos inmobiliarios e industriales del grupo como activos rentables.",
  },

  /* ---------------------------------------------------------- */
  vigasa: {
    tagline: "Estructuras de acero, fabricación y montaje",
    intro: [
      "VIGASA realiza ingeniería, diseño, fabricación y montaje de estructuras de acero para proyectos industriales, logísticos y comerciales. Con tecnología BIM y fabricación industrializada, entrega estructura de alta precisión lista para montar.",
      "Cubre desde puentes metálicos y naves hasta edificios verticales, integrando el cálculo estructural, la fabricación en taller y el montaje especializado en obra.",
    ],
    areas: [
      {
        title: "Ingeniería y diseño (BIM)",
        desc: "Cálculo estructural y modelado BIM para precisión y coordinación con otras disciplinas.",
        items: ["Cálculo estructural", "Modelado BIM", "Planos de fabricación", "Coordinación de disciplinas"],
        icon: "ruler",
      },
      {
        title: "Fabricación industrializada",
        desc: "Fabricación en taller con control de calidad para estructura de alta precisión.",
        items: ["Habilitado y armado", "Soldadura certificada", "Control de calidad en taller", "Tratamiento y recubrimiento"],
        icon: "beam",
      },
      {
        title: "Puentes y estructura vertical",
        desc: "Estructuras de acero para puentes metálicos y edificios verticales.",
        items: ["Puentes metálicos", "Edificios verticales", "Estructura primaria y secundaria", "Conexiones especiales"],
        icon: "network",
      },
      {
        title: "Naves y montaje especializado",
        desc: "Naves industriales, centros logísticos y montaje en sitio con equipo especializado.",
        items: ["Naves y centros logísticos", "Montaje con grúa", "Izaje de estructura", "Supervisión en obra"],
        icon: "factory",
      },
    ],
    aplicaciones: ["Proyectos industriales y logísticos", "Edificación comercial", "Puentes e infraestructura", "Naves y centros de distribución"],
    respaldo: ["Certificación ISO 9001", "Tecnología BIM", "Fabricación industrializada"],
    rolEnGrupo: "Provee la ingeniería y fabricación de estructura de acero para la edificación e infraestructura del grupo.",
  },
};
