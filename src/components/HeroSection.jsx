export default function HeroSection({ onExplore }) {
    return (
        <section className="relative overflow-hidden bg-[#173c3a] text-[#f8f6f1]">
            <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-orange-400/30 blur-3xl" />
            <div className="mx-auto grid max-w-7xl items-end gap-12 px-5 pb-20 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-28">
                <div className="relative">
                    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">Objects with a point of view</p>
                    <h1 className="max-w-3xl font-serif text-6xl font-bold leading-[0.95] tracking-tight sm:text-8xl">Find the things that feel like you.</h1>
                    <p className="mt-8 max-w-lg text-lg leading-8 text-emerald-50/75">A small, intentional collection of daily goods, made to last and chosen to bring a little more character to ordinary days.</p>
                    <button className="mt-10 rounded-full bg-orange-400 px-6 py-3 font-semibold text-stone-950 transition hover:bg-orange-300" onClick={onExplore}>Explore the collection</button>
                </div>
                <div className="relative ml-auto max-w-sm rounded-[2rem] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <img className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=85" alt="A sunlit room with carefully selected objects" />
                    <p className="mt-4 text-sm leading-6 text-emerald-50/75">Seasonal edit / 06 objects for slower mornings and better corners.</p>
                </div>
            </div>
        </section>
    );
}
