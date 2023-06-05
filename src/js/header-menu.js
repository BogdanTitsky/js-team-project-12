(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const pageOverlayRef = document.querySelector(".page-overlay");

  if (menuBtnRef && mobileMenuRef) {
    menuBtnRef.addEventListener("click", () => {
      const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);

      mobileMenuRef.classList.toggle("is-open");
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      const isClickInsideMenu = mobileMenuRef.contains(target) || menuBtnRef.contains(target);

      if (!isClickInsideMenu) {
        menuBtnRef.classList.remove("is-open");
        menuBtnRef.setAttribute("aria-expanded", "false");
        mobileMenuRef.classList.remove("is-open");
      }
    });
  }
})();
