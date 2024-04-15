function setKeyLightColor(colorKey) {
  document.body.style.setProperty(
    "--key-light-color",
    `var(--${colorKey}, ${colorKey.toLowerCase()})`
  );
}

const initialSetting = window.localStorage.getItem("bkl-setting");

if (initialSetting) {
  document.getElementById("theme-select").value = initialSetting;

  setKeyLightColor(initialSetting);
}

document.getElementById("theme-select").addEventListener("change", (e) => {
  setKeyLightColor(e.target.value);

  window.localStorage.setItem("bkl-setting", e.target.value);
});

document.getElementById("full-screen-toggle").addEventListener("click", (e) => {
  if (document.fullscreenElement) {
    e.target.innerText = "Enter Full Screen";

    document.exitFullscreen();
  } else {
    e.target.innerText = "Exit Full Screen";

    document.body.requestFullscreen();
  }
});
