import React, { useState } from "react";
import "./Homepage.css";
import Section from "../../components/section/Section";
import Buttons from "../molecules/Buttons";

export default function Homepage({setAddMore,getSingleState,defindClass}) {
  const [sectionNumber, setSectionNumber] = useState([1]);
  // const [filterBtn,setFilterBtn]=useState(true)
  const [active, setActive] = useState(false);
  const [showDataBtn, setShowDataBtn] = useState(false);
  const [buttonState, setButtonState] = useState("and");

  const [state, setState] = useState({});

  function filterBtnHandler(e) {
    if (e.target.className === "active buttons") {
      setActive(false);
      setSectionNumber([...sectionNumber, sectionNumber.length + 1]);
    }
  }
  function showData() {
    // let error=JSON.parse(localStorage.getItem("error"))
    let outputObj = {};
    outputObj["filters"] = Object.values(state);
    outputObj["operator"] = buttonState.toUpperCase();

    console.log(JSON.stringify(outputObj));
    return (outputObj);

    // else{
    //     alert("there is an error")
    // }
  }

  function getData(obj, id) {
    setShowDataBtn(true);
    state[id] = obj;
    setState(state);
  }


  function addMoreHandler(){
    console.log("hello")
    setAddMore(prev=>[...prev,prev.length+1])
    getSingleState(showData())
  }

  function remove(id) {
    if (sectionNumber.length > 1) {
      console.log(id);
      setSectionNumber(sectionNumber.filter((num) => num !== id));
      let values = Object.values(state);
      let newvalues = values.filter((e) => {
        if (e.id !== id) {
          return e;
        }
      });
      let obj = {};
      newvalues.forEach((e) => {
        obj[e.id] = e;
      });
      setState(obj);
    }
  }

  return (
    <div className={defindClass!==""?`main_container ${defindClass}`:"main_container"}>
      <div className="sections">
        {sectionNumber.map((ele, index) => {
          if (index > 0 && index < sectionNumber.length) {
            return (
              <div key={ele}>
                <Buttons
                  buttonState={buttonState}
                  setButtonState={setButtonState}
                />
                <Section
                  getData={getData}
                  setActive={setActive}
                  remove={remove}
                  id={ele}
                  defindClass={defindClass}
                />
              </div>
            );
          }
          return (
            <div key={ele}>
              <Section
                getData={getData}
                setActive={setActive}
                remove={remove}
                id={ele}
                defindClass={defindClass}
              />
            </div>
          );
        })}
      </div>

      <div className="filter_btn">
        <button
          onClick={(e) => filterBtnHandler(e)}
          className={active ? "active buttons" : "notactive buttons"}
        >
          + Filter
        </button>
      </div>
        <div className="end_btns">
            <div className="show_data">
                {showDataBtn && (
                <button
                    className="show_data_btn buttons"
                    onClick={() => {
                    showData();
                    }}
                >
                    showData
                </button>
                )}
            </div>
            <div className="show_data">
                {(
                <button
                    className="show_data_btn buttons"
                    onClick={() => {
                    addMoreHandler()
                    }}
                >
                    add more 
                </button>
                )}
            </div>
        </div> 
    </div>
  );
}
