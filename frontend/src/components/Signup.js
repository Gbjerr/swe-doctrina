import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();

        try{ 
            await axios.post("http://localhost:9001/signup", {
                email, password
            });
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div className="login">
            <h1>Sign up</h1>

            <form action="POST">
                <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="" />
                <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="" />
                <input type="submit" onClick={submit} />
            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/">Login Page</Link>
        </div>
    )
}

export default Signup