const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export default function ProductCard({ product, onAdd }) {
    return (
        <article className="group overflow-hidden rounded-[1.5rem] bg-white shadow-[0_12px_40px_rgba(68,55,36,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(68,55,36,0.15)]">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-[#f8f6f1]/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-700">
                    {product.tag}
                </span>
            </div>
            <div className="p-5">
                <div className="mb-2 flex items-start justify-between gap-3">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">{product.category}</p>
                        <h3 className="mt-1 font-serif text-xl font-bold text-stone-900">{product.name}</h3>
                    </div>
                    <span className="whitespace-nowrap text-sm font-bold text-stone-900">{currency.format(product.price)}</span>
                </div>
                <p className="min-h-12 text-sm leading-6 text-stone-500">{product.description}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="text-sm text-stone-500">* {product.rating} rating</span>
                    <button className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700" onClick={() => onAdd(product)}>
                        Add to cart
                    </button>
                </div>
            </div>
        </article>
    );
}
