import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <section id="contact" className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <div>
          <label className="block text-left font-semibold">Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-left font-semibold">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-left font-semibold">Message</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
            className="w-full p-2 border border-gray-300 rounded h-32"
          />
        </div>
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
