import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Hearder = () => {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between px-3 mx-auto max-w-6xl items-center">
        <div>
          <img
            onClick={() => navigate("/")}
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
          />
        </div>
        <div>
          <ul className="flex justify-center items-center space-x-10">
            <li
              onClick={() => navigate("/")}
              className={`py-3 cursor-pointer text-sm font-semibold text-gray-400 hover:text-pink-600 ${
                pathMatchRoute("/") &&
                "text-black border-b-[3px] border-b-red-500"
              } `}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/offers")}
              className={`py-3 cursor-pointer text-sm font-semibold text-gray-400 hover:text-pink-600 ${
                pathMatchRoute("/offers") &&
                "text-black border-b-[3px] border-b-red-500"
              } `}
            >
              Offers
            </li>
            <li
              onClick={() => navigate("/profile")}
              className={`py-3 cursor-pointer text-sm font-semibold text-gray-400 hover:text-pink-600 ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/sign-in")) &&
                "text-black border-b-[3px] border-b-red-500"
              } `}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Hearder;
