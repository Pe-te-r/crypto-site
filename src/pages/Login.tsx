// src/components/Login.jsx

import React, { useEffect, useState } from 'react';
import { useLoginUserMutation } from '../api/slice/usersSlice';

const Login = () => {
  const [loginUser, { data, isLoading, isSuccess, isError }] = useLoginUserMutation();

  // State for form fields
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    code: '',
  });

  // State for form errors
  const [errors, setErrors] = useState<any>({});
  const [code,setCode]= useState<boolean>(false)

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validate = () => {
    const newErrors: any = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (!formData.code && code) {
      newErrors.code = 'Code is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('Login Data:', formData);
      loginUser(formData);
      // Here you can add logic to send formData to your API

      // Reset form
      setFormData({
        email: '',
        password: '',
        code: '',
      });

      // Clear errors
      setErrors({});
    }
  };
  useEffect(()=>{
    if(isSuccess){
      console.log(data)
      if(data?.message){
        if(data.message == 'code'){
          setCode(true)
        }
        
      }else if(data?.error){

      }
    }
  },[isSuccess,data])

  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-8 mx-auto mt-7">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <form onSubmit={handleSubmit} noValidate>
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter your email address"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Code */}
        {
          code &&
        <div className="mb-4">
          <label htmlFor="code" className="block text-gray-700 font-medium mb-2">
            Code
          </label>
          <input
            type="text"
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.code ? 'border-red-500' : 'border-gray-300'
              } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your code"
              />
          {errors.code && <p className="text-red-500 text-sm mt-1">{errors.code}</p>}
        </div>
        }

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
