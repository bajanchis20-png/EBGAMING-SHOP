<script>
    let { titulo, img, descripcion, onAddToCart } = $props();
    import Icon from "@iconify/svelte";
    let modal;
</script>

<div class="relative w-full md:w-80 bg-[#0a0f1d] border border-blue-900/40 p-0.5 overflow-hidden group transition-all duration-500 hover:border-yellow-600/50 flex flex-col justify-between h-full">
    <div class="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div class="relative flex flex-col bg-[#080b16] h-full justify-between">
        <div class="flex flex-col">
            <button 
                type="button" 
                onclick={() => modal.showModal()} 
                class="relative w-full h-80 overflow-hidden bg-black flex items-center justify-center cursor-zoom-in group/img shrink-0"
            >
                <div class="absolute inset-0 bg-gradient-to-t from-[#080b16] via-transparent to-transparent z-10"></div>
                <img src={img} alt={titulo} class="w-full h-full object-cover transform transition-transform duration-700 group-hover/img:scale-105" />
                <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-600 z-20"></div>
            </button>

            <div class="p-6 relative flex flex-col">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-2 px-3 py-1 bg-green-900/20 border border-green-500/30 w-fit">
                        <span class="w-2 h-2 bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                        <span class="text-[9px] font-black uppercase tracking-[0.2em] text-green-500">En stock</span>
                    </div>
                    <span class="text-xs font-black uppercase tracking-widest text-yellow-500">Consultar</span>
                </div>

                <div class="space-y-4">
                    <h2 class="text-2xl md:text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 uppercase tracking-tighter drop-shadow-lg leading-tight">
                        {titulo}
                    </h2>
                    <p class="text-blue-200/50 text-sm leading-relaxed font-medium border-l-2 border-blue-900/50 pl-4">
                        {descripcion}
                    </p>
                </div>
            </div>
        </div>

        <div class="p-6 pt-0 mt-auto">
            <button onclick={() => onAddToCart && onAddToCart()} class="w-full bg-blue-900/40 hover:bg-yellow-500 hover:text-black border border-blue-700/50 text-white font-bold text-[10px] uppercase py-3 px-3 rounded-md transition-all duration-300 flex items-center justify-center gap-1.5">
                <span>🛒</span> Agregar al Carrito
            </button>
        </div>
    </div>
</div>

<dialog bind:this={modal} onclick={(e) => e.target === modal && modal.close()} class="bg-transparent backdrop:bg-black/90 p-0 overflow-visible max-w-[90vw] max-h-[90vh] outline-none">
    <div class="relative flex flex-col items-center">
        <button type="button" onclick={() => modal.close()} class="absolute -top-10 right-0 text-white/70 hover:text-yellow-500 transition-colors font-bold uppercase tracking-widest text-sm">
            Cerrar [X]
        </button>
        <img src={img} alt={titulo} class="max-w-full max-h-[85vh] object-contain border-2 border-yellow-600/50 shadow-2xl" />
    </div>
</dialog>

<style>
    dialog[open] {
        display: flex; justify-content: center; align-items: center;
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        margin: 0; animation: fadeIn 0.3s ease-out;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
        to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }
</style>