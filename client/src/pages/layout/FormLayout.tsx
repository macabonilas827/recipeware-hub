import { NavLink } from "react-router-dom";

interface ForSignIn {
  isForSignIn: boolean;
}

const Form = ({ isForSignIn }: ForSignIn) => {
  return (
    <form className="flex flex-col justify-center">
      {!isForSignIn && (
        <div>
          <label>Email</label>
          <input type="email" className="form-input" />
        </div>
      )}
      <label>Username</label>
      <input type="text" className="form-input" />
      <label>Password</label>
      <input type="password" className="form-input" />
      {!isForSignIn && (
        <div>
          <label>Confirm Password</label>
          <input type="password" className="form-input" />
        </div>
      )}
      <button className="px-4 py-1.5 mb-3 rounded-md shadow-lg bg-green-600 font-medium text-gray-100 block hover:bg-green-700 transition duration-300">
        {/* retriving if the user has an account */}
        <span className="hidden">Checking ...</span>

        <span>
          <NavLink to="home">{isForSignIn ? "Sign In" : "Sign Up"}</NavLink>
        </span>
      </button>
    </form>
  );
};
export default Form;
