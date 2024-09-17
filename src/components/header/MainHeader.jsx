import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";

import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";

import { useState, useEffect } from "react";

import NavLinkHeader from "@/components/header/NavLinkHeader";
import CartDetailHeader from "@/components/header/CartDetailHeader";



const MainHeader = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);


    const [NavClass, setNavClass] = useState(
        "hidden font-500 md:flex md:h-auto md:flex-row md:gap-4 md:mr-auto md:static md:p-0")

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                setIsOpenMenu(false);
                setNavClass("hidden font-500 md:flex md:h-auto md:flex-row md:gap-4 md:mr-auto md:static md:p-0");
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleOpenMenu = () => {
        /*console.log("click") para verificar que funciona*/

        setNavClass("z-50 tracking-widest absolute top-0 left-0 p-8 gap-y-5 font-bold flex flex-col w-4/5 bg-white rounded-br-md md:h-auto md:flex md:flex-row md:gap-4 md:mr-auto md:static");
        setIsOpenMenu(true);

    };
    const handleCloseMenu = () => {
        /*console.log("click") para verificar que funciona*/
        setNavClass("hidden font-bold md:flex md:h-auto md:flex-row md:gap-4 md:mr-auto md:static md:p-0");
        setIsOpenMenu(false);
    };

    return (
        <div className="">
            {
                isOpenMenu && (
                    <span className="z-40 fixed top-0 left-0 bg-black/50 h-full w-full m-0 p-0 backdrop-blur md:hidden" onClick={handleCloseMenu}></span>
                )}
            {isOpenCart && (
                <span className="z-30 fixed top-0 left-0 bg-black/0 h-full w-full m-0 p-0" onClick={() => setIsOpenCart(false)}></span>
            )
            }
            <header className="md:container relative md:mx-auto flex px-2 items-center gap-4 p-6 md:p-1">
                <button className=" md:hidden " onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <img
                    src={LogoSneakers}
                    alt="Logo Sneakers"
                    className="mr-auto mb-1 h-5 md:mr-0"
                ></img>
                <nav className={NavClass}>
                    {/*a.#*5{lorem $1} hace lo mismo que arriba, lorem es el la palabra de la etiqueta y el $ sirve para contar, en ese caso llegaría hasta el 5, otro snippet es shft+alt+abajo*/}
                    <button className="mr-[93%] mb-8 md:hidden" onClick={handleCloseMenu}>
                        <CloseIcon />
                    </button>
                    <NavLinkHeader text="Collections" />
                    <NavLinkHeader text="Men" />
                    <NavLinkHeader text="Women" />
                    <NavLinkHeader text="About" />
                    <NavLinkHeader text="Contact" />
                </nav>
                <div className="flex">
                    <button onClick={() => setIsOpenCart(!isOpenCart)}>
                        <CartIcon className="md:hover:fill-orange-600 md:active:fill-orange-sneakers" />
                    </button>
                    <img src={AvatarImage} alt="" className="w-9 ml-4" />
                    <div className="z-50">
                        {
                            isOpenCart &&
                            <CartDetailHeader />


                        }
                    </div>
                </div>
            </header>
            <span className="container mt-0 mx-auto hidden h-[1px] w-full bg-gray-300 md:block"></span>
        </div>
    );
};
export default MainHeader;
