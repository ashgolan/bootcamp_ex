const textArea = document.querySelector(".myTextArea");
const submit = document.querySelector(".submit");
const form = document.querySelector("form");
const alert = document.querySelector(".alert");

const checkLength = function (event) {
  event.preventDefault();
  if (textArea.value.length < 100) {
    alert.textContent = "You must enter at least 100 characters";
    alert.classList.add("alertStyle");
    form.appendChild(alert);
    form.insertBefore(alert, submit);
  } else {
    alert.textContent = "";
  }
};

submit.addEventListener("click", checkLength);
textArea.addEventListener("keyup", checkLength);
