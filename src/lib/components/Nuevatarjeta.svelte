<script>
    let { titulo, img, precio, descripcion } = $props();
    
	import Icon from "@iconify/svelte";
</script>

<div
    class="flex gap-8 justify-center border-2 border-amber-400 bg-gray-950 p-6 flex-1"
>
    <div
        class="bg-gray-900/20 p-6 w-80 text-black font-extrabold flex flex-col flex-1"
    >
        <p
            class="border-2 rounded-2xl bg-amber-300 px-10 py-1.5 text-lg gap-1.5"
        >
            OFERTA DESTACADA
        </p>
        <img src={img} alt={titulo} class="w-full h-auto" />
    </div>
    <div class="flex-1 p-2">
        <p class="font-bold text-3xl mb-2">{titulo}</p>
        <p class="text-xl text-red-200 mb-4">{descripcion}</p>
        <div class="flex gap-3">
            <p class="text-4xl font-bold text-amber-500 min-w-max">$ {precio}</p>
            <p class="text-green-500 bg-green-800/20 px-4 py-5 font-medium text-xs">
                STOCK DISPONIBLE
            </p>
        </div>
        <button class="bg-[#FD5452] transition p-3 font-bold text-sm flex gap-1">
            <Icon icon="logos:whatsapp-icon" width={24} height={24} />
            COMPRAR POR WHATSAPP
        </button>
    </div>
</div>
