import { useState, FormEvent } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/form/authApiSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await login({ username, password }).unwrap();
      localStorage.setItem("token", result.token);
      setUsername("");
      setPassword("");
      navigate("home");
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={`bg-gradient-to-tr from-green-200 to-green-500`}>
      <section className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
        <div className={`p-6 bg-green-100 rounded`}>
          <div
            className={`flex items-center justify-center text-base font-black text-green-900 m3`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>

            <h1 className="tracking-wide font-roboto-bold">RecipewareHub</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center"
          >
            <label>
              Username
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="form-input-borderGreen"
              />
            </label>

            <label>
              Password
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-input-borderGreen"
              />
            </label>
            <button
              type="submit"
              className="px-4 py-1.5 mb-3 rounded-md shadow-lg  font-medium text-gray-100 block bg-green-600 hover:bg-green-700  transition duration-300"
            >
              Sign In
            </button>
          </form>
          <div className="flex justify-center">
            <NavLink to="register" className="inline-block mt-1 underline">
              Sign up for an Account
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
