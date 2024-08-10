'use client';
import React from 'react';
import Image from "next/image";
import PaymentButtons from '@/components/ui/paymentbuttons';

function Page() {
    return (
        <>
            <div className='flex justify-center items-center bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 min-h-screen'>
                <div className='w-[90%]'>
                    <div className='flex justify-between mt-8'>
                        <div className='flex gap-4'>
                            <div className="flex justify-center items-center">
                                <div className="text-[#212121] text-[80px] font-[700]">{'<-'}</div>
                            </div>
                            <div>
                                <p className='text-[#212121] text-[80px] font-[700]'>Make Order</p>
                            </div>
                        </div>

                    </div>


                    <div className='flex gap-4 mt-8 flex-col '>
                        <PaymentButtons />

                        <div className='mt-5 border-b border-[#FFFFFF]'></div>

                        <div className='text-[#424242] mt-8 mb-8 text-xl font-[700]'>Review Summary</div>

                        
                    </div>
                    <div className='flex flex-col  gap-4 h-[16rem] rounded-2xl py-4 bg-[#FAFAFA]'>
                            <div className="flex justify-between items-center text-[24px] px-52">
                                <p className="text-[#616161]">Sender Name</p>
                                <p className="text-[#424242] ">Andrew Ainsley</p>
                            </div>

                            <div className="flex justify-between items-center text-[24px] px-52">
                                <p className="text-[#616161]">Phone Number</p>
                                <p className="text-[#424242] ">+1 111 467 378 399</p>
                            </div>
                            <div className="flex justify-between items-center text-[24px] px-52">
                                <p className="text-[#616161]">Email</p>
                                <p className="text-[#424242] ">andrew_ainsley@domain.com</p>
                            </div>
                            <div className="flex justify-between items-center text-[24px] px-52">
                                <p className="text-[#616161]">Address</p>
                                <p className="text-[#424242] ">922 Messerschmidt Circle St.</p>
                            </div>
                        </div>
                  
                        <div className='flex flex-col mt-8  gap-4 h-[16rem] rounded-2xl py-4 bg-[#FAFAFA]'>
                            <div className="flex justify-between items-center text-[24px] px-52">
                                <p className="text-[#616161]">Receiver Name</p>
                                <p className="text-[#424242] ">Daniel Austin</p>
                            </div>

                            <div className="flex justify-between items-center text-[24px] px-52">
                                <p className="text-[#616161]">Phone Number</p>
                                <p className="text-[#424242] ">+1 111 272 727 387</p>
                            </div>
                            <div className="flex justify-between items-center text-[24px] px-52">
                                <p className="text-[#616161]">Email</p>
                                <p className="text-[#424242] ">daniel_austin@domain.com</p>
                            </div>
                            <div className="flex justify-between items-center text-[24px] px-52">
                                <p className="text-[#616161]">Address</p>
                                <p className="text-[#424242] ">39062 Butternut Pass St.</p>
                            </div>
                        </div>

                        <div className='flex flex-col mt-8 gap-4 h-[8rem] rounded-2xl py-4 bg-[#FAFAFA]'>
                            <div className="flex justify-between items-center text-[24px] px-52">
                                <p className="text-[#616161]">Shipping Fee</p>
                                <p className="text-[#424242] ">$12.00</p>
                            </div>

                            <div className="flex justify-between items-center text-[24px] px-52">
                                <p className="text-[#616161]">Payment Methods</p>
                                <p className="text-[#424242] ">Saska Wallet</p>
                            </div>
                           
                        </div>


                    <div className='mt-48 mb-10'>
                        <button className=' w-[1700px] text-[16px] font-[700] bg-[#47AC5F] rounded-full px-32 py-4 text-[#FFFFFF]'>Continue</button>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Page;