import CartIcon from "@/components/icons/CartIcon"

export default () => {
    return (
        <section className="container mx-auto px-6 grid gap-y-4 md:px-0">
            <p className="text-orange-sneakers text-[14px] tracking-widest font-extrabold uppercase lg:text-[25px]">Sneaker Company</p>
            <h2 className="font-bold text-3xl lg:text-[45px]">Fall Limited Edition Sneakers</h2>
            <p className="text-gray-500 text-justify text-[16px] lg:text-[21px]">
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.

            </p>
            <div className="grid gap-2 font-bold items-center grid-cols-[1fr_3fr_1fr] lg:grid-cols-[1fr_4fr] ">
                <span className=" text-3xl">$125.00</span>
                <span className="bg-orange-300 rounded-md ml-2 mr-auto py-1 px-2 text-orange-700 font-extrabold md:ml-3 md:my-1 ">50%</span>
                <span className="text-right text-grayish-blue text-lg line-through md:col-span-3 md:text-left">$250.00</span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-[1fr_2fr] md:gap-x-2">
                <div className="col-span-3 bg-gray-200 pb-2 px-5 rounded-md flex items-baseline justify-between md:col-span-1 ">
                    <button className="px-2 text-3xl text-orange-600 font-bold active:text-orange-400 md:mr-2 md:-ml-3">-</button>
                    <span className="text-lg">0</span>
                    <button className="px-2 text-3xl text-orange-600 font-bold active:text-orange-400 md:ml-2 md:-mr-3">+</button>
                </div>
                <button className="bg-orange-400 md:hover:bg-orange-500 md:active:bg-orange-sneakers active:bg-orange-sneakers rounded-md font-bold text-white w-full py-2 col-span-3 flex items-center justify-center gap-x-3 md:col-span-1">
                    <CartIcon className="fill-white" />
                    <span>Add to Cart</span>
                </button>

            </div>
        </section>
    )
}