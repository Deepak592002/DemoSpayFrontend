import React, { useState } from 'react';

const LoginSignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (login or signup)
    if (isLogin) {
      // Handle login
      console.log('Logging in with:', { email, password });
    } else {
      // Handle signup
      console.log('Signing up with:', { email, password });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-4">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
              type="submit"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
            <button
              className="text-sm text-blue-500 hover:text-blue-800 focus:outline-none"
              type="button"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up Instead' : 'Login Instead'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignupForm;
