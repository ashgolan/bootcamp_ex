const myArticles = [
  (js = {
    name: "JAVASCRIPT",
    date: "20/09/2022",
  }),
  (css = {
    name: "CSS",
    date: "10/09/2022",
  }),
  {
    name: "HTML",
    date: "5/09/2022",
  },
];

const newMap = new Map();

for (let i = 0; i < myArticles.length; i++) {
  newMap.set(myArticles[i], i + 100);
}
for (const [key, value] of newMap) {
  console.log(key, value);
}
