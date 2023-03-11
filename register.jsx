import React, { useState } from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";



function Register(props){
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] =useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }


    return( 

        <React.Fragment>
        <Header/>
        <div>
        <form className="flogin"onSubmit={handleSubmit}>
                <label htmlFor="name">Fullname</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="FullName" id="name" name="name" required/>
                <label htmlFor="email">E-mail</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email@gmail.com"id="email" name="email"required/>
                <label htmlFor="password">Passaword</label>
                <input value={pass} onChange={(e)=>setPass(e.target.value)}type="password" placeholder="*****"id="passaword" name="password"required/>
                <button type="submit">Login</button>
                <button onClick={() =>props.onFormSwitch('login')} >Already have an account? Login here</button>
                </form>
        </div>
        <Footer/>
            
    
        </React.Fragment>
)
}

export default Register;