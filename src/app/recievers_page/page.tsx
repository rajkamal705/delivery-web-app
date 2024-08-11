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
                        <span className='text-[#212121] text-[18px] font-[700] mt-8'>Receiver Name</span>
                        <div className='flex items-center gap-4 rounded-2xl px-10 bg-[#FAFAFA]'>
                            <Image width={20} height={20} src="/Images/Profile.svg" alt="img" />
                            <input className='outline-none py-6 w-full bg-[#FAFAFA]' placeholder='Sender Name' />
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[18px] font-[700]'>Phone Number</span>
                        <div className='flex items-center gap-4 rounded-2xl px-10 bg-[#FAFAFA]'>
                            <Image width={24} height={18} src="/Images/Mask Group.svg" alt="img" />
                            <Image width={16} height={16} src="/Images/arrow-down.svg" alt="img" />
                            <input className=' bg-[#FAFAFA] rounded-lg outline-none py-6 w-full' placeholder='+1' />
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[18px] font-[700]'>Email</span>
                        <div className='flex items-center gap-4 rounded-2xl px-10 bg-[#FAFAFA]'>
                            <Image width={20} height={20} src="/Images/mail.svg" alt="img" />
                            <input className=' bg-[#FAFAFA] rounded-lg py-6 outline-none' placeholder='Email' />
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[18px] font-[700]'>City / Province</span>
                        <div className='flex items-center gap-4 rounded-2xl px-10 bg-[#FAFAFA]'>
                            <Image width={20} height={20} src="/Images/location.svg" alt="img" />
                            <input className=' bg-[#FAFAFA] rounded-lg py-6 outline-none' placeholder='City / Province' />
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[18px] font-[700]'>Address Details</span>
                        <div className='flex items-center gap-4 rounded-2xl px-10 bg-[#FAFAFA]'>
                            <input className=' bg-[#FAFAFA] rounded-lg py-6 outline-none' placeholder='Address Details' />
                        </div>
                    </div>
                    <div className='mt-10'>
                        <Link href="/packagecategory" className=''>
                            <button className='w-full text-[16px] font-[700] bg-[#47AC5F] rounded-full px-32 py-4 text-[#FFFFFF]'>Continue</button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page;