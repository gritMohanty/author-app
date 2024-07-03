import Button from '@/components/Button';
import React from 'react'

const Signup = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-12 mt-32">
      <div className="flex flex-col">
        <span>email</span>
        <div className="w-64 p-4 border-2 border-black">
          <input type="email" className="outline-none border-none w-full" />
        </div>
      </div>
      <div className="flex flex-col">
        <span>password</span>
        <div className="w-64 p-4 border-2 border-black flex items-center justify-center">
          <input type="password" className="outline-none border-none w-full" />
        </div>
      </div>
      <div className="flex flex-col">
        <span>confirm password</span>
        <div className="w-64 p-4 border-2 border-black flex items-center justify-center">
          <input type="password" className="outline-none border-none w-full" />
        </div>
      </div>
      <Button label="sign up" />
    </div>
  );
}

export default Signup;