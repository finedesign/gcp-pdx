document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.menu-button').forEach(button => {
      button.addEventListener('click', function() {
          const currentMenu = this.nextElementSibling; // Should correctly target the next sibling which is the `.secondary-menu`
          
          // Check if the current menu is already expanded
          const isExpanded = currentMenu.classList.contains('expanded');

          // First, close all menus
          document.querySelectorAll('.secondary-menu').forEach(menu => {
              menu.classList.remove('expanded');
              console.log('Menu collapsed');
          });

          // Then, if the current menu was not already expanded, expand it
          if (!isExpanded) {
              currentMenu.classList.add('expanded');
              console.log('Menu expanded')
          }
      });
  });
});
