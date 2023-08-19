import { FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { AppDispatch } from "../features/store";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../features/form/authSlice";

interface Mode {
  mode: string;
}
interface User {
  id: number;
  username: string;
  password: string;
}

const InputLayout = ({ mode }: Mode) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  let buttonColor;
  let user: User;

  if (mode === "signIn") {
    buttonColor = "bg-green-600 hover:bg-green-700";
    user = { id: 1, username, password };
  } else if (mode === "register") {
    buttonColor = "bg-orange-600 hover:bg-orange-700";
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(signInSuccess(user));
    setUsername("");
    setPassword("");
    navigate("home");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center">
      {mode === "register" && (
        <label>
          Email
          <input type="email" className="form-input-borderOrange" />
        </label>
      )}
      <label>
        Username
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className={`${
            mode === "signIn"
              ? "form-input-borderGreen"
              : "form-input-borderOrange"
          }`}
        />
      </label>

      <label>
        Password
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className={`${
            mode === "signIn"
              ? "form-input-borderGreen"
              : "form-input-borderOrange"
          }`}
        />
      </label>
      {mode === "register" && (
        <label>
          Confirm Password
          <input type="password" className="form-input-borderOrange" />
        </label>
      )}
      <button
        type="submit"
        className={`px-4 py-1.5 mb-3 rounded-md shadow-lg  font-medium text-gray-100 block ${buttonColor}  transition duration-300`}
      >
        {mode === "signIn" && "Sign In"}
        {mode === "register" && "Sign Up"}
        {/* retriving if the user has an account */}
        {/* <span className="hidden">Checking ...</span> */}

        {/* {mode === "signIn" && <NavLink to="home">Sign In</NavLink>}
        {mode === "register" && <NavLink to="/">Sign Up</NavLink>} */}
      </button>
    </form>
  );
};
export default InputLayout;
