'use client';
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function Page() {

    return (
        <div className='flex justify-center items-center bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 min-h-screen'>


            {/* item 1: */}
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <Image width={200} height={200} src="/Images/forgot-password.svg" alt="img" />
                </div>

                <div className='text-center mt-4 font-[500] text-[18px] w-3/4'>
                    Select which contact details should we use to reset your password
                </div>

                <div className='flex gap-4 bg-white rounded-xl px-10 py-4 mt-10 w-full'>
                    <Image width={80} height={80} src="Images/forgot-password-number.svg" alt="img" />
                    <div className='flex flex-col justify-center pr-24'>
                        <p className='font-[500] text-[14px] text-[#757575]'>via SMS:</p>
                        <p className='font-[700] text-black text-[16px]'>+1 111 ******99</p>
                    </div>
                </div>

                <div className='flex gap-4 bg-white rounded-xl px-10 py-4 mt-4 w-full'>
                    <Image width={80} height={80} src="Images/forgot-password-email.svg" alt="img" />
                    <div className='flex flex-col justify-center pr-24'>
                        <p className='font-[500] text-[14px] text-[#757575]'>via Email:</p>
                        <p className='font-[700] text-black text-[16px]'>and***ley@yourdomain.com</p>
                    </div>
                </div>

                <Link href="/verify-otp" className='mt-10'>
                    <button className='bg-white py-3 px-20 text-[#206EC0] rounded-full w-80'>Continue</button>
                </Link>
            </div>


        </div>
    )
}

export default Page;