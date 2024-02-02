import React from 'react'

function Register({con,acc}) {
  return (
    <div >
      <button onClick={()=> con()}>connect metamas account</button>
    </div>
  )
}

export default Register
