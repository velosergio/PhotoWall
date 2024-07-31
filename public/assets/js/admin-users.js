document.addEventListener('DOMContentLoaded', function() {
  fetch('/api/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(users => {
      const userTableBody = document.getElementById('userTableBody');
      if (!userTableBody) {
        console.error("Element 'userTableBody' not found");
        return;
      }
      userTableBody.innerHTML = ''; // Clear existing content
      users.forEach(user => {
        const row = document.createElement('tr');
        row.className = 'align-middle';
        row.innerHTML = `
          <td>
            <div class="text-nowrap">${user.username}</div>
          </td>
          <td>
            <div class="text-nowrap">${user.email}</div>
          </td>
          <td>
            <div class="dropdown">
              <button class="btn btn-transparent p-0" type="button" data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <svg class="icon">
                  <use xlink:href="/node_modules/@coreui/icons/sprites/free.svg#cil-options"></use>
                </svg>
              </button>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#">Info</a>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item text-danger" href="#">Delete</a>
              </div>
            </div>
          </td>`;
        userTableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error al cargar los usuarios:', error);
    });
});
