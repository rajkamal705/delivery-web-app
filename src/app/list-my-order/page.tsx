'use client';
import React from 'react'
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
                                <Image width={32} height={32} src="/Images/list-my-order.svg" alt="img" />
                            </div>
                            <div className=''>
                                <p className='text-[#212121] text-[24px] font-[700]'>My Order</p>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <Image width={28} height={28} src="/Images/three-dot.svg" alt="img" />
                        </div>
                    </div>

                    <input className='mt-4 bg-white rounded-lg w-full py-5 px-4 outline-none' placeholder='Enter Track ID Number' />

                    <div className='mt-4 flex gap-10'>
                        <button className='border-[2px] border-[#47Ac5F] font-[600] text-[#47AC5F] rounded-full px-20 py-4 hover:bg-[#47Ac5F] hover:text-white'>All</button>
                        <button className='border-[2px] border-[#47Ac5F] font-[600] text-[#47AC5F] rounded-full px-20 py-4 hover:bg-[#47Ac5F] hover:text-white'>Pending</button>
                        <button className='border-[2px] border-[#47Ac5F] font-[600] text-[#47AC5F] rounded-full px-20 py-4 hover:bg-[#47Ac5F] hover:text-white'>On Progress</button>
                        <button className='border-[2px] border-[#47Ac5F] font-[600] text-[#47AC5F] rounded-full px-20 py-4 hover:bg-[#47Ac5F] hover:text-white'>Delivered</button>
                    </div>

                    <div className='mt-10'>
                        <div className='bg-white rounded-2xl p-6 w-1/2'>
                            <div className='flex justify-between'>
                                <div className='flex gap-4'>
                                    <div className='bg-[#22BB9C] bg-opacity-[8%] px-6 py-6 rounded-3xl'>
                                        <Image width={28} height={28} src="/Images/Category=Box.svg" alt="img" />
                                    </div>

                                    <div className='flex flex-col justify-center gap-2'>
                                        <p className='font-[700] text-[20px] text-[#212121]'>SK27367279</p>
                                        <p className='text-[#616161] font-[500] text-[16px]'>On transit area</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <span className='bg-[#22BB9C] bg-opacity-[8%] text-[16px] font-[600px] px-6 py-3 rounded-lg text-[#47AC5F]'>On Process</span>
                                </div>
                            </div>

                            <div className='mt-6 flex gap-6'>
                                <button className='border-[2px] border-[#47AC5F] font-[600] text-[16px] text-[#47AC5F] px-10 py-2 rounded-full'>View E-Receipt</button>
                                <button className='border-[2px] border-[#47AC5F] font-[600] text-[16px] text-[#47AC5F] px-10 py-2 rounded-full'>Track</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page