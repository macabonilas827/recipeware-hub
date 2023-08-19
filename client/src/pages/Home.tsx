import { useSelector } from "react-redux";
import { RootState } from "../features/store";

const Home = () => {
  const user = useSelector((state: RootState) => state.auth);
  console.log(user);
  return (
    <div>
      <h1 className="text-3xl font-bold">RECIPEWARE HUB HOME</h1>
    </div>
  );
};
export default Home;
