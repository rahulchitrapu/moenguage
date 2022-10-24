import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Checkbox 
  } from '@chakra-ui/react'
import { Box ,Grid} from '@chakra-ui/react'

export default function Accordian1({arr=[],setControlValue}) {
    const [selected,setSelected]=useState([])
    function provideOptions(){

       return arr.map(state=>{
            return <Checkbox value={state} checked={false} onChange={(e)=>{onclickHandler(e)}} key={state} size='2xl' colorScheme='blue'>{state}</Checkbox> 
        })
    }
    function onclickHandler(e){
        let name=e.target.value
        if(e.target.checked){
            setSelected([...selected,name])
        }else{
            setSelected(selected.filter(sel=>sel!==name))
        }
    }
    function getCapitalize(arr){
        return arr.map((e)=>{
            return e.toUpperCase()
        })
    }
    
    useEffect(()=>{
        setControlValue(getCapitalize(selected))
        
    },[selected])

  return (
    <div className='accordian'>
        <Accordion allowToggle>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    select states
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel h="200px" overflow="scroll" pb={4}>
                <form>
                    <Grid  templateColumns='repeat(2, 1fr)' gap={4}>
                        
                        {provideOptions()}
                        
                    </Grid>
                </form>
                </AccordionPanel>
            </AccordionItem>
    </Accordion>
  </div>
  )
}
