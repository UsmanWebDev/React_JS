import React from 'react'

const Counter = () => {
    const [counter, setCounter] = React.useState(0);
    function handleClick(e) {
        e.stopPropagation()
        setCounter(counter=>(counter+1)) 
        console.log(counter);     
    }
  return (
    <>
        <h1 style={{"textAlign":"center"}}>{counter}</h1>
        <button onClick={handleClick}>counter</button>
    </>
  )
}

export default Counter