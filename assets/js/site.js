// Scroll-reveal motion. No dependencies.
(function () {
  var targets = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || !targets.length) {
    targets.forEach(function (t) { t.classList.add("is-visible"); });
    return;
  }
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach(function (t) { io.observe(t); });
})();
