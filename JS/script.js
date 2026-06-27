//FADE IN/OUT
window.addEventListener("pageshow", () => {
  document.body.style.opacity = 1;
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
      if (link.hostname === window.location.hostname) {
        e.preventDefault();
        document.body.style.opacity = 0;
        setTimeout(() => {
          window.location = link.href;
        }, 500);
      }
    });
  });
});

//LOADING SCREEN
window.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loading-screen");

    const ref = document.referrer;
    const sameDomain = ref && ref.includes(window.location.hostname);

    if (sameDomain) {
        loader.style.display = "none";
        return;
    }

    setTimeout(() => {
        loader.classList.add("fade-out");
        setTimeout(() => loader.style.display = "none", 800);
    }, 1500);
});
