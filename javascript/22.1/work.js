const personName = document.querySelector(".name");
const age = document.querySelector(".age");
const email = document.querySelector(".email");
const submit = document.querySelector(".submit");
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    confirm(`
  YourName: ${personName.value}
  YourAge: ${age.value}
  YourEmail: ${email.value}
  `)
  ) {
    alert("congratulations you successfully sent this form");
    form.reset();
  }
});
