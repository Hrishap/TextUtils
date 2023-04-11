import React from 'react'

function Alert(props) {
  const capitalise =(word)=>
  {
   const lower = word.toLowerCase();
   return lower.charAt(0).toUpperCase() + lower.slice(1);
  } 
  return (
  
   props.alert && <div class="alert alert-success d-flex align-items-center" role="alert">
  <div>
    <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
  </div>
   </div>
  )
}

export default Alert
