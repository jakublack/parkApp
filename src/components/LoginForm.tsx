import { useState, type FormEvent } from 'react';
import { useAuth } from '../hooks/useAuth';

export const LoginForm = () => {
  const [email, setEmail] = useState('tester@parkapp.pl');
  const [password, setPassword] = useState('testPassword');
  const [showPassword, setShowPassword] = useState(false);
  const { login, loginLoading } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to Park App
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your credentials to access the pilot dashboard
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="relative block w-full px-3 py-2 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <button
                id="password-toggle"
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
                name={showPassword ? 'Hide password' : 'Show password'}
              >
                <span className="text-gray-400 hover:text-gray-600 text-sm">
                  {showPassword ? 'Hide' : 'Show'}
                </span>
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={loginLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loginLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Sign in'
              )}
            </button>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-md">
            <h4 className="text-sm font-medium text-blue-800">
              Test Credentials
            </h4>
            <p className="text-sm text-blue-700 mt-1">
              Email: tester@parkapp.pl
              <br />
              Password: testPassword
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
