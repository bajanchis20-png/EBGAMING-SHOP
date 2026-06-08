<script>
    let { titulo, img, precio, descripcion } = $props();

    import Icon from "@iconify/svelte";

</script>

<div
    class="flex flex-col md:flex-row gap-8 items-center border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-2 shadow-2xl hover:border-red-900/50 transition-colors duration-500 group"
>
    <!-- Contenedor de Imagen con efecto de profundidad -->
    <div class="relative bg-black/40 p-8 w-full md:w-80 flex flex-col items-center">
       <div class="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 text-neutral-900 text-[10px] font-black px-3 py-1 tracking-widest uppercase shadow-[0_0_15px_rgba(251,191,36,0.6)]">
  COMPRA AHORA
 </div>
        <img src={img} alt={titulo} class="w-full h-auto transform transition-transform duration-500 group-hover:scale-105" />
    </div>

    <!-- Contenido -->
    <div class="flex-1 p-6 space-y-6">
        <div>
            <p class="font-extrabold text-3xl text-white mb-2 tracking-tight">{titulo}</p>
            <p class="text-gray-400 text-lg leading-relaxed">{descripcion}</p>
        </div>

        <div class="flex items-center gap-4">
            <!-- Badge de Stock mas minimalista -->
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/30 border border-red-500/30 text-red-500 text-[10px] font-bold tracking-widest uppercase">
                <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                Stock Disponible
            </div>
        </div>

        <!-- Botón de compra mejorado -->
        <button
            class="w-full md:w-auto px-8 py-4 font-black text-sm text-white flex items-center justify-center gap-2 
            bg-green-600 hover:bg-green-700 shadow-[0_0_20px_rgba(220,38,38,0.3)] 
            transition-all duration-300 hover:shadow-green-900/20 active:scale-95"
        >
            <Icon icon="ic:baseline-whatsapp" width={20} height={20} />
            COMPRAR POR WHATSAPP
        </button>
    </div>
</div>
