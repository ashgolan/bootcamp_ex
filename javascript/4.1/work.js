const prompt = require("prompt-sync")();

const numSiblings = Number(prompt("How many siblings do you have?"));
// we use the number because the numSiblings is  STRING AND WH WANT IT IN A Number
if (numSiblings === 1) console.log(`1 sibling!`);
else if (numSiblings > 1) console.log(`More than 1 sibling`);
else if (!(numSiblings > 1)) console.log(`No siblings`);
