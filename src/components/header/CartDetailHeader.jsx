import imgSmall from "@/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "@/components/icons/DeleteIcon";

import { useCartDetails } from "@/context/useCartDetails";
import { useContext } from "react";

export default () => {


    const { cartProducts, deleteCartProducts, countTotalQuantity } = useContext(useCartDetails);

    return (
        /* Si tengo un left-0 puedo usar un md:left-full y md:-translate-x-full para acomodar la tarjeta a la derecha y un md:max-w-md para ajusta el tamaño de la tarjeta*/
        <>
            <section className={`absolute top-[120px] right-0 mt-5 md:top-[128px] mx-[5%]  max-w-auto md:px-[350px] md:max-w-[600px] md:-mt-10 ${cartProducts.length === 0 && window.innerWidth < 768 ? "left-0" : ""}`}>
                <div className="mx-4 shadow-xl bg-white rounded-xl border border-gray-300 md:w-[350px]">
                    <h4 className="px-[44%] py-4 text-lg font-bold md:px-6">Cart</h4>
                    <hr className="bg-gray-400 mx-2" />
                    {
                        cartProducts.length === 0 && <p className=" py-8 pb-1 font-bold text-center text-gray-600 px-20 md:px-[100px]">Your cart is empty</p>
                    }
                    {
                        cartProducts.map(product => (

                            <article key={product.id} className="px-6 gap-3 sm:gap-6 md:gap-1 py-4 grid grid-cols-[1fr_1fr_0.5fr] sm:grid sm:grid-cols-[1fr_1.5fr_1fr] md:grid-cols-[1fr_4fr_1fr] p-10 items-center">
                                <img src={product.img} className="rounded-lg" alt="" />
                                <div className="mx-auto justify-center grid grid-cols-2">
                                    <h6 className="text-md sm:text-lg truncate w-30 sm:w-60 md:w-40 col-span-2">{product.title}</h6>
                                    <div className="text-sm col-span-2 w-full sm:text-lg md:text-md">
                                        <span className=" ">${product.discountPrice} x {product.quantity}</span>

                                    </div>
                                    <span className="bg-gray-300 col-span-2 h-[1px]"></span>
                                    <span className="font-bold md:mr-0 col-span-2 sm:text-xl">${(product.discountPrice * product.quantity).toFixed(2)}</span>
                                </div>
                                <button className="mx-auto" onClick={() => deleteCartProducts(product.id)}>
                                    <DeleteIcon className="md:hover:fill-orange-sneakers md:active:fill-orange-400" />
                                </button>
                            </article>
                        ))
                    }
                    <div className="px-6 pb-4">
                        <button className={`w-full py-3 bg-orange-sneakers rounded-lg hover:bg-orange-500 active:bg-orange-400 font-bold text-white transition-all ${cartProducts.length === 0 ? "hidden" : ""}`}>Checkout</button>
                    </div>
                </div>
            </section>
        </>
    )
}