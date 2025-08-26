import { useEffect, useState, type FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const token = localStorage.getItem("token");

  const navigate = useNavigate()

  useEffect(() => {
    if(token) navigate('/dashboard')
  }, [token, navigate])

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password
      })

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", email)
      navigate("/dashboard");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
      setError(err.response.data.message);
}
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

      {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@mail.com"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="example1234"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Forgot your password?{" "}
          <a href="#" className="text-blue-500 hover:underline">Reset here!</a>
        </p>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Login
        </button>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Don't have an account?{" "}
          <a href="\register" className="text-blue-500 hover:underline">Register here</a>
        </p>
      </form>
    </div>
  );
}

export default App;
