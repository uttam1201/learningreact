import './App.css';
import Hello from './Components/Hello';
import Helloworld from './Components/Helloworld';
import Button from './Components/Button';
import { useState } from 'react';
import Helloy from './Components/Helloy';

function App() {

  const [mode , setmode] = useState(false);

  const toggelemode = () => {
    console.log("dddddd");
    // if(mode ==="hello" ){
    //   console.log(mode,"+++++");
    //   setmode("hellow")
    // }else if(mode ==="hellow"){
    //   setmode("helloy");
    //   console.log(mode,"*********");
    // }else{
    //   setmode("hello");
    // }
    
    // setmode(mode?false:true);
   setmode(mode==="hello"?"hellow":(mode==="hellow"?"helloy":"hello"));
  
  
  }

  return (
    
    <>
    
    {(mode === "hello" || !mode ) && <Hello/>}
    {(mode === "hellow" || !mode ) && <Helloworld/>}
    {(mode === "helloy" || !mode ) && <Helloy/>}


   {/* {mode? */}
   {/* {mode}------ */}
      {/* <Hello></Hello> */}
      {/* : */}
      {/* <Helloworld ></Helloworld> */}
     {/* <Helloy></Helloy> */}
      {/* } */}
      {/* <Button mode={mode} toggelemode={()=>setmode(!mode)}> </Button> */}
      <Button mode={mode} toggelemode={toggelemode}> </Button>
    </>
    
  );


}

export default App;
