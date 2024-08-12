'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className='flex justify-center items-center bg-[url("/Images/home-background.svg")] min-h-screen bg-cover bg-no-repeat'>
      <div className="flex flex-col">
        <div className="leading-[50px]">
          <span className="text-[48px] font-[700]">Welcome to 👋</span> <br></br>
          <span className="text-[64px] font-[900] text-[#22BB9C]">Rendasua</span>
        </div>
        <p className="mt-4 text-[18px] text-white">The best app for shipping and delivery in this century.</p>

        <Link href="/intro">
          <button className="mt-10 text-[#206EC0] bg-white rounded-full px-10 py-3">Next</button>
        </Link>
      </div>

    </main>
  );
}
