import React from 'react'
import Accordian from './accordian/Accordian'
import Accordian1 from './accordian/Accordian1'

export default function State({arr,control,setControl,controlValue,setControlValue,params}) {
    function func(){
        return arr.map(opt=>{
            return <option key={opt.value} value={opt.value}>{opt.label}</option>
        })
    }
    function provideOptions(){
        return params.map(param=>{
            // return <option key={param.value} value={param.value}>{param.label}</option>

            return <option key={param} value={param.toUpperCase()}>{param}</option>
        })
    }
    function provideMultiSelectOptions(){
        return params.map(param=>{
            return (<>
            <input type="checkbox" name={param} value={param}/><label htmlFor={param}>{param}</label><br/>
            </>)
        })
    }

    if(control==="MULTI_SELECT"){
        return <div className='state-container'>
            <form>
                <select className='select' value={control} onChange={(e)=>setControl(e.target.value)}>
                    <option key="16894156684611896461645165" value="">select</option>
                        {func()}
                </select>
            </form>
            
            
            {/* {control!=undefined &&<select className='select' value={controlValue} onChange={(e)=>setControlValue(e.target.value)}>
                    <option key={Math.random()} value="">select</option>
                    {provideMultiSelectOptions()}
            </select>} */}

            {/* {control!=undefined && <div className='checkBox-area'><form>
                {provideMultiSelectOptions()}
            </form></div>} */}
            {control && <Accordian1 arr={params} setControlValue={setControlValue}/>}
     
        </div>
    }
    
  return (
    <div className='state-container'>
        <form>
            <select className='select' value={control} onChange={(e)=>setControl(e.target.value)}>
                <option key="16894156684611896461645165" value="">select</option>
                    {func()}
            </select>
        </form>
        
        
        {control!=undefined &&<select className='select' value={controlValue} onChange={(e)=>setControlValue(e.target.value)}>
                <option key={Math.random()} value="">select</option>
                {provideOptions()}
        </select>}
            
       
        
    </div>
  )
}
