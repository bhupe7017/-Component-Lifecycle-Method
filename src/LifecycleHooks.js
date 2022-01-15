import React , { useState, useEffect } from 'react';
import './App.css';
import ChildFuntionComponent from './ChildFuntionComponent';

function LifecycleHooks() {

  const[counter,setCounter] = useState(0)
  const[counter1,setCounter1] = useState(0)
  const[hide,setComponentStatus]=useState(false)


  // ComponentDidMount
  // ComponentDidUpdate

useEffect(() => {
  console.log('Use effect one called. = ' +counter)
},[counter])
useEffect(() => {
  console.log('Use effect two called. = ' +counter1)
},[counter1])

  return (
    <div>
    <h1>Lifecycle Method in Function Components <br/>
    
    Counter One {counter}
    <br />
    Counter Two {counter1}
    </h1>
    <br />
    <button onClick={()=>{setCounter(counter+1)}}>Update</button>
    <br />
    <button onClick={()=>{setCounter1(counter1+1)}}>Update</button>
    <br />
    <br />
    <br />
    { hide && <ChildFuntionComponent />}
    <button onClick={()=>{setComponentStatus(hide===false)}}>Show/Hide</button>
    </div>
  );
}

export default LifecycleHooks;
