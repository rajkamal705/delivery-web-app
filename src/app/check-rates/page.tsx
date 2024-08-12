'use client';
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { DrawerDemo } from '@/components/ui/DrawerDemo'; // Make sure the path is correct

function Page() {
    return (
        <>
            <div className='flex justify-center items-center bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 min-h-screen'>
                <div className='w-[90%]'>
                    <div className='flex justify-between mt-8'>
                        <div className='flex gap-4'>
                            <div className="flex justify-center items-center">
                                <div className="text-[#212121] text-[24px] font-[700]">{'<-'}</div>
                            </div>
                            <div>
                                <p className='text-[#212121] text-[24px] font-[700]'>Check Rates</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <Image width={28} height={28} src="/Images/three-dot.svg" alt="img" />
                        </div>
                    </div>

                    <div className='mt-10'>
                        <div className='flex gap-4'>
                            <Image width={36} height={36} src="/Images/radio-button.svg" alt="img" />
                            <div className='bg-white rounded-2xl w-full font-[600] text-[16px] py-6 px-10'>
                                800 Sunnyside Crossing
                            </div>
                        </div>
                        <div className='text-white flex flex-col items-center w-9'>
                            <p>|</p>
                            <p>|</p>
                        </div>

                        <div className='flex gap-4 mt-2'>
                            <Image width={36} height={36} src="/Images/track-location.svg" alt="img" />
                            <div className='bg-white rounded-2xl w-full font-[600] text-[16px] py-6 px-10'>
                               39062 Butternut Pass
                            </div>
                        </div>
                    </div>


                    {/* <div className='flex gap-8 mt-8 flex-wrap'>
                        <div className='mt-6'>
                            <input type="radio" className="form-radio h-10 w-8 text-blue-600" />
                        </div>
                      
                        <div className='flex w-[1625px] items-center gap-10 rounded-2xl py-4 bg-[#FFFFFF] px-10'>
                           
                            <div className="flex flex-col justify-center">
                            <input className=' bg-[#FAFAFA] rounded-lg py-6 px-10 w-full outline-none' placeholder='Pick up Location' />
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-8 mt-8 flex-wrap'>
                        <div className='mt-6'>
                        <Image width={28} height={28} src="/Images/location.svg" alt="img" />
                        </div>
                      
                        <div className='flex w-[1625px] items-center gap-10 rounded-2xl py-4 bg-[#FFFFFF] px-10'>
                           
                            <div className="flex flex-col justify-center">
                            <input className=' bg-[#FAFAFA] rounded-lg py-6 px-10 w-full outline-none' placeholder='Package Destination' />
                            </div>
                        </div>
                    </div> */}

                    <div className='mt-9 border-b '></div>

                    <div className='flex gap-4 mt-10 flex-col'>
                        <span className='text-[#212121] text-[22px] font-[700]'>Dimension</span>
                        <div className='flex items-center gap-4 rounded-2xl px-10 bg-[#FAFAFA]'>
                            <Image width={20} height={20} src="/Images/CategoryBox.svg" alt="img" />
                            <div className=' bg-[#FAFAFA] rounded-lg py-6 w-full outline-none'>2.2</div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        {/* Replace the Check button with DrawerDemo component */}
                        <DrawerDemo />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;
