// Helper: load HTML into a container
function loadHTML(containerId, file) {
  fetch(`components/${file}`)
    .then(res => res.text())
    .then(data => {
      document.getElementById(containerId).innerHTML = data;
    })
    .catch(err => console.error("Error loading", file, err));
}

// Load common layout
loadHTML("header", "header.html");
loadHTML("footer", "footer.html");

// Load Home as default
loadHTML("banner", "home-banner.html");
loadHTML("content", "home.html");

// Navigation handling (from header links)
document.addEventListener("click", function(e) {
  if (e.target.matches("[data-page]")) {
    e.preventDefault();
    const page = e.target.getAttribute("data-page");

    if (page === "home") {
      loadHTML("banner", "home-banner.html");
      loadHTML("content", "home.html");
    } else if (page === "about") {
      loadHTML("banner", "banner.html");
      loadHTML("content", "about.html");
    } else if (page === "services") {
      loadHTML("banner", "banner.html");
      loadHTML("content", "services.html");
    } else if (page === "support") {
      loadHTML("banner", "banner.html");
      loadHTML("content", "support.html");
    }
  }
});


