// document.addEventListener("DOMContentLoaded", function () {
//   var sidenav = document.querySelectorAll(".sidenav");
//   var instances_sidenav = M.Sidenav.init(sidenav);
// });
// // Открытие и закрытие мобильного меню
// const menuIcon = document.querySelector(".menu-icon");
// const closeIcon = document.querySelector(".close-icon");
// const mobileMenu = document.getElementById("mobileMenu");

// if (menuIcon && closeIcon && mobileMenu) {
//   // Открыть меню
//   menuIcon.addEventListener("click", () => {
//     mobileMenu.classList.add("active");
//   });

//   // Закрыть меню
//   closeIcon.addEventListener("click", () => {
//     mobileMenu.classList.remove("active");
//   });

//   // Закрыть меню при клике на ссылку
//   const mobileLinks = document.querySelectorAll(".mobile-nav-link");
//   mobileLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       mobileMenu.classList.remove("active");
//     });
//   });
// }

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenu = document.getElementById("mobileMenu");

// Проверяем элементы по отдельности
if (!menuIcon) console.warn("Не найден .menu-icon");
if (!closeIcon) console.warn("Не найден .close-icon");
if (!mobileMenu) console.warn("Не найден #mobileMenu");

if (menuIcon && closeIcon && mobileMenu) {
  const toggleMenu = (isActive) => {
    if (isActive) {
      mobileMenu.classList.add("active");
      menuIcon.setAttribute("aria-expanded", "true");
    } else {
      mobileMenu.classList.remove("active");
      menuIcon.setAttribute("aria-expanded", "false");
    }
  };

  // Открыть меню
  menuIcon.addEventListener("click", () => {
    toggleMenu(true);
  });

  // Закрыть меню
  closeIcon.addEventListener("click", () => {
    toggleMenu(false);
  });

  // Закрыть при клике на ссылку
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu(false);
    });
  });

  // Закрыть при клике вне меню
  document.addEventListener("click", (e) => {
    const isClickInsideMenu = mobileMenu.contains(e.target);
    const isClickOnMenuIcon =
      menuIcon.contains(e.target) || menuIcon === e.target;

    if (
      !isClickInsideMenu &&
      !isClickOnMenuIcon &&
      mobileMenu.classList.contains("active")
    ) {
      toggleMenu(false);
    }
  });
}
