import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* Name input */}
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full rounded px-4 mb-6 py-2 text-xl text-gray-700 bg-white border border-gray-300 transition ease-in-out"
            />
            {/* Email input */}
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="w-full rounded px-4 mb-6 py-2 text-xl text-gray-700 bg-white border border-gray-300 transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">
                Do you want to chage name?
                <span className="text-red-600 hover:text-red-700 duration-200 transition ml-1 cursor-pointer ease-in-out">
                  Edit
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-800 transition duration-200 cursor-pointer ease-in-out"
              >
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
