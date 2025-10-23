// Channel Info
const channel = {
  name: "HM MODZ VIP",
  handle: "@hmmodzvipreal",
  desc: "Website Dowloand Cheat Free server direct by hmmodz vip, update setiap minggu",
  footer: "HM MODZ VIP"
};

// File List
const files = [
   {
    name: "PUBGM LOADER CRACKED",
    desc: "LATEST STABLE VERSION WITH PUBGM LOADER CRACKED",
    size: "36.8 MB",
    link: "https://www.mediafire.com/file/ns10jeqpqiaj56g/HAHAHAHA+EASY+CRACKED+(1).apk/file"
  },
  {
    name: "FF INJECTOR",
    desc: "LATEST INJECTOR APK PANEL VIP",
    size: "23.08 MB",
    link: "https://www.mediafire.com/file/voyxrwviutiw5bk/PANEL_ANDROID.zip/file"
  },
  {
    name: "INJECTOR FF NEW OB50",
    desc: "Dark Aura Injektor cracked",
    size: "19.7 MB",
    link: "https://www.mediafire.com/file/kuh441hy3gf0gsr/DARK+AURA#cracked.apk/file"
  },
  {
    name: "Bloodstrike Loader",
    desc: "Loader, cracked key",
    size: "29 MB",
    link: "https://www.mediafire.com/file/4qaeb0onh0q998a/ZR+MODZ+OFFICIAL#cracked.apk/file"
  },
  {
    name: "Harley Cheat Cracked",
    desc: "Cracked Login Key, Paste You Abstark key",
    size: "14.28 MB",
    link: "https://www.mediafire.com/file/ob0fvf1r2hsgvcp/Harleycheat+Loader_4.0#Crackedbyhmmodz.apk/file"
  },
  {
    name: "Anime Play Modded Premium",
    desc: "Premium Unlocked",
    size: "17.1 MB",
    link: "https://www.mediafire.com/file/lgpf4fexwmyzvdk/AnimePlay_1.1.7.apk/file"
  },
  {
    name: "Arena Breakout Mod",
    desc: "Mod Menu",
    size: "1.21 MB",
    link: "https://mega.nz/file/RU8DAJwR#bAI8lz3lPNeNQkZa4HcMmN0Wxaj-EkqxvWuOlOw2094"
  },
  {
    name: "FF Headtrick vip",
    desc: "Headtrick vip,Random Key acces",
    size: "14.2 MB",
    link: "https://www.mediafire.com/file/h3vq1fj1dh8eozs/app+headtrik+albobx¡t#CrackedByhmmodz.apk/file"
  },
  {
    name: "PUBGM IMGUI",
    desc: "Imgui safe",
    size: "67.8 MB",
    link: "https://www.mediafire.com/file/apd5a29nwkiuja4/app_headtrik_albobx%25C2%25A1t%2523CrackedByhmmodz.apk/file"
  },
    {
    name: "Ankus Panel CRACKED",
    desc: "Cracked Key, Random Key, Use In root app",
    size: "7.8 Mb",
    link: "https://www.mediafire.com/file/8dntuh1ok6zzl4c/AnKus_Panel%2523Cracked_Key.apk/file"
    }
];

// Set Channel Info
document.getElementById("channelName").innerText = channel.name;
document.getElementById("channelDesc").innerText = channel.desc;
document.getElementById("footerChannel").innerText = channel.footer;

// ✅ Fungsi agar link download dibuka di Browser, bukan WebView
function openInBrowser(url) {
  // Format khusus supaya terdeteksi Sketchware/Android WebView dan dialihkan ke browser
  window.location.href = "openbrowser://" + url;
}

// Render File Cards
const fileContainer = document.getElementById("fileContainer");

function renderFiles(list) {
  fileContainer.innerHTML = "";
  list.forEach(f => {
    const card = document.createElement("div");
    card.className = "file-card";
    card.innerHTML = `
      <h3>${f.name}</h3>
      <p>${f.desc}</p>
      <p><strong>SIZE:</strong> ${f.size}</p>
      <button class="btn" onclick="openInBrowser('${f.link}')">⬇️ DOWNLOAD</button>
    `;
    fileContainer.appendChild(card);
  });
}

renderFiles(files);

// Search Function
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  const filtered = files.filter(f =>
    f.name.toLowerCase().includes(q) ||
    f.desc.toLowerCase().includes(q)
  );
  renderFiles(filtered);
});

// ==== HM MODZ MENU INTERAKSI ====

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const sidePanel = document.getElementById("sidePanel");

  // Klik ikon => buka/tutup panel
  menuBtn.addEventListener("click", () => {
    sidePanel.classList.toggle("show");
  });

  // Klik di luar panel => tutup
  document.addEventListener("click", (e) => {
    if (!sidePanel.contains(e.target) && !menuBtn.contains(e.target)) {
      sidePanel.classList.remove("show");
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const sidePanel = document.getElementById("sidePanel");

  if (menuBtn && sidePanel) {
    menuBtn.addEventListener("click", () => {
      sidePanel.classList.toggle("open");
    });
  }

  // Tombol Chat Owner
  const chatOwner = document.getElementById("chatOwner");
  if (chatOwner) {
    chatOwner.addEventListener("click", () => {
      window.open("https://t.me/hmmodzvipreal", "_blank");
    });
  }

  // Tombol Web Lainnya
  const webLainnya = document.getElementById("webLainnya");
  if (webLainnya) {
    webLainnya.addEventListener("click", () => {
      window.open("https://myprofilehmmodz.netlify.app", "_blank");
    });
  }

  // Tombol Back to Menu
  const backToMenu = document.getElementById("backToMenu");
  if (backToMenu) {
    backToMenu.addEventListener("click", () => {
      window.open("https://madebyhmmodz.netlify.app/", "_self");
    });
  }
});
