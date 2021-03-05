const drops = document.querySelectorAll(".dropone");

drops.forEach((ele) => {
  const menu = document.querySelector(".menu");
  const select = document.querySelector(".select");
  const lists = document.querySelectorAll(".menu li");

  const selected = document.querySelector(".selected");
  const iconn = document.querySelector(".iconn");
  const body = document.querySelector(".cover");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    iconn.classList.toggle("iconn-rotate");
    menu.classList.toggle("menu-open");
    body.classList.toggle("overlayy");
  });
  body.addEventListener("click", () => {
    select.classList.remove("select-clicked");
    iconn.classList.remove("iconn-rotate");
    menu.classList.remove("menu-open");
    body.classList.remove("overlayy");
  });

  lists.forEach((zerga) => {
    zerga.addEventListener("click", clicked);
    function clicked() {
      selected.innerText = zerga.innerText;
      select.classList.remove("select-clicked");
      iconn.classList.remove("iconn-rotate");
      menu.classList.remove("menu-open");
      lists.forEach((zerga) => {
        zerga.classList.remove("active");
      });
      zerga.classList.add("active");
    }
  });
});

var dropdown = document.querySelector(".fdrop");
var slist = document.querySelector(".slist");
var fdrop = document.querySelector(".dropup");
var dropp = document.querySelector(".dropdown");
dropdown.addEventListener("click", drop);
function drop() {
  slist.classList.toggle("menu-open");
  fdrop.classList.toggle("dropupp");
  dropp.classList.toggle("dropdownn");
}

// var swiper = new Swiper(".slide-content", {
//   slidesPerView: 3,
//   spaceBetween: 25,

//   loop: true,
//   centerSlide: "true",
//   fade: "true",
//   mousewheel: {
//     forceToAxis: true,
//   },
//   // loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     // dynamicBullets:
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     600: {
//       slidesPerView: 2,
//     },
//     950: {
//       slidesPerView: 3,
//     },
//   },
// });

// Initialize Swiper
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false, // Allows user interaction
  },
  mousewheel: {
    forceToAxis: true, // Allows horizontal scrolling with the mousewheel
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// Use IntersectionObserver to detect visibility
var observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        swiper.autoplay.start(); // Start auto-sliding
      } else {
        swiper.autoplay.stop(); // Stop auto-sliding
      }
    });
  },
  {
    threshold: 0.5, // Adjust this to determine when to trigger auto-scrolling
  }
);

// Observe the Swiper container
observer.observe(document.querySelector(".slide-content"));
