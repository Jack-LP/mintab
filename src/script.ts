const settingsBtn = document.getElementById("settingsBtn") as HTMLButtonElement;
const clockDisplay = document.getElementById(
  "clockDisplay",
) as HTMLHeadingElement;
const searchDisplay = document.getElementById(
  "searchDisplay",
) as HTMLInputElement;
const drawer = document.getElementById("drawer") as HTMLDivElement;
const drawerBackdrop = document.getElementById(
  "drawerBackdrop",
) as HTMLDivElement;
const linkInput = document.getElementById("linkInput") as HTMLInputElement;
const linkAddBtn = document.getElementById("linkAddBtn") as HTMLButtonElement;
const linksDisplay = document.getElementById("linksDisplay") as HTMLDivElement;
const linkSettingsDisplay = document.getElementById(
  "linkSettingsDisplay",
) as HTMLDivElement;

let linkInputText: string;
let linksArray: object[] = [];

const handleDrawer = (command: string) => {
  if (command === "open") {
    drawerBackdrop.classList.remove("hidden");
    drawer.classList.remove("translate-x-full");
  } else if (command === "close") {
    drawerBackdrop.classList.add("hidden");
    drawer.classList.add("translate-x-full");
  }
};

const uniqueID = () => Math.floor(Math.random() * Date.now());

const Link = class {
  url: string;
  id: number;

  constructor(url: string, id: number) {
    this.url = url;
    this.id = id;
  }
};

settingsBtn.addEventListener("click", () => {
  handleDrawer("open");
});

drawerBackdrop.addEventListener("click", () => {
  handleDrawer("close");
});

linkInput.addEventListener("change", (e: Event) => {
  const target = e.target as HTMLInputElement;
  linkInputText = target.value;
});

linkAddBtn.addEventListener("click", () => {
  linksArray.push(new Link(linkInputText, uniqueID()));
});

const checkTime = (i: number | string) => {
  const num = typeof i === "number" ? i : parseInt(i, 10);
  return num < 10 ? `0${num}` : num.toString();
};

const startClock = () => {
  const date: Date = new Date();
  let hours: number | string = date.getHours();
  let mins: number | string = date.getMinutes();

  hours = checkTime(hours);
  mins = checkTime(mins);

  clockDisplay.innerText = `${hours}:${mins}`;
  setTimeout(startClock, 1000);
};

startClock();
settingsBtn.click();
