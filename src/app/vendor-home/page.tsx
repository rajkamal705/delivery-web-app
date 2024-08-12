'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function page() {
    return (
        <>
            <div className='flex justify-center items-center bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 min-h-screen py-10'>
                <div className='w-[90%]'>
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <div className='flex justify-center items-center'>
                                <div className='h-10 w-10 rounded-full bg-gray-100'></div>
                            </div>
                            <div className=''>
                                <p className='text-[#757575]'>Good Morning 👋</p>
                                <p className='text-[#212121] text-[20px] font-[700]'>Andrew Ainsley</p>
                            </div>
                        </div>

                        <Link href="notification" className='flex items-center'>
                            <Image width={28} height={28} src="/Images/Notification.svg" alt="img" />
                        </Link>
                    </div>

                    <input className='mt-4 bg-white rounded-2xl w-full py-5 px-4 outline-none' placeholder='Enter Track ID Number' />

                    {/* Balance Card */}
                    <div className='mt-4 p-6 rounded-xl bg-gradient-to-br from-[#22BB9C] to-[#35DEBC]'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <p className='text-white text-[20px] font-[700]'>Andrew Ainsley</p>
                                <p className='text-white text-sm mt-2'>●●●● ●●●● ●●●● 3629</p>
                                <p className='text-white text-sm mt-8'> Your balance</p>
                                <p className='text-white text-[40px] font-[700] mt-4'>$9,729</p>
                            </div>
                            <div className='flex flex-col items-end'>
                                <div className='flex gap-4'>
                                    <Image src="/Images/visa.svg" alt="visa" width={60} height={60} />
                                    <Image src="/Images/mastercard.svg" alt="mastercard" width={60} height={60} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-4 mt-4'>
                        <Link href="senders_page" className='flex flex-col gap-2 w-1/2 border-[2px] border-black rounded-2xl py-4 bg-[#FFFFFF]'>
                            <div className='flex justify-center'>
                                <Image width={60} height={60} src="/Images/dollar.svg" alt="img" />
                            </div>
                            <p className='text-center font-[700]'>Make order</p>
                        </Link>

                        <div className='flex flex-col gap-2 w-1/2 border-[2px] border-black rounded-2xl py-4 bg-[#FFFFFF]'>
                            <div className='flex justify-center'>
                                <Image width={60} height={60} src="/Images/notes.svg" alt="img" />
                            </div>
                            <p className='text-center font-[700]'>Check Rates</p>
                        </div>
                    </div>

                    {/* Transaction Cards */}
                    <div className='flex gap-4 mt-8 flex-col'>
                        <div className='bg-[#FFFFFF] rounded-2xl p-6'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <Image width={40} height={40} src="/Images/CategoryBox.svg" alt="img" />
                                    <div className="flex flex-col justify-center">
                                        <p className='text-xl text-[#212121] font-[700]'>SK27367279</p>
                                        <p className='text-lg text-[#616161] font-light'>On transit area</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <span className='text-sm font-bold text-[#47AC5F] bg-[#E6F7EC] rounded-full py-1 px-4'>On Process</span>
                                </div>
                            </div>

                            <div className='flex justify-between mt-4'>
                                <button className='w-1/2 text-[#47AC5F] border border-[#47AC5F] rounded-2xl py-2'>View E-Receipt</button>
                                <button className='w-1/2 bg-[#47AC5F] text-white rounded-2xl py-2 ml-2'>Track</button>
                            </div>
                        </div>

                        <div className='bg-[#FFFFFF] rounded-2xl p-6 mt-4'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <Image width={40} height={40} src="/Images/CategoryBox.svg" alt="img" />
                                    <div className="flex flex-col justify-center">
                                        <p className='text-xl text-[#212121] font-[700]'>SK72639263</p>
                                        <p className='text-lg text-[#616161] font-light'>Package received</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <span className='text-sm font-bold text-[#47AC5F] bg-[#E6F7EC] rounded-full py-1 px-4'>On Process</span>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#FFFFFF] rounded-2xl p-6 mt-4'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <Image width={40} height={40} src="/Images/CategoryBox.svg" alt="img" />
                                    <div className="flex flex-col justify-center">
                                        <p className='text-xl text-[#212121] font-[700]'>SK72639263</p>
                                        <p className='text-lg text-[#616161] font-light'>Package received</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <span className='text-sm font-bold text-[#47AC5F] bg-[#E6F7EC] rounded-full py-1 px-4'>On Process</span>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#FFFFFF] rounded-2xl p-6 mt-4'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <Image width={40} height={40} src="/Images/CategoryBox.svg" alt="img" />
                                    <div className="flex flex-col justify-center">
                                        <p className='text-xl text-[#212121] font-[700]'>SK72639263</p>
                                        <p className='text-lg text-[#616161] font-light'>Package received</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <span className='text-sm font-bold text-[#47AC5F] bg-[#E6F7EC] rounded-full py-1 px-4'>On Process</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default page;