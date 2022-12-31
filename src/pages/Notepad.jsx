import { useContext, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import Nav from '../components/Nav';
import { CardContext } from '../CardContext';

function Notepad() {
  const {cardData, setCardData} = useContext(CardContext);
  const placeholder = JSON.parse(sessionStorage.getItem("cards"));
  return (
    <div>
     <Nav />
     <CodeMirror
      id="codemirror"
      value={(placeholder.length > 0) ? placeholder:"write something to get started..."}
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
