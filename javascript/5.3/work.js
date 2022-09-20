const passValid = function (password) {
  if (password.length > 7) {
    console.log("Strong");
  } else {
    console.log("Weak");
  }
};
const passValid2 = function (password) {
  password.length > 7 ? console.log("Strong") : console.log("Weak");
};
const passValid3 = function (password) {
  console.log(password.length > 7 && "Strong");
};
const passValid4 = function (password) {
  const capitalLetter = /[A-Z]/g;
  password.length < 7
    ? console.log("Weak")
    : password.length > 7 && password.match(capitalLetter)
    ? console.log("Very Strong")
    : console.log("Strong");
};

passValid4("053469522AL");
