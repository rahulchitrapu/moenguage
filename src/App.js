
import './App.css';
import Homepage from './components/homepage/Homepage';
import { ChakraProvider } from '@chakra-ui/react'
import Accordian1 from './components/molecules/accordian/Accordian1';
// import "~bootstrap/scss/bootstrap";


function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Homepage/>
        {/* <Accordian1/> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
