import React, { useState } from 'react';

const Contact = () => {
  // Form state to capture input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data (e.g., send to API)
    console.log('Form data submitted:', formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="min-h-fit mt-0 p-3  flex justify-center items-start pt-16 ">
    {/* <div className="h-full flex justify-center items-start pt-16 bg-gray-100"> */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mt-16"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
  
        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
  
        {/* Email Input */}
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
            placeholder="Your email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
  
        {/* Message Textarea */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows={4}
            required
          ></textarea>
        </div>
  
        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-500 w-1/3 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
  
}
export default Contact;
