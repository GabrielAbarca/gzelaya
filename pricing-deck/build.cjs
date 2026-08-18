const pptxgen = require("pptxgenjs");
const p = new pptxgen();

p.defineLayout({ name: "GZ", width: 13.333, height: 7.5 });
p.layout = "GZ";
p.author = "Gabriel Zelaya";
p.company = "Gabriel Zelaya — Web Development";
p.title = "Web Development Packages";

/* ---------------- Brand tokens ---------------- */
const BG        = "050505";
const WHITE     = "FFFFFF";
const MUTED     = "8A8A8A";
const BODY      = "B4B4B4";
const FAINT     = "6A6A6A";
const ACCENT    = "CE6E6E";
const LINE      = "262626";
const LINE_SOFT = "1A1A1A";
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

function eyebrow(s, num, label, x = MX, y = 0.95, w = 8) {
  s.addText(
    [
      { text: num, options: { color: ACCENT } },
      { text: "   /   " + label.toUpperCase(), options: { color: MUTED } },
    ],
    { x, y, w, h: 0.4, fontFace: SANS, fontSize: 11.5, charSpacing: 3, align: "left", valign: "middle" }
  );
}

function footer(s, page) {
  s.addText("GABRIEL ZELAYA  ·  WEB DEVELOPMENT", {
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

// deliverables list with small rose check icon
function checklist(s, items, x, y, w, rowH = 0.52, icon = "assets/ic-detailed-r.png") {
  items.forEach((it, i) => {
    const ry = y + i * rowH;
    s.addImage({ path: icon, x, y: ry + 0.045, w: 0.2, h: 0.2 });
    s.addText(
      it.parts
        ? it.parts
        : [{ text: it, options: { color: BODY } }],
      { x: x + 0.34, y: ry - 0.03, w: w - 0.34, h: rowH, fontFace: SANS, fontSize: 12, align: "left", valign: "middle", lineSpacingMultiple: 1 }
    );
  });
}

/* ============================================================
   SLIDE 1 — COVER
   ============================================================ */
(() => {
  const s = slide(GRID_HERO);
  monogram(s);
  s.addText("WEB DEVELOPMENT", {
    x: W - 4.3, y: 0.42, w: 3.5, h: 0.5, align: "right", valign: "middle",
    fontFace: SANS, fontSize: 10, color: MUTED, charSpacing: 3,
  });

  s.addText("PRICING & PACKAGES  ·  2026", {
    x: 0.9, y: 2.35, w: 8, h: 0.4, fontFace: SANS, fontSize: 12,
    color: ACCENT, charSpacing: 3, align: "left",
  });
  s.addText(
    [
      { text: "Landing pages,\n", options: { color: WHITE } },
      { text: "built to ", options: { color: WHITE } },
      { text: "convert.", options: { color: ACCENT, italic: true } },
    ],
    { x: 0.87, y: 2.75, w: 11.5, h: 2.3, fontFace: DISPLAY, fontSize: 62, align: "left", valign: "top", lineSpacingMultiple: 1.0 }
  );
  s.addText(
    "Custom, on-brand websites for founders who read minimalism as a mark of quality.",
    { x: 0.9, y: 5.15, w: 8.2, h: 0.9, fontFace: SANS, fontSize: 16, color: MUTED, align: "left", valign: "top" }
  );

  s.addText("Digital Experiences      Professional Interfaces      Minimalist Code", {
    x: 0.9, y: 6.55, w: 11.5, h: 0.4, fontFace: DISPLAY, italic: true, fontSize: 13, color: FAINT, align: "left",
  });
})();

/* ============================================================
   SLIDE 2 — THE OFFER (3 pillars)
   ============================================================ */
(() => {
  const s = slide();
  monogram(s);
  eyebrow(s, "01", "The Offer");
  s.addText("More than a website.\nA system that works.", {
    x: MX, y: 1.4, w: 11, h: 1.6, fontFace: DISPLAY, fontSize: 40, color: WHITE, align: "left", valign: "top", lineSpacingMultiple: 1.02,
  });

  const pillars = [
    { ic: "assets/ic-authentic-w.png", t: "Authentic", d: "Design that's unmistakably yours. No templates, no clones — a look built around your brand." },
    { ic: "assets/ic-scalable-w.png",  t: "Scalable",  d: "Clean, structured code underneath. Start with a landing page, grow into a full platform." },
    { ic: "assets/ic-detailed-w.png",  t: "Detailed",  d: "The polish lives up close — speed, spacing, and considered micro-interactions throughout." },
  ];
  const cw = 3.7, gap = 0.35, y = 3.55, ch = 2.9;
  pillars.forEach((pl, i) => {
    const x = MX + i * (cw + gap);
    card(s, x, y, cw, ch);
    // icon in thin ring
    s.addShape(p.ShapeType.ellipse, { x: x + 0.4, y: y + 0.42, w: 0.9, h: 0.9, fill: { color: SURFACE }, line: { color: "3A3A3A", width: 1 } });
    s.addImage({ path: pl.ic, x: x + 0.63, y: y + 0.65, w: 0.44, h: 0.44 });
    s.addText(pl.t, { x: x + 0.4, y: y + 1.5, w: cw - 0.8, h: 0.5, fontFace: DISPLAY, fontSize: 21, color: WHITE, align: "left" });
    s.addText(pl.d, { x: x + 0.4, y: y + 2.0, w: cw - 0.8, h: 0.85, fontFace: SANS, fontSize: 11.5, color: MUTED, align: "left", valign: "top", lineSpacingMultiple: 1.12 });
  });
  footer(s, 2);
})();

/* ============================================================
   SLIDE 3 — PROCESS (numbered)
   ============================================================ */
(() => {
  const s = slide();
  monogram(s);
  eyebrow(s, "02", "How It Works");
  s.addText("From idea to launch,\nin five clear steps.", {
    x: MX, y: 1.4, w: 11, h: 1.6, fontFace: DISPLAY, fontSize: 40, color: WHITE, align: "left", valign: "top", lineSpacingMultiple: 1.02,
  });

  const steps = [
    { n: "01", t: "Discovery", d: "We define goals, audience and scope together." },
    { n: "02", t: "Design",    d: "On-brand UI/UX, reviewed before a line of code." },
    { n: "03", t: "Build",     d: "Clean, responsive development with live previews." },
    { n: "04", t: "Launch",    d: "Testing, deployment and a smooth go-live." },
    { n: "05", t: "Support",   d: "Post-launch care so it keeps performing." },
  ];
  const y = 4.2;
  const colW = (W - 2 * MX) / 5;
  // connecting hairline
  s.addShape(p.ShapeType.line, { x: MX + 0.15, y: y + 0.28, w: (W - 2 * MX) - colW + 0.1, h: 0, line: { color: LINE, width: 1 } });
  steps.forEach((st, i) => {
    const x = MX + i * colW;
    s.addShape(p.ShapeType.ellipse, { x: x, y: y, w: 0.56, h: 0.56, fill: { color: BG }, line: { color: LINE, width: 1 } });
    s.addText(st.n, { x: x, y: y, w: 0.56, h: 0.56, fontFace: DISPLAY, fontSize: 15, color: ACCENT, align: "center", valign: "middle" });
    s.addText(st.t, { x: x - 0.05, y: y + 0.75, w: colW - 0.2, h: 0.4, fontFace: SANS, bold: true, fontSize: 14, color: WHITE, align: "left" });
    s.addText(st.d, { x: x - 0.05, y: y + 1.18, w: colW - 0.3, h: 1.1, fontFace: SANS, fontSize: 10.5, color: MUTED, align: "left", valign: "top", lineSpacingMultiple: 1.15 });
  });
  footer(s, 3);
})();

/* ============================================================
   SLIDE 4 — PRICING OVERVIEW (3 tiers)
   ============================================================ */
(() => {
  const s = slide();
  monogram(s);
  eyebrow(s, "03", "Packages");
  s.addText("Three ways to work together.", {
    x: MX, y: 1.35, w: 11, h: 0.8, fontFace: DISPLAY, fontSize: 36, color: WHITE, align: "left",
  });

  const tiers = [
    { name: "STARTER", price: "₡200,000", from: false, desc: "Launch-ready landing page",
      feats: ["Custom one-page design", "Copywriting & images", "Contact form + email", "Hosting & go-live"] },
    { name: "PROFESSIONAL", price: "₡350,000", from: false, desc: "Complete managed site", rec: true,
      feats: ["Multi-page website", "CMS — edit it yourself", "Integrations & analytics", "30 days of support"] },
    { name: "PREMIUM", price: "₡500,000", from: true, desc: "Full custom platform",
      feats: ["Backend & databases", "Login / authentication", "E-commerce system", "Priority maintenance"] },
  ];
  const cw = 3.7, gap = 0.35, y = 2.35, ch = 4.3;
  tiers.forEach((t, i) => {
    const x = MX + i * (cw + gap);
    card(s, x, y, cw, ch, t.rec ? { fill: SURFACE_HI, line: ACCENT, lw: 1.25 } : {});
    if (t.rec) {
      s.addShape(p.ShapeType.roundRect, { x: x + cw / 2 - 1.05, y: y - 0.2, w: 2.1, h: 0.4, rectRadius: 0.2, fill: { color: ACCENT } });
      s.addText("RECOMMENDED", { x: x + cw / 2 - 1.05, y: y - 0.2, w: 2.1, h: 0.4, fontFace: SANS, bold: true, fontSize: 9.5, color: BG, charSpacing: 2, align: "center", valign: "middle" });
    }
    const px = x + 0.4, iw = cw - 0.8;
    s.addText(t.name, { x: px, y: y + 0.4, w: iw, h: 0.35, fontFace: SANS, bold: true, fontSize: 11, color: t.rec ? ACCENT : MUTED, charSpacing: 3, align: "left" });
    if (t.from) s.addText("FROM", { x: px, y: y + 0.82, w: iw, h: 0.25, fontFace: SANS, fontSize: 9, color: FAINT, charSpacing: 2, align: "left" });
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
   SLIDES 5-7 — TIER DETAIL
   ============================================================ */
function detailSlide(page, cfg) {
  const s = slide();
  monogram(s);
  eyebrow(s, cfg.num, cfg.name);

  // left column
  const lx = MX, lw = 4.35;
  s.addText(cfg.title, { x: lx, y: 1.5, w: lw, h: 1.7, fontFace: DISPLAY, fontSize: 27, color: WHITE, align: "left", valign: "top", lineSpacingMultiple: 1.03 });
  if (cfg.from) s.addText("FROM", { x: lx, y: 3.28, w: lw, h: 0.25, fontFace: SANS, fontSize: 9.5, color: FAINT, charSpacing: 2, align: "left" });
  s.addText(cfg.price, { x: lx, y: cfg.from ? 3.48 : 3.35, w: lw, h: 0.9, fontFace: DISPLAY, fontSize: 46, color: cfg.rec ? ACCENT : WHITE, align: "left" });

  s.addText("BEST FOR", { x: lx, y: 4.65, w: lw, h: 0.28, fontFace: SANS, bold: true, fontSize: 9.5, color: MUTED, charSpacing: 2, align: "left" });
  s.addText(cfg.bestFor, { x: lx, y: 4.9, w: lw, h: 0.7, fontFace: SANS, fontSize: 12.5, color: BODY, align: "left", valign: "top", lineSpacingMultiple: 1.12 });
  s.addText("TIMELINE", { x: lx, y: 5.75, w: lw, h: 0.28, fontFace: SANS, bold: true, fontSize: 9.5, color: MUTED, charSpacing: 2, align: "left" });
  s.addText(cfg.timeline, { x: lx, y: 6.0, w: lw, h: 0.4, fontFace: SANS, fontSize: 12.5, color: BODY, align: "left" });

  // divider
  s.addShape(p.ShapeType.line, { x: 5.35, y: 1.5, w: 0, h: 4.9, line: { color: LINE, width: 1 } });

  // right column — deliverables
  const rx = 5.75, rw = W - MX - rx;
  s.addText(cfg.plus ? "EVERYTHING PREVIOUS, PLUS" : "WHAT'S INCLUDED", {
    x: rx, y: 1.5, w: rw, h: 0.3, fontFace: SANS, bold: true, fontSize: 10.5, color: ACCENT, charSpacing: 2.5, align: "left",
  });
  checklist(s, cfg.feats, rx, 2.05, rw, 0.545);
  footer(s, page);
}

detailSlide(5, {
  num: "01", name: "Starter",
  title: "The Launch-Ready\nLanding Page",
  price: "₡200,000", from: false, rec: false,
  bestFor: "Solo founders, events and product launches that need one sharp page, fast.",
  timeline: "1–2 weeks",
  plus: false,
  feats: [
    "Custom one-page landing design (on-brand UI/UX)",
    "Mobile-first, fully responsive layout",
    "Conversion-focused copywriting",
    "Image sourcing & optimization",
    "Contact form with email delivery",
    "Essential on-page SEO",
    "Hosting setup, deployment & go-live",
    "One round of revisions",
  ],
});

detailSlide(6, {
  num: "02", name: "Professional",
  title: "The Complete\nManaged Site",
  price: "₡350,000", from: false, rec: true,
  bestFor: "Growing businesses and teams that need a full site they can update themselves.",
  timeline: "2–4 weeks",
  plus: true,
  feats: [
    "Multi-page website (up to 5 pages)",
    "CMS — edit your own content, no code",
    "Advanced functionality & integrations",
    "Analytics & conversion tracking",
    "Performance tuning (Core Web Vitals)",
    "30 days of post-launch support",
    "Two rounds of revisions",
  ],
});

detailSlide(7, {
  num: "03", name: "Premium",
  title: "The Full\nCustom Platform",
  price: "₡500,000", from: true, rec: false,
  bestFor: "E-commerce, SaaS and membership products that need real backend power.",
  timeline: "6+ weeks · scoped per project",
  plus: true,
  feats: [
    "Backend development (custom APIs & logic)",
    "Database design & integration",
    "User login & authentication system",
    "E-commerce (catalog, cart, payments)",
    "Priority support & maintenance plan",
    "Architecture built to scale",
  ],
});

/* ============================================================
   SLIDE 8 — COMPARISON MATRIX
   ============================================================ */
(() => {
  const s = slide();
  monogram(s);
  eyebrow(s, "04", "Compare");
  s.addText("Everything, side by side.", {
    x: MX, y: 1.3, w: 11, h: 0.7, fontFace: DISPLAY, fontSize: 34, color: WHITE, align: "left",
  });

  const rows = [
    ["Custom design & responsive", "y", "y", "y"],
    ["Copywriting & content", "y", "y", "y"],
    ["Contact form & email", "y", "y", "y"],
    ["Hosting, deploy & launch", "y", "y", "y"],
    ["SEO", "Basic", "Advanced", "Advanced"],
    ["Pages", "1", "Up to 5", "Unlimited"],
    ["CMS (self-editing)", "n", "y", "y"],
    ["Analytics & integrations", "n", "y", "y"],
    ["Post-launch support", "n", "30 days", "Priority"],
    ["Backend development", "n", "n", "y"],
    ["Database", "n", "n", "y"],
    ["Login & authentication", "n", "n", "y"],
    ["E-commerce system", "n", "n", "y"],
  ];

  const tX = MX, tY = 2.05, tW = W - 2 * MX;
  const c0 = 4.6;                        // feature column width
  const cc = (tW - c0) / 3;              // tier column width
  const headH = 0.5;
  const rowH = 0.305;

  const colX = [tX, tX + c0, tX + c0 + cc, tX + c0 + 2 * cc];

  // header
  const heads = ["", "STARTER", "PROFESSIONAL", "PREMIUM"];
  heads.forEach((htxt, i) => {
    if (i === 0) return;
    s.addText(htxt, { x: colX[i], y: tY, w: cc, h: headH, fontFace: SANS, bold: true, fontSize: 11, color: i === 2 ? ACCENT : WHITE, charSpacing: 1.5, align: "center", valign: "middle" });
  });
  // price sub-labels under each header
  const subs = ["₡200,000", "₡350,000", "From ₡500,000"];
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
        s.addText("—", { x: colX[ci], y: ry, w: cc, h: rowH, fontFace: SANS, fontSize: 12, color: "3A3A3A", align: "center", valign: "middle" });
      } else {
        s.addText(val, { x: colX[ci], y: ry, w: cc, h: rowH, fontFace: SANS, fontSize: 10.5, color: ci === 2 ? WHITE : BODY, align: "center", valign: "middle" });
      }
    }
  });
  footer(s, 8);
})();

/* ============================================================
   SLIDE 9 — EVERY PROJECT INCLUDES + TERMS
   ============================================================ */
(() => {
  const s = slide();
  monogram(s);
  eyebrow(s, "05", "Every Project Includes");
  s.addText("Standards, on every build.", {
    x: MX, y: 1.3, w: 11, h: 0.7, fontFace: DISPLAY, fontSize: 34, color: WHITE, align: "left",
  });

  const items = [
    { ic: "assets/ic-server-w.png",   t: "Clean handoff",     d: "Organized source code, yours to keep." },
    { ic: "assets/ic-zap-w.png",      t: "Speed-optimized",   d: "Fast loads on every connection." },
    { ic: "assets/ic-detailed-w.png", t: "Responsive",        d: "Pixel-right on phone, tablet and desktop." },
    { ic: "assets/ic-discovery-w.png",t: "SEO-ready",         d: "Structured to be found on Google." },
    { ic: "assets/ic-login-w.png",    t: "Secure by default", d: "Best-practice security baked in." },
    { ic: "assets/ic-mail-w.png",     t: "Honest updates",    d: "Clear communication, start to finish." },
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

  // terms band
  const by = startY + 2 * ch + 0.3 + 0.28;
  s.addText(
    [
      { text: "50% to begin, 50% on delivery", options: { color: BODY } },
      { text: "      ·      ", options: { color: FAINT } },
      { text: "Prices in Costa Rican colón (₡)", options: { color: BODY } },
      { text: "      ·      ", options: { color: FAINT } },
      { text: "Premium scoped per project", options: { color: BODY } },
    ],
    { x: MX, y: by, w: W - 2 * MX, h: 0.4, fontFace: SANS, fontSize: 11.5, align: "center", valign: "middle" }
  );
  footer(s, 9);
})();

/* ============================================================
   SLIDE 10 — CONTACT / CTA
   ============================================================ */
(() => {
  const s = slide(GRID_HERO);
  monogram(s);
  s.addText("LET'S TALK", {
    x: 0.9, y: 2.2, w: 8, h: 0.4, fontFace: SANS, fontSize: 12, color: ACCENT, charSpacing: 3, align: "left",
  });
  s.addText(
    [
      { text: "Let's build something\n", options: { color: WHITE } },
      { text: "authentic", options: { color: ACCENT, italic: true } },
      { text: ".", options: { color: WHITE } },
    ],
    { x: 0.87, y: 2.6, w: 11.5, h: 1.9, fontFace: DISPLAY, fontSize: 56, align: "left", valign: "top", lineSpacingMultiple: 1.0 }
  );
  s.addText("Tell me about your project and I'll reply with a tailored plan and quote.", {
    x: 0.9, y: 4.55, w: 8.6, h: 0.6, fontFace: SANS, fontSize: 16, color: MUTED, align: "left",
  });

  // CTA pill
  s.addShape(p.ShapeType.roundRect, { x: 0.9, y: 5.35, w: 2.6, h: 0.62, rectRadius: 0.31, fill: { color: "E0E0E0" } });
  s.addText("START A PROJECT", { x: 0.9, y: 5.35, w: 2.6, h: 0.62, fontFace: SANS, bold: true, fontSize: 11, color: BG, charSpacing: 2, align: "center", valign: "middle" });

  // contact rows (right)
  const contacts = [
    ["EMAIL", "gzelaya0404@gmail.com"],
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

  s.addText("Gabriel Zelaya  ·  Costa Rica  ·  Authentic, scalable web development", {
    x: 0.9, y: 6.7, w: 11.5, h: 0.4, fontFace: DISPLAY, italic: true, fontSize: 13, color: FAINT, align: "left",
  });
})();

p.writeFile({ fileName: "GZ-Web-Development-Packages.pptx" }).then((f) => console.log("WROTE", f));
