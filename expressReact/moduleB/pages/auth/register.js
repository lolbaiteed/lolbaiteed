"use client";
import { useState } from 'react';
import AuthLayout from '../components/authLayout';
import axios from 'axios';


//TODO: Maybe redirect to profile after reg???

function Register() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handle = async() => {
        try {
            const response = await axios.post("http://localhost:3000/api/auth/register", {email, name, password});
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <input onChange={(e) => setEmail(e.target.value)} type='email' id="email" className="rounded min-h-8 outline-2 outline-red-200 placeholder:text-center text-center" placeholder="Enter your email"></input>

            <input onChange={(e) => setName(e.target.value)} id="name" className="rounded min-h-8 outline-2 outline-red-200 placeholder:text-center text-center" placeholder="Enter your name"></input>

            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="rounded min-h-8 outline-2 outline-red-200 placeholder:text-center text-center" placeholder="Enter your password"></input>

            <button id="submit"
                className="rounded relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-heading rounded-base group bg-linear-to-br from-red-200 to-red-400 group-hover:from-red-200 group-hover:to-red-400 hover:text-black focus:ring-4 focus:outline-none"
                onClick={handle}>
                    <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-neutral-primary-soft rounded-base group-hover:bg-transparent group-hover:dark:bg-transparent leading-5">
                        Sign up
                    </span>
            </button>
        </>
    )
}

Register.getLayout = function(page) {
    return <AuthLayout title = "Register" >{ page }</AuthLayout>
}
export default Register;