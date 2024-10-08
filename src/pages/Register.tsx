// src/components/Register.jsx

import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRegisterUserMutation } from '../api/slice/usersSlice';
import LoadingSpinner from '../components/LoadingSpinner';

const Register = () => {
  const [registerUser, {data, isLoading, isSuccess, isError }] = useRegisterUserMutation();

  // State for form fields
  const [formData, setFormData] = useState({
    first_Name: '',
    last_Name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // State for form errors
  const [errors, setErrors] = useState<any>({});

  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State for success message
  const [success, setSuccess] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validate = () => {
    const newErrors: any = {};

    if (!formData.first_Name.trim()) {
      newErrors.first_Name = 'First name is required';
    }

    if (!formData.last_Name.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };


  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (validate()) {
      await registerUser(formData)

      
      // Clear errors
      setErrors({});
    }
  };
  
  useEffect(()=>{
    if(isSuccess){
      if(data?.id){

        setSuccess('Registration successful! You can now log in.')
        
        // Reset form
        setFormData({
          first_Name: '',
          last_Name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      }else if(data?.message){
        setSuccess(data.message)
      }
      else{
        setSuccess('Registration failed. Please try again.')
      }

    }
  },[data,isSuccess])


  return (
    <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8 mx-auto mt-7">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
       {/* First Name */}
<div className="mb-4">
  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
    First Name
  </label>
  <input
    type="text"
    id="firstName"
    name="first_Name"  
    value={formData.first_Name}
    onChange={handleChange}
    className={`w-full px-3 py-2 border ${
      errors.first_Name ? 'border-red-500' : 'border-gray-300'
    } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
    placeholder="Enter your first name"
  />
  {errors.first_Name && <p className="text-red-500 text-sm mt-1">{errors.first_Name}</p>}
</div>

{/* Last Name */}
<div className="mb-4">
  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
    Last Name
  </label>
  <input
    type="text"
    id="lastName"
    name="last_Name" 
    value={formData.last_Name}
    onChange={handleChange}
    className={`w-full px-3 py-2 border ${
      errors.last_Name ? 'border-red-500' : 'border-gray-300'
    } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
    placeholder="Enter your last name"
  />
  {errors.last_Name && <p className="text-red-500 text-sm mt-1">{errors.last_Name}</p>}
</div>


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
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter your password"
          />
          <span
            className="absolute  top-1/2 right-3 flex items-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="mb-6 relative">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Confirm your password"
          />
          <span
            className="absolute  right-3 top-1/2 flex items-center cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            {
              isLoading ?
              <LoadingSpinner/>:"Register"
            }
          </button>
        </div>
      </form>

      {/* Link to Login Page */}
      <p className="text-center text-gray-600">
        Already have an account?{' '}
        <a href="/login" className="text-blue-500 hover:underline">
          Login here
        </a>
      </p>
    </div>
  );
};

export default Register;