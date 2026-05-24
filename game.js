// ============================================================
//  PİXEL MİNECRAFT KOLEKSİYON — GAME ENGINE v3
// ============================================================

// ──── VERİ TABANI ────────────────────────────────────────────

const CHARACTERS = [
  {
    id: "necronvo",
    name: "Necronvo",
    img: "pmkimage/karakterler/necronvo.png",
    rarity: "common",
    rarityLabel: "SIRADAN",
    rarityColor: "#aaaaaa",
    emoji: "px-skull",
    desc: "Bu koleksiyonun sahibi. Gecenin karanlığından doğan PvP ustası. Sıradan mı dedin? Aldatıcı görünüş!",
    weight: 40,
    bgText: "NECRON"
  },
  {
    id: "erdemoon",
    name: "Erdemoon",
    img: "pmkimage/karakterler/erdemoon.png",
    rarity: "common",
    rarityLabel: "SIRADAN",
    rarityColor: "#aaaaaa",
    emoji: "px-moon",
    desc: "Türk Minecraft troll ustası. Sunuculara gizlice giriyor, dünyaları alt üst ediyor. Kendi halinde görünür ama aldanma!",
    weight: 35,
    bgText: "ERDEM"
  },
  {
    id: "themurat",
    name: "TheMurat",
    img: "pmkimage/karakterler/themurat.png",
    rarity: "common",
    rarityLabel: "SIRADAN",
    rarityColor: "#aaaaaa",
    emoji: "px-crown",
    desc: "Murat Can. 'TheMurat vs Minecraft' serisiyle her gün yeni video çıkarıyor. Köyde kral olmaya yemin etmiş, durmak yok!",
    weight: 30,
    bgText: "MURAT"
  },
  {
    id: "berkayinan",
    name: "Berkay İnan",
    img: "pmkimage/karakterler/berkayinan.png",
    rarity: "rare",
    rarityLabel: "NADİR",
    rarityColor: "#4a90e2",
    emoji: "px-bolt",
    desc: "Minecraft shorts'tan uzun videolara geçen enerji dolu YouTuber. 'Energy Going Onwards!'",
    weight: 20,
    bgText: "BERKAY"
  },
  {
    id: "mavislime",
    name: "MaviSlime",
    img: "pmkimage/karakterler/mavislime.png",
    rarity: "rare",
    rarityLabel: "NADİR",
    rarityColor: "#4a90e2",
    emoji: "px-slime",
    desc: "Aykut'un kurduğu Türk Minecraft efsanesi. 2014'ten beri parkur ve survival içerikleri üretiyor. 600 milyonu aşkın izlenme!",
    weight: 25,
    bgText: "MAVİ"
  },
  {
    id: "herobrine",
    name: "Herobrine",
    img: "pmkimage/karakterler/herobrine.png",
    rarity: "epic",
    rarityLabel: "EPİK",
    rarityColor: "#a855f7",
    emoji: "px-eye",
    desc: "Minecraft'ın en büyük urban efsanesi. Boş gözleri seni izliyor olabilir... ya da hiç olmamış olabilir. Kim bilir?",
    weight: 10,
    bgText: "HERO"
  },
  {
    id: "yusufte",
    name: "Yusufte",
    img: "pmkimage/karakterler/yusufte.png",
    rarity: "epic",
    rarityLabel: "EPİK",
    rarityColor: "#a855f7",
    emoji: "px-pickaxe",
    desc: "Türkiye'nin en iyi PvP oyuncularından biri. Rakipleri karşısında durma, pes etme!",
    weight: 10,
    bgText: "YUSUFTE"
  },
  {
    id: "dream",
    name: "Dream",
    img: "pmkimage/karakterler/dream.png",
    rarity: "epic",
    rarityLabel: "EPİK",
    rarityColor: "#a855f7",
    emoji: "px-mask",
    desc: "Manhunt serisinin yaratıcısı. Speedrun skandalına rağmen YouTube'un en hızlı büyüyen oyuncularından biri olmayı başardı.",
    weight: 10,
    bgText: "DREAM"
  },
  {
    id: "ersincaki",
    name: "Ersin Caki",
    img: "pmkimage/karakterler/ersincaki.png",
    rarity: "epic",
    rarityLabel: "EPİK",
    rarityColor: "#a855f7",
    emoji: "px-wrench",
    desc: "ErsinCraft kanaliyla Minecraft mod, texture, shader ve add-on icerikleri paylasan Turk YouTuber. Ogretici videolarin adresi!",
    weight: 10,
    bgText: "ERSİN"
  },
  {
    id: "technoblade",
    name: "Technoblade",
    img: "pmkimage/karakterler/technoblade.png",
    rarity: "legend",
    rarityLabel: "EFSANE",
    rarityColor: "#f5c518",
    emoji: "px-sword",
    desc: "Technoblade never dies. PvP tarihinin degismez prensi. Hayatini oyuna adadi, olum bile onu durduramadi.",
    weight: 5,
    bgText: "TECHNO"
  }
];

const PACK = {
  id: "siradan",
  name: "Sıradan Paket",
  img: "pmkimage/paketler/sıradanpaket.png",
  cardCount: 1,
  cooldownMs: 10 * 60 * 1000   // 10 dakika
};

const SAVE_KEY = "pmk_v3";

// ──── BAŞARILAR ───────────────────────────────────────────────
const ACHIEVEMENTS = [
  { id: "first_pack",    icon: "px-pack",    name: "İlk Adım",       desc: "İlk paketini aç",                  check: s => s.totalPacksOpened >= 1 },
  { id: "packs_10",      icon: "px-box",     name: "Koleksiyoncu",   desc: "10 paket aç",                      check: s => s.totalPacksOpened >= 10 },
  { id: "packs_50",      icon: "px-chest",   name: "Paket Ustası",   desc: "50 paket aç",                      check: s => s.totalPacksOpened >= 50 },
  { id: "first_char",    icon: "px-card",    name: "İlk Karakter",   desc: "İlk karakterini topla",            check: s => Object.values(s.collection).some(e => e.count > 0) },
  { id: "all_common",    icon: "px-pickaxe", name: "Başlangıç",      desc: "Tüm Sıradan karakterleri topla",   check: s => CHARACTERS.filter(c => c.rarity === "common").every(c => s.collection[c.id]?.count > 0) },
  { id: "first_rare",    icon: "px-gem",     name: "Nadir Bulucu",   desc: "İlk Nadir karakterini topla",      check: s => CHARACTERS.filter(c => c.rarity === "rare").some(c => s.collection[c.id]?.count > 0) },
  { id: "first_epic",    icon: "px-orb",     name: "Epik An",        desc: "İlk Epik karakterini topla",       check: s => CHARACTERS.filter(c => c.rarity === "epic").some(c => s.collection[c.id]?.count > 0) },
  { id: "first_legend",  icon: "px-sword",   name: "Efsanevi",       desc: "İlk Efsane karakterini topla",     check: s => CHARACTERS.filter(c => c.rarity === "legend").some(c => s.collection[c.id]?.count > 0) },
  { id: "all_chars",     icon: "px-trophy",  name: "Tam Koleksiyon", desc: "Tüm karakterleri topla",           check: s => CHARACTERS.every(c => s.collection[c.id]?.count > 0) },
  { id: "dupe_5",        icon: "px-star",    name: "Cifte Sans",     desc: "Bir karakteri 5 kez ac",           check: s => Object.values(s.collection).some(e => e.count >= 5) },
  { id: "necronvo_own",  icon: "px-skull",   name: "Ev Sahibi",      desc: "Necronvo'yu topla",                check: s => s.collection["necronvo"]?.count > 0 },
  { id: "techno_own",    icon: "px-sword",   name: "Never Dies",     desc: "Technoblade'i topla",              check: s => s.collection["technoblade"]?.count > 0 },
];

// ──── OYUN DURUMU ─────────────────────────────────────────────
let state = {
  collection: {},     // { charId: { count, isNew } }
  lastOpen: 0,
  totalPacksOpened: 0,
  totalCardsGained: 0,
  luckyChar: null,
  achievements: {}    // { achId: true }
};

// ──── KAYIT / YÜKLEME ─────────────────────────────────────────
function save() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch(_) {}
}
function load() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) Object.assign(state, JSON.parse(raw));
  } catch(_) {}
}

function checkAchievements() {
  if (!state.achievements) state.achievements = {};
  ACHIEVEMENTS.forEach(ach => {
    if (!state.achievements[ach.id] && ach.check(state)) {
      state.achievements[ach.id] = true;
      showAchievementToast(ach);
    }
  });
}

function showAchievementToast(ach) {
  const el = document.createElement("div");
  el.className = "ach-toast";
  el.innerHTML = `<div class="px-symbol at-sym ${ach.icon}"></div><div><div class="at-title">BASARI KAZANILDI!</div><div class="at-name">${ach.name}</div><div class="at-desc">${ach.desc}</div></div>`;
  document.body.appendChild(el);
  setTimeout(() => el.classList.add("show"), 50);
  setTimeout(() => { el.classList.remove("show"); setTimeout(() => el.remove(), 500); }, 4000);
}

function renderAchievements() {
  const grid = document.getElementById("achievementGrid");
  if (!grid) return;
  grid.innerHTML = "";
  if (!state.achievements) state.achievements = {};
  ACHIEVEMENTS.forEach(ach => {
    const earned = !!state.achievements[ach.id];
    const box = document.createElement("div");
    box.className = "ach-box " + (earned ? "ach-earned" : "ach-locked");
    box.title = ach.desc;
    box.innerHTML = `<div class="ach-icon"><div class="px-symbol ${earned ? ach.icon : 'px-lock'}"></div></div><div class="ach-name">${earned ? ach.name : "???"}</div><div class="ach-desc">${earned ? ach.desc : "Henüz kazanilmadi"}</div>`;
    grid.appendChild(box);
  });
  const earned = ACHIEVEMENTS.filter(a => state.achievements[a.id]).length;
  const counter = document.getElementById("achCounter");
  if (counter) counter.textContent = `${earned} / ${ACHIEVEMENTS.length}`;
}

// ──── AĞIRLIKLI RANDOM ────────────────────────────────────────
const TOTAL_WEIGHT = CHARACTERS.reduce((s, c) => s + c.weight, 0);
function randomChar() {
  let r = Math.random() * TOTAL_WEIGHT;
  for (const c of CHARACTERS) { r -= c.weight; if (r <= 0) return c; }
  return CHARACTERS[CHARACTERS.length - 1];
}
function pickPack() {
  return Array.from({ length: PACK.cardCount }, randomChar);
}

// ──── NADİRLİK SIRALAMA ──────────────────────────────────────
const RARITY_ORDER = { common: 0, rare: 1, epic: 2, legend: 3 };
function compareRarity(a, b) {
  return RARITY_ORDER[b.rarity] - RARITY_ORDER[a.rarity];
}

// ──── YILDIZ ARKA PLAN ────────────────────────────────────────
function initStars() {
  const canvas = document.getElementById("starCanvas");
  const ctx    = canvas.getContext("2d");
  let W, H, stars;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      a: Math.random(),
      spd: 0.003 + Math.random() * 0.007,
      col: ["#f5c518","#4a90e2","#a855f7","#ffffff"][Math.floor(Math.random()*4)]
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.a += s.spd;
      if (s.a > 1) s.spd = -s.spd;
      if (s.a < 0) s.spd = -s.spd;
      ctx.globalAlpha = Math.max(0, Math.min(1, s.a)) * 0.7;
      ctx.fillStyle = s.col;
      ctx.fillRect(Math.round(s.x), Math.round(s.y), Math.ceil(s.r * 2), Math.ceil(s.r * 2));
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
}

// ──── COOLDOWN ────────────────────────────────────────────────
let cdInterval = null;

function updateCooldown() {
  const btn     = document.getElementById("openBtn");
  const fill    = document.getElementById("cdFill");
  const label   = document.getElementById("cdLabel");
  const timer   = document.getElementById("cdTime");
  const elapsed = Date.now() - state.lastOpen;
  const cd      = PACK.cooldownMs;

  if (elapsed >= cd) {
    fill.style.width = "100%";
    fill.style.background = "linear-gradient(90deg,#2a7a2a,#4ec94e)";
    label.textContent = "Paket açmaya hazır!";
    timer.textContent = "HAZIR";
    timer.style.color = "#4ec94e";
    btn.disabled = false;
    btn.querySelector(".btn-label").textContent = "🎁 PAKET AÇ";
    clearInterval(cdInterval); cdInterval = null;
  } else {
    const pct = (elapsed / cd) * 100;
    fill.style.width = pct + "%";
    fill.style.background = "linear-gradient(90deg,#9a7a00,#f5c518)";
    label.textContent = "Sonraki paket için bekle...";
    const rem = Math.ceil((cd - elapsed) / 1000);
    const min = Math.floor(rem / 60).toString().padStart(2,"0");
    const sec = (rem % 60).toString().padStart(2,"0");
    timer.textContent = `${min}:${sec}`;
    timer.style.color = "#f5c518";
    btn.disabled = true;
    btn.querySelector(".btn-label").textContent = `⏳ ${min}:${sec}`;
  }
}

function startCooldown() {
  updateCooldown();
  if (cdInterval) clearInterval(cdInterval);
  cdInterval = setInterval(updateCooldown, 1000);
}

// ──── KOLEKSİYON GRID ────────────────────────────────────────
let currentFilter = "all";

function setFilter(f, el) {
  currentFilter = f;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  el.classList.add("active");
  renderGrid();
}

function renderGrid() {
  const grid = document.getElementById("collectionGrid");
  grid.innerHTML = "";

  let chars = [...CHARACTERS].sort(compareRarity);
  if (currentFilter === "collected") chars = chars.filter(c => state.collection[c.id]?.count > 0);
  if (currentFilter === "missing")   chars = chars.filter(c => !(state.collection[c.id]?.count > 0));

  chars.forEach(char => {
    const entry = state.collection[char.id];
    const owned = entry?.count > 0;

    const slot = document.createElement("div");
    slot.className = "c-slot " + (owned ? "owned" : "missing");
    slot.title = owned ? char.name : "???";

    if (owned) {
      const img = document.createElement("img");
      img.src = char.img;
      img.alt = char.name;
      img.onerror = () => { img.replaceWith(makeSlotFallback(char)); };
      slot.appendChild(img);

      const dot = document.createElement("div");
      dot.className = "slot-rarity-dot";
      dot.style.background = char.rarityColor;
      slot.appendChild(dot);

      const cnt = document.createElement("div");
      cnt.className = "slot-count";
      cnt.textContent = `x${entry.count}`;
      slot.appendChild(cnt);

      if (entry.isNew) {
        const b = document.createElement("div");
        b.className = "slot-badge new-b";
        b.textContent = "YENİ";
        slot.appendChild(b);
      }

      slot.onclick = () => showCharDetail(char);
    } else {
      const q = document.createElement("span");
      q.className = "q-mark";
      q.textContent = "?";
      slot.appendChild(q);
    }

    grid.appendChild(slot);
  });

  updateProgress();
}

function makeSlotFallback(char) {
  const d = document.createElement("div");
  d.style.cssText = "display:flex;align-items:center;justify-content:center;width:100%;height:100%";
  const sym = document.createElement("div");
  sym.className = `px-symbol ${char.emoji}`;
  d.appendChild(sym);
  return d;
}

function updateProgress() {
  const total     = CHARACTERS.length;
  const collected = CHARACTERS.filter(c => state.collection[c.id]?.count > 0).length;
  const pct       = total ? Math.round((collected / total) * 100) : 0;
  document.getElementById("progressText").textContent = `${collected} / ${total}`;
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("progressPct").textContent  = `%${pct}`;
}

// ──── KARAKTER DETAY ─────────────────────────────────────────
function showCharDetail(char) {
  const showcaseEmpty = document.getElementById("showcaseEmpty");
  const showcaseImg   = document.getElementById("showcaseImg");
  const charCard      = document.getElementById("charCard");
  const bgText        = document.getElementById("showcaseBgText");

  showcaseEmpty.style.display = "none";
  showcaseImg.style.display   = "block";
  showcaseImg.src = char.img;
  showcaseImg.onerror = () => {
    showcaseImg.style.display = "none";
    showcaseEmpty.style.display = "flex";
  };

  bgText.textContent = char.bgText || char.name.toUpperCase();
  bgText.style.color = char.rarityColor;

  document.getElementById("ccName").textContent = char.name;
  const rEl = document.getElementById("ccRarity");
  rEl.textContent  = char.rarityLabel;
  rEl.style.color  = char.rarityColor;
  rEl.style.textShadow = `0 0 8px ${char.rarityColor}`;

  document.getElementById("ccDesc").textContent  = char.desc;
  const entry = state.collection[char.id];
  document.getElementById("ccOwned").textContent = `x${entry?.count ?? 0}`;
  const rarVal = document.getElementById("ccRarVal");
  rarVal.textContent  = char.rarityLabel;
  rarVal.style.color  = char.rarityColor;

  charCard.style.display = "flex";

  if (entry?.isNew) {
    entry.isNew = false;
    save();
    renderGrid();
  }
}

// ──── İSTATİSTİKLER ──────────────────────────────────────────
function updateStats() {
  document.getElementById("statPacks").textContent     = state.totalPacksOpened;
  document.getElementById("statCards").textContent     = state.totalCardsGained;
  document.getElementById("packOpenCount").textContent = state.totalPacksOpened;
  document.getElementById("coinCount").textContent     = state.totalCardsGained;

  const unique = CHARACTERS.filter(c => state.collection[c.id]?.count > 0).length;
  document.getElementById("statUnique").textContent = unique;

  const lucky = state.luckyChar ? CHARACTERS.find(c => c.id === state.luckyChar) : null;
  document.getElementById("statLucky").textContent = lucky ? lucky.emoji : "—";
}

// ──── PAKET AÇ ───────────────────────────────────────────────
function openPack() {
  if (Date.now() - state.lastOpen < PACK.cooldownMs) return;

  const cards = pickPack();
  state.lastOpen = Date.now();
  state.totalPacksOpened++;
  state.totalCardsGained += cards.length;

  const results = [];
  let newCount = 0;

  cards.forEach(char => {
    const isNew = !(state.collection[char.id]?.count > 0);
    if (!state.collection[char.id]) state.collection[char.id] = { count: 0, isNew: false };
    state.collection[char.id].count++;
    if (isNew) { state.collection[char.id].isNew = true; newCount++; }

    const curLucky = state.luckyChar ? CHARACTERS.find(c => c.id === state.luckyChar) : null;
    if (!curLucky || RARITY_ORDER[char.rarity] > RARITY_ORDER[curLucky.rarity]) {
      state.luckyChar = char.id;
    }

    results.push({ char, isNew });
  });

  save();
  checkAchievements();
  renderAchievements();
  startCooldown();
  updateStats();
  showRecentCards(results);
  showModal(results, newCount);

  if (newCount > 0) spawnConfetti();
  spawnSparkles();
}

// ──── SON AÇILAN ─────────────────────────────────────────────
function showRecentCards(results) {
  const sec  = document.getElementById("recentSection");
  const cont = document.getElementById("recentCards");
  cont.innerHTML = "";
  sec.style.display = "block";

  results.forEach(r => {
    const card = document.createElement("div");
    card.className = "rs-card";
    card.title = r.char.name;

    const img = document.createElement("img");
    img.src = r.char.img;
    img.alt = r.char.name;
    img.onerror = () => { img.replaceWith(makeRecentFallback(r.char)); };
    card.appendChild(img);

    const dot = document.createElement("div");
    dot.className = "rs-dot";
    dot.style.background = r.char.rarityColor;
    card.appendChild(dot);

    card.onclick = () => showCharDetail(r.char);
    cont.appendChild(card);
  });
}

function makeRecentFallback(char) {
  const d = document.createElement("div");
  d.style.cssText = "display:flex;align-items:center;justify-content:center;width:100%;height:100%";
  const sym = document.createElement("div");
  sym.className = `px-symbol ${char.emoji}`;
  d.appendChild(sym);
  return d;
}

// ──── MODAL ──────────────────────────────────────────────────
function showModal(results, newCount) {
  const modal      = document.getElementById("packModal");
  const cards      = document.getElementById("modalCards");
  const summary    = document.getElementById("modalSummary");
  const collectBtn = document.getElementById("btnCollect");
  const title      = document.getElementById("modalTitle");

  cards.innerHTML = "";
  summary.style.display    = "none";
  collectBtn.style.display = "none";
  document.getElementById("modalCloseBtn").style.display = "none";
  title.textContent = "PAKET AÇILIYOR!";
  modal.style.display = "flex";

  results.forEach((r, i) => {
    const card = document.createElement("div");
    card.className = `rev-card ${r.isNew ? "rev-new" : "rev-dupe"}`;

    const img = document.createElement("img");
    img.src = r.char.img;
    img.alt = r.char.name;
    img.className = "rev-img";
    img.onerror = () => { img.replaceWith(makeRevFallback(r.char)); };
    card.appendChild(img);

    const name = document.createElement("div");
    name.className = "rev-name";
    name.textContent = r.char.name;
    card.appendChild(name);

    const badge = document.createElement("div");
    badge.className = `rev-badge ${r.isNew ? "b-new" : "b-dupe"}`;
    badge.textContent = r.isNew ? "*** YENİ!" : ">> TEKRAR";
    card.appendChild(badge);

    const rar = document.createElement("div");
    rar.className = "rev-rarity";
    rar.textContent = r.char.rarityLabel;
    rar.style.color = r.char.rarityColor;
    rar.style.textShadow = `0 0 6px ${r.char.rarityColor}`;
    card.appendChild(rar);

    cards.appendChild(card);

    setTimeout(() => {
      card.classList.add("rev-show");
      if (i === results.length - 1) {
        setTimeout(() => {
          title.textContent = newCount > 0 ? ">> TEBRİKLER!" : ">> PAKET AÇILDI";
          document.getElementById("summaryNew").textContent = `${newCount} yeni`;
          summary.style.display   = "block";
          collectBtn.style.display = "block";
          document.getElementById("modalCloseBtn").style.display = "block";
        }, 400);
      }
    }, 250 + i * 420);
  });
}

function makeRevFallback(char) {
  const d = document.createElement("div");
  d.style.cssText = "width:80px;height:80px;display:flex;align-items:center;justify-content:center";
  const sym = document.createElement("div");
  sym.className = `px-symbol px-symbol-lg ${char.emoji}`;
  d.appendChild(sym);
  return d;
}

function closeModal() {
  document.getElementById("packModal").style.display = "none";
  renderGrid();
  updateStats();
  toast("Karakter koleksiyona eklendi! [+]");
}

function modalBgClick(e) {
  if (e.target === document.getElementById("packModal")) {
    const collectBtn = document.getElementById("btnCollect");
    if (collectBtn.style.display !== "none") closeModal();
  }
}

// ──── RESET ──────────────────────────────────────────────────
function confirmReset() { document.getElementById("resetModal").style.display = "flex"; }
function doReset() {
  state = { collection: {}, lastOpen: 0, totalPacksOpened: 0, totalCardsGained: 0, luckyChar: null };
  save();
  document.getElementById("resetModal").style.display  = "none";
  document.getElementById("showcaseEmpty").style.display = "flex";
  document.getElementById("showcaseImg").style.display   = "none";
  document.getElementById("charCard").style.display      = "none";
  document.getElementById("recentSection").style.display = "none";
  renderGrid();
  updateStats();
  startCooldown();
  toast("Kayit silindi. Yeni baslangic! [>]");
}

// ──── KONFETİ ────────────────────────────────────────────────
function spawnConfetti() {
  const cont = document.getElementById("konfeti");
  const colors = ["#f5c518","#4ec94e","#4a90e2","#a855f7","#ef4444","#ffffff","#ffde60"];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement("div");
    p.className = "kf-piece";
    p.style.cssText = `
      left:${Math.random()*100}vw;
      top:-12px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      width:${Math.random()>0.5?6:10}px;
      height:${Math.random()>0.5?6:10}px;
      animation-duration:${1.5+Math.random()*2}s;
      animation-delay:${Math.random()*0.8}s;
    `;
    cont.appendChild(p);
    setTimeout(() => p.remove(), 3500);
  }
}

// ──── SPARKLES ────────────────────────────────────────────────
function spawnSparkles() {
  const emojis = ["[*]","[+]","[!]","[x]","[o]","[#]","[~]","[^]"];
  for (let i = 0; i < 18; i++) {
    const el = document.createElement("div");
    el.className = "sparkle";
    const dx = (Math.random() - 0.5) * 220;
    const dy = (Math.random() - 0.5) * 220 - 80;
    el.style.cssText = `
      left:${Math.random()*window.innerWidth}px;
      top:${Math.random()*window.innerHeight}px;
      --sdx:${dx}px; --sdy:${dy}px;
      font-size:${14+Math.random()*16}px;
      animation-delay:${Math.random()*0.35}s;
    `;
    el.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }
}

// ──── TOAST ──────────────────────────────────────────────────
let toastTm = null;
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTm);
  toastTm = setTimeout(() => t.classList.remove("show"), 3000);
}

// ──── PAKET HOVER PARTİKÜL ────────────────────────────────────
function initPackHover() {
  const frame = document.getElementById("packFrame");
  frame.addEventListener("mouseenter", () => {
    const cont = document.getElementById("packParticles");
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        const p = document.createElement("div");
        p.style.cssText = `
          position:absolute;
          left:${Math.random()*100}%; top:${Math.random()*100}%;
          width:4px; height:4px;
          background:${["#f5c518","#4a90e2","#a855f7"][Math.floor(Math.random()*3)]};
          animation:sparkleOut .7s ease-out forwards;
          --sdx:${(Math.random()-0.5)*40}px;
          --sdy:${-20-Math.random()*30}px;
          font-size:0;
        `;
        cont.appendChild(p);
        setTimeout(() => p.remove(), 800);
      }, i * 80);
    }
  });
}

// ──── BAŞLATMA ────────────────────────────────────────────────
window.addEventListener("DOMContentLoaded", () => {
  load();
  initStars();
  initPackHover();
  renderGrid();
  updateStats();
  renderAchievements();
  startCooldown();

  const isFirst = state.totalPacksOpened === 0;
  if (isFirst) {
    setTimeout(() => toast("Hos geldin Koleksiyoncu! Ilk paketini acmaya hazir misin? [+]"), 1200);
  } else {
    const collected = CHARACTERS.filter(c => state.collection[c.id]?.count > 0).length;
    setTimeout(() => toast(`Tekrar hos geldin! ${collected}/${CHARACTERS.length} karakter topladın [C]`), 800);
  }
});

window.addEventListener("beforeunload", save);
