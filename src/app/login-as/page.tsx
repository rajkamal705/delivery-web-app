'use client';
import React, {useState} from 'react'
import Image from "next/image";
import Link from 'next/link';

function page() {
    const [loginAs, setLoginAs] = useState<"user" | "vendor" | "business">("user");

    return (
        <>
            <div className='flex justify-center items-center bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 min-h-screen'>
                <div className='flex flex-col space-y-2'>
                    <p className='mt-8 font-[700] text-[40px] text-center'>Create account as</p>
                    <Link href="/login" className='mt-10'>
                        <button onClick={() => setLoginAs("user")} className='text-[16px] font-[700] bg-white rounded-full px-32 py-4 text-[#206ec0] w-96'>User</button>
                    </Link>
                    <Link href="/login" className='mt-10'>
                        <button onClick={() => setLoginAs("vendor")} className='text-[16px] font-[700] bg-white rounded-full px-32 py-4 text-[#206ec0] w-96'>Vendor</button>
                    </Link>
                    <Link href="/login" className='mt-10'>
                        <button onClick={() => setLoginAs("business")} className='text-[16px] font-[700] bg-white rounded-full px-32 py-4 text-[#206ec0] w-96'>Business</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default page