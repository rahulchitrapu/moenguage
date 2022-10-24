import { useEffect, useState } from "react"
import React from 'react'

export default function Age({arr,control,setControl,controlValue,setControlValue}) {
  // console.log(arr)
  // console.log(control)
  // const [valuesArray, setValuesArray] = useState([])
  // const [minvalArr,setMinValArr]=useState([])
  // const [maxvalArr,setMaxValArr]=useState([])

  const [error,setError]=useState(false)
  const [min,setMin]=useState()
  const [max,setMax]=useState()

    function func(){
       return arr.map(opt=>{
            return <option key={opt.value} value={opt.value}>{opt.label}</option>
        })
    }
   
    // useEffect(()=>{
    //   if(control==="between"){
    //     betweenFunc()
        
    //   }else{
    //     givevalues()
    //   }
    // },[control])

    // function betweenFunc(){
    //   let ele=arr.find(e=>e.label===control)
   
    //   setMinValArr(ele.value[0])
    //   setMaxValArr(ele.value[1])
    // }

    // function givevalues(){
    //   let ele=arr.find(e=>e.value===control)
    //   console.log(ele)
    //   // setValuesArray(ele?.value)
    // }


    useEffect(()=>{
      if(min!==undefined && max!==undefined){
        if(min>max){
          setError(true)
          localStorage.setItem("error",error)
        }
        else{
          setError(false)
          localStorage.setItem("error",error)
        }
        console.log(min,max)
       
      }
      setControlValue({
        min:min,
        max:max
      })
    },[min,max])
   
   
    // function getMin(){
   
    //   return minvalArr.map(num=>(<option key={num} value={num}>{num}</option>))
    // }
    // function getMax(){
    
    //   return maxvalArr.map(num=>(<option key={num} value={num}>{num}</option>))
    // }

   if(control==="IS_BETWEEN"||control==='IS_NOT_BETWEEN'){
    return (
      <div>
        <form>
          <select className='select' value={control} onChange={(e)=>setControl(e.target.value)}>
              <option key={Math.random()} value="">select</option>
              
              {func()}
          </select>

            {/* <select className="select" value={min} onChange={(e)=>{setMin(e.target.value)}}>
            <option key={Math.random()} value="">min</option>
              {getMin()}
            </select>
          <select className="select" value={max} onChange={(e)=>{setMax(e.target.value)}}>
            <option key={Math.random()} value="">max</option>
              {getMax()}
          </select> */}
          <input placeholder="enter min number" className={error?"error number":"number"} required value={min} onChange={(e)=>setMin(e.target.value)}></input>
          <label style={{marginRight:"20px"}}>AND</label>
          <input placeholder="enter max number" className={error?"error number":"number"}  required value={max} onChange={(e)=>setMax(e.target.value)}></input>
        </form>

            
    </div>
    )
   } 
  return (
    <div>
     <select className='select' value={control} onChange={(e)=>setControl(e.target.value)}>
        <option value="" key="255645644">select</option>
        {func()}
    </select>
    {/* {control!=="" && <select className="select" value={controlValue} onChange={(e)=>{setControlValue(e.target.value)}}>
      <option key={Math.random()} value="">select</option>
        {valuesArray?.map(num=>(<option key={num} value={num}>{num}</option>))}
    </select>} */}
  
      {control!=="" && <input required type='number' placeholder="enter number" className="number" value={controlValue} onChange={(e)=>{setControlValue(e.target.value)}}></input>}
        
    </div>
  )
}
