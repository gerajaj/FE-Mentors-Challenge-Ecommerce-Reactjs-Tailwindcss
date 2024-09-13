import imgSmall from "@/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "@/components/icons/DeleteIcon";
export default () => {
    return (
        /* Si tengo un left-0 puedo usar un md:left-full y md:-translate-x-full para acomodar la tarjeta a la derecha y un md:max-w-md para ajusta el tamaño de la tarjeta*/
        <section className="absolute top-[120px] left-0 z-10 md:top-[128px] md:mr-[50%] w-full md:-mt-10 ">
            <div className="mx-4 shadow-xl bg-white rounded-xl border border-gray-300 md:ml-[50%]">
                <h4 className="px-6 py-4 text-lg font-bold">Cart</h4>
                <hr className="bg-gray-400 mx-2" />
                <div className="px-6 gap-6 py-4 grid grid-cols-[1fr_4fr_1fr] p-10 items-center">
                    <img src={imgSmall} className="rounded-lg" alt="" />
                    <div>
                        <h6>Fall Limited Edition...</h6>
                        <div>
                            <span>$125.00 x 3</span>{" "}
                            <span className="font-bold">$375.00</span>
                        </div>
                    </div>
                    <button className="mx-auto">
                        <DeleteIcon className="hover:fill-orange-sneakers active:fill-orange-400" />
                    </button>
                </div>
                <div className="px-6 pb-6">
                    <button className="w-full py-4 bg-orange-sneakers rounded-lg hover:bg-orange-500 active:bg-orange-400 font-bold text-white transition-all">Checkout</button>
                </div>
            </div>
        </section>
    )
}