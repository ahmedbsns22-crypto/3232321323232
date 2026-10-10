/* ==========================================================
   Ahmed ❤️ Buthaina — Premium romantic gift
   Edit CONFIG only to personalise for another customer.
   Placeholders: {sender} {recipient} {nickname}
   ========================================================== */

const CONFIG = {
  senderName: "أحمد",
  recipientName: "بثينة",
  nickname: "بثينة",
  theme: "pink",
  openingDuration: 30000,          // pacing of auto-timed scenes (30000 = default speed)
  useEmojisOnlyForDecorations: true,
  pageTitle: "إلى {recipient} 💗",

  intro: {
    heart: "❤️",
    name: "{nickname}… ❤️",
    line1: "{sender} مسويلج شي صغير…",
    line2: "بس أريدج تجاوبيني بصراحة 😂❤️",
    button: "يلا نبدأ 🥹💗"
  },

  // fx: "burst" | "fly" (hearts fly to her name) | "big" (biggest burst)
  questions: [
    {
      title: "{nickname}، شلونج اليوم؟ 🥹💗",
      options: ["كلش زينة ❤️", "شوية تعبانة 🥺", "ضايجة وأريد أحد يفرحني 😭", "أريد {sender} 😂❤️"],
      reaction: "إذا محتاجة فرحة… {sender} حاضر 😂❤️",
      fx: "burst", mood: "rose"
    },
    {
      title: "{nickname}، إذا {sender} جان يمج هسه، شنو تختارين؟ 👀❤️",
      options: ["يحچي وياي هواي 🥹", "يضحكني 😂", "يخليني أبتسم ❤️", "كلهم، شبيك تسأل؟ 😭💗"],
      reaction: "زين زين، وصلت الفكرة 😂❤️",
      fx: "fly", mood: "rose"
    },
    {
      title: "تعرفين ليش {sender} اختارج إنتِ بالذات؟ 🥹🌷",
      options: ["لأن أني غير وحدة 😂", "لأن يحبني ❤️", "لأن ما يگدر بدوني 😌", "اسأله هو! 👀"],
      reaction: "لأن وجودج وحده يغيّر اليوم كله. ❤️",
      fx: "burst", mood: "rose", moodAfter: "bright", beat: true
    },
    {
      title: ["{nickname}… سؤال أخير، جاوبي بصدق 😂❤️", "إذا وصلج رابط خاص من {sender}، شراح تسوين؟ 👀"],
      options: ["أفتحه فورًا 😭❤️", "أخاف من المفاجأة 😂", "أكمل للنهاية 🥹", "أريد أعرف شنو مخبّيلي! 💗"],
      reaction: "لعد… خلي تشوفين شنو مخبّيلج ❤️✨",
      fx: "big", mood: "bright", hold: 1900
    }
  ],

  reveal: {
    name: "{nickname}… ❤️",
    lines: [
      "مو لازم تكون أكو مناسبة حتى أفرّحج.",
      "مرات أحلى هدية…",
      "هي اللي تجيج بدون سبب. 🥹💗"
    ]
  },

  finalCard: {
    to: "إلى {recipient}، من {sender} ❤️",
    paragraphs: [
      "يمكن ما عندي مناسبة حتى أگولج هالكلام، بس عندي سبب أحلى…",
      "أني أحب أشوفج فرحانة، وأحب أكون سبب بابتسامتج، حتى لو بشغلة بسيطة.",
      "وجودج حلو، وضحكتج أحلى، وإذا هالرابط گدر يرسم ابتسامة على وجهج، فهاي وحدها تكفيني. 🥹❤️"
    ],
    signature: "من {sender} إلى {recipient}… بكل حب. 💗",
    continueButton: "كمّلي… بعد أكو شي إلج 💌"
  },

  // ---- Longer section (separate from the first 30 seconds) ----
  extra: {
    enabled: true,
    questions: [
      {
        title: "{nickname}، شكد تحبين {sender}؟ 😏",
        options: ["هواي هواي ❤️", "مو هواي، بس عود 😂", "أكثر من القمر 🌙💗", "هذا سؤال؟! 🥹"],
        reaction: "جواب يفرّح القلب 😂❤️",
        fx: "burst", mood: "rose"
      },
      {
        title: "إذا {sender} زعّلج، شنو يصالحج؟ 🌷",
        options: ["ابتسامة وأنسى 😌", "يعتذر ويضحكني 🥹", "ورد وحچي حلو 🌷", "هو أصلاً ما يزعلني 😂💗"],
        reaction: "{sender} سجّل هالمعلومة بسرية 📝😂",
        fx: "fly", mood: "rose"
      }
    ],
    letter: {
      title: "رسالة صغيرة إلج 💌",
      lines: [
        "{nickname}،",
        "أدري الرسائل صارت قديمة، بس أحب أگولج الكلام بهدوء.",
        "إذا اليوم كان ثگيل عليج، أريدج تعرفين إنج مو لحالج.",
        "وإذا كان حلو، فأحلى شي بي إنه يصير أحلى لأنج بي.",
        "ضحكتج مو بس ضحكة… هي شي يخلي الدنيا أخف.",
        "وإذا يوم تعبتي أو زعلتي، تذكري إن أكو واحد يفتخر بيج، وحاضر دائمًا.",
        "{sender} ❤️"
      ],
      button: "التالي 🎁"
    },
    gift: {
      title: "{nickname}… بقت مفاجأة أخيرة 🎁",
      emoji: "🎁",
      openedEmoji: "💝",
      button: "افتحي مفاجأتج",
      openedText: "كل هالقلوب إلج 💗"
    },
    garden: {
      title: "اضغطي على القلوب 💗",
      first: "كل قلب يخبّي إلج كلمة حلوة ✨",
      next: "للنهاية 💌",
      wishes: [
        "ابتسمي… هاي أحلى زينة بالدنيا 🌷",
        "{sender} يفتخر بيج هواي 🥹",
        "إنتِ مو عادية، إنتِ مميزة 💗",
        "حتى لو اليوم صعب، إنتِ أقوى 🌸",
        "ضحكتج تسوى الدنيا ✨",
        "أكو واحد يفكر بيج هسه 😂❤️",
        "تستاهلين كل شي حلو 💕",
        "وجودج نعمة 💖"
      ]
    },
    finale: {
      name: "{nickname}… ❤️",
      lines: [
        "هذا الرابط ما كان لمناسبة.",
        "كان بس لأن {sender} يريدج تبتسمين.",
        "فإذا ابتسمتي… هو ربح اليوم. 🥹💗"
      ],
      signature: "بكل حب، {sender} 💗",
      restart: "نعيدها من أول 🔁"
    }
  }
};

/* ==========================================================
   Engine (no need to edit below)
   ========================================================== */

const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls = "", text) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
};
const tpl = s => String(s)
  .replace(/\{sender\}/g, CONFIG.senderName)
  .replace(/\{recipient\}/g, CONFIG.recipientName)
  .replace(/\{nickname\}/g, CONFIG.nickname);
const rand = (a, b) => a + Math.random() * (b - a);
const pick = a => a[Math.floor(Math.random() * a.length)];
const center = e => { const r = e.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; };
const buzz = ms => { try { navigator.vibrate && navigator.vibrate(ms); } catch (_) {} };

/* ---- environment ---- */
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const small = matchMedia("(max-width: 720px)").matches || (navigator.hardwareConcurrency || 8) <= 4;
const FX = reduce ? 0.25 : small ? 0.6 : 1;                 // particle multiplier
const PACE = Math.max(0.4, CONFIG.openingDuration / 30000);  // pacing multiplier
const T = ms => ms * PACE;

/* ---- timers ---- */
const timers = new Set();
const later = (fn, ms) => { const id = setTimeout(() => { timers.delete(id); fn(); }, ms); timers.add(id); return id; };
const clearAll = () => { timers.forEach(clearTimeout); timers.clear(); };

/* ---- DOM refs ---- */
const stage = $("#stage"), fxLayer = $("#fx"), ambient = $("#ambient");
const hud = $("#hud"), hudName = $("#hudName"), hudProg = $("#hudProg");
const HEARTS = ["❤️", "💗", "💕", "💖", "💓", "💞"];

/* ==========================================================
   Particles
   ========================================================== */
function particle(char, x, y, dx, dy, o = {}) {
  const p = document.createElement("span");
  p.className = "p" + (o.cls ? " " + o.cls : "");
  if (char) p.textContent = char;
  p.style.left = x + "px";
  p.style.top = y + "px";
  if (o.px) p.style.width = p.style.height = o.px + "px";
  else p.style.fontSize = (o.size || rand(16, 30)) + "px";
  fxLayer.appendChild(p);

  const base = "translate(-50%,-50%)";
  const frames = [{ transform: `${base} translate(0px,0px) scale(${o.from ?? 0.3}) rotate(0deg)`, opacity: 0 }];
  frames.push({ opacity: 1, offset: 0.14 });
  if (o.mid) frames.push({ transform: `${base} translate(${o.mid[0]}px,${o.mid[1]}px) scale(1)`, opacity: 1, offset: 0.5 });
  if (o.hold) frames.push({ opacity: 1, offset: 0.85 });
  frames.push({
    transform: `${base} translate(${dx}px,${dy}px) scale(${o.to ?? 1}) rotate(${rand(-50, 50)}deg)`,
    opacity: o.endOpacity ?? 0
  });
  const a = p.animate(frames, {
    duration: o.dur || rand(900, 1500),
    delay: o.delay || 0,
    easing: o.easing || "cubic-bezier(.15,.75,.3,1)",
    fill: "both"
  });
  a.onfinish = () => p.remove();
  return a;
}

function ring(x, y, power = 1) {
  const r = el("span", "ring");
  r.style.left = x + "px"; r.style.top = y + "px";
  fxLayer.appendChild(r);
  const a = r.animate([
    { transform: "translate(-50%,-50%) scale(.2)", opacity: 0.9 },
    { transform: `translate(-50%,-50%) scale(${5 * power})`, opacity: 0 }
  ], { duration: 800, easing: "ease-out" });
  a.onfinish = () => r.remove();
}

function burst(x, y, { hearts = 14, dots = 16, sparks = 8, power = 1 } = {}) {
  const h = Math.round(hearts * FX), d = Math.round(dots * FX), s = Math.round(sparks * FX);
  for (let i = 0; i < h; i++) {
    const ang = rand(0, Math.PI * 2), dist = rand(70, 180) * power;
    particle(pick(HEARTS), x, y, Math.cos(ang) * dist, Math.sin(ang) * dist - rand(30, 110), { size: rand(16, 34) });
  }
  for (let i = 0; i < d; i++) {
    const ang = rand(0, Math.PI * 2), dist = rand(50, 200) * power;
    particle("", x, y, Math.cos(ang) * dist, Math.sin(ang) * dist, { cls: "dot", px: rand(4, 10), from: 1, to: 0.2, dur: rand(600, 1100) });
  }
  for (let i = 0; i < s; i++) {
    const ang = rand(0, Math.PI * 2), dist = rand(60, 190) * power;
    particle("✨", x, y, Math.cos(ang) * dist, Math.sin(ang) * dist - 30, { size: rand(14, 24), dur: rand(800, 1300) });
  }
  ring(x, y, power);
}

function converge(target, n, o = {}) {
  const t = center(target), W = innerWidth, H = innerHeight;
  const count = Math.round(n * FX) + 2;
  for (let i = 0; i < count; i++) {
    const side = (Math.random() * 4) | 0;
    let x, y;
    if (side === 0) { x = rand(0, W); y = -20; }
    else if (side === 1) { x = rand(0, W); y = H + 20; }
    else if (side === 2) { x = -20; y = rand(0, H); }
    else { x = W + 20; y = rand(0, H); }
    particle(pick(HEARTS), x, y, t.x - x, t.y - y, {
      size: rand(14, 26), from: 1, to: 0.35, hold: 1,
      dur: o.dur || rand(900, 1300), delay: i * (o.stagger || 55),
      easing: "cubic-bezier(.55,.05,.35,1)"
    });
  }
}

function fly(from, to, n) {
  const a = from.getBoundingClientRect(), t = center(to);
  const count = Math.round(n * FX) + 2;
  for (let i = 0; i < count; i++) {
    const x = rand(a.left + a.width * 0.2, a.right - a.width * 0.2), y = a.top + a.height / 2;
    const dx = t.x - x, dy = t.y - y;
    particle(pick(HEARTS), x, y, dx, dy, {
      size: rand(16, 26), from: 0.8, to: 0.5, hold: 1,
      dur: rand(900, 1200), delay: i * 70, easing: "cubic-bezier(.4,0,.2,1)",
      mid: [dx * 0.5 + rand(-70, 70), dy * 0.5 - rand(20, 60)]
    });
  }
  later(() => { hudName.classList.add("pop"); later(() => hudName.classList.remove("pop"), 700); }, 1100);
}

function heartRain(n) {
  const count = Math.round(n * FX);
  for (let i = 0; i < count; i++) {
    particle(pick(HEARTS), rand(0, innerWidth), -30, rand(-50, 50), innerHeight + 60, {
      size: rand(16, 32), from: 1, to: 1, hold: 1, dur: rand(2600, 4600), delay: i * 130, easing: "linear"
    });
  }
}

function flash() {
  const f = $("#flash");
  f.animate([{ opacity: 0 }, { opacity: 0.8, offset: 0.25 }, { opacity: 0 }], { duration: reduce ? 200 : 520, easing: "ease-out" });
}

/* ---- ambient floating hearts & twinkles ---- */
const AMB = ["💗", "💕", "❤️", "💖", "💓"];
const AMB_MAX = reduce ? 0 : small ? 9 : 17;
let ambCount = 0;

function spawnAmbient(seed) {
  if (!AMB_MAX || document.hidden || ambCount >= AMB_MAX || !document.body.classList.contains("alive")) return;
  const h = el("span", "amb", pick(AMB));
  h.style.left = rand(2, 96) + "%";
  h.style.fontSize = rand(14, 34) + "px";
  h.style.setProperty("--o", rand(0.25, 0.6).toFixed(2));
  h.style.setProperty("--dx", rand(-50, 50) + "px");
  h.style.setProperty("--r", rand(-25, 25) + "deg");
  h.style.animationDuration = rand(9, 16) + "s";
  if (seed) h.style.animationDelay = "-" + rand(0, 9).toFixed(1) + "s";
  ambient.appendChild(h);
  ambCount++;
  h.addEventListener("animationend", () => { h.remove(); ambCount--; });
}
function startAmbient() {
  if (startAmbient.done) return;
  startAmbient.done = true;
  for (let i = 0; i < Math.floor(AMB_MAX / 2); i++) spawnAmbient(true);
  setInterval(spawnAmbient, small ? 900 : 600);
}
function buildTwinkles() {
  const box = $("#twinkles");
  const n = reduce ? 0 : small ? 14 : 26;
  for (let i = 0; i < n; i++) {
    const t = el("span", "tw");
    t.style.left = rand(0, 100) + "%";
    t.style.top = rand(0, 100) + "%";
    t.style.setProperty("--s", rand(2, 5).toFixed(1) + "px");
    t.style.setProperty("--d", rand(2.5, 5).toFixed(1) + "s");
    t.style.setProperty("--dl", "-" + rand(0, 5).toFixed(1) + "s");
    box.appendChild(t);
  }
}

/* ==========================================================
   Scene controller
   ========================================================== */
const scenes = {};
let current = null;

const setMood = m => { document.body.dataset.mood = m; };

function setHud(on, idx, total) {
  hud.classList.toggle("on", !!on);
  hudProg.style.display = idx == null ? "none" : "";
  hudProg.textContent = "";
  if (idx != null) for (let k = 0; k < total; k++) hudProg.append(el("span", "", k <= idx ? "❤️" : "🤍"));
}

function makeScene(name, { mood = "rose", hud: useHud = false, progress = null, total = 0 } = {}) {
  const sec = el("section", "scene" + (useHud ? " has-hud" : ""));
  sec.dataset.scene = name;
  const inner = el("div", "inner");
  sec.appendChild(inner);
  stage.appendChild(sec);
  const s = { name, el: sec, inner, mood, hud: useHud, progress, total, enter() {} };
  scenes[name] = s;
  return s;
}

function go(name) {
  const next = scenes[name];
  if (!next) return;
  if (current) current.el.classList.remove("active");
  current = next;
  setMood(next.mood);
  setHud(next.hud, next.progress, next.total);
  next.el.scrollTop = 0;
  next.el.classList.add("active");
  next.enter();
}

/* ---- small builders ---- */
const line = (tag, text, cls = "") => { const e = el(tag, "line " + cls); e.textContent = tpl(text); return e; };
const show = e => e.classList.add("in");

/* ==========================================================
   Scenes
   ========================================================== */
function buildIntro() {
  const c = CONFIG.intro;
  const s = makeScene("intro", { mood: "dark" });
  const wrap = el("div", "hero-wrap");
  const glow = el("span", "hero-glow");
  const heart = el("span", "hero-heart", c.heart);
  wrap.append(glow, heart);

  const name = line("h1", c.name, "name-big");
  const l1 = line("p", c.line1, "t-mid");
  const l2 = line("p", c.line2, "t-big");
  const cta = line("button", c.button, "cta");
  cta.type = "button";
  s.inner.append(wrap, name, l1, l2, cta);

  let locked = false;
  cta.addEventListener("click", () => {
    if (locked) return;
    locked = true;
    const r = center(cta);
    document.body.classList.add("alive");
    startAmbient();
    burst(r.x, r.y, { hearts: 22, dots: 26, sparks: 12, power: 1.35 });
    buzz(25);
    later(() => go("q0"), 300);
  });

  s.enter = () => {
    wrap.classList.add("in");
    later(() => converge(heart, 18), T(250));
    later(() => { show(name); wrap.classList.add("thump"); }, T(800));
    later(() => show(l1), T(1500));
    later(() => show(l2), T(2300));
    later(() => show(cta), T(2800));
  };
}

function buildQuestion(q, key, next, { progress = null, total = 0 } = {}) {
  const s = makeScene(key, { mood: q.mood || "rose", hud: true, progress, total });
  const head = el("div", "q-head");
  [].concat(q.title).forEach((t, k) => head.append(line("h2", t, "q-title" + (k ? " sub" : ""))));
  const list = el("div", "opts");
  const reaction = el("p", "reaction");
  const opts = q.options.map(o => {
    const b = el("button", "opt", tpl(o));
    b.type = "button";
    list.append(b);
    return b;
  });
  s.inner.append(head, list, reaction);

  let done = false;
  opts.forEach(b => b.addEventListener("click", () => {
    if (done) return;
    done = true;
    const r = center(b);
    b.classList.add("chosen");
    opts.forEach(x => { if (x !== b) x.classList.add("dim"); });
    buzz(18);

    if (q.fx === "big") burst(r.x, r.y, { hearts: 30, dots: 34, sparks: 16, power: 1.5 });
    else burst(r.x, r.y, { hearts: 14, dots: 18, sparks: 8, power: 1 });
    if (q.fx === "fly") fly(b, hudName, 9);
    if (q.beat) document.body.classList.add("beat");
    if (q.moodAfter) setMood(q.moodAfter);

    later(() => {
      reaction.textContent = tpl(q.reaction);
      reaction.classList.add("in");
      if (q.fx === "big") {
        flash();
        const W = innerWidth, H = innerHeight;
        [[.5, .45], [.2, .6], [.8, .6]].forEach(([fx, fy], i) =>
          later(() => burst(W * fx, H * fy, { hearts: 18, dots: 22, sparks: 10, power: 1.4 }), i * 140));
      }
    }, 260);
    later(() => go(next), q.hold || 1700);
  }));

  s.enter = () => {
    head.querySelectorAll(".line").forEach((e, k) => later(() => show(e), 60 + k * 450));
    const base = 380 + (head.children.length - 1) * 450;
    opts.forEach((b, k) => later(() => b.classList.add("in"), base + k * 110));
  };
}

function buildHeartForm(form) {
  const outline = small ? 24 : 32, inner = small ? 12 : 16;
  const faces = ["❤️", "💗", "💕", "💖", "💓"];
  const pt = (t, scale) => {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    return [50 + x * 2.9 * scale, 50 + (y - 2.5) * 2.9 * scale];
  };
  const pts = [];
  for (let i = 0; i < outline; i++) pts.push(pt((i / outline) * Math.PI * 2, 1));
  for (let i = 0; i < inner; i++) pts.push(pt((i / inner) * Math.PI * 2, 0.58));
  pts.push(pt(0, 0.0));
  pts.forEach(([l, t], i) => {
    const h = el("span", "hp", faces[i % faces.length]);
    h.style.left = l + "%";
    h.style.top = t + "%";
    h.style.setProperty("--sx", rand(-220, 220).toFixed(0) + "px");
    h.style.setProperty("--sy", rand(-260, 260).toFixed(0) + "px");
    h.style.setProperty("--k", rand(0.85, 1.25).toFixed(2));
    h.style.transitionDelay = (i * 32) + "ms";
    form.appendChild(h);
  });
}

function buildReveal() {
  const c = CONFIG.reveal;
  const s = makeScene("reveal", { mood: "glow" });
  s.inner.classList.add("reveal-inner");
  const name = line("h2", c.name, "reveal-name");
  const form = el("div", "heart-form");
  buildHeartForm(form);

  const slot = el("div", "slot");
  const gA = el("div", "grp"), gB = el("div", "grp");
  const a = line("p", c.lines[0], "rline");
  const b = line("p", c.lines[1], "rline");
  const d = line("p", c.lines[2], "rline strong");
  gA.append(a); gB.append(b, d);
  slot.append(gA, gB);
  s.inner.append(name, form, slot);

  s.enter = () => {
    form.classList.add("in");
    later(() => { form.classList.add("formed"); const r = center(form); ring(r.x, r.y, 2.2); }, T(1500));
    later(() => show(name), T(300));
    later(() => show(a), T(1300));
    later(() => { a.classList.remove("in"); a.classList.add("out"); }, T(2900));
    later(() => show(b), T(3100));
    later(() => show(d), T(4300));
    later(() => go("final"), T(6300));
  };
}

function buildFinal() {
  const c = CONFIG.finalCard;
  const s = makeScene("final", { mood: "deep" });
  const card = el("div", "card");
  const heart = el("div", "card-heart", "💗");
  const to = line("h3", c.to, "to");
  const ps = c.paragraphs.map(t => line("p", t));
  const sign = line("p", c.signature, "sign");
  card.append(heart, to, ...ps, sign);
  s.inner.append(card);

  let more = null;
  if (CONFIG.extra.enabled) {
    more = line("button", c.continueButton, "ghost");
    more.type = "button";
    more.style.marginTop = "1.2rem";
    more.addEventListener("click", () => {
      const r = center(more);
      burst(r.x, r.y, { hearts: 12, dots: 12, sparks: 6 });
      document.body.classList.remove("beat");
      later(() => go("x0"), 250);
    });
    s.inner.append(more);
  }

  s.enter = () => {
    document.body.classList.remove("beat");
    const W = innerWidth, H = innerHeight;
    const target = { x: W / 2, y: H / 2 };
    const n = Math.round(20 * FX) + 3;
    for (let i = 0; i < n; i++) {
      const side = (Math.random() * 4) | 0;
      let x, y;
      if (side === 0) { x = rand(0, W); y = -20; }
      else if (side === 1) { x = rand(0, W); y = H + 20; }
      else if (side === 2) { x = -20; y = rand(0, H); }
      else { x = W + 20; y = rand(0, H); }
      particle(pick(HEARTS), x, y, target.x - x, target.y - y, {
        size: rand(16, 30), from: 1, to: 0.4, hold: 1, dur: rand(750, 1000), delay: i * 28,
        easing: "cubic-bezier(.55,.05,.35,1)"
      });
    }
    later(() => { ring(target.x, target.y, 3); card.classList.add("in"); }, T(700));
    later(() => show(to), T(1000));
    later(() => show(ps[0]), T(1500));
    later(() => show(ps[1]), T(2500));
    later(() => show(ps[2]), T(3600));
    later(() => {
      show(sign);
      card.classList.add("beating");
      const r = center(card);
      burst(r.x, r.y, { hearts: 16, dots: 16, sparks: 10, power: 1.6 });
    }, T(5200));
    if (more) later(() => show(more), T(6600));
  };
}

/* ---- extra section ---- */
function buildLetter(next) {
  const c = CONFIG.extra.letter;
  const s = makeScene("letter", { mood: "glow" });
  const card = el("div", "card letter");
  const to = line("h3", c.title, "to");
  const body = el("div", "letter-body");
  const ls = c.lines.map(t => line("p", t));
  body.append(...ls);
  card.append(to, body);
  const btn = line("button", c.button, "ghost");
  btn.type = "button";
  btn.style.marginTop = "1.2rem";
  s.inner.append(card, btn);
  btn.addEventListener("click", () => {
    const r = center(btn);
    burst(r.x, r.y, { hearts: 12, dots: 12, sparks: 6 });
    later(() => go(next), 250);
  });
  s.enter = () => {
    later(() => card.classList.add("in"), 100);
    later(() => show(to), 400);
    ls.forEach((e, k) => later(() => { show(e); e.scrollIntoView({ block: "nearest", behavior: "smooth" }); }, 900 + k * 1100));
    later(() => show(btn), 900 + ls.length * 1100 + 300);
  };
}

function buildGift(next) {
  const c = CONFIG.extra.gift;
  const s = makeScene("gift", { mood: "deep" });
  const title = line("h2", c.title, "q-title");
  const btn = el("button", "gift");
  btn.type = "button";
  const emo = el("span", "gift-emoji", c.emoji);
  const lab = el("span", "gift-label", tpl(c.button));
  btn.append(emo, lab);
  s.inner.append(title, btn);
  let done = false;
  btn.addEventListener("click", () => {
    if (done) return;
    done = true;
    btn.classList.add("open");
    buzz(30);
    const r = center(emo);
    later(() => {
      emo.textContent = c.openedEmoji;
      lab.textContent = tpl(c.openedText);
      flash();
      burst(r.x, r.y, { hearts: 34, dots: 34, sparks: 16, power: 1.7 });
      heartRain(22);
    }, 650);
    later(() => go(next), 2400);
  });
  s.enter = () => {
    later(() => show(title), 100);
    later(() => btn.classList.add("in"), 450);
  };
}

function buildGarden(next) {
  const c = CONFIG.extra.garden;
  const s = makeScene("garden", { mood: "bright" });
  const wrap = el("div", "garden-wrap");
  const title = line("h2", c.title, "q-title");
  const wish = el("div", "wish", tpl(c.first));
  const field = el("div", "garden-field");
  const nextBtn = line("button", c.next, "ghost");
  nextBtn.type = "button";
  wrap.append(title, wish, field, nextBtn);
  s.inner.append(wrap);

  const faces = ["❤️", "💗", "💕", "💖", "💝", "💓", "🌷", "🌸", "✨", "💞"];
  const cols = small ? 4 : 6, rows = small ? 5 : 3, total = cols * rows;
  let popped = 0;
  for (let r = 0; r < rows; r++) {
    for (let k = 0; k < cols; k++) {
      const g = el("button", "gem", pick(faces));
      g.type = "button";
      g.setAttribute("aria-label", "💗");
      g.style.left = ((k + 0.5) / cols * 100 + rand(-4, 4)) + "%";
      g.style.top = ((r + 0.5) / rows * 100 + rand(-6, 6)) + "%";
      g.style.animationDelay = "-" + rand(0, 3).toFixed(1) + "s";
      g.style.animationDuration = rand(2.8, 4.2).toFixed(1) + "s";
      g.addEventListener("click", () => {
        const p = center(g);
        g.remove();
        burst(p.x, p.y, { hearts: 7, dots: 9, sparks: 5, power: 0.8 });
        buzz(12);
        wish.textContent = tpl(c.wishes[popped % c.wishes.length]);
        wish.classList.remove("in"); void wish.offsetWidth; wish.classList.add("in");
        popped++;
        if (popped >= 3) show(nextBtn);
        if (popped >= total) later(() => go(next), 900);
      });
      field.append(g);
    }
  }
  nextBtn.addEventListener("click", () => {
    const r = center(nextBtn);
    burst(r.x, r.y, { hearts: 12, dots: 12, sparks: 6 });
    later(() => go(next), 250);
  });
  s.enter = () => later(() => show(title), 100);
}

function buildFinale() {
  const c = CONFIG.extra.finale;
  const s = makeScene("finale", { mood: "deep" });
  const heart = el("div", "card-heart", "💗");
  const name = line("h2", c.name, "name-big");
  const ls = c.lines.map((t, i) => line("p", t, i === c.lines.length - 1 ? "t-big" : "t-mid"));
  const sign = line("p", c.signature, "t-big");
  const btn = line("button", c.restart, "cta");
  btn.type = "button";
  s.inner.append(heart, name, ...ls, sign, btn);
  btn.addEventListener("click", () => {
    const r = center(btn);
    burst(r.x, r.y, { hearts: 20, dots: 20, sparks: 10, power: 1.3 });
    later(restart, 450);
  });
  s.enter = () => {
    heartRain(26);
    later(() => show(name), 300);
    ls.forEach((e, k) => later(() => show(e), 1100 + k * 1100));
    later(() => { show(sign); const r = center(sign); burst(r.x, r.y, { hearts: 18, dots: 18, sparks: 10, power: 1.6 }); }, 1100 + ls.length * 1100 + 200);
    later(() => show(btn), 1100 + ls.length * 1100 + 1400);
  };
}

/* ==========================================================
   Assemble & run
   ========================================================== */
function buildAll() {
  const qs = CONFIG.questions, n = qs.length;
  buildIntro();
  qs.forEach((q, i) => buildQuestion(q, "q" + i, i < n - 1 ? "q" + (i + 1) : "reveal", { progress: i, total: n }));
  buildReveal();
  buildFinal();

  if (CONFIG.extra.enabled) {
    const xs = CONFIG.extra.questions;
    xs.forEach((q, i) => buildQuestion(q, "x" + i, i < xs.length - 1 ? "x" + (i + 1) : "letter"));
    buildLetter("gift");
    buildGift("garden");
    buildGarden("finale");
    buildFinale();
  }
}

function restart() {
  clearAll();
  current = null;
  document.body.classList.remove("beat", "alive");
  fxLayer.innerHTML = "";
  stage.innerHTML = "";
  Object.keys(scenes).forEach(k => delete scenes[k]);
  buildAll();
  setMood("dark");
  go("intro");
}

function init() {
  document.title = tpl(CONFIG.pageTitle);
  hudName.textContent = tpl("{nickname} 💗");
  buildTwinkles();
  buildAll();
  setMood("dark");
  go("intro");
}
init();
