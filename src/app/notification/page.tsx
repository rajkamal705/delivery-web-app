'use client';
import React from 'react';
import Image from "next/image";

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
                                <p className='text-[#212121] text-[80px] font-[700]'>Notification</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <Image width={28} height={28} src="/Images/Notification.svg" alt="img" />
                        </div>
                    </div>

                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[18px] font-[700]'>Today</span>
                        <div className='flex items-center gap-4 h-[10rem] rounded-2xl py-4 bg-[#FFFFFF]'>
                            <div className='flex justify-center items-center ml-20'>
                                <Image width={90} height={90} src="/Images/p.svg" alt="img" />
                            </div>
                            <div className="flex flex-col items-center justify-center ml-[500px]">
                                <p className='text-xl font-[700]'>Payment Successful!</p>
                                <p className='text-lg text-[#616161] font-light'>You have made a shipping payment</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[18px] font-[700]'>Yesterday</span>
                        <div className='flex items-center gap-4 h-[10rem] rounded-2xl py-4 bg-[#FFFFFF]'>
                            <div className='flex justify-center items-center ml-20'>
                                <Image width={90} height={90} src="/Images/s.svg" alt="img" />
                            </div>
                            <div className="flex flex-col items-center justify-center ml-[500px]">
                                <p className='text-xl font-[700]'>Today’s Special Offers</p>
                                <p className='text-lg text-[#616161] font-light'>You get a special promo today!</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 h-[10rem] rounded-2xl py-4 bg-[#FFFFFF]'>
                            <div className='flex justify-center items-center ml-20'>
                                <Image width={90} height={90} src="/Images/t.svg" alt="img" />
                            </div>
                            <div className="flex flex-col items-center justify-center ml-[500px]">
                                <p className='text-xl font-[700]'>New Services Available!</p>
                                <p className='text-lg text-[#616161] font-light'>Now you can search the nearby drop</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-4 mt-8 flex-col'>
                        <span className='text-[#212121] text-[18px] font-[700]'>December 20, 2024</span>
                        <div className='flex items-center gap-4 h-[10rem] rounded-2xl py-4 bg-[#FFFFFF]'>
                            <div className='flex justify-center items-center ml-20'>
                                <Image width={90} height={90} src="/Images/n.svg" alt="img" />
                            </div>
                            <div className="flex flex-col items-center justify-center ml-[500px]">
                                <p className='text-xl font-[700]'>Credit Card Connected!</p>
                                <p className='text-lg text-[#616161] font-light'>Credit Card has been linked!</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 h-[10rem] rounded-2xl py-4 bg-[#FFFFFF]'>
                            <div className='flex justify-center items-center ml-20'>
                                <Image width={90} height={90} src="/Images/k.svg" alt="img" />
                            </div>
                            <div className="flex flex-col items-center justify-center ml-[500px]">
                                <p className='text-xl font-[700]'>Account Setup Successful!</p>
                                <p className='text-lg text-[#616161] font-light'>Your account has been created!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;

