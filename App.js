import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './component/pages/register/register';
import Login from './component/pages/login/login';
import Way from "./component/Roter";
import "./style.css";



function App() {
const [currentForm, setCurrentForm] = useState('login');
const toggleForm = (formName) => {
  setCurrentForm (formName);
}    
  return (
<React.Fragment>


<div>
{
  currentForm === 'login' ? <Login onFormSwitch={toggleForm}/>: <Register/>

}
</div>
<Way/>


</React.Fragment>

)
  
}
  
export default App;
