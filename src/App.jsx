import React, { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  // function inc(){
  //   setCount(count+1)
  // }
  // function dec(){
  //   setCount(count-1)
  // }


  return (
    <div style={{
      height: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"

    }}>

      <button style={{
        color: "red",
        height: "100px",
        width: "100px",
        fontSize: "40px"

      }} onClick={() => { setCount(count + 1) }}>+</button>

      <p style={{
        height: "100px",
        width: "200px",
        backgroundColor: "Highlight",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "50px"

      }}>{count}</p>

      <button
        style={{
          color: "red",
          height: "100px",
          width: "100px",
          fontSize: "40px"

        }}
        onClick={() => { setCount(count - 1) }}>-</button>

    </div>
  )
}

export default App