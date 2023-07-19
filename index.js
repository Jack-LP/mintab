const settingsBtn = document.getElementById("settingsBtn");
const clockDisplay = document.getElementById("clockDisplay");
const searchDisplay = document.getElementById("searchDisplay");
const drawer = document.getElementById("drawer");
const drawerOverlay = document.getElementById("drawerOverlay");

const handleDrawer = (command) => {
  if (command === "open") {
    drawerOverlay.classList.remove("hidden");
    drawer.classList.remove("translate-x-full");
  } else if (command === "close") {
    drawerOverlay.classList.add("hidden");
    drawer.classList.add("translate-x-full");
  }
};

settingsBtn.addEventListener("click", () => {
  handleDrawer("open");
});

drawerOverlay.addEventListener("click", () => {
  handleDrawer("close");
});
