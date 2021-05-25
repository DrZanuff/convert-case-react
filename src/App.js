import LogoHeader from './Components/Logo';
import TextAreaInput from './Components/TextAreaInput';
import TextAreaOutput from './Components/TextAreaOutput';
import './App.css';
import { useState } from 'react';

function App() {

  const [text , setText] = useState("");

  function setUpperCase(){
    let newValue = String(document.getElementById("focus_id").value).toUpperCase()
    setText(newValue)
  }

  function setLowerCase(){
		let newValue = String(document.getElementById("focus_id").value).toLowerCase();
		setText(newValue)
	}
	function setCapitalCase(){
		let newValue = String(document.getElementById("focus_id").value).replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
		setText(newValue)
	}

  return (
    <div>
      <LogoHeader></LogoHeader>

      <TextAreaInput></TextAreaInput>

      

      <div id="buttons">
        <button onClick={setUpperCase}>UPPER CASE</button>
        <button onClick={setLowerCase}>lower case</button>
        <button onClick={setCapitalCase}>Capitalized Case</button>
      </div>
      
      <TextAreaOutput value={text}></TextAreaOutput>

    </div>
  );
}

export default App;
