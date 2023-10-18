import React from 'react'
import Spinner from '../components/Spinner';

export default function NotFound() {
  return (
    <div className='flex flex-col m-auto justify-center items-center mt-[10%]'>
      <h2 className='text-4xl font-bold mb-2'>404 - Not Found</h2>
      <p className='text-lg'>Sorry, the page you are looking for does not exist.</p>
      <Spinner/>
    </div>
  );
}
