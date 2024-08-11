const PaymentButtons = () => {
    return (
        <div className='flex gap-4 mt-8 flex-col'>
            <div className='items-center flex flex-wrap'>
                <div className='flex flex-col gap-2 items-center'>
                    <button className='bg-[#000000] text-white text-center rounded-full py-7 px-6 h-auto w-20'>1</button>
                    <p className='font-[500] text-[#000000]'>Sender</p>
                </div>
                <span className='text-2xl font-[700]'>----------</span>

                <div className='flex flex-col gap-2 items-center'>
                    <button className='bg-[#000000] text-white text-center rounded-full py-7 px-6 h-auto w-20'>2</button>
                    <p className='font-[500] text-[#000000]'>Receiver</p>
                </div>
                <span className='text-2xl font-[700]'>----------</span>

                <div className='flex flex-col gap-2 items-center'>
                    <button className='bg-[#000000] text-white text-center rounded-full py-7 px-6 h-auto w-20'>3</button>
                    <p className='font-[500] text-[#000000]'>Package</p>
                </div>
                <span className='text-2xl font-[700]'>----------</span>

                <div className='flex flex-col gap-2 items-center'>
                    <button className='bg-[#000000] text-white text-center rounded-full py-7 px-6 h-auto w-20'>4</button>
                    <p className='font-[500] text-[#000000]'>Payment</p>
                </div>
                <span className='text-2xl font-[700]'>----------</span>

                <div className='flex flex-col gap-2 items-center'>
                    <button className='bg-[#000000] text-white text-center rounded-full py-7 px-6 h-auto w-20'>5</button>
                    <p className='font-[500] text-[#000000]'>Finish</p>
                </div>
            </div>
        </div>
    );
}

export default PaymentButtons;