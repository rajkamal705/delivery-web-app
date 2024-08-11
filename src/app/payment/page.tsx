'use client';
import React from 'react';
import Image from "next/image";
import PaymentButtons from '@/components/ui/paymentbuttons';
import Link from 'next/link';

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
                        <PaymentButtons/>

                        <div className='mt-5 border-b border-[#FFFFFF]'></div>

                        <div className='text-[#424242] mt-8 mb-8 text-xl font-[700]'>Select the payment method you want to use</div>
                     
                        <div className='flex items-center gap-4 h-[5rem] rounded-2xl py-4 bg-[#FAFAFA]'>
                            <div className='flex justify-center items-center ml-20'>
                                <Image width={60} height={60} src="/Images/Group.png" alt="img" />
                            </div>
                            <div className="flex flex-col items-center justify-center ml-[10px]">
                            <p className=' bg-white rounded-lg w-[890px] py-5 px-4 outline-none'>My Wallet</p>
                            </div>
                            <button className='rounded-full bg-[#47AC5F] h-40'></button>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 flex-col'>
                        <div className='flex items-center gap-4 h-[5rem] rounded-2xl py-4 bg-[#FAFAFA]'>
                            <div className='flex justify-center items-center ml-20'>
                                <Image width={60} height={60} src="/Images/Frame.png" alt="img" />
                            </div>
                           
                            <div className="flex flex-col items-center justify-center ml-[10px]">
                            <p className=' bg-white rounded-lg w-[890px] py-5 px-4 outline-none'>PayPal</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8 flex-col'>
                        
                        <div className='flex items-center gap-4 h-[5rem] rounded-2xl py-4 bg-[#FAFAFA]'>
                            <div className='flex justify-center items-center ml-20'>
                                <Image width={60} height={60} src="/Images/Image.png" alt="img" />
                            </div>
                            <div className="flex flex-col items-center justify-center ml-[10px]">
                            <p className=' bg-white rounded-lg w-[890px] py-5 px-4 outline-none' >•••• •••• •••• •••• 4679</p>
                            </div>
                        </div>
                    </div>
                   
                   
                    <Link href="/summary" className='mt-48 mb-10'>
                    <button className=' w-[1700px] text-[16px] font-[700] bg-[#47AC5F] rounded-full px-32 py-4 text-[#FFFFFF]'>Continue</button>
                    </Link>
                   

                  
                </div>
            </div>
        </>
    )
}

export default Page;