import { useEffect, useRef, useState } from "react";

import PreviIcon from "@/components/icons/PreviIcon";
import NextIcon from "@/components/icons/NextIcon";

export default ({
    ARRAY_IMGS = [],
    ARRAY_IMGS_SMALL = [],
    isOpenModal = false,
    handleOpenModal = () => { },
    handleCloseModal = null,
    ...props }) => {

    const [index, setIndex] = useState(0);
    const btnSlider = useRef(null);

    useEffect(() => {
        isOpenModal && btnSlider.current.classList.remove("md:hidden")
    },
        [isOpenModal])

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
        <section {...props}>
            {
                isOpenModal && <button className="md:col-span-4 text-right font-bold text-gray-600 text-2xl" onClick={handleCloseModal}>x</button>
            }
            <div className="relative col-span-4">
                <img
                    src={ARRAY_IMGS[index]}
                    alt=""
                    className=" rounded-xl aspect-auto md:cursor-pointer"
                    onClick={handleOpenModal} />
                <div ref={btnSlider} className="absolute top-1/2 -translate-y-1/2 left-0 flex w-full justify-between px-4 md:hidden">
                    <button className="grid place-items-center w-10 h-10 bg-white rounded-full md:w-6 md:-mx-2 md:opacity-90 " onClick={handleClickPrev}>
                        <PreviIcon />
                    </button>
                    <button className="grid place-items-center w-10 h-10 bg-white rounded-full md:w-6 md:-mx-2 md:opacity-90 " onClick={handleClickNext}>

                        <NextIcon />
                    </button>
                </div>
            </div>
            {
                ARRAY_IMGS_SMALL.map((smallImg, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            setIndex(i);
                        }} className="relative rounded-lg overflow-hidden cursor-pointer">
                        <img

                            src={smallImg}
                            alt="" className="hidden rounded-xl md:block opac" />
                        <span className={`absolute top-0 h-full w-full active:bg-white opacity-60 hover:bg-[rgba(255,255,255,0.4)] hover:border-2 hover:rounded-lg hover:border-orange-700 ${i === index && "bg-[rgba(255,255,255,0.8)]"}`}></span>
                    </div>
                ))
            }
        </section>
    )
}