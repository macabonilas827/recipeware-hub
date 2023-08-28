import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../src/pages/Home";
// import Register from "../src/pages/Register";
import Login from "./auth/Login";

const router = createBrowserRouter([
  {
    path: "/recipewarehub/users/login",
    element: <Login />,
  },
  // {
  //   path: "register",
  //   element: <Register />,
  // },
  {
    path: "/recipewarehub/users/home",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
