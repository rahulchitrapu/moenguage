import React, { useEffect, useState } from 'react'
import "./Homepage.css"
import Section from "../../components/section/Section"
import Buttons  from '../molecules/Buttons'


export default function Homepage() {
    const [sectionNumber,setSectionNumber]=useState([1])
    // const [filterBtn,setFilterBtn]=useState(true)
    const [active,setActive]=useState(false)
    const [showDataBtn,setShowDataBtn]=useState(false)
    const [buttonState,setButtonState]=useState("and")
    const [mainState,setMainState]=useState([])
    const [state,setState]=useState({})
    
    function filterBtnHandler(e){
        if(e.target.className==="active"){
            setActive(false)
            setSectionNumber([...sectionNumber,sectionNumber.length+1])
        }
    }
    function showData(){
        let error=JSON.parse(localStorage.getItem("error"))
       
        if(!error){
            let outputObj={}
            outputObj["filters"]=Object.values(state)
            outputObj["operator"]=buttonState.toUpperCase()
            console.log(JSON.stringify(outputObj))
            return
        }
        else{
            alert("there is an error")
        }
    }

    function getData(obj,id){
        setShowDataBtn(true)
        state[id]=obj
        setState(state)
       
    }

    function remove(id){
        if(sectionNumber.length>1){
            console.log(id)
            setSectionNumber(sectionNumber.filter(num=>num!==id))
           let values=Object.values(state)   
           let newvalues=values.filter(e=>{
            if(e.id!==id){
                return e
            }
           })
           let obj={}
           newvalues.forEach(e=>{
                obj[e.id]=e
           })
           setState(obj)
           
        }
        
    }

   
  return (
    <div className='main_container'>
    
        <div className='sections'>
            {sectionNumber.map((ele,index)=>{
                if(index > 0 && index <sectionNumber.length){
                    return <div key={ele}>
                        <Buttons buttonState={buttonState} setButtonState={setButtonState}/>
                        <Section getData={getData} setActive={setActive} remove={remove} id={ele}/>
                        
                    </div>
                }
                return <div key={ele}>
                    <Section getData={getData} setActive={setActive} remove={remove} id={ele}/>
                    </div>
            })}
       </div>

        <div className='filter_btn'>
            <button onClick={(e)=>filterBtnHandler(e)} className={active?"active":'notactive'}>+ Filter</button>
        </div>
        <div className='show_data'>
            {showDataBtn && <button className='show_data_btn' onClick={()=>{showData()}}>showData</button>}
        </div>
        
    </div>
  )
}
