'use client';
import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSession } from 'next-auth/react'


const Formulario = () =>  {
    const { data: sessionData } = useSession()
    const router = useRouter()
  
    const [inputs, setInputs] = useState({
      title: '',
      website: '',
    })

    return (
      <>
          {/* Tell us about yourself inputs */}
          {sessionData && (
            <>
              <div className='mx-auto max-w-7xl'>
                <h2 className='mb-6 text-left text-3xl font-semibold text-white'>MegaMassive</h2>
                <div className='mb-12 grid grid-cols-2 gap-8'>
                  {/* Input field 1 */}
                  <div>
                    <label htmlFor='email' className='block text-sm font-medium text-white'>
                      Title
                    </label>
                    <div className='mt-1'>
                      <input
                        value={inputs.title}
                        onChange={(e) => setInputs((prev) => ({ ...prev, title: e.target.value }))}
                        type='text'
                        name='title'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        placeholder='Software Engineer'
                      />
                    </div>
                  </div>
  
                  {/* Input field 2 */}
                  <div>
                    <label htmlFor='email' className='block text-sm font-medium text-white'>
                      Website
                    </label>
                    <div className='mt-1'>
                      <input
                        value={inputs.website}
                        onChange={(e) => setInputs((prev) => ({ ...prev, website: e.target.value }))}
                        type='text'
                        name='website'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        placeholder='yoursite.com'
                      />
                    </div>
                  </div>
                </div>
              </div>
  
              {/* main business card
              <div className='flex flex-col items-center justify-center'>
                <BusinessCard inputs={inputs} />
              </div> */}
  
              {/* Publish Button */}
              <div className='mt-12 flex justify-center'>
                <button
                  type='button'
                  className='rounded-full bg-black/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-black/20'>
                  Publish
                </button>
              </div>
            </>
          )}
        
      </>
    )
}

export default Formulario;
