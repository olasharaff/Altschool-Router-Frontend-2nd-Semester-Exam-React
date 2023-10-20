import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import logo from '../assets/logo.png'
import { getAuth, onAuthStateChanged } from 'firebase/auth';


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
          <div className="flex items-center gap-3">
            <img
              onClick={() => navigate("/")}
              className="w-7 cursor-pointer"
              src={logo}
              alt="logo"
            />
            <p
              onClick={() => navigate("/")}
              className={`cursor-pointer py-4 border-b-4   ${
                PathMatch("/")
                  ? "text-black border-transparent cursor-pointer"
                  : "border-transparent"
              }`}
            >
              Home
            </p>
          </div>

          <div>
            <ul className="flex items-center space-x-3 text-white font-medium text-[15px]">
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
