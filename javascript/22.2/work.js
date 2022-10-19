const checkBox = document.querySelector(".checkbox");
const image = document.querySelector(".image");

checkBox.addEventListener("click", function (e) {
  console.log(image);
  !e.target.checked
    ? (image.style.display = "none")
    : (image.style.display = "block");
});
