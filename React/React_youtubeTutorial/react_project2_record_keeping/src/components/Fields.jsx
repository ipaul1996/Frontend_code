import React from 'react'



const Fields = (props) => {
  return (
    <div>
        <h4>{props.Name}</h4>
        <h4>{props.Email}</h4>
        <h4 onClick={() => props.rem(props.Index)}>Remove</h4>
      
    </div>
  )
}



export default Fields