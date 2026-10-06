export default function Header({ search, setSearch, onShop, onCart, cartCount, searchRef }) {
    return (
        <header className="border-b border-stone-200/80 bg-[#f8f6f1]/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 lg:px-8">
                <button className="font-serif text-2xl font-bold tracking-tight text-stone-900" onClick={onShop}>
                    north / found
                </button>
                <nav className="hidden items-center gap-8 text-sm font-medium text-stone-600 md:flex">
                    <button className="transition hover:text-stone-950" onClick={onShop}>New arrivals</button>
                    <button className="transition hover:text-stone-950" onClick={onShop}>The edit</button>
                    <button className="transition hover:text-stone-950" onClick={onShop}>Our story</button>
                </nav>
                <div className="flex items-center gap-2">
                    <label className="hidden items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-500 sm:flex">
                        <span aria-hidden="true">/</span>
                        <span className="sr-only">Search products</span>
                        <input
                            ref={searchRef}
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            className="w-32 bg-transparent outline-none placeholder:text-stone-400 lg:w-44"
                            placeholder="Search"
                        />
                    </label>
                    <button
                        className="relative rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
                        onClick={onCart}
                    >
                        Cart {cartCount > 0 && <span className="ml-1 text-orange-300">({cartCount})</span>}
                    </button>
                </div>
            </div>
        </header>
    );
}
