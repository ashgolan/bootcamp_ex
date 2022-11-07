// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App" >
      <Button text={"Important"} style={'bold'}></Button >
      <Button text={"Not Important"} style={'normal'}></Button >
    </div >
  );
}

export default App;
