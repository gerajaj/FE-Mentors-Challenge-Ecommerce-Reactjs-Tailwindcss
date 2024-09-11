import { useState } from "react";


import SlideProduct from "@/components/product/col-images/SlideProduct";
import ModalProduct from "@/components/product/col-images/SlideProduct";

export default ({ ARRAY_IMGS, ARRAY_IMGS_SMALL }) => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    //Solución para afectar variables en CSS
    //useEffect(()=>{
    //      isOpeModal
    //          ?document.body.style.setProperty("--isActiveModal","block")
    //          :document.body.style.setProperty("--isActiveModal","none")
    //}, [isOpenModal]);

    const handleOpenModal = () => {
        setIsOpenModal(true);
    }
    const handleCloseModal = () => {
        setIsOpenModal(false)
    }
    return (
        <>
            <SlideProduct
                ARRAY_IMGS={ARRAY_IMGS}
                ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
                className="grid md:grid-cols-4 md:gap-8 "
                handleOpenModal={handleOpenModal}
            />
            {
                isOpenModal && (
                    <>
                        <ModalProduct
                            ARRAY_IMGS={ARRAY_IMGS}
                            ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
                            isOpenModal={isOpenModal}
                            className="z-20 hidden md:grid md:grid-cols-4 md:gap-4 md:absolute md:max-w-lg md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2"
                            handleCloseModal={handleCloseModal}
                        />
                        <span className="z-10 fixed top-0 left-0 md:bg-black/50 h-full w-full m-0 p-0 md:backdrop-blur" onClick={handleCloseModal}></span>
                    </>

                )
            }
        </>
    )
}