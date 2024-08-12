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

                    <input className='mt-4 bg-white rounded-lg w-full py-5 px-4 outline-none' placeholder='Enter Track ID Number' />

                    <div className='flex gap-4 mt-4'>
                        <Link href="senders_page" className='flex flex-col gap-2 w-1/2 border-[2px] border-black rounded-2xl py-4 bg-[#F7D100]'>
                            <div className='flex justify-center'>
                                <Image width={60} height={60} src="/Images/dollar.svg" alt="img" />
                            </div>
                            <p className='text-center font-[700]'>Make order</p>
                        </Link>

                        <Link href="check-rates" className='flex flex-col gap-2 w-1/2 border-[2px] border-black rounded-2xl py-4 bg-[#F7D100]'>
                            <div className='flex justify-center'>
                                <Image width={60} height={60} src="/Images/notes.svg" alt="img" />
                            </div>
                            <p className='text-center font-[700]'>Check Rates</p>
                        </Link>
                    </div>

                    <div className='mt-4'>
                        <div className='flex justify-between'>
                            <p className='font-[700] text-[#212121]'>Transaction History</p>
                            <p className='font-[700] text-white'>See All</p>
                        </div>
                        <div className='flex justify-between mt-4 border-b-[1px] border-white py-4'>
                            <div className='flex gap-4'>
                               <div className='flex justify-center items-center bg-black bg-opacity-[8%] w-[76px] h-[76px] rounded-full'>
                                 <Image width={23} height={23} src="/Images/note-icon.svg" alt="img" />
                               </div>
                               <div className='flex flex-col gap-1 justify-center w-60'>
                                 <p className='font-[700] text-[18px] text-white'>New Order Made!</p>
                                 <p className='font-[500] text-sm text-white leading-[20px]'>You have created a new shipping order</p>
                               </div>
                            </div>

                            <div className='flex justify-center items-center'>
                                <p className='font-[600] text-white'>2 hours ago</p>
                            </div>
                        </div>

                        <div className='flex justify-between mt-4 border-b-[1px] border-white py-4'>
                            <div className='flex gap-4'>
                               <div className='flex justify-center items-center bg-black bg-opacity-[8%] w-[76px] h-[76px] rounded-full'>
                                 <Image width={23} height={23} src="/Images/Download.svg" alt="img" />
                               </div>
                               <div className='flex flex-col gap-1 justify-center w-60'>
                                 <p className='font-[700] text-[18px] text-white'>Top Up Successful!</p>
                                 <p className='font-[500] text-sm text-white leading-[20px]'>You successfully top up your e-wallet for $600</p>
                               </div>
                            </div>

                            <div className='flex justify-center items-center'>
                                <p className='font-[600] text-white'>4 hours ago</p>
                            </div>
                        </div>

                        <div className='flex justify-between mt-4 border-b-[1px] border-white py-4'>
                            <div className='flex gap-4'>
                               <div className='flex justify-center items-center bg-black bg-opacity-[8%] w-[76px] h-[76px] rounded-full'>
                                 <Image width={23} height={23} src="/Images/Upload.svg" alt="img" />
                               </div>
                               <div className='flex flex-col gap-1 justify-center w-60'>
                                 <p className='font-[700] text-[18px] text-white'>Payment Successful!</p>
                                 <p className='font-[500] text-sm text-white leading-[20px]'>Shipping payment of $40 successfully made</p>
                               </div>
                            </div>

                            <div className='flex justify-center items-center'>
                                <p className='font-[600] text-white'>1 day ago</p>
                            </div>
                        </div>

                        <div className='flex justify-between mt-4 border-b-[1px] border-white py-4'>
                            <div className='flex gap-4'>
                               <div className='flex justify-center items-center bg-black bg-opacity-[8%] w-[76px] h-[76px] rounded-full'>
                                 <Image width={23} height={23} src="/Images/wallet.svg" alt="img" />
                               </div>
                               <div className='flex flex-col gap-1 justify-center w-60'>
                                 <p className='font-[700] text-[18px] text-white'>E-Wallet Connected!</p>
                                 <p className='font-[500] text-sm text-white leading-[20px]'>You have connected the e-wallet with Saska</p>
                               </div>
                            </div>

                            <div className='flex justify-center items-center'>
                                <p className='font-[600] text-white'>2 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
