import { useState } from "react";
import { StorefrontContext } from "./storefrontContextValue";

export function StorefrontProvider({ children }) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    return (
        <StorefrontContext.Provider value={{ isCartOpen, openCart, closeCart }}>
            {children}
        </StorefrontContext.Provider>
    );
}