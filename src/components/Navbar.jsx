import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import logo from '../assets/logo.png'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
console.log('Logo',logo)

export default function Navbar() {
  const [isPage, setIsPage] = useState('Sign -in')
  const auth = getAuth()
  useEffect(() => {
    // Track the change in the authentication
    onAuthStateChanged(auth, (user) => {
      // if the user exists or authenticated then set the isSetPage(profile)
      if (user) {
        setIsPage("Profile");
      } else {
        setIsPage("Sign In");
      }
    });
  }, [auth]);
  // create react-router hook  useNavigate and useLocation to navigate and set active  for the navbar link

  const navigate = useNavigate()
  const location = useLocation()
  // create function to match the location
  function PathMatch(route){
    return route === location.pathname

  }


  return (
    <>
      <nav className=" bg-blue-500  mb-5">
        <header className="flex justify-between items-center px-4 max-w-5xl mx-auto">
          <div className="py-3">
            <img
              onClick={() => navigate("/")}
              className="w-7 rounded-full cursor-pointer"
              src="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/a2vskka9ibwro5clrato"
              alt="logo"
            />
          </div>

          <div>
            <ul className="flex items-center space-x-3 text-white font-medium text-[15px]">
              <li
                onClick={() => navigate("/quote")}
                className={`cursor-pointer py-4 border-b-4   ${
                  PathMatch("/quote")
                    ? "text-black border-b-gray-400 cursor-pointer"
                    : "border-transparent"
                }`}
              >
                Quote
              </li>
              <li
                onClick={() => navigate("/contact")}
                className={`cursor-pointer py-4 border-b-4   ${
                  PathMatch("/contact")
                    ? "text-black border-b-gray-600 cursor-pointer"
                    : "border-transparent"
                }`}
              >
                Contact
              </li>
              <li
                onClick={() => navigate("/profile")}
                className={`cursor-pointer py-4 border-b-4  ${
                  (PathMatch("/sign-in") || PathMatch("/profile")) &&
                  "text-black border-b-red-500 cursor-pointer"
                } :  border-transparent `}
              >
                {isPage}
              </li>
            </ul>
          </div>
        </header>
      </nav>
    </>
  );
}
