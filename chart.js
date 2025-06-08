import { monthlyProfits, monthlyLabels, sectionProfits } from "./data.js";
const monthlyCtx = document.getElementById("monthlyChart").getContext("2d");
new Chart(monthlyCtx, {
  type: "bar",
  data: {
    labels: monthlyLabels,
    datasets: [{
      label: "سود (میلیون تومان)",
      data: monthlyProfits,
      backgroundColor: "#1a78d7"
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});
const sectionCtx = document.getElementById("sectionChart").getContext("2d");
new Chart(sectionCtx, {
  type: "doughnut",
  data: {
    labels: sectionProfits.labels,
    datasets: [{
      label: "درصد سود",
      data: sectionProfits.values,
      backgroundColor: ["#1abc9c", "#f39c12", "#e74c3c", "#9b59b6"]
    }]
  },
  options: {
    responsive: true
  }
});
