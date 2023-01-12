import { useState } from 'react';

import logo2 from './logo2.png'
import './login.css'



function Login() {

const [selectBtn, setSelectBtn] = useState([false,false,true,false,false])

function buttonSelect(val){
  let array= [false,false,false,false,false]
  array[val]= true
  setSelectBtn(array)
}
  return (
    <div className="App">
     <header>
       <div id="logo"></div>
     </header>
     <div id="body">
     <div id="form">
        <img
        
         src={logo2} alt="logo2"></img>
        <p id="text1">It's a delight to have you onboard</p>
        <small>Help us know you better <br/> (This is how we optimize Wobot as per your business needs)</small>
        <p id='input'>Company Name</p>
        <input id='company' placeholder='e.g. Example Inc' type="text"></input>
        <p id='input'>Industry</p>
        <select id="select">
            <option disabled selected defaultValue >Select</option>
            <option>Product base</option>
            <option>Service base</option>
            <option>Health care</option>
            <option>Sports</option>
        </select>
        <p id='input'>Company size</p>
        <div id="buttons">
          <button onClick={()=>buttonSelect(0)} style={{backgroundColor: selectBtn[0] ? "#3766e8": "#e5e5e5", color: selectBtn[0]? "white" : "#545454"}} >1-20</button>
          <button onClick={()=>buttonSelect(1)} style={{backgroundColor: selectBtn[1] ? "#3766e8": "#e5e5e5",color: selectBtn[1]? "white" : "#545454"}}>21-50</button>
          <button onClick={()=>buttonSelect(2)} style={{backgroundColor: selectBtn[2] ? "#3766e8": "#e5e5e5",color: selectBtn[2]? "white" : "#545454"}}>51-200</button>
          <button onClick={()=>buttonSelect(3)} style={{backgroundColor: selectBtn[3] ? "#3766e8": "#e5e5e5",color: selectBtn[3]? "white" : "#545454"}}>201-500</button>
          <button onClick={()=>buttonSelect(4)} style={{backgroundColor: selectBtn[4] ? "#3766e8": "#e5e5e5",color: selectBtn[4]? "white" : "#545454"}}>500+</button>
        </div>
        <button

         id='submit'>Get Started</button>
     </div>
     </div>

     <footer>
      <p>Terms of use | Privacy policy</p>
     </footer>
    
    </div>
  );
}

export default Login;
