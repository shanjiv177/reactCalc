import './App.css';
import './styles.css'
import {useState} from 'react';

function MyButton({value, onClick}){
  return <button className="button" onClick={onClick}>{value}</button>
}

function App() {

  const [value, setValue] = useState();

  function handleClick(val) {

    if (val === "=") {
      setValue(Math.round(eval(value)*100)/100);
      return;
    }

    if (val === "C") {
      setValue(null);
      return;
    }

    if (value != null) {
      if ((value[value.length-1] === "+" || value[value.length-1] === "-" || value[val.length-1] === "*" || value[val.length-1] === "/") && (val === "+" || val === "-" || val === "*" || val === "/")){
        setValue("Cannot use two operators together, Press 'C' to clear");
        return;
      }
    }

    value == null ? setValue(val) : setValue(value + val);    
  }


  return (
    <div className="wrapper">
      <div className="tittle">React Calculator</div>
      <div className="result">
        {value == null ? "0" : value}
      </div>
      <div className="row">
          <MyButton value="1" onClick={() => handleClick("1")}/>
          <MyButton value="2" onClick={() => handleClick("2")}/>
          <MyButton value="3" onClick={() => handleClick("3")}/>
          <MyButton value="+" onClick={() => handleClick("+")}/>
      </div>
      <div className="row">
          <MyButton value="4" onClick={() => handleClick("4")}/>
          <MyButton value="5" onClick={() => handleClick("5")}/>
          <MyButton value="6" onClick={() => handleClick("6")}/>
          <MyButton value="-" onClick={() => handleClick("-")}/>
      </div>
      <div className="row">
          <MyButton value="7" onClick={() => handleClick("7")}/>
          <MyButton value="8" onClick={() => handleClick("8")}/>
          <MyButton value="9" onClick={() => handleClick("9")}/>
          <MyButton value="*" onClick={() => handleClick("*")}/>
      </div>
      <div className="row">
          <MyButton value="C" onClick={() => handleClick("C")}/>
          <MyButton value="0" onClick={() => handleClick("0")}/>
          <MyButton value="=" onClick={() => handleClick("=")}/>
          <MyButton value="/" onClick={() => handleClick("/")}/>
      </div>
    </div>
  );
}

export default App;
