import { createContext } from "react";
import { productInterface } from "../interfaces";

interface WishlistContextInterface {
    wishlistValue: productInterface[] | [];
    setWishlistValue: (product: any) => void
}

const WishlistContext = createContext<WishlistContextInterface>({
    wishlistValue: [],
    setWishlistValue: () => []
})

export default WishlistContext