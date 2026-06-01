<script>
    let{titulo,img,precio,descripcion,}= $props()
</script>

<div class="flex flex-wrap gap-8 justify-center bg-black p-10 border-2 border-amber-400 bg-gray-950 p-6">

    <div class="bg-gray-900/20 p-6 w-80 text-black font-extrabold flex flex-col">
        <p class="border-2 rounded-2xl bg-amber-300 px-10 py-1.5 flex text-lg gap-1.5">OFERTA DESTACADA</p>
        <img src={img} alt={titulo} class="w-full h-auto" />
    </div>
    <div>
        <p h3 class="font-bold text-xl mb-2">{titulo}</p>
        <p class="text-sm text-red-200 mb-4">{descripcion}</p>
        <div class="flex gap-3">
            <p class="text-3xl font-bold text-amber-500">{precio}</p>
            <p class="text-green-500  bg-green-800/20 px-1 py-5 font-medium">STOK DISPONIBLE</p>
        </div>
    <button class="bg-[#FD5452]  transition p-3 font-bold text-sm"
    >comprar por whatsapp</button>
    </div>
</div>
