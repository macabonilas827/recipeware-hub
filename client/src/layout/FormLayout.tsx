// import { NavLink } from "react-router-dom";
// import TitleLayout from "./TitileLayout";
// import InputLayout from "./InputLayout";

// interface ForSignIn {
//   isForSignIn: boolean;
// }

// const Form = ({ isForSignIn }: ForSignIn) => {
//   const backgroundColor = isForSignIn
//     ? "from-green-200 to-green-500"
//     : "from-orange-200 to-orange-500";
//   const cardBackgroundColor = isForSignIn ? "bg-green-100" : "bg-orange-100";

//   const linkTo = isForSignIn ? "register" : "/";

//   return (
//     <div className={`bg-gradient-to-tr ${backgroundColor}`}>
//       <section className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
//         <div className={`p-6 ${cardBackgroundColor} rounded`}>
//           <TitleLayout
//             titleColor={`${isForSignIn ? "text-green-900" : "text-orange-900"}`}
//           />
//           {isForSignIn && <InputLayout mode="signIn" />}
//           {!isForSignIn && <InputLayout mode="register" />}
//           <div className="flex justify-center">
//             <NavLink to={linkTo} className="inline-block mt-1 underline">
//               {isForSignIn
//                 ? "Sign up for an Account"
//                 : "Have an account? Sign In instead"}
//             </NavLink>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default Form;
