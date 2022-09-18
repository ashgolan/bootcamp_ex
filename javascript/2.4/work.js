const tellDate = function () {
  const day = new Date().toLocaleDateString("en-us", { weekday: "long" });
  const month = new Date().toLocaleDateString("en-us", { month: "long" });
  const numOfDay = new Date().toLocaleDateString("en-us", { day: "numeric" });
  const year = new Date().getFullYear("en-us", { year: "long" });
  console.log(`Today is ${day} the ${numOfDay} of ${month} ${year}`);
};

tellDate();
