import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectCompo({arr,control,setControl}) {
  // const [age, setAge] = React.useState('');
  // console.log("arr",arr)
  function func(){
    return arr.map((ele)=>{
      return <MenuItem value={ele.value} key={ele.value}>{ele.label}</MenuItem>
    })
  }
  const handleChange = (event) => {
    setControl(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{m:1, minWidth: 80,height: "40px" }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={control}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem> */}
          {func()}
        </Select>
      </FormControl>
    </div>
  );
}
