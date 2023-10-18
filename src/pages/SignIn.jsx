import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const {email, password} = formData
  const onChangeSignIn =(e) =>{
    setFormData((prevState)=>({
      ...prevState, [e.target.id]: e.target.value
  }))
  }
   async function onSubmitSignIn(e) {
     e.preventDefault();

     try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if(userCredential.user) {
        navigate('/')
      }
     } catch (error) {
      
     }
   }
  return (
    <>
      <section>
        <h1 className="text-center text-3xl font-semibold my-3">Sign In</h1>
        <div className="flex justify-center max-w-6xl px-6 py-12 flex-wrap mx-auto items-center">
          <div className="md:w-[67%] lg:w-[50%] mb-5 md:mb-6">
            <img
              src="https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="key"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
            <form onSubmit={onSubmitSignIn}>
              <input
                type="email"
                className="mb-6 w-full text-xl rounded-md transition ease-in-out border-gray-300 bg-white text-gray-500 py-2 px-4"
                id="email"
                value={email}
                placeholder="Email Address"
                onChange={onChangeSignIn}
              />
              <div className="relative mb-6">
                <input
                  type="text"
                  className="w-full text-xl rounded-md transition ease-in-out border-gray-300 bg-white text-gray-500 py-2 px-4"
                  id="password"
                  value={password}
                  placeholder="password"
                  onChange={onChangeSignIn}
                />
              </div>
              <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
                <p>
                  Don't have account?{" "}
                  <Link
                    className=" text-red-600 hover:text-red-700 transition duration-300 ease-in-out ml-1"
                    to="/sign-up"
                  >
                    {" "}
                    Register
                  </Link>{" "}
                </p>
                <p className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">
                  <Link to="/forget-password">Forget Password</Link>
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 font-medium text-sm uppercase text-white rounded-sm py-3 px-6 hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-xl active:bg-blue-800"
              >
                Sign In
              </button>
              <div className="flex items-center my-4 before:border-t-2 before:flex-1 before:border-gray-400 after:border-t-2 after:flex-1 after:border-gray-400">
                <p className="text-center font-medium mx-4">OR</p>
              </div>
              <OAuth />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
