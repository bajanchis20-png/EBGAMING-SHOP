<script>
    let { titulo, img, precio, descripcion } = $props();
    import Icon from "@iconify/svelte";
</script>

<div
    class="relative flex flex-col md:flex-row gap-6 items-center bg-[#0a0a0a] border border-white/5 p-1 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-red-600/50 group"
>
    <div
        class="absolute top-0 left-0 w-8 h-8 "
    ></div>
    <div
        class="absolute bottom-0 right-0 w-8 h-8 "
    ></div>

    <div
        class="relative w-full md:w-80 flex-shrink-0 bg-gradient-to-br from-neutral-900 to-black p-1"
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
                class="text-gray-400 text-sm leading-relaxed max-w-md font-medium"
            >
                {descripcion}
            </p>
        </div>

        <div class="flex items-center gap-4">
            <div
                class="flex items-center gap-2 px-3 py-1 bg-red-950/20 border border-red-600/30 text-red-500 text-[10px] font-bold uppercase tracking-widest"
            >
                <span
                    class="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_red]"
                ></span>
                En stock
            </div>
        </div>
        <a href={"https://api.whatsapp.com/send/?phone=584149430559&text=Hola, estoy interesado en obtener " + titulo} target="_blank" rel="noreferrer">
            <button
                class="relative w-full md:w-auto px-10 py-4 bg-gradient-to-r from-red-700 to-red-900 text-white font-black uppercase text-sm tracking-widest flex items-center justify-center gap-3 hover:from-red-600 hover:to-red-800 transition-all shadow-[0_0_20px_rgba(185,28,28,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]"
            >
                <Icon icon="ic:baseline-whatsapp" width={22} height={22} />
                Comprar Ahora
            </button></a
        >
    </div>
</div>

<style>
    /* Opcional: Para darle forma de etiqueta al precio */
    .clip-path-polygon {
        clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
    }
</style>
