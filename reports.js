const fakeReports = {
  monthly: {
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
    data: [125, 180, 150, 210, 240, 190]
  },
  yearly: {
    labels: ["1400", "1401", "1402"],
    data: [1250, 1850, 2540]
  },
  users: {
    labels: ["مدیران", "کاربران عادی", "مهمان"],
    data: [8, 34, 12]
  }
};

let currentChart = null;

function generateReport() {
  const reportType = document.getElementById("reportType").value;
  const ctx = document.getElementById("reportChart").getContext("2d");
  
  if (currentChart) {
    currentChart.destroy();
  }
  
  const reportData = fakeReports[reportType];
  
  currentChart = new Chart(ctx, {
    type: reportType === "users" ? "doughnut" : "bar",
    data: {
      labels: reportData.labels,
      datasets: [{
        label: reportType === "monthly" ? "فروش ماهانه (هزار تومان)" : 
               reportType === "yearly" ? "فروش سالانه (میلیون تومان)" : "تعداد کاربران",
        data: reportData.data,
        backgroundColor: reportType === "users" ? 
          ["#3498db", "#2ecc71", "#f39c12"] : 
          "#1a78d7",
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: reportType === "monthly" ? "گزارش فروش ماهانه" :
                reportType === "yearly" ? "گزارش فروش سالانه" :
                "گزارش کاربران",
          font: {
            size: 16,
            family: "Vazir"
          }
        },
      }
    }
  });
}

function exportToPDF() {
  alert("گزارش با فرمت PDF آماده شد (نمایشی)");
}

function exportToExcel() {
  alert("گزارش با فرمت Excel آماده شد (نمایشی)");
}

window.onload = generateReport;
