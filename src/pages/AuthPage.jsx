import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');

  // Show login form after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowLogin(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const res = await axios.post("http://localhost:3000/api/users/login", { email, password });
      localStorage.setItem('token', res.data.token);
      alert("Logged In!");
    } catch (err) {
      console.log(err);
      setErrorMsg("Login failed. Showing register form...");
      setShowLogin(false);
      setShowRegister(true);
    }
  };

  // Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const res = await axios.post("http://localhost:3000/api/users/register", formData);
      alert("Registered Successfully!");
      setShowRegister(false);
      setShowLogin(true); // optionally allow them to login
    } catch (err) {
      console.log(err);
      setErrorMsg("Registration failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-blue-300 p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md transition-all duration-500">
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-4">
          {showLogin ? 'Login' : showRegister ? 'Register' : 'Loading...'}
        </h1>

        {errorMsg && (
          <p className="bg-red-100 text-red-700 text-sm text-center mb-4 py-2 px-4 rounded-md">
            {errorMsg}
          </p>
        )}

        {showLogin && (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition"
            >
              Login
            </button>
          </form>
        )}

        {showRegister && (
          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-3 rounded-md hover:bg-purple-800 transition"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
