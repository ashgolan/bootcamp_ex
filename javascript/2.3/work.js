const calcCircleArea = function (radius) {
  return 3.14 * (radius * radius);
};

let circleArea = calcCircleArea(5.1);
circleArea = calcCircleArea(5.1);
console.log(`The circle area is ${circleArea}`);
circleArea = Math.round((circleArea + Number.EPSILON) * 100) / 100;
console.log(`The circle area is ${circleArea}`);
