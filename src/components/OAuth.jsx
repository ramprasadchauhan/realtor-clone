import { FcGoogle } from "react-icons/fc";
const OAuth = () => {
  return (
    <button className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 text-sm font-medium uppercase hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-200 rounded">
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
};

export default OAuth;
