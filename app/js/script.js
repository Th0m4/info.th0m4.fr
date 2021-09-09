// DARK / LIGHT THEME
let theme_box = document.getElementById("darklight");
let darklight_label = document.getElementById("theme_label");

theme_box.addEventListener("click", () => {
  console.info(theme_box.checked);

  if (theme_box.checked == true) {
    darklight_label.innerHTML = "🌚";
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    darklight_label.innerHTML = "🌝";
    document.documentElement.setAttribute("data-theme", "light");
  }
});
