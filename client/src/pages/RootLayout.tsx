import { NavLink } from "react-router-dom";
import FormLayout from "./layout/FormLayout";
import TitleLayout from "./layout/TitileLayout";
export default function Layout() {
  return (
    <div className="bg-gradient-to-tr from-green-200 to-green-500">
      <section className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
        <div className="p-6 bg-green-100 rounded">
          <TitleLayout />
          <FormLayout isForSignIn={true} />
          <NavLink
            to="register"
            className="flex items-center justify-center mt-1 underline"
          >
            Sign up for an Account
          </NavLink>
        </div>
      </section>
    </div>
  );
}
