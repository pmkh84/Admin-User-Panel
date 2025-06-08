import { users, orders, stats} from "./data.js";
function renderCards() {
  document.getElementById("userCountCard").innerHTML = `
    <h3>تعداد کاربران</h3>
    <p>${stats.userCount} کاربر</p>
  `;
  document.getElementById("todaySalesCard").innerHTML = `
    <h3>فروش امروز</h3>
    <p>${stats.todaySales}</p>
  `;
  document.getElementById("growthCard").innerHTML = `
    <h3>درصد رشد</h3>
    <p style="color: green;">${stats.growth}</p>
  `;
  document.getElementById("yearlyProfitCard").innerHTML = `
    <h3>سود سالانه</h3>
    <p>${stats.yearlyProfit}</p>
  `;
  document.getElementById("userGrowthCard").innerHTML = `
    <h3>رشد کاربران</h3>
    <p style="color: green;">${stats.userGrowth}</p>
  `;
}
function renderNotifications() {
  const notiBox = document.getElementById("notifications");
  notiBox.innerHTML = `<h3>نوار اعلانات</h3>🔔 امروز ${users.length} کاربر ثبت شده‌اند | ${orders.length} سفارش در حال بررسی است`;
}
function renderLatestUsers() {
  const ul = document.getElementById("latestUsersList");
  ul.innerHTML = users.map(user => `<li>${user.name} - ${user.role}</li>`).join("");
}
function renderOrders() {
  const tbody = document.getElementById("ordersTable");
  tbody.innerHTML = orders.map(order => `
    <tr>
      <td>${order.id}</td>
      <td>${order.customer}</td>
      <td>${order.amount}</td>
      <td>${order.status}</td>
    </tr>
  `).join("");
}
renderCards();
renderNotifications();
renderLatestUsers();
renderOrders();
