import { useContext, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import Nav from '../components/Nav';
import { CardContext } from '../CardContext';

function Notepad() {
  const {cardData, setCardData} = useContext(CardContext);
  let defaultVal = "write something to get started...";
  const placeholder = sessionStorage.getItem("cards");
  if(placeholder){
    if(JSON.parse(placeholder).length > 0){
      defaultVal = JSON.parse(placeholder);
    }
  }
  return (
    <div>
     <Nav />
     <CodeMirror
      id="codemirror"
      value={defaultVal}
      theme="dark"
      basicSetup={{
        lineNumbers:false

      }}
      height="100vh"
      onChange={(value)=>{
        setCardData(value);
      }}
    />
    </div>
  )
}

export default Notepad
