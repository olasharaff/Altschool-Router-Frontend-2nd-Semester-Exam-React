import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { toast } from 'react-toastify';
import Spinner from './Spinner';



export default function OAuth() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  

    async function onGoogleClick(){
         try {
          setLoading(true)
      const auth = getAuth() // create a new auth
      const provider = new GoogleAuthProvider(); // create provider method for google authentication
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      
      // create a method that check if user db already exists and then move the user data to firebase database

      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef) // check if the user data is available using user id
      // check if the user data is not available, it should set a doc for Name, Email and the Timestamp
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        })
       
      }
       navigate("/");
       toast.success("Successfully logged in");

    } catch (error) {
      toast.error('Couldn\'t connect to Google:', error)
    }
    }
     if (loading) {
       return <Spinner />;
     }
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center whitespace-nowrap w-full justify-center bg-red-600 font-medium text-sm uppercase text-white rounded-sm py-3 px-6 hover:bg-red-700 transition duration-200 ease-in-out hover:shadow-xl active:bg-blue-800"
    >
      {" "}
      <FcGoogle className="text-2xl mx-2 bg-white rounded-full" /> Continue with
      Google
    </button>
  );
}
