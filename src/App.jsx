import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categories, products } from "./data/products";
import { useStorefront } from "./context/useStorefront";
import {
    addToCart,
    clearCart,
    decrementQuantity,
    hydrateCart,
    incrementQuantity,
    removeFromCart,
} from "./features/cart/cartSlice";
import CartDrawer from "./components/CartDrawer";
import CatalogSection from "./components/CatalogSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const { isCartOpen, openCart, closeCart } = useStorefront();
    const searchRef = useRef(null);
    const catalogRef = useRef(null);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sort, setSort] = useState("featured");
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const savedCart = window.localStorage.getItem("north-found-cart");
        if (savedCart) {
            try {
                dispatch(hydrateCart(JSON.parse(savedCart)));
            } catch {
                window.localStorage.removeItem("north-found-cart");
            }
        }
        setIsReady(true);
    }, [dispatch]);

    useEffect(() => {
        if (isReady) window.localStorage.setItem("north-found-cart", JSON.stringify(items));
    }, [items, isReady]);

    useEffect(() => {
        const handleShortcut = (event) => {
            if (event.key === "/" && document.activeElement?.tagName !== "INPUT") {
                event.preventDefault();
                searchRef.current?.focus();
            }
        };
        window.addEventListener("keydown", handleShortcut);
        return () => window.removeEventListener("keydown", handleShortcut);
    }, []);

    const filteredProducts = products
        .filter((product) => selectedCategory === "All" || product.category === selectedCategory)
        .filter((product) => `${product.name} ${product.description}`.toLowerCase().includes(search.toLowerCase()))
        .sort((first, second) => {
            if (sort === "price-low") return first.price - second.price;
            if (sort === "price-high") return second.price - first.price;
            return 0;
        });

    const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const scrollToCatalog = () => catalogRef.current?.scrollIntoView({ behavior: "smooth" });
    const addProductToCart = (product) => {
        dispatch(addToCart(product));
        openCart();
    };
    const resetFilters = () => {
        setSearch("");
        setSelectedCategory("All");
    };

    return (
        <div className="min-h-screen bg-[#f8f6f1] text-stone-900">
            <Header search={search} setSearch={setSearch} onShop={scrollToCatalog} onCart={openCart} cartCount={cartCount} searchRef={searchRef} />
            <main>
                <HeroSection onExplore={scrollToCatalog} />
                <CatalogSection
                    catalogRef={catalogRef}
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    sort={sort}
                    onSortChange={setSort}
                    products={filteredProducts}
                    onAdd={addProductToCart}
                    onReset={resetFilters}
                />
            </main>
            <Footer />
            {isCartOpen && (
                <CartDrawer
                    items={items}
                    onClose={closeCart}
                    onIncrement={(id) => dispatch(incrementQuantity(id))}
                    onDecrement={(id) => dispatch(decrementQuantity(id))}
                    onRemove={(id) => dispatch(removeFromCart(id))}
                    onClear={() => dispatch(clearCart())}
                />
            )}
        </div>
    );
}

export default App;
