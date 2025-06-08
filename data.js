export const users = [
  { name: "محمد رضایی", role: "مدیر" },
  { name: "فاطمه عباسی", role: "کاربر عادی" },
  { name: "سارا احمدی", role: "مدیر" },
  { name: "پارسا محمدی", role: "کاربر عادی" },
];
export const orders = [
  { id: "#1254", customer: "محمد رضایی", amount: "۲۵۰,۰۰۰ تومان", status: "تحویل داده شد" },
  { id: "#1253", customer: "پارسا محمدی", amount: "۸۹۰,۰۰۰ تومان", status: "در حال پردازش" },
  { id: "#1252", customer: "سارا نوری", amount: "۱۲۰,۰۰۰ تومان", status: "لغو شده" },
];
export const stats = {
  userCount: users.length,
  todaySales: "۱,۲۵۰,۰۰۰ تومان",
  growth: "+۲۴٪",
  yearlyProfit: "۵۴۰ میلیون تومان",
  userGrowth: "+۱۲٪ نسبت به ماه قبل",
};
export const monthlyProfits = [85, 100, 75, 120, 150, 110];
export const monthlyLabels = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"];
export const sectionProfits = {
  labels: ["فروشگاه", "آموزش", "خدمات", "تبلیغات"],
  values: [45, 25, 20, 10],
};

export  const fakeUsers = [
    {
      name: "محمد رضایی",
      role: "مدیر",
      purchases: 7,
      stayTime: 12
    },
    {
      name: "فاطمه عباسی",
      role: "کاربر عادی",
      purchases: 3,
      stayTime: 9
    },
    {
      name: "سارا احمدی",
      role: "مدیر",
      purchases: 5,
      stayTime: 14
    },
    {
      name: "پارسا محمدی",
      role: "کاربر عادی",
      purchases: 6,
      stayTime: 11
    }
  ];

localStorage.setItem("userList", JSON.stringify(fakeUsers));
