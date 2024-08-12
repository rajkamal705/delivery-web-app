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
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <div className='flex justify-center items-center'>
                                <Image width={32} height={32} src="/Images/list-my-order.svg" alt="img" />
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-[#212121] text-[24px] font-[700]'>Profile</p>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <Image width={28} height={28} src="/Images/three-dot.svg" alt="img" />
                        </div>
                    </div>

                    <div className='mt-10 flex flex-col justify-center items-center border-b-[1px] border-white pb-6'>
                        <div className=''>
                            <div className='w-40 h-40 bg-white rounded-full'></div>
                            <Image className='relative bottom-10 left-28' width={34} height={34} src="/Images/Edit_Square.png" alt="img" />
                        </div>
                        <div>
                            <p className='text-[24px] font-[700] text-[#212121] text-center'>Andrew Ainsley</p>
                            <p className='text-[14px] font-[600] text-[#212121] text-center'>andrew_ainsley@yourdomain.com</p>
                        </div>
                    </div>

                    <div className='mt-10 flex flex-col space-y-6'>
                        <div className='flex justify-between'>
                            <div className='flex gap-4'>
                                <Image width={32} height={32} src="/Images/agent-profile.svg" alt="img" />
                                <p className='font-[600] text-[18px] text-[#212121]'>Edit Profile</p>
                            </div>
                            <div>
                                <Image width={20} height={20} src="/Images/arrow-right.svg" alt="img" />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex gap-4'>
                                <Image width={32} height={32} src="/Images/agent-notification.svg" alt="img" />
                                <p className='font-[600] text-[18px] text-[#212121]'>Notification</p>
                            </div>
                            <div>
                                <Image width={20} height={20} src="/Images/arrow-right.svg" alt="img" />
                            </div>
                        </div>


                        <div className='flex justify-between'>
                            <div className='flex gap-4'>
                                <Image width={28} height={28} src="/Images/agent-order.svg" alt="img" />
                                <p className='font-[600] text-[18px] text-[#212121]'>My Orders</p>
                            </div>
                            <div>
                                <Image width={20} height={20} src="/Images/arrow-right.svg" alt="img" />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex gap-4'>
                                <Image width={28} height={28} src="/Images/agent-security.svg" alt="img" />
                                <p className='font-[600] text-[18px] text-[#212121]'>Security</p>
                            </div>
                            <div>
                                <Image width={20} height={20} src="/Images/arrow-right.svg" alt="img" />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex gap-4'>
                                <Image width={28} height={28} src="/Images/agent-lang.svg" alt="img" />
                                <p className='font-[600] text-[18px] text-[#212121]'>Language</p>
                            </div>
                            <div>
                                <Image width={20} height={20} src="/Images/arrow-right.svg" alt="img" />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex gap-4'>
                                <Image width={28} height={28} src="/Images/agent-privacy.svg" alt="img" />
                                <p className='font-[600] text-[18px] text-[#212121]'>Privacy Policy</p>
                            </div>
                            <div>
                                <Image width={20} height={20} src="/Images/arrow-right.svg" alt="img" />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex gap-4'>
                                <Image width={28} height={28} src="/Images/agent-friends.png" alt="img" />
                                <p className='font-[600] text-[18px] text-[#212121]'>Invite Friends</p>
                            </div>
                            <div>
                                <Image width={20} height={20} src="/Images/arrow-right.svg" alt="img" />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex gap-4'>
                                <Image width={28} height={28} src="/Images/agent-logout.svg" alt="img" />
                                <p className='font-[600] text-[18px] text-[#F75555]'>Logout</p>
                            </div>
                            <div>
                                <Image width={20} height={20} src="/Images/arrow-right.svg" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page