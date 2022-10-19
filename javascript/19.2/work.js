const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];
const body = document.querySelector("body");
const div = document.createElement("div");
const ol = document.createElement("ol");

body.appendChild(div);
div.appendChild(ol);

ol.style.listStyleType = "none";

users.forEach((element) => {
  const lies = document.createElement("li");

  lies.setAttribute("data-id", element.id);
  lies.textContent = element.firstName + " " + element.lastName;
  ol.appendChild(lies);
});
