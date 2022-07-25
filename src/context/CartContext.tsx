import { createContext } from "react";
import { productInterface } from "../interfaces";

interface CartContextInterface {
    cartValue: productInterface[] | [];
    setCartValue: (product: any) => void
}

const CartContext = createContext<CartContextInterface>({
    cartValue: [],
    setCartValue: () => []
})

export default CartContext