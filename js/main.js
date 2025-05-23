(function (e) {
  "use strict";
  var t = function () {
    setTimeout(function () {
      var t = e("#spinner");
      t.length > 0 && t.removeClass("show");
    }, 1);
  };
  t(),
    e(window).on("scroll", function () {
      var t = e(".navbar");
      e(this).scrollTop() > 45
        ? t.addClass("sticky-top shadow-sm")
        : t.removeClass("sticky-top shadow-sm");
    }),
    e(window).on("scroll", function () {
      var t = e(".back-to-top");
      e(this).scrollTop() > 300 ? t.fadeIn("slow") : t.fadeOut("slow");
    }),
    e(".back-to-top").on("click", function () {
      return (
        e("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo"), !1
      );
    });
})(jQuery),
  $(".packages-carousel").owlCarousel({
    autoplay: !0,
    smartSpeed: 1e3,
    center: !1,
    dots: !1,
    loop: !0,
    margin: 25,
    nav: !0,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: !0,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 2 },
      1200: { items: 3 },
    },
  });
const scriptURL =
    "https://script.google.com/macros/s/AKfycbwT89YN_p4RaKWWdVIrOosNDSWpvk3cCUwrEEYlIlurg5q_XEFi4luF9ZsSn3Bw2I8k6w/exec",
  form = document.getElementById("contact-form"),
  statusDiv = document.getElementById("status"),
  submitBtn = document.getElementById("submit-btn");
form &&
  form.addEventListener("submit", (e) => {
    e.preventDefault(),
      (submitBtn.disabled = !0),
      (submitBtn.textContent = "Sending...");
    const t = new FormData(form);
    fetch(scriptURL, { method: "POST", body: t })
      .then((e) => {
        if (!e.ok) throw new Error("Network response was not ok.");
        (statusDiv.textContent = "Thank you! Your response has been recorded."),
          (submitBtn.textContent = "Sent!"),
          form.reset();
      })
      .catch((e) => {
        (statusDiv.style.color = "red"),
          (statusDiv.textContent =
            "Oops! Something went wrong. Please try again."),
          (submitBtn.disabled = !1),
          (submitBtn.textContent = "Send Now"),
          console.error("Error!", e.message);
      });
  });
const img = document.getElementById("expandableImage"),
  overlay = document.getElementById("imgOverlay"),
  expandedImg = document.getElementById("expandedImg"),
  closeBtn = document.getElementById("closeOverlay");
img &&
  overlay &&
  expandedImg &&
  closeBtn &&
  (img.addEventListener("click", () => {
    (expandedImg.src = img.src), (overlay.style.display = "flex");
  }),
  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
  }),
  overlay.addEventListener("click", (e) => {
    e.target === overlay && (overlay.style.display = "none");
  }));
