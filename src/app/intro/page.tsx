'use client';
import React from 'react'
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link';

function Page() {

  return (
    <div className='flex justify-center items-center bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 min-h-screen'>
      <Carousel>
        <CarouselContent>

          {/* item 1: */}
          <CarouselItem className='flex'>
            <div className='flex flex-col justify-center items-center'>
              <div>
                <Image width={346} height={250} src="/Images/intro-image1.svg" alt="img" />
              </div>

              <div className='text-center mt-4 font-[700] text-[40px] text-white w-3/4'>
                The best app for shipping & delivery in this century
              </div>

              <Link href="/login-as" className='mt-20'>
                <button className='bg-white px-10 py-3 text-[#206EC0] rounded-full w-80'>Next</button>
              </Link>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Page;
