const clock = document.querySelector(".clock");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

// ------ 1 ------------

// setInterval(() => {
//   const now = new Date();
//   clock.textContent = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
// }, 1000);

// ------ 2 ------------

// let min = 0;
// let sec = 0;
// let millsec = 0;
// let isPaused = false;
// const myTimer = function () {
//   setInterval(() => {
//     if (!isPaused) {
//       if (millsec < 99) {
//         millsec++;
//       } else {
//         millsec = 0;
//         sec++;
//       }
//       if (sec > 60) {
//         sec = 0;
//         min++;
//       }

//       if (min > 60) {
//         min = 0;
//       }
//       clock.textContent = `${min < 10 ? "0" + min : min}:${
//         sec < 10 ? "0" + sec : sec
//       }:${millsec < 10 ? "0" + millsec : millsec}`;
//     }
//   }, 10);
// };

// function continueTiming() {
//   isPaused = false;
// }
// function stopTiming() {
//   isPaused = true;
// }
// start.addEventListener("click", function () {
//   if (!isPaused) myTimer();
//   else isPaused = !isPaused;
// });
// stop.addEventListener("click", stopTiming);
