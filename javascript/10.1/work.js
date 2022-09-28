// const isString = function (str , func){
// if ( typeof str === 'string') func(str) ;
// }

// isString('Alaa' , (name)=> {console.log(name)})

const firstWordUpperCase = function (str, func) {
  const firstWord = str.split(" ");
  firstWord[0] = firstWord[0].toUpperCase();
  func(firstWord[0]);
};

firstWordUpperCase("alaa Shaalan 38 years old", (str) =>
  console.log(str.split("").join("-"))
);
firstWordUpperCase("alaa Shaalan 38 years old", (str) =>
  console.log(`The length of ${str} is ${str.length} `)
);
