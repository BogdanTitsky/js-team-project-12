(function () {
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-link, .nav-link--mobile');
  
    menuItems.forEach((item) => {
      item.classList.remove('link-current'); 
  
      if (item.href === currentLocation) {
        item.classList.add('link-current'); 
      }
    });
  })();
  