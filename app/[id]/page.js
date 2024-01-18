import React from 'react'

function Idpage({params}) {
    console.log("Idpage", params.id);
  return (
    <div>Idpage: {params.id}</div>
  )
}

export default Idpage