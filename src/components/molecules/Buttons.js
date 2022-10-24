import React, { useState } from 'react'
import "./Buttons.css"

export default function Buttons({buttonState,setButtonState}) {
  
  return (
    <div className='buttons-2'>
        <button onClick={()=>setButtonState("and")} className={buttonState==="and"?'activeBtn':"button"}>AND</button>
        <button onClick={()=>setButtonState("or")} className={buttonState==="or"?'activeBtn':"button"}>OR</button>
    </div>
    
  )
}
