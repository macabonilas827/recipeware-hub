import { NavLink } from "react-router-dom";
import TitleLayout from "./TitileLayout";
interface ForSignIn {
  isForSignIn: boolean;
}

const Form = ({ isForSignIn }: ForSignIn) => {
  const backgroundColor = isForSignIn
    ? "from-green-200 to-green-500"
    : "from-orange-200 to-orange-500";
  const cardBackgroundColor = isForSignIn ? "bg-green-100" : "bg-orange-100";
  const buttonColor = isForSignIn
    ? "bg-green-600 hover:bg-green-700"
    : "bg-orange-600 hover:bg-orange-700";

  const linkTo = isForSignIn ? "register" : "/";

  return (
    <div className={`bg-gradient-to-tr ${backgroundColor}`}>
      <section className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
        <div className={`p-6 ${cardBackgroundColor} rounded`}>
          <TitleLayout
            titleColor={`${isForSignIn ? "text-green-900" : "text-orange-900"}`}
          />
          <form className="flex flex-col justify-center">
            {!isForSignIn && (
              <div>
                <label>Email</label>
                <input type="email" className="form-input-borderOrange" />
              </div>
            )}
            <label>Username</label>
            <input
              type="text"
              className={`${
                isForSignIn
                  ? "form-input-borderGreen"
                  : "form-input-borderOrange"
              }`}
            />
            <label>Password</label>
            <input
              type="password"
              className={`${
                isForSignIn
                  ? "form-input-borderGreen"
                  : "form-input-borderOrange"
              }`}
            />
            {!isForSignIn && (
              <div>
                <label>Confirm Password</label>
                <input type="password" className="form-input-borderOrange" />
              </div>
            )}
            <button
              className={`px-4 py-1.5 mb-3 rounded-md shadow-lg  font-medium text-gray-100 block ${buttonColor}  transition duration-300`}
            >
              {/* retriving if the user has an account */}
              {/* <span className="hidden">Checking ...</span> */}

              <span>
                {isForSignIn && <NavLink to="home">Sign In</NavLink>}
                {!isForSignIn && <NavLink to="/">Sign Up</NavLink>}
              </span>
            </button>
          </form>
          <div className="flex justify-center">
            <NavLink to={linkTo} className="inline-block mt-1 underline">
              {isForSignIn
                ? "Sign up for an Account"
                : "Have an account? Sign In instead"}
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Form;
