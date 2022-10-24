import React,{useState} from 'react'
import "./Accordian.css";


export default function Accordian({title="select",data=["AP","UP","MP"],tag="filter"}) {
    const [isOpen, setIsOpen] = useState(false);
    const [checkedState, setCheckedState] = useState([]);
    const showUpArrow = () => <span className='arrow'>&#94;</span>;
    const showDownArrow = () => <span className='arrow'>&#x2228;</span>


    const onclickHandler = (e, name, tag) => {
        const isChecked = e.target.checked;
        console.log(name)
        // if (isChecked) {
        //     addValue(name, tag)
        //     //Add value to check state
        //     const newState = [...checkedState, name];
        //     setCheckedState(newState)
        //     // setCheckedState1(newState)
        // }
        // else {
        //     removeValue(name, tag) //6
        //     //Remove value from check state
        //     const newState = [...checkedState];
        //     setCheckedState(newState.filter(value => value !== name));
        //     // setCheckedState1(newState.filter(value => value !== name))
        // }

    }



    const func = () => {
        return (data.map((name) => {
            return (<div className='filtersList' key={Math.random()}>
                <input type="checkbox" name='inputbox' value={name} className="accordian_check"  onChange={(e) => onclickHandler(e, name, tag)} checked={checkedState.includes(name)}></input>

                <label htmlFor="inputbox" >{name}</label>
            </div>)
        }))
    }
    
    return (
        <div className='main'>
            {title &&
                <div onClick={()=>setIsOpen(!isOpen)} className='title-container'>
                    <div className='title' ><p>{title}</p></div>
                    {<div className='arrow-container'>{isOpen ? showUpArrow() : showDownArrow()}</div>}
                </div> 
            }
            {data && isOpen && <div className="content">{func()}</div>}
        </div>);
}
