<script>
    let { titulo, img, descripcion, onAddToCart } = $props();
    import Icon from "@iconify/svelte";
</script>

<div class="relative w-full md:w-80 bg-white border border-neutral-300 rounded-3xl overflow-hidden group transition-all duration-300 hover:border-red-600 shadow-xl flex flex-col justify-between h-full">
    <div class="relative flex flex-col bg-white h-full justify-between">
        <div class="flex flex-col">
            <div class="relative w-full aspect-square overflow-hidden bg-neutral-900 flex items-center justify-center shrink-0 border-b border-neutral-200">
                <img src={img} alt={titulo} class="w-full h-full object-cover" />
            </div>

            <div class="p-6 relative flex flex-col">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full w-fit">
                        <span class="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span class="text-[10px] font-black uppercase tracking-widest text-emerald-700">En stock</span>
                    </div>
                    <span class="text-xs font-black uppercase tracking-wider text-red-600">Consultar</span>
                </div>

                <div class="space-y-3">
                    <h2 class="text-xl sm:text-2xl font-black text-neutral-900 uppercase tracking-tight leading-snug">
                        {titulo}
                    </h2>
                    <p class="text-neutral-600 text-xs sm:text-sm leading-relaxed font-bold border-l-2 border-red-600 pl-3 uppercase">
                        {descripcion}
                    </p>
                </div>
            </div>
        </div>

        <div class="p-6 pt-0 mt-auto">
            <button onclick={() => onAddToCart && onAddToCart()} class="w-full bg-neutral-900 hover:bg-red-600 text-white font-black text-xs uppercase tracking-widest py-3.5 px-4 rounded-2xl transition-colors duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer">
                <span>🛒</span> Agregar al Carrito
            </button>
        </div>
    </div>
</div>