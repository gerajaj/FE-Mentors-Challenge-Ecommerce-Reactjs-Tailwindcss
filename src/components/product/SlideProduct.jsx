import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";

import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";

import PreviIcon from "@/components/icons/PreviIcon";
import NextIcon from "@/components/icons/NextIcon";
import { useState } from "react";

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4]

export default () => {

    const [index, setIndex] = useState(0)

    const handleClickNext = () => {
        /*if (index === ARRAY_IMGS.length -1) return setIndex(0);
        setIndex(index+1)*/
        /* NEXT: index === ARRAY_IMGS.length -1 ? setIndex(0):setIndex(index+1);
        setIndex(index+1)
        PREV: index === 0 ? setIndex(ARRAY_IMGS.length -1):setIndex(index-1);
        setIndex(index+1)*/
        setIndex((index + 1) % ARRAY_IMGS.length);
    }
    const handleClickPrev = () => {
        setIndex((index + ARRAY_IMGS.length - 1) % ARRAY_IMGS.length);
    }

    return (/*grid place-item-center es lo mismo que "flex justify-center items-center*/
        <section className="grid md:grid-cols-4 md:gap-8">
            <div className="relative col-span-4">
                <img src={ARRAY_IMGS[index]} alt="" className="aspect-auto" />
                <div className="absolute top-1/2 -translate-y-1/2 left-0 flex w-full justify-between px-4">
                    <button className="grid place-items-center w-10 h-10 bg-white rounded-full" onClick={handleClickPrev}>
                        <PreviIcon />
                    </button>
                    <button className="grid place-items-center w-10 h-10 bg-white rounded-full" onClick={handleClickNext}>

                        <NextIcon />
                    </button>
                </div>
            </div>
            <img src={imgProductSmall1} alt="" className="hidden md:block" />
            <img src={imgProductSmall2} alt="" className="hidden md:block" />
            <img src={imgProductSmall3} alt="" className="hidden md:block" />
            <img src={imgProductSmall4} alt="" className="hidden md:block" />

        </section>
    )
}