const lastOccurrence = function (str, sentence) {
  const last = sentence.lastIndexOf(str);
  return last;
};

console.log(
  lastOccurrence(
    "you",
    "The more you know, the more you know that you don't know"
  )
);
