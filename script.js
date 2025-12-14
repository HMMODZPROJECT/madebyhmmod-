const channel = {
  name: "𝗛𝗠 𝗠𝗢𝗗𝗭 𝗩𝗜𝗣",
  handle: "@hmmodzvipreal",desc: "USER IDIOT TOLOL KONTOL LU SEMUA ANJG PAKE DOANG TOLOL.",
  footer: "HM MODZ TEAM"
};

document.getElementById("channelName").innerText = channel.name;
document.getElementById("channelDesc").innerText = channel.desc;
document.getElementById("footerChannel").innerText = channel.footer;

const blur = document.getElementById("blurLayer");
const fileContainer = document.getElementById("fileContainer");

function openInBrowser(url) {
  blur.classList.add("active");
  setTimeout(() => {
    window.location.href = "openbrowser://" + url;
  }, 420);
}

const files = [
  {
    name: "Kontol bapa lu",
    desc: "bapa lu di ewe monyet anjg",
    size: "36.8 MB",
    link: "https://www.youareanidiot.cc/lol.html",
    logo: "https://files.catbox.moe/9qs9kl.jpg"
  },
  
];

function renderFiles(list) {
  fileContainer.innerHTML = "";
  list.forEach(f => {
    const card = document.createElement("div");
    card.className = "file-card";
    card.style.animationDelay = (Math.random() * 150) + "ms";
    card.innerHTML = `
      <img src="${f.logo}" alt="logo ${f.name}" />
      <h3>${f.name}</h3>
      <p>${f.desc}</p>
      <p><strong>SIZE:</strong> ${f.size}</p>
      <button class="btn">⬇️ DOWNLOAD</button>
    `;

    const btn = card.querySelector(".btn");

    btn.addEventListener("touchstart", (ev) => { ev.stopPropagation(); card.classList.add("tap"); });
    btn.addEventListener("touchend", (ev) => { ev.stopPropagation(); card.classList.remove("tap"); });
    btn.addEventListener("mousedown", (ev) => { ev.stopPropagation(); card.classList.add("tap"); });
    btn.addEventListener("mouseup", (ev) => { ev.stopPropagation(); card.classList.remove("tap"); });

    btn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      openInBrowser(f.link);
    });

    card.addEventListener("click", () => {
      
    });

    fileContainer.appendChild(card);
  });
}

renderFiles(files);

const menuIcon = document.getElementById("menuIcon");
const sideMenu = document.getElementById("sideMenu");
const sideClose = document.getElementById("sideClose");

let menuLock = false; 

function openMenu(){
  if(menuLock) return;
  sideMenu.classList.add("active");
  sideMenu.setAttribute("aria-hidden","false");
  blur.classList.add("active");
  document.body.style.overflow = "hidden";
  menuLock = true;
  setTimeout(()=> menuLock = false, 380); 
}

function closeMenu(){
  sideMenu.classList.remove("active");
  sideMenu.setAttribute("aria-hidden","true");
  blur.classList.remove("active");
  document.body.style.overflow = "auto";
}


menuIcon.addEventListener("pointerdown", (e) => {
  e.stopPropagation();
  openMenu();
});


menuIcon.addEventListener("keydown", (e) => {
  if(e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openMenu();
  }
});


if(sideClose){
  sideClose.addEventListener("pointerdown", (e) => { e.stopPropagation(); closeMenu(); });
}
blur.addEventListener("pointerdown", (e) => { e.stopPropagation(); closeMenu(); });


sideMenu.addEventListener("click", (e) => e.stopPropagation());
sideMenu.addEventListener("pointerdown", (e) => e.stopPropagation());


document.addEventListener("click", (e) => {
  if(menuLock) return;
  if (!sideMenu.contains(e.target) && !menuIcon.contains(e.target)) {
    closeMenu();
  }
});


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});


window.addEventListener("touchmove", (e) => {
  if(sideMenu.classList.contains("active")) e.preventDefault();
}, { passive: false });
