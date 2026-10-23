const revealTargets = document.querySelectorAll(".reveal");

document.documentElement.classList.add("js-enabled");

if (document.visibilityState === "hidden") {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
} else if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  }, {
    threshold: 0.18,
    rootMargin: "0px 0px -40px 0px"
  });

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}