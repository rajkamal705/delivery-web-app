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

                        <div className='text-[#424242] mt-8 mb-8 text-xl font-[700]'>Review Summary</div>


                    </div>
                    <div className='flex flex-col gap-4 rounded-2xl py-4 px-20 bg-[#FAFAFA]'>
                        <div className="flex justify-between items-center">
                            <p className="text-[#616161] text-[18px]">Sender Name</p>
                            <p className="text-[#424242] text-[20px] font-[600]">Andrew Ainsley</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-[#616161] text-[18px]">Phone Number</p>
                            <p className="text-[#424242] text-[20px] font-[600]">+1 111 467 378 399</p>
                        </div>
                        <div className="flex justify-between items-center text-[20px]">
                            <p className="text-[#616161] text-[18px]">Email</p>
                            <p className="text-[#424242] text-[20px] font-[600]">andrew_ainsley@domain.com</p>
                        </div>
                        <div className="flex justify-between items-center text-[20px]">
                            <p className="text-[#616161] text-[18px]">Address</p>
                            <p className="text-[#424242] text-[20px] font-[600]">922 Messerschmidt Circle St.</p>
                        </div>
                    </div>

                    <div className='mt-6 flex flex-col gap-4 rounded-2xl py-4 px-20 bg-[#FAFAFA]'>
                        <div className="flex justify-between items-center">
                            <p className="text-[#616161] text-[18px]">Receiver Name</p>
                            <p className="text-[#424242] text-[20px] font-[600]">Daniel Austin</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-[#616161] text-[18px]">Phone Number</p>
                            <p className="text-[#424242] text-[20px] font-[600]">+1 111 272 727 387</p>
                        </div>
                        <div className="flex justify-between items-center text-[20px]">
                            <p className="text-[#616161] text-[18px]">Email</p>
                            <p className="text-[#424242] text-[20px] font-[600]">daniel_austin@domain.com</p>
                        </div>
                        <div className="flex justify-between items-center text-[20px]">
                            <p className="text-[#616161] text-[18px]">Address</p>
                            <p className="text-[#424242] text-[20px] font-[600]">39062 Butternut Pass St.</p>
                        </div>
                    </div>     

                    <div className='flex flex-col mt-6 gap-4 rounded-2xl py-4 px-20 bg-[#FAFAFA]'>
                        <div className="flex justify-between items-center">
                            <p className="text-[#616161] text-[18px]">Shipping Fee</p>
                            <p className="text-[#424242] text-[20px] font-[600]">$12.00</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-[#616161] text-[18px]">Payment Methods</p>
                            <p className="text-[#424242] text-[20px] font-[600]">Saska Wallet</p>
                        </div>

                    </div>

                    <div className='mt-10'>
                        <Link href="/list-my-order" className='mt-56 mb-10'>
                            <button className='w-full text-[16px] font-[700] bg-[#47AC5F] rounded-full px-32 py-4 text-[#FFFFFF]'>Confirm Order</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;