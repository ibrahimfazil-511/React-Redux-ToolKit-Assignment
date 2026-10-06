import ProductCard from "./ProductCard";

export default function CatalogSection({
    catalogRef,
    categories,
    selectedCategory,
    onCategoryChange,
    sort,
    onSortChange,
    products,
    onAdd,
    onReset,
}) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24" ref={catalogRef}>
            <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">The current edit</p>
                    <h2 className="mt-2 font-serif text-4xl font-bold tracking-tight text-stone-900">Good things, gathered.</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${selectedCategory === category ? "border-stone-900 bg-stone-900 text-white" : "border-stone-300 bg-transparent text-stone-600 hover:border-stone-900"}`}
                            onClick={() => onCategoryChange(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div className="mb-8 flex items-center justify-between border-b border-stone-200 pb-4 text-sm text-stone-500">
                <span>{products.length} pieces selected</span>
                <label className="flex items-center gap-2">
                    Sort by
                    <select className="rounded-full border border-stone-300 bg-transparent px-3 py-1.5 font-medium text-stone-800 outline-none" value={sort} onChange={(event) => onSortChange(event.target.value)}>
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: low to high</option>
                        <option value="price-high">Price: high to low</option>
                    </select>
                </label>
            </div>
            {products.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}
                </div>
            ) : (
                <div className="rounded-[1.5rem] border border-dashed border-stone-300 p-12 text-center">
                    <h3 className="font-serif text-2xl font-bold">Nothing matched that search.</h3>
                    <button className="mt-4 text-sm font-semibold text-orange-700 underline underline-offset-4" onClick={onReset}>Reset filters</button>
                </div>
            )}
        </section>
    );
}
