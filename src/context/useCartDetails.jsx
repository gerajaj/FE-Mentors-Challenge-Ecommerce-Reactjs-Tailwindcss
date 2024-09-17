import { createContext, useState } from "react";

export const useCartDetails = createContext();

export default (props) => {

    const [cartProducts, setCartProducts] = useState([

    ]);

    const addProducts = () => { }
    const deleteCartProducts = () => { }

    return (
        <useCartDetails.Provider value={{ cartProducts, addProducts, deleteCartProducts }}>
            {props.children}
        </useCartDetails.Provider>
    );
};