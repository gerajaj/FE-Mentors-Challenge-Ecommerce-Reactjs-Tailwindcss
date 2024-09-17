import imgSmall from "@/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "@/components/icons/DeleteIcon";

import { useCartDetails } from "@/context/useCartDetails";
import { useContext } from "react";

export default () => {

    const { cartProducts } = useContext(useCartDetails);

    return (
        /* Si tengo un left-0 puedo usar un md:left-full y md:-translate-x-full para acomodar la tarjeta a la derecha y un md:max-w-md para ajusta el tamaño de la tarjeta*/
        <>
            <section className="absolute top-[120px] right-0 md:top-[128px] mx-[20px] md:-mt-10 ">
                <div className="mx-4 shadow-xl bg-white rounded-xl border border-gray-300 md:w-[350px]">
                    <h4 className="px-6 py-4 text-lg font-bold">Cart</h4>
                    <hr className="bg-gray-400 mx-2" />
                    {
                        cartProducts.length === 0 && <p className=" py-8 pb-1 font-bold text-center text-gray-600">Your cart is empty</p>
                    }
                    {
                        cartProducts.map(product => (

                            <article key={product.id} className="px-6 gap-6 py-4 grid grid-cols-[1fr_4fr_1fr] p-10 items-center">
                                <img src={imgSmall} className="rounded-lg" alt="" />
                                <div>
                                    <h6 className="text-md">{product.title}...</h6>
                                    <div className="text-sm">
                                        <span>$125.00 x 3</span>
                                        <span className="font-bold">${product.price}</span>
                                    </div>
                                </div>
                                <button className="mx-auto">
                                    <DeleteIcon className="md:hover:fill-orange-sneakers md:active:fill-orange-400" />
                                </button>
                            </article>
                        ))
                    }
                    <div className="px-6 pb-6">
                        <button className={`w-full py-3 bg-orange-sneakers rounded-lg hover:bg-orange-500 active:bg-orange-400 font-bold text-white transition-all ${cartProducts.length === 0 ? "hidden" : ""}`}>Checkout</button>
                    </div>
                </div>
            </section>
        </>
    )
}