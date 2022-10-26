
import React from 'react'

export default function Gender({arr,control,setControl,controlValue,setControlValue,params}) {
    // console.log(params)
    
    function func(){
        return arr.map((ele)=>{
            return <option value={ele.value} key ={ele.value}>{ele.label}</option>
        })
    }
    function provideOptions(){
        
        // setControlValue(e.target.value)
        return params.map((param)=>{
            return <option value={param.value} key ={param.id}>{param.label}</option>
        })
    }
   
  return (
    <div>
        <select required className='select' value={control} onChange={(e)=>setControl(e.target.value)}>
            <option key="266bydcgu5" value="">select</option>
            {func()}
        </select>
       {control!=="" && <select required className='select' value={controlValue} onChange={(e)=>setControlValue(e.target.value)}>
            <option key="7898412hjbcdjh" value="">select</option>
            { provideOptions()}
        </select>}
        
        
    </div>
  )
}
