"use client";
import AuthLayout from "../components/authLayout";
import { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';

function Login() {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =  async() => {
        try {
            const response = await axios.post(`/api/auth/login`,
                {email, password}
            );

            if(response.statusText === "OK") {
                router.push("/profile")
            }

            console.log("Login response: ", response);
        } catch (error) {
            console.error("Login failed: ", error);
        }
    };

    return (
        <>
        <input
         type="email" id="email"
          className="rounded min-h-8 outline-2 outline-red-200 placeholder:text-center text-center"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}></input>

        <input type="password" id="password"
         className="rounded min-h-8 outline-2 outline-red-200 placeholder:text-center text-center"
         placeholder="Enter your password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}></input>
         
        <button id="submit"
         className="rounded relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-heading rounded-base group bg-linear-to-br from-red-200 to-red-400 group-hover:from-red-200 group-hover:to-red-400 hover:text-black focus:ring-4 focus:outline-none"
         onClick={handleSubmit}>
            <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-neutral-primary-soft rounded-base group-hover:bg-transparent group-hover:dark:bg-transparent leading-5">
                Sign in
            </span>
        </button>
        </>
    )
}

Login.getLayout = function getLayout(page) {
    return <AuthLayout title="Login">{page}</AuthLayout>
}
export default Login;