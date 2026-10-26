"use client"
import Image from 'next/image'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });

  const redirect = () => {
      window.location.href = '/login';
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

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
      const response = await axios.post('https://localhost:7169/api/Auth/register', formData);
      console.log('Registration successful:', response.data);
      
      setLoading(false);
      setSuccess(true);
      setInterval(redirect, 1000)

    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

 
  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center items-center">
    
          <Image src="/images/flower_bg.png" alt="Flower Shop" width={800} height={600} className="w-full h-auto absolute -z-50" />

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
                Registration successful!
            </div>
        </div>

          {/* Loading animation*/}
          <div className={`${loading ? 'flex' : 'hidden'} fixed inset-0  items-center justify-center z-50`}>
            <div className={"bg-gray-800 text-white p-4 rounded-lg shadow-lg loading-animation"}>
              {loading ? `Logging in${dots}` : "Login"}
            </div>
          </div>

          <div className="w-1/2 h-3/4 flex justify-center items-center bg-white shadow-xl rounded-3xl p-12">
              <form className="w-full h-full flex flex-col justify-between items-center" onSubmit={handleSubmit}>
                  <h1 className="text-3xl font-el-messiri font-bold text-primary">Create an Account</h1>
                  <input type="text" name="name" placeholder="Name" className="w-3/4 p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" onChange={handleChange} value={formData.name} />
                  <input type="email" name="email" placeholder="Email" className="w-3/4 p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" onChange={handleChange} value={formData.email} />
                  <input type="password" name="password" placeholder="Password" className="w-3/4 p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" onChange={handleChange} value={formData.password} />
                  <button className="w-3/4 p-4 bg-primary text-white rounded-lg hover:bg-[#913838] transition duration-300">
                    Create Account
                  </button>
                  <p>Already have an account? <a href="/login" className="text-primary hover:underline">Login</a></p>
              </form>
          </div>
    </div>
  )
}
