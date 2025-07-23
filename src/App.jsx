import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Friends from './Friends'

function App() {

  function handleClick(){
    alert('button clicked');
  }
  
   function handleClick(){
    alert('button 2 click ')
   }
   const addFive=(num) =>{
    alert(num+5);
   }
  return (
    <> 
    
    <h2>React core concepts </h2>
    <Friends></Friends>
    <Counter></Counter>
    <Team></Team>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click 2 me </button>

       {/* vejal   */}
      <button onClick={()=> addFive(6)}> Three </button>
     </> 
      
  )
}
export default App
