import React , {useState , createContext}from 'react'
import Grandfather from "./Components/Grandfather";
import './App.css';

export const context = createContext({arrayOfGifts:[], setArrayOfGifts: null});

function App() {
const [arrayOfGifts, setArrayOfGifts] = useState([]);

  return (
    <div className='App'>
    <context.Provider value={{arrayOfGifts , setArrayOfGifts}}>
      <Grandfather/>
      </context.Provider>
    </div>
  )
}

export default App