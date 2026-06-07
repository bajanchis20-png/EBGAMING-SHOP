<script>
    let { titulo, img, precio, descripcion } = $props();

    import Icon from "@iconify/svelte";

</script>

<div
    class="flex gap-8 justify-center border-2 border-amber-400 bg-gray-950 p-6 flex-1 shadow-amber-400/50 shadow-lg"
>
    <div
        class="bg-gray-900/20 p-6 w-80 text-black font-extrabold flex flex-col flex-1 space-y-5"
    >
        <p
            class="inline-block bg-gradient-to-r from-amber-300 to-amber-500 text-black font-bold px-5 py-2.5 rounded-full text-sm tracki0ng-wide shadow-md text-center"
        >
          ¡APROVÉCHALO HOY!
        </p>
        <img src={img} alt={titulo} class="w-full h-auto" />
    </div>
    <div class="flex-1 p-2 space-y-8">
        <p class="font-bold text-3xl mb-2">{titulo}</p>
        <p class="text-xl text-red-200 mb-4">{descripcion}</p>
        <div class="flex gap-3">
            <p class="text-4xl font-bold text-amber-500 min-w-max">
                $ {precio}
            </p>
            <div
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-green-500/10 border border-green-500/20 text-green-600 font-semibold text-[10px] tracking-widest uppercase"
            >
                <span
                    class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                ></span>
                Stock Disponible
            </div>
        </div>
        <button
            class="bg-[#FD5452] px-6 py-3 font-bold text-sm text-white flex items-center gap-2
           transition-all duration-300 ease-in-out
           hover:brightness-110 hover:scale-105 hover:shadow-lg hover:shadow-[#FD5452]/40"
        >
            <Icon icon="ic:baseline-whatsapp" width={24} height={24} />
            COMPRAR POR WHATSAPP
        </button>
    </div>
</div>
