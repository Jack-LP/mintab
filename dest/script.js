"use strict";
const settingsBtn = document.getElementById("settingsBtn");
const clockDisplay = document.getElementById("clockDisplay");
const searchDisplay = document.getElementById("searchDisplay");
const drawer = document.getElementById("drawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const linkInput = document.getElementById("linkInput");
const linkAddBtn = document.getElementById("linkAddBtn");
const linksDisplay = document.getElementById("linksDisplay");
const linkSettingsDisplay = document.getElementById("linkSettingsDisplay");
let linkInputText;
let linksArray = [];
const handleDrawer = (command) => {
    if (command === "open") {
        drawerBackdrop.classList.remove("hidden");
        drawer.classList.remove("translate-x-full");
    }
    else if (command === "close") {
        drawerBackdrop.classList.add("hidden");
        drawer.classList.add("translate-x-full");
    }
};
const uniqueID = () => Math.floor(Math.random() * Date.now());
const Link = class {
    constructor(url, id) {
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
linkInput.addEventListener("change", (e) => {
    const target = e.target;
    linkInputText = target.value;
});
linkAddBtn.addEventListener("click", () => {
    linksArray.push(new Link(linkInputText, uniqueID()));
});
const checkTime = (i) => {
    const num = typeof i === "number" ? i : parseInt(i, 10);
    return num < 10 ? `0${num}` : num.toString();
};
const startClock = () => {
    const date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    hours = checkTime(hours);
    mins = checkTime(mins);
    clockDisplay.innerText = `${hours}:${mins}`;
    setTimeout(startClock, 1000);
};
startClock();
settingsBtn.click();
