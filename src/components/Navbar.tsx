import { useContext } from "react";
import { GlobalContext } from "../providers/GlobalProvider";

const Navbar = () => {
  const { handleLogout } = useContext(GlobalContext)!;
  return (
    <div className="w-full flex items-center justify-between px-2">
      <h1 className="text-left text-2xl font-bold">Dubbing Interface</h1>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
