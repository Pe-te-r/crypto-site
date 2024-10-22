import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useLoginUserMutation } from '../api/slice/usersSlice';
import LoadingSpinner from '../components/LoadingSpinner';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '../context_fi/ToastContext';
import { useLocalStorageContext } from '../context_fi/LocalStorageContext';
import { useAuth } from '../components/ProtectedRoute';

const Login = () => {
  const [loginUser, { data, isLoading, isSuccess, isError, error }] = useLoginUserMutation();
  const navigate = useNavigate();
  const { loginUserNow } = useAuth();

  const location = useLocation();
  const { showToast } = useToast();

  const {  setData } = useLocalStorageContext();
  // const { setUser } = useAuth();

  // State for form fields
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    code: '',
  });

  // State for form errors
  const [errors, setErrors] = useState<any>({});

  // State to determine if 'code' field is required
  const [code, setCode] = useState<boolean>(false);

  // State for password visibility
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // State for messages displayed at the top
  const [message, setMessage] = useState({
    text: '',
    type: '', // 'success', 'error', or 'warning'
  });

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

    if (code && !formData.code.trim()) {
      newErrors.code = 'Code is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      loginUser(formData);
      
      // Clear errors
      setErrors({});
    }
  };

  useEffect(() => {
    // Handle navigation from Register component with a success message
    if (location.state?.registered) {
      showToast('Registration successful! You can now log in.', 'success');
      // Clear the state to prevent the toast from showing again on refresh
      window.history.replaceState({}, document.title);
    }

    if (isSuccess) {
      if (data?.message) {
        if (data.message === 'code') {
          setCode(true);
          setMessage({
            text: 'You need to verify your email. Please enter the code sent to your email.',
            type: 'warning',
          });
        } else {
          setMessage({
            text: data.message,
            type: 'error',
          });
        }
      } else if (data?.user) {
        showToast('Login successful!', 'success');
        // Reset form fields
        setData({id:data.user.id,token:data.user.token})
      setFormData({
        email: '',
        password: '',
        code: '',
      });
        navigate('/'); // Redirect to home page
        loginUserNow('/user')
      }
    }

    if (isError) {
      setMessage({
        text: 'An unexpected error occurred.',
        type: 'error',
      });
    }
  }, [isSuccess, isError, data, error, location.state, showToast, navigate]);

  // Determine the background color based on message type
  const getMessageStyle = () => {
    switch (message.type) {
      case 'success':
        return 'bg-green-100 text-green-700';
      case 'warning':
        return 'bg-yellow-100 text-yellow-700';
      case 'error':
        return 'bg-red-100 text-red-700';
      default:
        return '';
    }
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-8 mx-auto mt-7">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      {/* Display message at the top */}
      {message.text && (
        <div className={`mb-4 p-3 rounded ${getMessageStyle()}`}>
          {message.text}
        </div>
      )}

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
            className="absolute top-1/2 right-3 flex items-center cursor-pointer transform -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Code */}
        {code && (
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
        )}

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? <LoadingSpinner /> : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
