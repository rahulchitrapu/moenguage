import { getMouseEventOptions } from '@testing-library/user-event/dist/utils'
import React from 'react'

export default function Gender({arr,control,setControl,controlValue,setControlValue,params}) {
    
    function func(){
        return arr.map((ele)=>{
            return <option value={ele.value} key ={ele.value}>{ele.label}</option>
        })
    }
    function provideOptions(){
        
        // setControlValue(e.target.value)
        return params.map((param)=>{
            return <option value={param.value} key ={param.value}>{param.label}</option>
        })
    }
   
  return (
    <div>
        <select required className='select' value={control} onChange={(e)=>setControl(e.target.value)}>
            <option key="266114632161635" value="">select</option>
            {func()}
        </select>
       {control!=="" && <select required className='select' value={controlValue} onChange={(e)=>setControlValue(e.target.value)}>
            <option key="7898412hjbcdjh" value="">select</option>
            { provideOptions()}
        </select>}
        
        
    </div>
  )
}
