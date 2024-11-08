import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, login, setError, googleLogin } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message || "Failed to login");
    }

    setLoading(false);
  }

  async function handleFormSubmitForGoogle() {
    try {
      setError("");
      setLoading(true);
      await googleLogin();
      navigate("/");
    } catch (e) {
      setError(e.message || "Failed to login with Google");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-slate-800 px-6 py-8 rounded-2xl">
        <div>
          <h2 className="mt-4 text-3xl text-center tracking-tight font-light dark:text-white">
            Login to your account
          </h2>
        </div>
        <form className="mt-8 space-y-4" onSubmit={handleFormSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-solid relative block w-full my-2 px-3 py-2 placeholder-gray-500 rounded-b-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-800 hover:bg-sky-900"
            >
              Login with Email
            </button>
          </div>
        </form>
        <div className="text-center text-sky-300 font-bold">
          <h3>OR</h3>
        </div>
        <div className="mt-4">
          <button
            onClick={handleFormSubmitForGoogle}
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            Login with Google
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link
              to="/register"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
            Don't have an account? Register
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
