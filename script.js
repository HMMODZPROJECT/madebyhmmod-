// ===== CHANNEL INFO =====
const channel = {
  name: "HM MODZ VIP",
  handle: "@hmmodzvipreal",
  desc: "Website Dowloand Cheat Free server direct by hmmodz vip, update setiap minggu",
  footer: "HM MODZ VIP"
};

// ===== FILE LIST DENGAN LOGO =====
const files = [
  {
    name: "PUBGM LOADER CRACKED",
    desc: "LATEST STABLE VERSION WITH PUBGM LOADER CRACKED",
    size: "36.8 MB",
    link: "https://www.mediafire.com/file/ns10jeqpqiaj56g/HAHAHAHA+EASY+CRACKED+(1).apk/file",
    logo: "https://files.catbox.moe/9qs9kl.jpg"
  },
  {
    name: "FF INJECTOR",
    desc: "LATEST INJECTOR APK PANEL VIP",
    size: "23.08 MB",
    link: "https://www.mediafire.com/file/voyxrwviutiw5bk/PANEL_ANDROID.zip/file",
    logo: "https://files.catbox.moe/9qs9kl.jpg"
  },
  {
    name: "INJECTOR FF NEW OB50",
    desc: "Dark Aura Injektor cracked",
    size: "19.7 MB",
    link: "https://www.mediafire.com/file/kuh441hy3gf0gsr/DARK+AURA#cracked.apk/file",
    logo: "https://files.catbox.moe/9qs9kl.jpg"
  },
  {
    name: "Bloodstrike Loader",
    desc: "Loader, cracked key",
    size: "29 MB",
    link: "https://www.mediafire.com/file/4qaeb0onh0q998a/ZR+MODZ+OFFICIAL#cracked.apk/file",
    logo: "https://files.catbox.moe/9qs9kl.jpg"
  },
  {
    name: "Harley Cheat Cracked",
    desc: "Cracked Login Key, Paste You Abstark key",
    size: "14.28 MB",
    link: "https://www.mediafire.com/file/ob0fvf1r2hsgvcp/Harleycheat+Loader_4.0#Crackedbyhmmodz.apk/file",
    logo: "https://files.catbox.moe/9qs9kl.jpg"
  },
  {
    name: "Anime Play Modded Premium",
    desc: "Premium Unlocked",
    size: "17.1 MB",
    link: "https://www.mediafire.com/file/lgpf4fexwmyzvdk/AnimePlay_1.1.7.apk/file",
    logo: "https://files.catbox.moe/9qs9kl.jpg"
  },
  {
    name: "Arena Breakout Mod",
    desc: "Mod Menu",
    size: "1.21 MB",
    link: "https://mega.nz/file/RU8DAJwR#bAI8lz3lPNeNQkZa4HcMmN0Wxaj-EkqxvWuOlOw2094",
    logo: "https://files.catbox.moe/9qs9kl.jpg"
  },
  {
    name: "FF Headtrick vip",
    desc: "Headtrick vip",
    size: "14.2 MB",
    link: "https://www.mediafire.com/file/apd5a29nwkiuja4/app_headtrik_albobx%25C2%25A1t%2523CrackedByhmmodz.apk/file",
    logo: "https://files.catbox.moe/9qs9kl.jpg"
  },
  {
    name: "PUBGM LOADER CRACKED",
    desc: "random key, Esp Line, Aimbot",
    size: "11.2 MB",
    link: "https://www.mediafire.com/file/okbkt08xv26zi16/XTHE+KING+LOADER_1.0+#Crack.apk/file",
    logo: "https://files.catbox.moe/9qs9kl.jpg"
  },
  {
    name: "IMMORTAL OFFICIAL CRACKED",
    desc: "random key, Esp Line, Aimbot",
    size: "11.2 MB",
    link: "https://www.mediafire.com/file/8dntuh1ok6zzl4c/AnKus_Panel%2523Cracked_Key.apk/file?dkey=7gcutj0sj72&r=628",
    logo: "https://files.catbox.moe/9qs9kl.jpg"
  },
  {
    name: "Panel Non Root Cracked",
    desc: "random key, Esp Line, Aimbot",
    size: "5,6 MB",
    link: "https://sfl.gl/VEA6rIv",
    logo: "https://files.catbox.moe/9qs9kl.jpg"
  },
    {
    name: "Mlbb Cheat CRACKED",
    desc: "no key, Esp Line, Aimbot",
    size: "149.2 MB",
    link: "https://www.mediafire.com/file/00orkxwxzn08sfh/Cracked_Key_mlbb.apk/file",
    logo: "https://files.catbox.moe/9qs9kl.jpg"
      },
   {
    name: "Injector Ob51 Cracked",
    desc: "Random Key, Aimbot, Hologram vip",
    size: "11.7 MB",
    link: "https://t.me/shivam_h4cks_store/185?single",
    logo: "https://files.catbox.moe/9qs9kl.jpg"
  },
];

// ===== SET CHANNEL INFO =====
document.getElementById("channelName").innerText = channel.name;
document.getElementById("channelDesc").innerText = channel.desc;
document.getElementById("footerChannel").innerText = channel.footer;

// ===== FUNGSI DOWNLOAD BROWSER =====
function openInBrowser(url) {
  window.location.href = "openbrowser://" + url;
}

// ===== RENDER FILE CARDS =====
const fileContainer = document.getElementById("fileContainer");

function renderFiles(list) {
  fileContainer.innerHTML = "";
  list.forEach(f => {
    const card = document.createElement("div");
    card.className = "file-card";
    card.innerHTML = `
      <img src="${f.logo}" alt="logo ${f.name}">
      <h3>${f.name}</h3>
      <p>${f.desc}</p>
      <p><strong>SIZE:</strong> ${f.size}</p>
      <button class="btn" onclick="openInBrowser('${f.link}')">⬇️ DOWNLOAD</button>
    `;
    fileContainer.appendChild(card);
  });
}

renderFiles(files);

// ===== SEARCH FUNCTION =====
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  const filtered = files.filter(f =>
    f.name.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q)
  );
  renderFiles(filtered);
});

// ===== HAMBURGER MENU IOS STYLE =====
const menuIcon = document.getElementById("menuIcon");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("closeBtn");

menuIcon.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

// Tutup menu jika klik di luar
document.addEventListener("click", (e) => {
  if (!sideMenu.contains(e.target) && !menuIcon.contains(e.target)) {
    sideMenu.classList.remove("active");
  }
});
