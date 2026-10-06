const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export default function CartDrawer({ items, onClose, onIncrement, onDecrement, onRemove, onClear }) {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-stone-950/30" onClick={onClose}>
            <aside className="flex h-full w-full max-w-md flex-col bg-[#f8f6f1] p-6 shadow-2xl sm:p-8" onClick={(event) => event.stopPropagation()} aria-label="Shopping cart">
                <div className="flex items-center justify-between border-b border-stone-200 pb-5">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">Your selection</p>
                        <h2 className="mt-1 font-serif text-3xl font-bold text-stone-900">Shopping cart</h2>
                    </div>
                    <button className="rounded-full border border-stone-300 px-3 py-1 text-sm text-stone-600 hover:bg-white" onClick={onClose}>Close</button>
                </div>
                <div className="flex-1 overflow-y-auto py-6">
                    {items.length === 0 ? (
                        <div className="rounded-2xl border border-dashed border-stone-300 p-8 text-center">
                            <p className="font-serif text-2xl font-bold text-stone-800">Your cart is quiet.</p>
                            <p className="mt-2 text-sm leading-6 text-stone-500">Add something considered from the collection to begin.</p>
                        </div>
                    ) : (
                        <div className="space-y-5">
                            {items.map((item) => (
                                <div className="flex gap-4" key={item.id}>
                                    <img className="h-24 w-20 rounded-xl object-cover" src={item.image} alt="" />
                                    <div className="min-w-0 flex-1">
                                        <div className="flex justify-between gap-3">
                                            <h3 className="font-semibold text-stone-900">{item.name}</h3>
                                            <span className="text-sm font-semibold text-stone-800">{currency.format(item.price * item.quantity)}</span>
                                        </div>
                                        <p className="mt-1 text-xs uppercase tracking-[0.12em] text-stone-500">{item.category}</p>
                                        <div className="mt-3 flex items-center justify-between">
                                            <div className="flex items-center rounded-full border border-stone-300 bg-white">
                                                <button className="px-3 py-1 text-lg text-stone-500" onClick={() => onDecrement(item.id)} aria-label={`Decrease ${item.name}`}>-</button>
                                                <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                                                <button className="px-3 py-1 text-lg text-stone-500" onClick={() => onIncrement(item.id)} aria-label={`Increase ${item.name}`}>+</button>
                                            </div>
                                            <button className="text-xs font-semibold text-orange-700 hover:text-orange-900" onClick={() => onRemove(item.id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="border-t border-stone-200 pt-5">
                    <div className="mb-4 flex justify-between text-lg font-bold text-stone-900">
                        <span>Subtotal</span>
                        <span>{currency.format(subtotal)}</span>
                    </div>
                    <button className="w-full rounded-full bg-orange-700 px-5 py-3 font-semibold text-white transition hover:bg-orange-800 disabled:cursor-not-allowed disabled:bg-stone-300" disabled={items.length === 0}>Continue to checkout</button>
                    {items.length > 0 && <button className="mt-3 w-full text-sm text-stone-500 underline underline-offset-4" onClick={onClear}>Clear cart</button>}
                </div>
            </aside>
        </div>
    );
}
