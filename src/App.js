import "./App.css";
import Homepage from "./components/homepage/Homepage";
import { ChakraProvider } from "@chakra-ui/react";
import Accordian1 from "./components/molecules/accordian/Accordian1";
import { useState } from "react";
import SelectCompo from "./components/molecules/materialUI/SelectCompo";
// import "~bootstrap/scss/bootstrap";

function App() {
  const [addmore,setAddMore]=useState([1])
  const [mainState, setMainState] = useState([]);
  function getSingleState(obj){
    setMainState([...mainState,obj])
  }
  console.log(mainState)
  return (
    <ChakraProvider>
      <div className="App">
        {addmore.map((e,i)=>{
          if(e===addmore.length){
            return <div key={e}><Homepage defindClass=""  getSingleState={getSingleState} setAddMore={setAddMore}/></div>
          }
          return <div className="inactive_homepage" key={e}><Homepage defindClass="inactive_homepage"  getSingleState={getSingleState} setAddMore={setAddMore}/></div>
        })}
        {/* <Homepage /> */}
        {/* <Accordian1/> */}
        {/* <SelectCompo/> */}
        
      </div>
      </ChakraProvider>
    
    // <ChakraProvider>

    //   <SelectCompo/>
    // </ChakraProvider>
  );
}

export default App;
