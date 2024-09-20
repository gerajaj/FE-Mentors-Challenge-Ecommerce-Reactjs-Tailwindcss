import { createContext, useEffect, useState } from "react";

export const useCartDetails = createContext();

export default (props) => {

    const [cartProducts, setCartProducts] = useState([

    ]);
    const maxQuantity = 10;

    const addProducts = (product) => {
        if (cartProducts.length === 0) {
            return setCartProducts([...cartProducts, product])
        }
        setCartProducts(cartProducts.map(item => {
            if (item.id == product.id) {

                const totalQuantity = item.quantity + product.quantity;

                if (totalQuantity > maxQuantity) {
                    alert(`No se pueden agregar más de ${maxQuantity} unidades de este producto`);
                    /* por si quiero ponerle tiempo a un mensaje temporal setTimeout(() => alert(""), 3000);*/
                    return item;
                } else {
                    return (
                        { ...item, quantity: item.quantity + product.quantity }
                    )

                }


            } else {
                return item
            }
        }))
    }

    const countTotalQuantity = cartProducts.reduce(
        (acc, current) => current.quantity + acc, 0)

    const deleteCartProducts = (id) => {
        setCartProducts(cartProducts.filter(item => item.id !== id))
    }

    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {

            return "dark"
        }
        return "light"
    })


    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark")

        } else {
            document.querySelector("html").classList.remove("dark")

        }
    }, [theme])
    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <useCartDetails.Provider value={{ cartProducts, addProducts, deleteCartProducts, countTotalQuantity, theme, setTheme, handleChangeTheme }}>
            {props.children}
        </useCartDetails.Provider>
    );
};