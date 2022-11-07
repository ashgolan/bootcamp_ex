import './Quiz.css'
function Quiz() {
  return (
    <div className="quizContainer">
      <QuizTitle></QuizTitle>
      <Q1></Q1>
      <Q2></Q2>
    </div>
  )
}

function QuizTitle() {
  return (<h1>How Do You Like Front End?</h1>)
}

function Q1() {
  return (<div>
    <Q1Title></Q1Title>
    <Q1Input></Q1Input>
  </div>)
}

function Q1Title() {
  return (<label>How Much Do you love front end?</label>)
}
function Q1Input() {
  return (
    <div>
      <input type="range" min={0} max={10} step={2}></input>
    </div>
  );
}
function Q2() {
  return (<div>
    <Q2Title></Q2Title>
    <Q2Input></Q2Input>
  </div>)
}
function Q2Title() {
  return (<label>What is your favorite front end feature topic?</label>)
}
function Q2Input() {
  return (
    <div>
      <input type="text"></input>
    </div >
  );
}

// function drawQuiz(){

// }
// , , , Q2, Q2Title,
// Q2Input
export { Quiz };