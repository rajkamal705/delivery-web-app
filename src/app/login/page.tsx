'use client';
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function page() {
    return (
        <>
            <div className='flex justify-center items-center bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 min-h-screen'>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <Image width={230} height={200} src="/Images/login.svg" alt="img" />
                    </div>
                    <p className='mt-8 font-[700] text-[48px] text-center'>Let’s you in</p>
                    <div className='flex justify-center gap-3 bg-white rounded-xl px-20 py-4 mt-10'>
                        <Image width={24} height={24} src="/Images/facebook.svg" alt="img" />
                        <span className='text-[16px] font-[600] text-[#212121]'>Continue with Facebook</span>
                    </div>
                    <div className='flex justify-center gap-3 bg-white rounded-xl px-20 py-4 mt-3'>
                        <Image width={24} height={24} src="/Images/google.svg" alt="img" />
                        <span className='text-[16px] font-[600] text-[#212121]'>Continue with Google</span>
                    </div>

                    <div className='mt-8 flex gap-4 justify-between'>
                        <div className='text-[#EEEEEE]'>_________________________</div>
                        <span className='text-[18px] font-[600] text-[#616161]'>or</span>
                        <div className='text-[#EEEEEE]'>_________________________</div>
                    </div>

                    <Link href="/signin" className='mt-10'>
                        <button className='text-[16px] font-[700] bg-white rounded-full px-32 py-4 text-[#206ec0]'>Sign in with password</button>
                    </Link>

                    <div className='mt-10 mb-10 flex justify-center gap-4'>
                        <span className='flex items-center text-[#9E9E9E]'>Don’t have an account?</span>
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
