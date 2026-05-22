// ====================================================
//  PİXEL MİNECRAFT KOLEKSİYON - OYUN MOTORU
// ====================================================

// -------- VERİ --------
const CHARACTERS = [
  {
    id: "herobrine",
    name: "Herobrine",
    img: "pmkimage/karakterler/herobrine.png",
    rarity: "epic",
    rarityLabel: "EPİK",
    rarityColor: "#9b59b6",
    desc: "Gizemli gözleri boş bir usta. Nereye bakıyor, kimse bilmez...",
    weight: 30
  },
  {
    id: "yusufte",
    name: "Yusuf'te",
    img: "pmkimage/karakterler/yusufte.png",
    rarity: "common",
    rarityLabel: "SIRADAM",
    rarityColor: "#aaaaaa",
    desc: "Her dünyada bir Yusuf vardır. Kazmayı bırakmaz!",
    weight: 50
  },
  {
    id: "technoblade",
    name: "Technoblade",
    img: "pmkimage/karakterler/technoblade.png",
    rarity: "legend",
    rarityLabel: "EFSANE",
    rarityColor: "#f5c518",
    desc: "Technoblade never dies! PvP'nin efsanevi prensi.",
    weight: 20
  }
];

const PACKS = [
  {
    id: "siradan",
    name: "Sıradan Paket",
    img: "pmkimage/paketler/sıradanpaket.png",
    cardCount: 3,
    cooldownMs: 10 * 60 * 1000  // 10 dakika
  }
];

const ACTIVE_PACK = PACKS[0];
const STORAGE_KEY = "pmk_save";

// -------- OYUN DURUM --------
let gameState = {
  collection: {},   // { charId: { count, isNew } }
  lastOpenTime: 0,
  coins: 0
};

// -------- KAYIT / YÜKLEMENDİ --------
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
}

function load() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      gameState = JSON.parse(raw);
    } catch(e) {
      console.warn("Kayıt yüklenemedi, sıfırlanıyor.");
    }
  }
}

// -------- AĞIRLIKLI RASTGELE --------
function weightedRandom() {
  const total = CHARACTERS.reduce((s, c) => s + c.weight, 0);
  let r = Math.random() * total;
  for (const c of CHARACTERS) {
    r -= c.weight;
    if (r <= 0) return c;
  }
  return CHARACTERS[CHARACTERS.length - 1];
}

function pickCards(count) {
  const picked = [];
  for (let i = 0; i < count; i++) {
    picked.push(weightedRandom());
  }
  return picked;
}

// -------- UI GÜNCELLE --------
function updateCoinDisplay() {
  document.getElementById("coinCount").textContent = gameState.coins;
}

function updateCollectionGrid() {
  const grid = document.getElementById("collectionGrid");
  const total = document.getElementById("totalCount");
  const collected = document.getElementById("collectedCount");

  total.textContent = CHARACTERS.length;
  let collectedCount = 0;
  grid.innerHTML = "";

  CHARACTERS.forEach(char => {
    const slot = document.createElement("div");
    slot.className = "collection-slot";
    const entry = gameState.collection[char.id];

    if (entry && entry.count > 0) {
      collectedCount++;
      slot.classList.add("collected");

      const img = document.createElement("img");
      img.src = char.img;
      img.alt = char.name;
      img.className = "slot-img";
      img.onerror = () => {
        img.style.display = "none";
        slot.appendChild(makePixelFallback(char));
      };
      slot.appendChild(img);

      const cnt = document.createElement("div");
      cnt.className = "slot-count";
      cnt.textContent = `x${entry.count}`;
      slot.appendChild(cnt);

      if (entry.isNew) {
        const badge = document.createElement("div");
        badge.className = "slot-new-badge";
        badge.textContent = "YENİ";
        slot.appendChild(badge);
      }

      slot.title = char.name;
      slot.onclick = () => showCharacter(char);
    } else {
      slot.classList.add("empty");
      const q = document.createElement("span");
      q.className = "slot-question";
      q.textContent = "?";
      slot.appendChild(q);
      slot.title = "???";
    }

    grid.appendChild(slot);
  });

  collected.textContent = collectedCount;
}

function makePixelFallback(char) {
  // Basit renkli pixel kutu
  const colors = {
    herobrine: ["#cccccc","#ffffff","#888888"],
    yusufte:   ["#8B4513","#DEB887","#FFA500"],
    technoblade: ["#ff6b6b","#cc0000","#ffaaaa"]
  };
  const cls = colors[char.id] || ["#4a90d9","#2a5fa0","#88bbff"];
  const box = document.createElement("div");
  box.style.cssText = `width:36px;height:36px;background:${cls[0]};border:3px solid ${cls[1]};box-shadow:inset 2px 2px 0 ${cls[2]};image-rendering:pixelated;`;
  return box;
}

function showCharacter(char) {
  const area = document.getElementById("showcaseArea");
  const details = document.getElementById("charDetails");
  area.innerHTML = "";

  const img = document.createElement("img");
  img.src = char.img;
  img.alt = char.name;
  img.className = "showcase-char";
  img.onerror = () => {
    img.style.display = "none";
    const fb = makeLargePixelFallback(char);
    area.appendChild(fb);
  };
  area.appendChild(img);

  document.getElementById("charName").textContent = char.name;
  const rarityEl = document.getElementById("charRarity");
  rarityEl.textContent = char.rarityLabel;
  rarityEl.style.color = char.rarityColor;
  rarityEl.style.borderColor = char.rarityColor;
  rarityEl.style.textShadow = `0 0 8px ${char.rarityColor}`;

  document.getElementById("charDesc").textContent = char.desc;
  const entry = gameState.collection[char.id];
  document.getElementById("charCount").textContent = `Sahipsin: x${entry ? entry.count : 0}`;

  details.style.display = "flex";

  // "yeni" işaretini temizle
  if (entry && entry.isNew) {
    entry.isNew = false;
    save();
    updateCollectionGrid();
  }
}

function makeLargePixelFallback(char) {
  const colors = {
    herobrine: "#888888",
    yusufte:   "#DEB887",
    technoblade: "#ff6b6b"
  };
  const div = document.createElement("div");
  div.style.cssText = `
    width:120px;height:120px;
    background:${colors[char.id] || "#4a90d9"};
    image-rendering:pixelated;
    border:6px solid rgba(255,255,255,0.2);
    display:flex;align-items:center;justify-content:center;
    font-size:40px;
  `;
  div.textContent = char.id === "herobrine" ? "👁" :
                    char.id === "technoblade" ? "⚔" : "⛏";
  return div;
}

// -------- COOLDOWN --------
let cooldownInterval = null;

function updateCooldownUI() {
  const btn = document.getElementById("openBtn");
  const bar = document.getElementById("cooldownBar");
  const label = document.getElementById("cooldownLabel");
  const timer = document.getElementById("cooldownTimer");

  const now = Date.now();
  const elapsed = now - gameState.lastOpenTime;
  const cd = ACTIVE_PACK.cooldownMs;

  if (elapsed >= cd) {
    // Hazır
    bar.style.width = "100%";
    bar.style.background = "linear-gradient(90deg, #3a8c3a, #56b756)";
    label.textContent = "Paket açmaya hazır!";
    timer.textContent = "Hemen aç!";
    timer.style.color = "#56b756";
    btn.disabled = false;

    if (cooldownInterval) {
      clearInterval(cooldownInterval);
      cooldownInterval = null;
    }
  } else {
    // Bekleniyor
    const remaining = cd - elapsed;
    const pct = (elapsed / cd) * 100;
    bar.style.width = pct + "%";
    bar.style.background = "linear-gradient(90deg, #c09000, #f5c518)";
    label.textContent = "Sonraki paket için bekle...";
    timer.style.color = "#f5c518";

    const totalSec = Math.ceil(remaining / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    timer.textContent = `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
    btn.disabled = true;
  }
}

function startCooldownTimer() {
  updateCooldownUI();
  if (cooldownInterval) clearInterval(cooldownInterval);
  cooldownInterval = setInterval(updateCooldownUI, 1000);
}

// -------- PAKET AÇMA --------
function openPack() {
  const now = Date.now();
  if (now - gameState.lastOpenTime < ACTIVE_PACK.cooldownMs) return;

  const cards = pickCards(ACTIVE_PACK.cardCount);
  gameState.lastOpenTime = now;

  // Koleksiyona ekle (ekranı göstermeden önce)
  const results = [];
  cards.forEach(char => {
    const isNew = !gameState.collection[char.id] || gameState.collection[char.id].count === 0;
    if (!gameState.collection[char.id]) {
      gameState.collection[char.id] = { count: 0, isNew: false };
    }
    gameState.collection[char.id].count++;
    if (isNew) gameState.collection[char.id].isNew = true;
    results.push({ char, isNew });
  });

  save();
  startCooldownTimer();
  showPackModal(results);
  spawnSparkles();
}

function showPackModal(results) {
  const modal = document.getElementById("packModal");
  const reveal = document.getElementById("cardsReveal");
  const closeBtn = document.getElementById("closeModal");

  reveal.innerHTML = "";
  closeBtn.style.display = "none";
  modal.style.display = "flex";

  results.forEach((res, i) => {
    const card = document.createElement("div");
    card.className = `reveal-card ${res.isNew ? "new-card" : "duplicate-card"}`;

    const img = document.createElement("img");
    img.src = res.char.img;
    img.alt = res.char.name;
    img.className = "reveal-card-img";
    img.onerror = () => {
      img.style.display = "none";
      const fb = makeRevealFallback(res.char);
      card.insertBefore(fb, img.nextSibling);
    };
    card.appendChild(img);

    const name = document.createElement("div");
    name.className = "reveal-card-name";
    name.textContent = res.char.name;
    card.appendChild(name);

    const badge = document.createElement("div");
    badge.className = `reveal-card-badge ${res.isNew ? "badge-new" : "badge-dupe"}`;
    badge.textContent = res.isNew ? "✨ YENİ!" : "♻ TEKRAR";
    card.appendChild(badge);

    const rar = document.createElement("div");
    rar.className = "reveal-card-rarity";
    rar.textContent = res.char.rarityLabel;
    rar.style.color = res.char.rarityColor;
    card.appendChild(rar);

    reveal.appendChild(card);

    // Animasyonlu açılış
    setTimeout(() => {
      card.classList.add("show");
      if (i === results.length - 1) {
        setTimeout(() => { closeBtn.style.display = "block"; }, 400);
      }
    }, 300 + i * 400);
  });
}

function makeRevealFallback(char) {
  const div = document.createElement("div");
  div.style.cssText = `
    width:80px;height:80px;display:flex;align-items:center;
    justify-content:center;font-size:36px;
  `;
  div.textContent = char.id === "herobrine" ? "👁" :
                    char.id === "technoblade" ? "⚔" : "⛏";
  return div;
}

function closePackModal() {
  document.getElementById("packModal").style.display = "none";
  updateCollectionGrid();
  showToast("Karakterler koleksiyona eklendi! 🎉");
}

// -------- SPARKLE EFEKLER --------
function spawnSparkles() {
  const emojis = ["✨","⭐","💫","🌟","⚡","💎","🎉"];
  for (let i = 0; i < 14; i++) {
    const el = document.createElement("div");
    el.className = "sparkle";
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const dx = (Math.random() - 0.5) * 200;
    const dy = (Math.random() - 0.5) * 200 - 100;
    el.style.cssText = `left:${startX}px;top:${startY}px;--dx:${dx}px;--dy:${dy}px;animation-delay:${Math.random()*0.3}s;font-size:${14+Math.random()*16}px;`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }
}

// -------- TOAST BİLDİRİM --------
let toastTimeout = null;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => t.classList.remove("show"), 2800);
}

// -------- ARKA PLAN PARTİKÜLLER --------
function initParticles() {
  const container = document.getElementById("bgParticles");
  const colors = ["#f5c518","#56b756","#4a90d9","#9b59b6","#e74c3c","#ffffff"];
  for (let i = 0; i < 35; i++) {
    const p = document.createElement("div");
    p.className = "bg-particle";
    p.style.cssText = `
      left: ${Math.random()*100}%;
      top: ${100 + Math.random()*20}%;
      background: ${colors[Math.floor(Math.random()*colors.length)]};
      width: ${Math.random() > 0.5 ? 4 : 6}px;
      height: ${Math.random() > 0.5 ? 4 : 6}px;
      animation-duration: ${6 + Math.random()*10}s;
      animation-delay: ${Math.random()*8}s;
    `;
    container.appendChild(p);
  }
}

// -------- BAŞLATMA --------
window.addEventListener("DOMContentLoaded", () => {
  load();
  initParticles();
  updateCoinDisplay();
  updateCollectionGrid();
  startCooldownTimer();

  // İlk kez oynuyor mu? (hoş geldin mesajı)
  const allEmpty = Object.keys(gameState.collection).length === 0;
  if (allEmpty) {
    setTimeout(() => showToast("Hoş geldin! İlk paketini açmaya hazır mısın? 🎁"), 1000);
  }
});

// Pencere kapatılmadan kaydet
window.addEventListener("beforeunload", save);
