import React from 'react'

function Button({ title,color,onClick }) {
  const onchanger=()=>{
    onClick(color)
  }
  return (
    <>
      <button onClick={onchanger} className=' shadow p-2 p1-4 pr-4 mr-3 mb-3 rounded-2xl text-l font-bold' style={{color:color}}>{title}</button>
    </>
  )
}

export default Button