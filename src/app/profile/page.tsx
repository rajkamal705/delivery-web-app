'use client';
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function page() {

    return (
        <>
            <div className='flex justify-center items-center bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 min-h-screen py-10'>
                <div>
                    <h1 className='font-[700] text-[24px] text-white text-center'>Fill Your Profile</h1>

                    <div className='flex justify-center'>
                        <div className='mt-6'>
                            <div className='w-40 h-40 bg-white rounded-full'></div>
                            <Image className='relative bottom-10 left-28' width={34} height={34} src="/Images/Edit_Square.png" alt="img" />
                        </div>
                    </div>

                    <form className='flex flex-col gap-4'>

                        <input
                            name="name"
                            required
                            className="bg-white rounded-xl w-96 px-4 py-4 outline-none"
                            type="text"
                            placeholder="FullName"
                        />

                        <input
                            name="nick_name"
                            required
                            className="bg-white rounded-xl w-96 px-4 py-4 outline-none"
                            type="text"
                            placeholder="Nickname"
                        />

                        <div className="flex bg-white rounded-xl w-96 outline-none">
                            <input
                                name="date_of_birth"
                                required
                                className="bg-white rounded-xl w-96 px-4 py-4 outline-none"
                                type="text"
                                placeholder="Date of Birth"
                            />

                            <div className='w-16 flex justify-center items-center'>
                                <Image width={20} height={20} src="/Images/Calendar.svg" alt="img" />
                            </div>

                        </div>

                        <div className="flex bg-white rounded-xl w-96 outline-none">
                            <input
                                name="email"
                                required
                                className="bg-white rounded-xl w-96 px-4 py-4 outline-none"
                                type="text"
                                placeholder="Email"
                            />

                            <div className='w-16 flex justify-center items-center'>
                                <Image width={20} height={20} src="/Images/Message.svg" alt="img" />
                            </div>
                        </div>

                        <input
                            name="phone_number"
                            required
                            className="bg-white rounded-xl w-96 px-4 py-4 outline-none"
                            type="number"
                            placeholder="Phone number"
                        />

                        <div className="flex bg-white rounded-xl w-96 outline-none">
                            <select id="cars" className='w-full pr-4 outline-none rounded-xl px-4 py-4 appearance-none'>
                                <option className='' value="select">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <div className='w-16 flex justify-center items-center'>
                                <Image width={20} height={20} src="/Images/arrow-down.svg" alt="img" />
                            </div>
                        </div>

                        <div className='mt-8'>
                            <button className='w-96 text-[16px] font-[700] bg-white rounded-full py-4 text-[#206ec0]'>Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default page