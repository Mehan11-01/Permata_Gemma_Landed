(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      var spinnerEl = $("#spinner");
      if (spinnerEl.length > 0) {
        spinnerEl.removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Sticky Navbar
  $(window).on("scroll", function () {
    var navbar = $(".navbar");
    if ($(this).scrollTop() > 45) {
      navbar.addClass("sticky-top shadow-sm");
    } else {
      navbar.removeClass("sticky-top shadow-sm");
    }
  });

  // Back to top button
  $(window).on("scroll", function () {
    var backToTop = $(".back-to-top");
    if ($(this).scrollTop() > 300) {
      backToTop.fadeIn("slow");
    } else {
      backToTop.fadeOut("slow");
    }
  });

  $(".back-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);

// packages carousel
$(".packages-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  center: false,
  dots: false,
  loop: true,
  margin: 25,
  nav: true,
  navText: [
    '<i class="bi bi-arrow-left"></i>',
    '<i class="bi bi-arrow-right"></i>',
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

// Contact form handling
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwT89YN_p4RaKWWdVIrOosNDSWpvk3cCUwrEEYlIlurg5q_XEFi4luF9ZsSn3Bw2I8k6w/exec";
const form = document.getElementById("contact-form");
const statusDiv = document.getElementById("status");
const submitBtn = document.getElementById("submit-btn");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)

    submitBtn.disabled = true; // Disable button immediately
    submitBtn.textContent = "Sending...";

    const formData = new FormData(form);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        if (response.ok) {
          statusDiv.textContent = "Thank you! Your response has been recorded.";
          submitBtn.textContent = "Sent!";
          form.reset();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .catch((error) => {
        statusDiv.style.color = "red";
        statusDiv.textContent = "Oops! Something went wrong. Please try again.";
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Now";
        console.error("Error!", error.message);
      });
  });
}

// Image overlay
const img = document.getElementById("expandableImage");
const overlay = document.getElementById("imgOverlay");
const expandedImg = document.getElementById("expandedImg");
const closeBtn = document.getElementById("closeOverlay");

if (img && overlay && expandedImg && closeBtn) {
  img.addEventListener("click", () => {
    expandedImg.src = img.src;
    overlay.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  // Optional: close overlay if user clicks outside the image
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });
}
