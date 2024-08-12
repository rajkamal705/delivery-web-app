'use client';
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function page() {
    return (
        <>
            <div className='flex justify-center items-center bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 min-h-screen'>
                <div className='flex flex-col'>
                    <p className='mt-8 font-[700] text-[44px] text-white leading-[50px]'>Login to your <br></br> Account</p>
                    
                    <form className="flex flex-col items-stretch pt-3 md:pt-8">
                        <div className="flex flex-col pt-4">
                            <div className="relative flex overflow-hidden rounded-md transition" style={{ borderRadius: "10px" }}>
                                <input type="email" id="login-email" className="w-full flex-shrink appearance-none bg-white py-4 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="✉️ Email" />
                            </div>
                        </div>
                        <div className="mb-4 flex flex-col pt-4">
                            <div className="relative flex overflow-hidden rounded-md transition" style={{ borderRadius: "10px" }}>
                                <input type="password" id="login-password" className="w-full flex-shrink appearance-none bg-white py-4 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="🔒 Password" />
                            </div>
                        </div>
                        <div className="flex justify-center gap-3 mt-2">
                          <input type="checkbox" value="" className="border-[2px] border-[#47AC5F] w-5 h-5 my-4 rounded-xl" /> 
                          <span className='text-[#212121] flex items-center'>Remember me</span>
                        </div>
                    </form>

                    <Link href="/profile" className='mt-2'>
                        <button className='text-[16px] font-[700] bg-white rounded-full px-52 py-4 text-[#206ec0]'>Sign in</button>
                    </Link>

                    <Link href="/forgot-password" className='text-center font-[600] text-[16px] mt-4 text-[#47AC5F]'>
                      Forgot the password?
                    </Link>

                    <div className='mt-8 flex gap-4 justify-between'>
                        <div className='text-[#EEEEEE]'>_________________</div>
                        <span className='text-[18px] font-[600] text-[#616161]'>or continue with</span>
                        <div className='text-[#EEEEEE]'>_________________</div>
                    </div>

                    <div className='flex justify-center gap-6 mt-8'>
                        <div className='flex gap-3 bg-white rounded-xl px-6 py-4'>
                            <Image width={24} height={24} src="/Images/facebook.svg" alt="img" />
                        </div>
                        <div className='flex gap-3 bg-white rounded-xl px-6 pu-4'>
                            <Image width={24} height={24} src="/Images/google.svg" alt="img" />
                        </div>
                    </div>

                    <div className='mt-10 mb-10 flex justify-center gap-4'>
                        <span className='flex items-center text-[#9E9E9E]'>Don't have an account?</span>
                        <Link href="/signup">
                          <span className='text-[#47AC5F] font-[600]'>Sign up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page