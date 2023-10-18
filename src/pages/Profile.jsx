import { getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';


export default function Profile() {
    const auth = getAuth();
     const [isFormData, setIsFormData] = useState({
       name: auth.currentUser.displayName,
       email: auth.currentUser.email,
     });
     const { name, email } = isFormData;
    
    const navigate = useNavigate()

    function onLogOut() {
      auth.signOut();
      // create a method to navigate back to the Home page after signed out
      navigate("/");
    }
     function onChange(e) {
       setIsFormData((prevState) => ({
         ...prevState,
         [e.target.id]: e.target.value,
       }));
     }
  return (
    <section className="flex items-center justify-center flex-col mx-auto max-w-6xl px-4">
      <h1 className="text-3xl font-semibold text-center mt-5"> My Profile</h1>
      <div className="w-full md:w-[50%] mt-5">
        <form>
          <input
            onChange={onChange}
            disabled
            type="text"
            className={`mb-5 w-full px-4 py-2 text-lg text-gray-600 border border-gray-400 rounded transition ease-in-out ${"bg-red-200 focus:bg-red-300"}`}
            value={name}
            id="name"
          />
          <input
            onChange={onChange}
            type="email"
            className="mb-5 w-full px-4 py-2 text-lg text-gray-600 border border-gray-400 rounded transition ease-in-ou"
            value={email}
            id="email"
          />

          <div className="mb-6 flex justify-between whitespace-nowrap text-sm sm:text-lg">
            <p className="flex items-center">
              Do you want to change your name?{" "}
              <span className="text-red-500 ml-1 hover:text-red-700 transition duration-200 ease-in-out cursor-pointer">
                {/* Create a dynamic method=> if the change is true it should show Apply change otherwise Edit */}{" "}
              </span>
            </p>
            <p
              onClick={onLogOut}
              className="text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out cursor-pointer"
            >
              Sign out
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
