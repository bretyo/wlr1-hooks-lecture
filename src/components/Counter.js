import {useState} from 'react'
const Counter = () => {
  
  const [count, setCount] = useState(0);
  const incrementCount=()=>{
    setCount(count + 1);
  }
  const decrementCount=()=>{
    setCount(count - 1);
  }
  const resetCount=()=>{
    setCount(0)
  }

  return(
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={()=>setCount(count*2)} >Multiply by 2</button>
    </div>
  )
}

export default Counter