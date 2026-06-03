<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
</script>

<section
    class="flex items-center justify-center py-56 relative overflow-hidden text-center"
>
    <img
        src="/logo.jpg"
        alt=""
        class="absolute -z-10 -top-2/7 left-0 w-full opacity-30"
    />

    <div class=" p-12">
        <p class="text-5xl text-white font-extrabold pb-5 tracking-widest">
            EQUIPATE COMO UN DIOS
        </p>
        <p class="text-white justify-center font-bold">
            Los mejores ìtems de metin2 al alcance de tus
            manos,seguridad,rapidez y confianza
        </p>
    </div>
</section>

<section class="text-white p-8">

    <div class="pb-8 flex items-center justify-between">
        <div class="pb-8">
            <p class=" text-white pb">Equipamiento de elite</p>
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
            titulo="SET DE ENERGIA PERFECTO DOP"
            img="/setenergia.jpg"
            precio="35.00"
            descripcion="Domina el PVM y genera Won masivamente desde nivel 75 hasta 215 con este equipamiento optimizado"
        ></Nuevatarjeta>
    </div>
    <div></div>
</section>
