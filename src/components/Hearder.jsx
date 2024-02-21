import { useLocation, useNavigate } from "react-router-dom";

const Hearder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
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
              className={`py-3 cursor-pointer text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              } `}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/offers")}
              className={`py-3 cursor-pointer text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              } `}
            >
              Offers
            </li>
            <li
              onClick={() => navigate("/sign-in")}
              className={`py-3 cursor-pointer text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/sign-in") && "text-black border-b-red-500"
              } `}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Hearder;
