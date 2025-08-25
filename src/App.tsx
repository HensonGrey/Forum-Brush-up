import { useState, type FormEvent } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try{

      //TODO: add a jwt authentication
      //TODO: save to local storage or redux the email to display it elsewhere
      await axios.post("https://localhost:5000/login", {
        email,
        password
      })
    }
    catch(error){
      console.error(`Login failed: ${error}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

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
