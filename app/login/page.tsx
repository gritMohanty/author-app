"use client";
import Button from "@/components/Button";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { login, signup } from "./actions";

const Login = () => {
  return (
    <form className="flex items-center justify-center flex-col gap-12 mt-32">
      <div className="flex flex-col">
        <span>email</span>
        <div className="w-64 p-4 border-2 border-black">
          <input type="email" className="outline-none border-none w-full" name="email"/>
        </div>
      </div>
      <div className="flex flex-col">
        <span>password</span>
        <div className="w-64 p-4 border-2 border-black flex items-center justify-center">
          <input type="password" className="outline-none border-none w-full" name="password"/>
        </div>
      </div>
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  );
};

export default Login;
