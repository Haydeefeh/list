import React, { useState } from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Shoppingitem from "../shoppingitem/shoppingitem";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Register from "../register/register";



function Login(props){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState ('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email)

    }

    return (
        <React.Fragment>

            <Header/>
            <form onSubmit={handleSubmit}                                                                               >
                <label htmlFor="email">Email</label>
                <input value={email} onChange = {(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="email@gmail.com" id="email"/>
                <label htmlFor="password">Passaword</label>
                <input value={pass} onChange = {(e)=>setPass(e.target.value)} type="password" name="password" placeholder="Password" id="passaword"/>
                <button type="submit">Login</button>

            </form>
            <button onClick={() =>props.onFormSwitch('register')}>Dont have an account here? Register here.</button>
            <Footer/>
    </React.Fragment>
    );
}



export default Login;
