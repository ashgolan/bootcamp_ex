const fs = require("fs");
const chalk = require("chalk");

const showList = () => {
  const color = ["red", "green", "yellow", "magenta", "blue", "gray"];
  const myData = loadNotes();
  return myData.forEach((element) => {
    console.log(
      chalk[color[Math.floor(Math.random() * color.length)]].inverse(
        element.title
      )
    );
  });
};
const readNote = (title) => {
  const myNotes = loadNotes();
  const theNote = myNotes.find((note) => note.title === title);
  if (theNote) {
    console.log(chalk.blue(theNote.title));
    console.log(chalk.green(theNote.body));
  } else {
    console.log(chalk.red("note not found"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const afterRemovedNote = notes.filter(
    (savedTitle) => savedTitle.title !== title
  );

  saveData(afterRemovedNote);

  notes.length > afterRemovedNote.length
    ? console.log(chalk.green("note removed!"))
    : console.log(chalk.red("No note found"));
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicatetNote = notes.find((savedTitle) => savedTitle.title === title);
  if (!duplicatetNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveData(notes);
  } else {
    console.log("this title was taken!");
  }
};
const saveData = (notes) => {
  const newData = JSON.stringify(notes);
  fs.writeFileSync("notes.json", newData);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
module.exports = { addNote, removeNote, showList, readNote };
