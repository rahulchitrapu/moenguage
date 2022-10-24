import React, { useEffect, useState } from 'react'
import axios, { Axios } from "axios";
import "./Section.css"
import  Button  from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Age from '../molecules/Age';
import Gender from '../molecules/Gender';
import State from '../molecules/State';

export default function Section({remove,id,setActive,getData}) {
    const baseurl="https://ancillary-prod.smytten.com/smyttenresearch/targetingproperties/"
    const [buttonState,setButtonState]=useState("USERTYPE")
    const [names,setNames]=useState([])
    const [selected,setSelected]=useState("")
    const [selectedID,setSelectedID]=useState("")
    const [control,setControl]=useState("")
    const [controlValue,setControlValue]=useState()
    const [options,setOptions]=useState([])
    const [optionValues,setOptionvalues]=useState([])
    const [params,setParams]=useState([])
    let states = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]
    // const optionsArray=["value1","value2","value3","value4","value5","value6","value7"]
    // const optionsArray2=["value8","value9","value10","value11","value12","value13","value14"]

    const IntegerOptions=[
        { label: 'is equal to', value: 'IS_EQUAL_TO' },
        { label: 'is not equal to', value: 'IS_NOT_EQUAL_TO' },
        { label: 'is between', value: 'IS_BETWEEN' },
        { label: 'is not between', value: 'IS_NOT_BETWEEN' },
        { label: 'is greter than', value: 'IS_GRETER_THAN' },
        { label: 'is less than', value: 'IS_LESS_THAN' }
      ]

    const StringsetOptions=[
        { label: 'is', value: 'IS' },
        { label: 'is not', value: 'IS_NOT' },
        { label: 'contains', value: 'CONTAINS' },
        { label: 'does not contain', value: 'DOES_NOT_CONTAIN' },
        { label: 'starts with', value: 'STARTS_WITH' },
        { label: 'ends with', value: 'ENDS_WITH' },
        { label: 'does not end with', value: 'DOES_NOT_END_WITH' }
      ]
      const DateOptions=[
        { label: 'on', value: 'ON' },
        { label: 'is between', value: 'IS_BETWEEN' },
        { label: 'before', value: 'BEFORE' },
        { label: 'after', value: 'AFTER' },
        { label: 'in the next', value: 'IN_THE_NEXT' },
        { label: 'in the last', value: 'IN_THE_LAST' },
        { label: 'is today', value: 'IS_TODAY' }
      ]
      const StringOptions=[
        { label: 'is', value: 'IS' },
        { label: 'is not', value: 'IS_NOT' },
        { label: 'mutlti select', value: 'MULTI_SELECT' },
      ]

    useEffect(()=>{
        axios.get(baseurl)
        .then(res=>{
            setNames(res.data)
        })
    },[])
    useEffect(()=>{
        axios.get(`${baseurl}6352373946f76519425c02da`)
        .then(res=>{
            setOptions(res.data)

        })  
    },[])

    useEffect(()=>{
       if(selectedID!==""){
            axios.get(`${baseurl}${selectedID}`)
            .then(res=>{
               
                // setOptionvalues(res.data)
                setParams(res.data)
        })
       }
      
    },[selectedID])
    useEffect(()=>{
        if(!controlValue==""){
            setActive(true)
            let obj={
                id:id,
                type:buttonState==="USERTYPE"?"USER PROPERTY":"USER BEHAVIOUR",
                condition:{
                    feild:selected,
                    operator:control, 
                    value:{
                        exact:controlValue
                    }
                }
               
            }
            getData(obj,id)
        }
        if(controlValue===""){
            setActive(false)
        }
    },[controlValue])

    function getname(name){
        let obj=options.find(e=>e.value===name)
        setSelectedID(obj.id)
        if(obj.type==="INTEGER"){
            
            setOptionvalues(IntegerOptions)
        }
        if(obj.type==="STRING_SET"){
           
            setOptionvalues(StringsetOptions)
        }
        if(obj.type==="DATE"){
           
            setOptionvalues(DateOptions)
        }
        if(obj.type==="STRING"){
            setOptionvalues(StringOptions)
        }
    }

    function onChangeHandler(e){
        if(e.target.value!==""){
            getname(e.target.value)
            setSelected(e.target.value)
            setControl()
            setControlValue()
            setActive(false)
        }
    }
   
    

    
    function buttonClickHandler(name){
        setButtonState(name.value)
        setSelected("")
        setControl("")
        setControlValue()
        axios.get(baseurl+name.id)
        .then(res=>{
            setOptions(res.data)
        })
    }
    
    function provideOptions(){
            return (<select className='select' value={selected} onChange={(e)=>{onChangeHandler(e)}} >
                <option key="opt" value="">select</option>
                {options.map(opt=>{
                    return <option  key={opt.id} value={opt.value}>{opt.label}</option>
                    })
                }
            </select>)
    }

    function provideOptionsAsPerSelected(){
        if(buttonState==="USERTYPE"){
            switch(selected){
                case "AGE":

                    if(optionValues.length>0){
                        return <Age control={control} setControl={setControl} controlValue={controlValue} setControlValue={setControlValue} arr={optionValues}/>
                    }
                case "GENDER":
                    if(optionValues.length>0){
                        return <Gender params={params} control={control} setControl={setControl} controlValue={controlValue} setControlValue={setControlValue} arr={optionValues}/>
                    }
                case "STATE":
                    if(optionValues.length>0){
                        return <State params={states} control={control} setControl={setControl} controlValue={controlValue} setControlValue={setControlValue} arr={optionValues}/>
                    }
            }
        }
    }




    if(names.length===0){
        return <h1>loading...</h1>
    }
   
  return (
    
        <div className='main_section'>
            <div className='navbar' >
                <div className='buttons'>
                   
                {/* <button onClick={(e)=>{setButtonState("popular")}} className={buttonState==='popular'?"activeButton":"button"}>user property</button>

                <button onClick={(e)=>{setButtonState("behaviour")}} className={buttonState==='behaviour'?"activeButton":"button"}>user behavior</button> */}
                {
                    names.map((name)=>{
                        // return <button key={name.id} onClick={(e)=>{buttonClickHandler(name)}} className={buttonState===name.name?"activeButton":"button"}>{name.name}</button>
                        return  <button key={name.id} className={buttonState===name.value?"activeButton":"button"} onClick={()=>{buttonClickHandler(name)}}>{name.label}</button>
                    })
                }
                
                </div>
                <div className='cancel' onClick={()=>{remove(id)}}>
                    <p>X</p>
                </div>
            </div>
            <div className='selectArea'>
                {provideOptions()}
                {selected?provideOptionsAsPerSelected():null}
            </div>
        </div>
    
  )
}
