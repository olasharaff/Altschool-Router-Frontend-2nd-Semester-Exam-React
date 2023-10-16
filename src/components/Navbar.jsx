import React from 'react'
import { useLocation, useNavigate } from 'react-router';
import logo from '../assets/logo.png'
console.log('Logo',logo)

export default function Navbar() {
  // create react-router hook  useNavigate and useLocation to navigate and set active  for the navbar link

  const navigate = useNavigate()
  const location = useLocation()
  // create function to match the location
  function PatchMatch(route){
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
                  PatchMatch("/quote")
                    ? "text-black border-b-gray-400 cursor-pointer"
                    : "border-transparent"
                }`}
              >
                Quote
              </li>
              <li
                onClick={() => navigate("/contact")}
                className={`cursor-pointer py-4 border-b-4   ${
                  PatchMatch("/contact")
                    ? "text-black border-b-gray-600 cursor-pointer"
                    : "border-transparent"
                }`}
              >
                Contact
              </li>
              <li
                onClick={() => navigate("/sign-in")}
                className={`cursor-pointer py-4 border-b-4  ${
                  PatchMatch("/sign-in")
                    ? "text-black border-b-gray-300 rounded-sm  cursor-pointer"
                    : "border-transparent"
                }`}
              >
                Sign In
              </li>
            </ul>
          </div>
        </header>
      </nav>
    </>
  );
}
