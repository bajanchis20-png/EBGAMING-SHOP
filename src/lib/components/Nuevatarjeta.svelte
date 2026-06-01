<script>
    let{titulo,img,precio,descripcion,}= $props()
</script>

<div class="flex flex-wrap gap-8 justify-center bg-black p-10">

    <div class="bg-gray-900 border border-gray-700 p-6 w-80 text-white flex flex-col">
        <p class="border-2 bg-amber-300 px-6 py-1.5 flex text-lg gap-1.5">oferta destacada</p>
        <img src={img} alt={titulo} class="w-full h-auto" />
    </div>
    <div>
        <p h3 class="font-bold text-xl mb-2">{titulo}</p>
        <p class="text-sm text-gray-400 mb-4">{descripcion}</p>
        <div>
            <p class="text-3xl font-bold text-amber-500">{precio}</p>
            <p class="bg-amber-700 text-xs px-2 py-1 w-max mb-4">Stock disponible</p>
        </div>
        <button class="bg-red-500 hover:bg-red-600 transition p-3 font-bold text-sm"
    >comprar por whatsapp</button>
    </div>
</div>
