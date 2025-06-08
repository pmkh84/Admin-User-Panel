function loadUsers() {
  const users = JSON.parse(localStorage.getItem("userList")) || [];
  const table = document.getElementById("userTable");
  table.innerHTML = "";
  
  if (users.length === 0) {
    table.innerHTML = "<tr><td colspan='5'>هیچ کاربری ثبت نشده است</td></tr>";
    return;
  }

  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.role}</td>
      <td><button class="delete-btn" onclick="deleteUser(${index})">❌ حذف</button></td>
      <td>${user.purchases ?? Math.floor(Math.random() * 10 + 1)} بار</td>
      <td>${user.stayTime ?? Math.floor(Math.random() * 15 + 5)} دقیقه</td>
    `;
    table.appendChild(row);
  });
}
function deleteUser(index) {
  let users = JSON.parse(localStorage.getItem("userList")) || [];
  users.splice(index, 1);
  localStorage.setItem("userList", JSON.stringify(users));
  loadUsers();
}
window.onload = loadUsers;

function showPopup() {
  document.getElementById("popup").classList.remove("hidden");
}
function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
function addUser() {
  const nameInput = document.getElementById("newName");
  const roleSelect = document.getElementById("newRole");
  
  if (!nameInput.value) return alert("نام را وارد کنید");

  const newUser = {
    name: nameInput.value,
    role: roleSelect.value,
    purchases: Math.floor(Math.random() * 10 + 1),
    stayTime: Math.floor(Math.random() * 15 + 5)
  };
  
  let users = JSON.parse(localStorage.getItem("userList")) || [];
  users.push(newUser);
  localStorage.setItem("userList", JSON.stringify(users));
  nameInput.value = "";
  roleSelect.value = "مدیر"; 
  closePopup();
  loadUsers();
}
function searchUsers() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const users = JSON.parse(localStorage.getItem("userList")) || [];
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(keyword)
  );
  
  const table = document.getElementById("userTable");
  table.innerHTML = "";
  
  filteredUsers.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.role}</td>
      <td><button class="delete-btn" onclick="deleteUser(${index})">❌ حذف</button></td>
      <td>${user.purchases} بار</td>
      <td>${user.stayTime} دقیقه</td>
    `;
    table.appendChild(row);
  });
}
function filterUsers(role) {
  const users = JSON.parse(localStorage.getItem("userList")) || [];
  const filtered = role === 'all' ? users : users.filter(user => user.role === role);
  renderFilteredUsers(filtered);
}

function renderFilteredUsers(users) {
  const table = document.getElementById("userTable");
  table.innerHTML = "";
  
  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.role}</td>
      <td><button class="delete-btn" onclick="deleteUser(${index})">❌ حذف</button></td>
      <td>${user.purchases} بار</td>
      <td>${user.stayTime} دقیقه</td>
    `;
    table.appendChild(row);
  });
}
