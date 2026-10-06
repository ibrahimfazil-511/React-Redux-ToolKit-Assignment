import { useContext } from "react";
import { StorefrontContext } from "./storefrontContextValue";

export function useStorefront() {
    const context = useContext(StorefrontContext);
    if (!context) throw new Error("useStorefront must be used inside StorefrontProvider");
    return context;
}