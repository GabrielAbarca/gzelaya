const pptxgen = require("pptxgenjs");
const p = new pptxgen();

p.defineLayout({ name: "GZ", width: 13.333, height: 7.5 });
p.layout = "GZ";
p.author = "Gabriel Zelaya";
p.company = "Gabriel Zelaya, Desarrollo Web";
p.title = "Paquetes de Desarrollo Web";

/* ---------------- Brand tokens ---------------- */
const BG        = "050505";
const WHITE     = "FFFFFF";
const MUTED     = "8A8A8A";
const BODY      = "B4B4B4";
const FAINT     = "6A6A6A";
const ACCENT    = "CE6E6E";
const LINE      = "262626";
const SURFACE   = "0C0C0C";
const SURFACE_HI= "121011";

const DISPLAY = "Playfair Display";
const SANS    = "Inter";

const W = 13.333, H = 7.5, MX = 0.77;
const GRID = "assets/grid-bg.png";
const GRID_HERO = "assets/grid-bg-cover.png";

/* ---------------- Helpers ---------------- */
function slide(bg = GRID) {
  const s = p.addSlide();
  s.background = { path: bg };
  return s;
}

function monogram(s, color = WHITE) {
  s.addText("GZ.", {
    x: MX, y: 0.42, w: 2, h: 0.5, align: "left", valign: "middle",
    fontFace: DISPLAY, bold: true, fontSize: 20, color,
  });
}

function eyebrow(s, num, label, x = MX, y = 0.95, w = 9) {
  s.addText(
    [
      { text: num, options: { color: ACCENT } },
      { text: "   /   " + label.toUpperCase(), options: { color: MUTED } },
    ],
    { x, y, w, h: 0.4, fontFace: SANS, fontSize: 11.5, charSpacing: 3, align: "left", valign: "middle" }
  );
}

function footer(s, page) {
  s.addText("GABRIEL ZELAYA  ·  DESARROLLO WEB", {
    x: MX, y: 7.02, w: 6, h: 0.3, fontFace: SANS, fontSize: 8.5,
    color: FAINT, charSpacing: 2, align: "left", valign: "middle",
  });
  s.addText(String(page).padStart(2, "0"), {
    x: W - 1.3, y: 7.02, w: 0.6, h: 0.3, fontFace: SANS, fontSize: 8.5,
    color: FAINT, charSpacing: 2, align: "right", valign: "middle",
  });
}

function card(s, x, y, w, h, opts = {}) {
  s.addShape(p.ShapeType.rect, {
    x, y, w, h,
    fill: { color: opts.fill || SURFACE },
    line: { color: opts.line || LINE, width: opts.lw || 1 },
  });
}

function checklist(s, items, x, y, w, rowH = 0.545, icon = "assets/ic-detailed-r.png") {
  items.forEach((it, i) => {
    const ry = y + i * rowH;
    s.addImage({ path: icon, x, y: ry + 0.045, w: 0.2, h: 0.2 });
    s.addText(
      [{ text: it, options: { color: BODY } }],
      { x: x + 0.34, y: ry - 0.03, w: w - 0.34, h: rowH, fontFace: SANS, fontSize: 12, align: "left", valign: "middle", lineSpacingMultiple: 1 }
    );
  });
}

/* ============================================================
   SLIDE 1 - PORTADA
   ============================================================ */
(() => {
  const s = slide(GRID_HERO);
  monogram(s);
  s.addText("DESARROLLO WEB", {
    x: W - 4.3, y: 0.42, w: 3.5, h: 0.5, align: "right", valign: "middle",
    fontFace: SANS, fontSize: 10, color: MUTED, charSpacing: 3,
  });

  s.addText("PRECIOS Y PAQUETES  ·  2026", {
    x: 0.9, y: 2.35, w: 8, h: 0.4, fontFace: SANS, fontSize: 12,
    color: ACCENT, charSpacing: 3, align: "left",
  });
  s.addText(
    [
      { text: "Páginas web\n", options: { color: WHITE } },
      { text: "que ", options: { color: WHITE } },
      { text: "convierten.", options: { color: ACCENT, italic: true } },
    ],
    { x: 0.87, y: 2.75, w: 11.5, h: 2.3, fontFace: DISPLAY, fontSize: 62, align: "left", valign: "top", lineSpacingMultiple: 1.0 }
  );
  s.addText(
    "Sitios web a la medida de su marca, para quienes ven el minimalismo como señal de calidad.",
    { x: 0.9, y: 5.15, w: 8.4, h: 0.9, fontFace: SANS, fontSize: 16, color: MUTED, align: "left", valign: "top" }
  );

  s.addText("Experiencias Digitales      Interfaces Profesionales      Código Minimalista", {
    x: 0.9, y: 6.55, w: 11.5, h: 0.4, fontFace: DISPLAY, italic: true, fontSize: 13, color: FAINT, align: "left",
  });
})();

/* ============================================================
   SLIDE 2 - LA PROPUESTA
   ============================================================ */
(() => {
  const s = slide();
  monogram(s);
  eyebrow(s, "01", "La Propuesta");
  s.addText("Más que un sitio web.\nUn sistema que funciona.", {
    x: MX, y: 1.4, w: 11, h: 1.6, fontFace: DISPLAY, fontSize: 40, color: WHITE, align: "left", valign: "top", lineSpacingMultiple: 1.02,
  });

  const pillars = [
    { ic: "assets/ic-authentic-w.png", t: "Auténtico", d: "Un diseño inconfundiblemente suyo. Sin plantillas ni clones, creado en torno a su marca." },
    { ic: "assets/ic-scalable-w.png",  t: "Escalable",  d: "Código limpio y estructurado por debajo. Empiece con una página y crezca hasta una plataforma." },
    { ic: "assets/ic-detailed-w.png",  t: "Detallado",  d: "El acabado se nota de cerca: velocidad, espaciado y microinteracciones cuidadas en todo el sitio." },
  ];
  const cw = 3.7, gap = 0.35, y = 3.55, ch = 2.9;
  pillars.forEach((pl, i) => {
    const x = MX + i * (cw + gap);
    card(s, x, y, cw, ch);
    s.addShape(p.ShapeType.ellipse, { x: x + 0.4, y: y + 0.42, w: 0.9, h: 0.9, fill: { color: SURFACE }, line: { color: "3A3A3A", width: 1 } });
    s.addImage({ path: pl.ic, x: x + 0.63, y: y + 0.65, w: 0.44, h: 0.44 });
    s.addText(pl.t, { x: x + 0.4, y: y + 1.5, w: cw - 0.8, h: 0.5, fontFace: DISPLAY, fontSize: 21, color: WHITE, align: "left" });
    s.addText(pl.d, { x: x + 0.4, y: y + 2.0, w: cw - 0.8, h: 0.85, fontFace: SANS, fontSize: 11.5, color: MUTED, align: "left", valign: "top", lineSpacingMultiple: 1.12 });
  });
  footer(s, 2);
})();

/* ============================================================
   SLIDE 3 - CÓMO TRABAJAMOS
   ============================================================ */
(() => {
  const s = slide();
  monogram(s);
  eyebrow(s, "02", "Cómo Trabajamos");
  s.addText("De la idea al lanzamiento,\nen cinco pasos claros.", {
    x: MX, y: 1.4, w: 11, h: 1.6, fontFace: DISPLAY, fontSize: 40, color: WHITE, align: "left", valign: "top", lineSpacingMultiple: 1.02,
  });

  const steps = [
    { n: "01", t: "Descubrimiento", d: "Definimos juntos objetivos, público y alcance." },
    { n: "02", t: "Diseño",         d: "UI/UX fiel a su marca, aprobado antes de programar." },
    { n: "03", t: "Desarrollo",     d: "Código limpio y responsivo, con vistas previas en vivo." },
    { n: "04", t: "Lanzamiento",    d: "Pruebas, despliegue y una puesta en marcha sin contratiempos." },
    { n: "05", t: "Soporte",        d: "Acompañamiento posterior para que siga rindiendo." },
  ];
  const y = 4.2;
  const colW = (W - 2 * MX) / 5;
  s.addShape(p.ShapeType.line, { x: MX + 0.15, y: y + 0.28, w: (W - 2 * MX) - colW + 0.1, h: 0, line: { color: LINE, width: 1 } });
  steps.forEach((st, i) => {
    const x = MX + i * colW;
    s.addShape(p.ShapeType.ellipse, { x: x, y: y, w: 0.56, h: 0.56, fill: { color: BG }, line: { color: LINE, width: 1 } });
    s.addText(st.n, { x: x, y: y, w: 0.56, h: 0.56, fontFace: DISPLAY, fontSize: 15, color: ACCENT, align: "center", valign: "middle" });
    s.addText(st.t, { x: x - 0.05, y: y + 0.75, w: colW - 0.15, h: 0.4, fontFace: SANS, bold: true, fontSize: 13, color: WHITE, align: "left" });
    s.addText(st.d, { x: x - 0.05, y: y + 1.18, w: colW - 0.3, h: 1.2, fontFace: SANS, fontSize: 10.5, color: MUTED, align: "left", valign: "top", lineSpacingMultiple: 1.15 });
  });
  footer(s, 3);
})();

/* ============================================================
   SLIDE 4 - PAQUETES (resumen)
   ============================================================ */
(() => {
  const s = slide();
  monogram(s);
  eyebrow(s, "03", "Paquetes");
  s.addText("Tres formas de trabajar juntos.", {
    x: MX, y: 1.35, w: 11, h: 0.8, fontFace: DISPLAY, fontSize: 36, color: WHITE, align: "left",
  });

  const tiers = [
    { name: "INICIAL", price: "₡200,000", from: false, desc: "Página lista para lanzar",
      feats: ["Diseño a medida de una página", "Textos e imágenes", "Formulario de contacto", "Hosting y publicación"] },
    { name: "PROFESIONAL", price: "₡350,000", from: false, desc: "Sitio completo administrado", rec: true,
      feats: ["Sitio de varias páginas", "CMS para editar usted mismo", "Integraciones y analítica", "30 días de soporte"] },
    { name: "PREMIUM", price: "₡500,000", from: true, desc: "Plataforma totalmente a medida",
      feats: ["Backend y bases de datos", "Inicio de sesión y usuarios", "Tienda en línea", "Mantenimiento prioritario"] },
  ];
  const cw = 3.7, gap = 0.35, y = 2.35, ch = 4.3;
  tiers.forEach((t, i) => {
    const x = MX + i * (cw + gap);
    card(s, x, y, cw, ch, t.rec ? { fill: SURFACE_HI, line: ACCENT, lw: 1.25 } : {});
    if (t.rec) {
      s.addShape(p.ShapeType.roundRect, { x: x + cw / 2 - 1.05, y: y - 0.2, w: 2.1, h: 0.4, rectRadius: 0.2, fill: { color: ACCENT } });
      s.addText("RECOMENDADO", { x: x + cw / 2 - 1.05, y: y - 0.2, w: 2.1, h: 0.4, fontFace: SANS, bold: true, fontSize: 9.5, color: BG, charSpacing: 2, align: "center", valign: "middle" });
    }
    const px = x + 0.4, iw = cw - 0.8;
    s.addText(t.name, { x: px, y: y + 0.4, w: iw, h: 0.35, fontFace: SANS, bold: true, fontSize: 11, color: t.rec ? ACCENT : MUTED, charSpacing: 3, align: "left" });
    if (t.from) s.addText("DESDE", { x: px, y: y + 0.82, w: iw, h: 0.25, fontFace: SANS, fontSize: 9, color: FAINT, charSpacing: 2, align: "left" });
    s.addText(t.price, { x: px, y: y + (t.from ? 1.02 : 0.85), w: iw, h: 0.8, fontFace: DISPLAY, fontSize: 38, color: WHITE, align: "left" });
    s.addText(t.desc, { x: px, y: y + 1.72, w: iw, h: 0.4, fontFace: SANS, italic: true, fontSize: 12, color: MUTED, align: "left" });
    s.addShape(p.ShapeType.line, { x: px, y: y + 2.2, w: iw, h: 0, line: { color: LINE, width: 1 } });
    t.feats.forEach((f, j) => {
      s.addText(
        [ { text: "+  ", options: { color: ACCENT } }, { text: f, options: { color: BODY } } ],
        { x: px, y: y + 2.38 + j * 0.42, w: iw, h: 0.4, fontFace: SANS, fontSize: 12, align: "left", valign: "middle" }
      );
    });
  });
  footer(s, 4);
})();

/* ============================================================
   SLIDES 5-7 - DETALLE DE PAQUETE
   ============================================================ */
function detailSlide(page, cfg) {
  const s = slide();
  monogram(s);
  eyebrow(s, cfg.num, cfg.name);

  const lx = MX, lw = 4.35;
  s.addText(cfg.title, { x: lx, y: 1.5, w: lw, h: 1.7, fontFace: DISPLAY, fontSize: 27, color: WHITE, align: "left", valign: "top", lineSpacingMultiple: 1.03 });
  if (cfg.from) s.addText("DESDE", { x: lx, y: 3.28, w: lw, h: 0.25, fontFace: SANS, fontSize: 9.5, color: FAINT, charSpacing: 2, align: "left" });
  s.addText(cfg.price, { x: lx, y: cfg.from ? 3.48 : 3.35, w: lw, h: 0.9, fontFace: DISPLAY, fontSize: 46, color: cfg.rec ? ACCENT : WHITE, align: "left" });

  s.addText("IDEAL PARA", { x: lx, y: 4.65, w: lw, h: 0.28, fontFace: SANS, bold: true, fontSize: 9.5, color: MUTED, charSpacing: 2, align: "left" });
  s.addText(cfg.bestFor, { x: lx, y: 4.9, w: lw, h: 0.8, fontFace: SANS, fontSize: 12.5, color: BODY, align: "left", valign: "top", lineSpacingMultiple: 1.12 });
  s.addText("TIEMPO", { x: lx, y: 5.8, w: lw, h: 0.28, fontFace: SANS, bold: true, fontSize: 9.5, color: MUTED, charSpacing: 2, align: "left" });
  s.addText(cfg.timeline, { x: lx, y: 6.05, w: lw, h: 0.4, fontFace: SANS, fontSize: 12.5, color: BODY, align: "left" });

  s.addShape(p.ShapeType.line, { x: 5.35, y: 1.5, w: 0, h: 4.9, line: { color: LINE, width: 1 } });

  const rx = 5.75, rw = W - MX - rx;
  s.addText(cfg.plus ? "TODO LO ANTERIOR, MÁS" : "QUÉ INCLUYE", {
    x: rx, y: 1.5, w: rw, h: 0.3, fontFace: SANS, bold: true, fontSize: 10.5, color: ACCENT, charSpacing: 2.5, align: "left",
  });
  checklist(s, cfg.feats, rx, 2.05, rw, 0.545);
  footer(s, page);
}

detailSlide(5, {
  num: "01", name: "Inicial",
  title: "La Página Lista\npara Lanzar",
  price: "₡200,000", from: false, rec: false,
  bestFor: "Emprendedores, eventos y lanzamientos que necesitan una página impecable, rápido.",
  timeline: "1 a 2 semanas",
  plus: false,
  feats: [
    "Diseño de una página, fiel a su marca",
    "Diseño responsivo, primero para móvil",
    "Textos enfocados en conversión",
    "Selección y optimización de imágenes",
    "Formulario de contacto con envío por correo",
    "SEO esencial en la página",
    "Hosting, despliegue y publicación",
    "Una ronda de revisiones",
  ],
});

detailSlide(6, {
  num: "02", name: "Profesional",
  title: "El Sitio Completo\nAdministrado",
  price: "₡350,000", from: false, rec: true,
  bestFor: "Negocios y equipos en crecimiento que necesitan un sitio fácil de actualizar por su cuenta.",
  timeline: "2 a 4 semanas",
  plus: true,
  feats: [
    "Sitio de varias páginas (hasta 5)",
    "CMS para editar su contenido, sin código",
    "Funcionalidad avanzada e integraciones",
    "Analítica y seguimiento de conversiones",
    "Optimización de rendimiento (Core Web Vitals)",
    "30 días de soporte tras el lanzamiento",
    "Dos rondas de revisiones",
  ],
});

detailSlide(7, {
  num: "03", name: "Premium",
  title: "La Plataforma\na la Medida",
  price: "₡500,000", from: true, rec: false,
  bestFor: "Tiendas en línea, SaaS y productos por suscripción que necesitan un backend potente.",
  timeline: "6+ semanas, cotizado por proyecto",
  plus: true,
  feats: [
    "Desarrollo backend (APIs y lógica a medida)",
    "Diseño e integración de base de datos",
    "Sistema de inicio de sesión y usuarios",
    "Tienda en línea (catálogo, carrito, pagos)",
    "Soporte prioritario y mantenimiento",
    "Arquitectura pensada para escalar",
  ],
});

/* ============================================================
   SLIDE 8 - COMPARACIÓN
   ============================================================ */
(() => {
  const s = slide();
  monogram(s);
  eyebrow(s, "04", "Comparación");
  s.addText("Todo, lado a lado.", {
    x: MX, y: 1.3, w: 11, h: 0.7, fontFace: DISPLAY, fontSize: 34, color: WHITE, align: "left",
  });

  const rows = [
    ["Diseño a medida y responsivo", "y", "y", "y"],
    ["Textos y contenido", "y", "y", "y"],
    ["Formulario y correo", "y", "y", "y"],
    ["Hosting, despliegue y publicación", "y", "y", "y"],
    ["SEO", "Básico", "Avanzado", "Avanzado"],
    ["Páginas", "1", "Hasta 5", "Ilimitadas"],
    ["CMS (autoedición)", "n", "y", "y"],
    ["Analítica e integraciones", "n", "y", "y"],
    ["Soporte posterior", "n", "30 días", "Prioritario"],
    ["Desarrollo backend", "n", "n", "y"],
    ["Base de datos", "n", "n", "y"],
    ["Inicio de sesión y usuarios", "n", "n", "y"],
    ["Tienda en línea", "n", "n", "y"],
  ];

  const tX = MX, tY = 2.05, tW = W - 2 * MX;
  const c0 = 4.6;
  const cc = (tW - c0) / 3;
  const headH = 0.5;
  const rowH = 0.305;
  const colX = [tX, tX + c0, tX + c0 + cc, tX + c0 + 2 * cc];

  const heads = ["", "INICIAL", "PROFESIONAL", "PREMIUM"];
  heads.forEach((htxt, i) => {
    if (i === 0) return;
    s.addText(htxt, { x: colX[i], y: tY, w: cc, h: headH, fontFace: SANS, bold: true, fontSize: 11, color: i === 2 ? ACCENT : WHITE, charSpacing: 1.5, align: "center", valign: "middle" });
  });
  const subs = ["₡200,000", "₡350,000", "Desde ₡500,000"];
  for (let i = 0; i < 3; i++) {
    s.addText(subs[i], { x: colX[i + 1], y: tY + 0.26, w: cc, h: 0.25, fontFace: SANS, fontSize: 9, color: i === 1 ? ACCENT : FAINT, align: "center", valign: "middle" });
  }

  let y = tY + headH + 0.18;
  s.addShape(p.ShapeType.line, { x: tX, y: y - 0.06, w: tW, h: 0, line: { color: LINE, width: 1 } });

  rows.forEach((r, ri) => {
    const ry = y + ri * rowH;
    if (ri % 2 === 1) {
      s.addShape(p.ShapeType.rect, { x: tX, y: ry, w: tW, h: rowH, fill: { color: SURFACE }, line: { color: SURFACE, width: 0 } });
    }
    s.addText(r[0], { x: tX + 0.15, y: ry, w: c0 - 0.2, h: rowH, fontFace: SANS, fontSize: 11, color: BODY, align: "left", valign: "middle" });
    for (let ci = 1; ci <= 3; ci++) {
      const val = r[ci];
      if (val === "y") {
        s.addImage({ path: "assets/ic-detailed-r.png", x: colX[ci] + cc / 2 - 0.09, y: ry + rowH / 2 - 0.09, w: 0.18, h: 0.18 });
      } else if (val === "n") {
        s.addText("·", { x: colX[ci], y: ry, w: cc, h: rowH, fontFace: SANS, fontSize: 14, color: "3A3A3A", align: "center", valign: "middle" });
      } else {
        s.addText(val, { x: colX[ci], y: ry, w: cc, h: rowH, fontFace: SANS, fontSize: 10.5, color: ci === 2 ? WHITE : BODY, align: "center", valign: "middle" });
      }
    }
  });
  footer(s, 8);
})();

/* ============================================================
   SLIDE 9 - TODO PROYECTO INCLUYE + CONDICIONES
   ============================================================ */
(() => {
  const s = slide();
  monogram(s);
  eyebrow(s, "05", "Todo Proyecto Incluye");
  s.addText("Estándares en cada proyecto.", {
    x: MX, y: 1.3, w: 11, h: 0.7, fontFace: DISPLAY, fontSize: 34, color: WHITE, align: "left",
  });

  const items = [
    { ic: "assets/ic-server-w.png",   t: "Entrega limpia",    d: "Código fuente organizado, suyo para siempre." },
    { ic: "assets/ic-zap-w.png",      t: "Alta velocidad",    d: "Carga rápida en cualquier conexión." },
    { ic: "assets/ic-detailed-w.png", t: "Responsivo",        d: "Perfecto en móvil, tablet y escritorio." },
    { ic: "assets/ic-discovery-w.png",t: "Listo para SEO",    d: "Estructurado para aparecer en Google." },
    { ic: "assets/ic-login-w.png",    t: "Seguro por defecto",d: "Buenas prácticas de seguridad incluidas." },
    { ic: "assets/ic-mail-w.png",     t: "Comunicación clara",d: "Transparencia de principio a fin." },
  ];
  const cw = 3.7, gap = 0.35, ch = 1.55;
  const startY = 2.35;
  items.forEach((it, i) => {
    const col = i % 3, rowi = Math.floor(i / 3);
    const x = MX + col * (cw + gap);
    const yy = startY + rowi * (ch + 0.3);
    card(s, x, yy, cw, ch);
    s.addImage({ path: it.ic, x: x + 0.35, y: yy + 0.35, w: 0.34, h: 0.34 });
    s.addText(it.t, { x: x + 0.35, y: yy + 0.72, w: cw - 0.7, h: 0.35, fontFace: DISPLAY, fontSize: 17, color: WHITE, align: "left" });
    s.addText(it.d, { x: x + 0.35, y: yy + 1.08, w: cw - 0.7, h: 0.4, fontFace: SANS, fontSize: 10.5, color: MUTED, align: "left", valign: "top", lineSpacingMultiple: 1.1 });
  });

  const by = startY + 2 * ch + 0.3 + 0.28;
  s.addText(
    [
      { text: "50% para iniciar, 50% contra entrega", options: { color: BODY } },
      { text: "      ·      ", options: { color: FAINT } },
      { text: "Precios en colones (₡)", options: { color: BODY } },
      { text: "      ·      ", options: { color: FAINT } },
      { text: "Premium cotizado por proyecto", options: { color: BODY } },
    ],
    { x: MX, y: by, w: W - 2 * MX, h: 0.4, fontFace: SANS, fontSize: 11.5, align: "center", valign: "middle" }
  );
  footer(s, 9);
})();

/* ============================================================
   SLIDE 10 - CONTACTO / CTA
   ============================================================ */
(() => {
  const s = slide(GRID_HERO);
  monogram(s);
  s.addText("CONVERSEMOS", {
    x: 0.9, y: 2.2, w: 8, h: 0.4, fontFace: SANS, fontSize: 12, color: ACCENT, charSpacing: 3, align: "left",
  });
  s.addText(
    [
      { text: "Construyamos algo\n", options: { color: WHITE } },
      { text: "auténtico", options: { color: ACCENT, italic: true } },
      { text: ".", options: { color: WHITE } },
    ],
    { x: 0.87, y: 2.6, w: 11.5, h: 1.9, fontFace: DISPLAY, fontSize: 56, align: "left", valign: "top", lineSpacingMultiple: 1.0 }
  );
  s.addText("Cuénteme sobre su proyecto y le responderé con un plan y una cotización a la medida.", {
    x: 0.9, y: 4.55, w: 8.7, h: 0.7, fontFace: SANS, fontSize: 16, color: MUTED, align: "left", valign: "top" }
  );

  s.addShape(p.ShapeType.roundRect, { x: 0.9, y: 5.4, w: 3.2, h: 0.62, rectRadius: 0.31, fill: { color: "E0E0E0" } });
  s.addText("INICIAR UN PROYECTO", { x: 0.9, y: 5.4, w: 3.2, h: 0.62, fontFace: SANS, bold: true, fontSize: 11, color: BG, charSpacing: 1.5, align: "center", valign: "middle" });

  const contacts = [
    ["CORREO", "gzelaya0404@gmail.com"],
    ["LINKEDIN", "in/gabriel-zelaya"],
    ["GITHUB", "GabrielAbarca"],
    ["TWITTER / X", "@iGaboxx"],
  ];
  const cx = 9.7, cy = 2.65;
  contacts.forEach((c, i) => {
    const yy = cy + i * 0.78;
    s.addText(c[0], { x: cx, y: yy, w: 3, h: 0.28, fontFace: SANS, bold: true, fontSize: 9, color: FAINT, charSpacing: 2, align: "left" });
    s.addText(c[1], { x: cx, y: yy + 0.24, w: 3, h: 0.35, fontFace: SANS, fontSize: 13.5, color: WHITE, align: "left" });
  });

  s.addText("Gabriel Zelaya  ·  Costa Rica  ·  Desarrollo web auténtico y escalable", {
    x: 0.9, y: 6.7, w: 11.5, h: 0.4, fontFace: DISPLAY, italic: true, fontSize: 13, color: FAINT, align: "left",
  });
})();

p.writeFile({ fileName: "GZ-Paquetes-Desarrollo-Web.pptx" }).then((f) => console.log("WROTE", f));
