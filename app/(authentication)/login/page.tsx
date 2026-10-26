"use client"
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const redirect = () => {
      window.location.href = '/';
  }

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [dots, setDots] = useState("...");

  useEffect(() => {
      if (!loading) return;

      const animations = ["...", "..", ".", ".."];

      let index = 0;

      const interval = setInterval(() => {
          setDots(animations[index]);
          index = (index + 1) % animations.length;
      }, 400);

      return () => clearInterval(interval);
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post(
        "https://localhost:7169/api/Auth/login",
        {
            email: formData.email,
            password: formData.password
        },
        {
            withCredentials: true
        }
);
      setLoading(false);
      setSuccess(true);
      setInterval(redirect, 1000)

    } catch (error) {
      console.error('Error during login:', error);
    } 
  }

  


  return (
    <div className="relative w-full min-h-screen overflow-hidden flex justify-center items-center p-4 sm:p-8">
    
          <Image src="/images/flower_bg.png" alt="Flower Shop" fill sizes="100vw" className="absolute -z-50 object-cover" />
          {/* popup success */}
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center
            transition-all duration-200
            ${
                success
                    ? "translate-y-6 opacity-100"
                    : "-translate-y-12 opacity-0 pointer-events-none"
            }`}
        >
            <div className="border border-green-500 text-green-500 bg-white p-4 rounded-lg shadow-lg mb-12">
                Login successful!
            </div>
        </div>

          {/* Loading animation*/}
          <div className={`${loading ? 'flex' : 'hidden'} fixed inset-0  items-center justify-center z-50`}>
            <div className={"bg-gray-800 text-white p-4 rounded-lg shadow-lg loading-animation"}>
              {loading ? `Logging in${dots}` : "Login"}
            </div>
          </div>

          <div className="w-full max-w-xl min-h-[28rem] sm:min-h-[34rem] flex justify-center items-center bg-white shadow-xl rounded-3xl p-6 sm:p-12">
              <form onSubmit={handleSubmit} className="w-full min-h-[24rem] flex flex-col justify-between items-center py-6 sm:py-12">
                  <h1 className="text-3xl font-el-messiri font-bold text-primary">Login</h1>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full sm:w-3/4 p-3 sm:p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full sm:w-3/4 p-3 sm:p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button type="submit" className="w-full sm:w-3/4 p-4 bg-primary text-white rounded-lg hover:bg-[#913838] transition duration-300">
                    Login
                  </button>
                  <p>Don't have an account? <a href="/register" className="text-primary hover:underline">Register</a></p>
              </form>
          </div>
    </div>
  )

}
