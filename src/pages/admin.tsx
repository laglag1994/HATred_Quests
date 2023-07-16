
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';

const Admin = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  async function onSubmit() {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (res.status === 200) {
      const data = await res.json();
      const token = data.token;

      if (token) {
        const decodedToken = jwt.decode(token);
        console.log(decodedToken);
        localStorage.setItem('token', token);
        router.push('/dashboard');
      } else {
        setMsg('Wrong credentials');
      }
    } else {
      setMsg('Wrong credentials');
    }
  }

  return (
    <div className="flex flex-col justify-start items-center gap-10 bg-[#2C3639] min-h-screen pb-20">
      <div className="flex justify-center items-center gap-2 bg-[#3F4E4F] w-full py-5">
        <img src="/PRM.png" alt="" height={100} width={100} />
        <h1 className="text-4xl text-white">Admin Login</h1>
      </div>
      <h1 className="text-white">{msg}</h1>

      <div className="flex justify-center items-center">
        <form className="flex flex-col gap-10">
          <input
            className="py-2"
            name="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <input
            className="py-2"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <input
            className="bg-[#a27b5c] cursor-pointer py-2 text-white hover:opacity-80 transition-all duration-200"
            type="button"
            value="Login"
            onClick={onSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Admin;
