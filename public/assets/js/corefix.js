document.addEventListener('DOMContentLoaded', function () {
    var sidebarElement = document.querySelector('#sidebar');
    var sidebar = coreui.Sidebar.getInstance(sidebarElement) || new coreui.Sidebar(sidebarElement);

    document.querySelectorAll('.sidebar-toggler, .btn-close').forEach(function (button) {
      button.addEventListener('click', function () {
        sidebar.toggle();
      });
    });
  });