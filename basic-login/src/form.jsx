import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Form() {
  // useLocation hook'u ile mevcut sayfanın konum bilgisini al
  const location = useLocation();

  // Konum bilgisi içindeki state nesnesinden verileri al
  const { state } = location;
  const { username, email, password, date, about, image } = state;


  const reverseDate = (inputDate) => {
    const dateObject = new Date(inputDate);
    const reversedDate = dateObject.toLocaleDateString('tr-TR'); // Adjust the locale based on your requirements
    return reversedDate;
  };

  return (
    <div className=' bg-slate-400 flex justify-center items-center h-screen'>
      <form className='form w-1/3'>
        <div className='flex flex-wrap'>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 md:mb-0 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Image
            </label>
            <div className=" md:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
              {image && (
                  <div className='object-cover h-full w-full'>
                    <img src={image} style={{height:"150px"}} />
                  </div>
                )}
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 px-4 mt-6">
            <div className="w-full md:w-full">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Username
              </label>
              <div className="bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                {username}
              </div>
            </div>
            <div className="w-full md:w-full">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <div className="bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {email}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-full mt-3 ">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            password
          </label>
          <div className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">{password}</div>
        </div>
        <div className="md:w-full">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            date
          </label>
          <div className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">{reverseDate(date)}</div>
        </div>
        <div className="md:w-full">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            about
          </label>
          <div className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">{about}</div>
        </div>
      </form>
    </div>
  );
}
