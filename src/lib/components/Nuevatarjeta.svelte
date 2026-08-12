<script>
    let { titulo, img, descripcion, buttonText = "COMPRAR AHORA", onAddToCart } = $props();
    import Icon from "@iconify/svelte";
</script>

<div class="relative w-full bg-[#121216] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden group transition-all duration-300 hover:border-[#e60012] shadow-lg flex flex-col justify-between h-full">
    <div class="relative flex flex-col h-full justify-between">
        <div class="flex flex-col">
            <!-- Imagen con proporción cuadrada uniforme y diseño impecable en movil -->
            <div class="relative w-full aspect-square overflow-hidden bg-neutral-900 flex items-center justify-center shrink-0 border-b border-white/10">
                <img src={img} alt={titulo} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>

            <!-- Contenido compacto adaptado a móviles -->
            <div class="p-3.5 sm:p-6 relative flex flex-col">
                <div class="flex items-center justify-between mb-2 sm:mb-4 gap-1">
                    <div class="flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit">
                        <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-emerald-400">En stock</span>
                    </div>
                    <span class="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#e60012]">Consultar</span>
                </div>

                <div class="space-y-1.5 sm:space-y-3">
                    <h2 class="text-xs sm:text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight line-clamp-2">
                        {titulo}
                    </h2>
                    <p class="text-neutral-400 text-[10px] sm:text-xs leading-relaxed font-bold border-l-2 border-[#e60012] pl-2.5 sm:pl-3 uppercase line-clamp-3">
                        {descripcion}
                    </p>
                </div>
            </div>
        </div>

        <!-- Botón responsivo con tipografía limpia y adaptada -->
        <div class="p-3.5 sm:p-6 pt-0 mt-auto">
            <button onclick={() => onAddToCart && onAddToCart()} class="w-full bg-[#17171c] hover:bg-[#e60012] text-white border border-white/10 hover:border-[#e60012] font-black text-[10px] sm:text-xs uppercase tracking-widest py-2.5 sm:py-3.5 px-3 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm cursor-pointer">
                <span>🛒</span> <span class="truncate">{buttonText}</span>
            </button>
        </div>
    </div>
</div>