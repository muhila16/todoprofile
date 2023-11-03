import React,{useState} from 'react';
import './App.css';
import {AiOutlineDelete}  from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';

function App() {
  const[isCompleteScreen, setIsCompleteScreen] = useState(false);
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          
        <div className='todo-input-item'>
            <label>Title:</label>
            <input type = "text" placeholder = "Enter Task Title"/>
        </div>

          <div className='todo-input-item'>
            <label>Description:</label>
            <input type = "text" placeholder = "Enter Description"/>
          </div>

          <div className='todo-input-item'>
            
            <button type='button' className='primaryBtn'>Add</button>
          </div>

            
        </div>

        <div className='btn-area'>
          <button className = {`secondaryBtn ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>To Do</button>
          <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
        </div>
       
          <div className='todo-list'>
    <div className='todo-list-item'>
      <div>
        <h3>Study Mern</h3>
        <p>Watch html,css,Js first.</p>
      </div>
      <div>
        <AiOutlineDelete className='icon' />
        <BsCheckLg className='check-icon' />
      </div>
    </div>
  </div>

      </div>
    </div>
    
  );
}

export default App;
