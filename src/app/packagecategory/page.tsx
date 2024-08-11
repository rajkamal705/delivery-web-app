'use client';
import React from 'react';
import Image from "next/image";
import PaymentButtons from '@/components/ui/paymentbuttons';
import Link from 'next/link';

function Page() {
    return (
        <>
            <div className='flex justify-center items-center bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 min-h-screen py-10'>
                <div className='w-[90%]'>
                    <div className='flex justify-between mt-8'>
                        <div className='flex gap-4'>
                            {/* <div className="flex justify-center items-center">
                                <div className="text-[#212121] text-[80px] font-[700]">{'<-'}</div>
                            </div> */}
                            <div>
                                <p className='text-[#212121] text-[24px] font-[700]'>Make Order</p>
                            </div>
                        </div>

                    </div>


                    <div className='flex gap-4 flex-col '>
                        <PaymentButtons />

                        <div className='mt-5 border-b border-[#FFFFFF]'></div>
                        <span className='text-[#212121] text-[22px] font-[700] mt-8'>Package Category</span>
                        <div className='flex items-center gap-4 rounded-2xl px-10 bg-[#FAFAFA]'>
                            <Image width={20} height={20} src="/Images/CategoryBox.svg" alt="img" />
                            <input className=' bg-[#FAFAFA] rounded-lg py-6 outline-none' placeholder='Category' />
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[22px] font-[700]'>Weight</span>
                        <div className='flex items-center gap-4 rounded-2xl px-10 bg-[#FAFAFA]'>
                            <input className='bg-[#FAFAFA] rounded-lg py-6 outline-none' placeholder='0' />
                        </div>
                    </div>

                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[22px] font-[700]'>Dimension</span>
                        <div className='flex gap-4 items-center gap-4'>
                            <input className=' bg-[#FAFAFA] rounded-lg py-6 px-10 w-1/3 outline-none' placeholder='Length' />
                            <input className=' bg-[#FAFAFA] rounded-lg py-6 px-10 w-1/3 outline-none' placeholder='Width' />
                            <input className=' bg-[#FAFAFA] rounded-lg py-6 px-10 w-1/3 outline-none' placeholder='Height' />
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[22px] font-[700]'>Select Shipping</span>
                        <div className='flex items-center gap-4 rounded-2xl px-10 bg-[#FAFAFA]'>
                            <Image width={20} height={20} src="/Images/Vector.svg" alt="img" />
                            <input className=' bg-[#FAFAFA] rounded-lg py-6 outline-none' placeholder='Shipping' />
                        </div>
                    </div>
                    <div className='mt-10'>
                        <Link href="payment" className='mt-56 mb-10'>
                            <button className='w-full text-[16px] font-[700] bg-[#47AC5F] rounded-full px-32 py-4 text-[#FFFFFF]'>Continue</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;