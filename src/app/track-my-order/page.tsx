'use client';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function page() {
    return (
        <>
            <div className='flex justify-center items-center bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 min-h-screen py-10'>
                <div className='w-[90%]'>
                    <div className='flex justify-between border-b-[1px] border-white pb-6'>
                        <div className='flex gap-4'>
                            <div className='flex justify-center items-center'>
                                <Image width={32} height={32} src="/Images/list-my-order.svg" alt="img" />
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-[#212121] text-[24px] font-[700]'>Track</p>
                                <p className='text-white text-[24px] font-[700]'>"SK27367279"</p>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <Image width={28} height={28} src="/Images/three-dot.svg" alt="img" />
                        </div>
                    </div>

                    <div className='flex justify-between border-b-[1px] border-white py-6'>
                        <div className='flex gap-4'>
                            <div className='flex justify-center items-center'>
                                <div className='h-10 w-10 rounded-full bg-gray-100'></div>
                            </div>
                            <div className=''>
                                <p className='text-[#212121] text-[20px] font-[700]'>Andrew Ainsley</p>
                                <p className='text-[#757575]'>4.8</p>
                            </div>
                        </div>

                        <div className='flex gap-6 items-center'>
                            <Image width={28} height={28} src="/Images/Chat.svg" alt="img" />
                            <Image width={28} height={28} src="/Images/connect.svg" alt="img" />
                        </div>
                    </div>

                    <div className='flex justify-between border-b-[1px] border-white py-6 px-10'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex justify-center'>
                                <div className='flex justify-center items-center bg-[#22BB9C] bg-opacity-[8%] w-[76px] h-[76px] rounded-full'>
                                    <Image width={23} height={23} src="/Images/track-detail-icon.svg" alt="img" />
                                </div>
                            </div>

                            <div>
                                <p className='font-[600] text-[#212121] text-center'>SK27367279</p>
                                <p className='font-[500] text-[12px] text-[#757575] text-center'>Track ID</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className='flex justify-center'>
                                <div className='flex justify-center items-center bg-[#22BB9C] bg-opacity-[8%] w-[76px] h-[76px] rounded-full'>
                                    <Image width={28} height={28} src="/Images/time-circle.svg" alt="img" />
                                </div>
                            </div>

                            <div>
                                <p className='font-[600] text-[#212121] text-center'>2-3 days</p>
                                <p className='font-[500] text-[12px] text-[#757575] text-center'>Estimate Time</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className='flex justify-center'>
                                <div className='flex justify-center items-center bg-[#22BB9C] bg-opacity-[8%] w-[76px] h-[76px] rounded-full'>
                                    <Image width={28} height={28} src="/Images/Package-weight.svg" alt="img" />
                                </div>
                            </div>

                            <div>
                                <p className='font-[600] text-[#212121] text-center'>2.4 kg</p>
                                <p className='font-[500] text-[12px] text-[#757575] text-center'>Package Weight</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex gap-4 mt-6'>
                            <div>
                                <Image width={36} height={36} src="/Images/track-location.svg" alt="img" />
                            </div>
                            <div>
                                <p className='font-[700] text-[18px]'>39062 Butternut Pass</p>
                                <p className='text-[14px] text-white'>Waiting</p>
                            </div>
                        </div>
                        <div className='text-white flex flex-col items-center w-9'>
                            <p>|</p>
                            <p>|</p>
                        </div>

                        <div className='flex gap-4 mt-1'>
                            <div>
                                <Image width={36} height={36} src="/Images/radio-button.svg" alt="img" />
                            </div>
                            <div>
                                <p className='font-[700] text-[18px]'>21833 Clyde Gallagher Parkway DC</p>
                                <p className='text-[14px] text-white'>Waiting</p>
                            </div>
                        </div>

                        <div className='text-white flex flex-col items-center w-9'>
                            <p>|</p>
                            <p>|</p>
                        </div>

                        <div className='flex gap-4 mt-1'>
                            <div>
                                <Image width={36} height={36} src="/Images/radio-button.svg" alt="img" />
                            </div>
                            <div>
                                <p className='font-[700] text-[18px]'>800 Sunnyside Crossing DC</p>
                                <p className='text-[14px] text-white'>Waiting</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-full py-4 mt-10'>
                        <button className='w-full font-[700] text-[#47AC5F]'>Report an issue</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default page
