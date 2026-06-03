<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
</script>

<section
    class="flex items-center justify-center py-56 relative overflow-hidden text-center"
>
    <img
        src="/newfondo2.png"
        alt=""
        class="absolute -z-10 -top-2/40 left-0 w-full opacity-25"
    />

    <div class=" p-12">
        <p class="text-5xl text-white font-extrabold pb-5 tracking-widest">
            EQUIPATE COMO UN DIOS
        </p>
      <p class="text-transparent bg-clip-text bg-gradient-to-r from-white to-white font-bold tracking-widest uppercase text-center shadow-lg">
    DOMINA EL REINO,LOS MEJORES ITEMS DE METIN2, SEGURIDAD TOTAL Y ENTREGA INSTANTÁNEA.
</p>
    </div>
</section>

<section class="text-white p-8">

    <div class="pb-8 flex items-center justify-between">
        <div class="pb-8">
            <p class="font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-yellow-600 via-yellow-400 to-yellow-200 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)] uppercase tracking-wider">
    Equipamiento de elite
</p>
            <p class="tracking-normal font-extrabold text-2xl">
                VISTA DEL CATALOGO
            </p>
        </div>
    
        <button
            class="flex items-center text-lg font-semibold text-white border-2 border-red-500 px-6 py-1.5 bg-red-500 gap-1.5 transition-all duration-300 ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-lg hover:shadow-red-500/30"
        >
            Seccion principal
        </button>

    </div>

    <div class="grid grid-cols-2 gap-8">
        <Nuevatarjeta
            titulo="SET DEL CAOS PERFECTO DOP"
            img="/setcaos.jpg"
            precio="75.00"
            descripcion="El poder definitivo para 215+.No pierdas la oportunidad de ser el top del servidor"
        ></Nuevatarjeta>
        <Nuevatarjeta
            titulo="SET DE ENERGIA PERFECTO DOP"
            img="/setenergia.jpg"
            precio="35.00"
            descripcion="Domina el PVM y genera Won masivamente desde nivel 75 hasta 215 con este equipamiento optimizado"
        ></Nuevatarjeta>
        <Nuevatarjeta
            titulo="WON AL MEJOR PRECIO DEL MERCADO"
            img="/won.jpg"
            precio="15.00"
            descripcion="Entrega inmediata en tu servidor preferido"
        ></Nuevatarjeta>
            <Nuevatarjeta
            titulo="WON AL MEJOR PRECIO DEL MERCADO"
            img="/won.jpg"
            precio="15.00"
            descripcion="Entrega inmediata en tu servidor preferido"
        ></Nuevatarjeta>

    </div>
    <div></div>
</section>
