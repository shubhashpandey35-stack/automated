document.addEventListener("DOMContentLoaded", function () {
  var shell = document.getElementById("shell");
  var btn = document.getElementById("collapseBtn");

  btn.addEventListener("click", function () {
    var collapsed = shell.classList.toggle("is-collapsed");
    btn.setAttribute("aria-expanded", String(!collapsed));
  });
});
