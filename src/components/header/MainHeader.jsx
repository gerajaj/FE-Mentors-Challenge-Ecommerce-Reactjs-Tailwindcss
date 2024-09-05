import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useState } from "react";
import NavLinkHeader from "@/components/header/NavLinkHeader";
const MainHeader = () => {
    const [NavClass, setNavClass] = useState(
        "hidden font-500 md:flex md:h-auto md:flex-row md:gap-4 md:mr-auto md:static md:p-0")
    const handleOpenMenu = () => {
        /*console.log("click") para verificar que funciona*/
        setNavClass("tracking-widest absolute top-0 left-0 h-full p-8 gap-y-5 font-bold flex flex-col w-3/5 bg-white md:flex md:flex-row md:gap-4 md:mr-auto md:static")
    };
    const handleCloseMenu = () => {
        /*console.log("click") para verificar que funciona*/
        setNavClass("hidden font-bold md:flex md:h-auto md:flex-row md:gap-4 md:mr-auto md:static md:p-0")
    };
    return (
        <div className="">
            <header className="container mx-auto flex px-4 items-center gap-8 p-6 md:p-1">
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
                    <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
                        <CloseIcon />
                    </button>
                    <NavLinkHeader text="Collections" />
                    <NavLinkHeader text="Men" />
                    <NavLinkHeader text="Women" />
                    <NavLinkHeader text="About" />
                    <NavLinkHeader text="Contact" />
                </nav>
                <div className="flex gap-4">
                    <button>
                        <CartIcon />
                    </button>
                    <img src={AvatarImage} alt="" className="w-9" />
                </div>
            </header>
            <span className="container mt-0 mx-auto hidden h-[1px] w-full bg-gray-300 md:block"></span>
        </div>
    );
};
export default MainHeader;
