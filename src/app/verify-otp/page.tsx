'use client';
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

function Page() {

    return (
        <div className='flex justify-center items-center bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 min-h-screen'>


            {/* item 1: */}
            <div className='flex flex-col justify-center items-center'>
                <div className='font-[700] text-[24px] text-white'>Forgot Password</div>

                <div className='text-center mt-4 font-[500] text-[18px]'>
                    Code has been send to +1 111 ******99
                </div>

                <div className="flex justify-center items-center flex-col pt-4">
                    <InputOTP
                        className="w-full"
                        maxLength={4}
                    >
                        <InputOTPGroup className="flex gap-4 justify-between">
                            <InputOTPSlot className="p-6 text-black border-[2px] border-[#47Ac5F] rounded-xl" index={0} />
                            <InputOTPSlot className="p-6 text-black border-[2px] border-[#47Ac5F] rounded-xl" index={1} />
                            <InputOTPSlot className="p-6 text-black border-[2px] border-[#47Ac5F] rounded-xl" index={2} />
                            <InputOTPSlot className="p-6 text-black border-[2px] border-[#47Ac5F] rounded-xl" index={3} />
                        </InputOTPGroup>
                    </InputOTP>
                </div>

                <div className='mt-10'>
                    <p>Resend code in <span className='text-[#47AC5F]'>60 </span>s</p>
                </div>

                <Link href="/verify-otp" className='mt-10'>
                    <button className='bg-white py-3 px-20 text-[#206EC0] rounded-full w-80'>Verify</button>
                </Link>
            </div>
        </div>
    )
}

export default Page;