import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from 'next/image';

export function DrawerDemo() {
  return (
    <Drawer>
     <DrawerTrigger asChild>
        <button className='w-full text-[16px] font-[700] bg-[#47AC5F] rounded-full px-32 py-4 text-[#FFFFFF]'>
          Continue
        </button>
      </DrawerTrigger>
      <DrawerContent className="p-4">
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader className="text-center justify-center">
            <DrawerTitle className="text-xl font-bold">Rates</DrawerTitle>
          </DrawerHeader>
          <div className="flex justify-between items-center mt-4 px-4">
            <div className="text-start">
              <p className="text-[14px] font-medium text-gray-700 text-xl">800 Sunnyside Crossing</p>
              <p className="text-[12px] text-gray-500">Pick up Location</p>
            </div>
            <div className="text-center">
              <Image src="/Images/exchange-icon.svg" alt="exchange" width={24} height={24} />
            </div>
            <div className="text-center">
              <p className="text-[14px] font-medium text-gray-700">39062 Butternut Pass DC</p>
              <p className="text-[12px] text-gray-500">Package Destination</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between bg-[#FAFAFA] p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <Image src="/Images/2-wheeler-icon.svg" alt="2-Wheeler" width={32} height={32} />
                <div>
                  <p className="text-[18px] text-[#212121] font-semibold">2-Wheeler</p>
                  <p className="text-[14px] text-[#616161]">3-4 days</p>
                </div>
              </div>
              <p className="text-[14px] font-bold text-[#212121]">$12</p>
            </div>

            <div className="flex items-center justify-between bg-[#FAFAFA] p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <Image src="/Images/auto.svg" alt="3-Wheeler" width={42} height={42} />
                <div>
                  <p className="text-[18px] text-[#212121] font-semibold">3-Wheeler</p>
                  <p className="text-[14px] text-[#616161]">3-5 days</p>
                </div>
              </div>
              <p className="text-[14px] font-bold text-[#212121]">$18</p>
            </div>

            <div className="flex items-center justify-between bg-[#FAFAFA] p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <Image src="/Images/4-wheeler-icon.svg" alt="4-Wheeler" width={32} height={32} />
                <div>
                  <p className="text-[18px] text-[#212121] font-semibold">4-Wheeler</p>
                  <p className="text-[14px] text-[#616161]">1-2 days</p>
                </div>
              </div>
              <p className="text-[14px] font-bold text-[#212121]">$24</p>
            </div>
          </div>
          
          <DrawerFooter className="mt-8 flex justify-end">
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
