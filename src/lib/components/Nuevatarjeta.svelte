<script>
    let { titulo, img, precio, descripcion } = $props();
    import Icon from "@iconify/svelte";
</script>

<div
    class="relative flex flex-col md:flex-row gap-6 items-center bg-[#0a0f1d] border border-blue-900/30 p-1 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-yellow-600/50 group"
>
    <div class="absolute top-0 left-0 w-8 h-8 border-t border-l border-blue-800"></div>
    <div class="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-blue-800"></div>

    <div
        class="relative w-full md:w-80 flex-shrink-0 bg-[#060a15] p-1"
    >
        <img
            src={img}
            alt={titulo}
            class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
    </div>

    <div class="flex-1 p-8 space-y-4">
        <div>
            <h2
                class="text-4xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-600 uppercase tracking-widest mb-2"
            >
                {titulo}
            </h2>
            <p
                class="text-blue-200/60 text-sm leading-relaxed max-w-md font-medium"
            >
                {descripcion}
            </p>
        </div>

        <div class="flex items-center gap-4">
            <div
                class="flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-bold uppercase tracking-widest"
            >
                <span
                    class="w-2 h-2 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_8px_#eab308]"
                ></span>
                En stock
            </div>
        </div>

        <a href={"https://api.whatsapp.com/send/?phone=584149430559&text=Hola, estoy interesado en obtener " + titulo} target="_blank" rel="noreferrer">
            <button
                class="relative w-full md:w-auto px-10 py-4 bg-white/90 text-[#0a0f1d] font-black uppercase text-sm tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:scale-[1.01] transition-all duration-300 shadow-none hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] border border-white/80"
            >
                <Icon icon="ic:baseline-whatsapp" width={22} height={22} />
                Comprar Ahora
            </button>
        </a>
    </div>
</div>