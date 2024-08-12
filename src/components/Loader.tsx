import React from "react";
import Image from "next/image";

const Loader = () => {
    return (
        <div className="fixed inset-0 flex flex-col gap-10 justify-center items-center bg-black z-50">
            <Image width={300} height={200} src="/Images/rendasua.svg" alt="img" />
            <Image className="animate-spin" width={60} height={60} src="/Images/loader.svg" alt="img" />
            {/* <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-[#22BB9C] rounded-full"></div> */}

        </div>
    );
};

export default Loader;