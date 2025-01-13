document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("mouseenter", function (e) {
      let rect = btn.getBoundingClientRect();
      let relX = e.clientX - rect.left;
      let relY = e.clientY - rect.top;

      let span = btn.querySelector("span");
      if (span) {
        span.style.top = `${relY}px`;
        span.style.left = `${relX}px`;
      }
    });

    btn.addEventListener("mouseout", function (e) {
      let rect = btn.getBoundingClientRect();
      let relX = e.clientX - rect.left;
      let relY = e.clientY - rect.top;

      let span = btn.querySelector("span");
      if (span) {
        span.style.top = `${relY}px`;
        span.style.left = `${relX}px`;
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {});
