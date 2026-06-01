<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
</script>

<section class="flex items-center justify-center py-56 relative overflow-hidden text-center">
    <img src="/logo.jpg" alt="" class="absolute -z-10 top-0 left-0 w-full opacity-30"/>

    <div class=" p-12">
        <p class="text-5xl text-white font-extrabold pb-5 tracking-widest">EQUIPATE COMO UN DIOS</p>
        <p class="text-white justify-center font-bold">
            Los mejores ìtems de metin2 al alcance de tus
            manos,seguridad,rapidez y confianza
        </p>
    </div>
</section>

<section class="text-white">
    <div class="p-8">
        <p class=" text-white pb">Equipamiento de elite</p>
        <p class="tracking-normal font-extrabold text-2xl">VISTA DEL CATALOGO</p>
    </div>
    <button class="flex text-lg font-semibold text-white border-2 border-red-500 px-6 py1.5 bg-red-500 gap-1.5">Seccion principal</button>

    <div class="flex flex-row justify-center gap-8 p-10">
        <Nuevatarjeta
            titulo="SET DEL CAOS PERFECTO DOP"
            img="/setcaos.jpg"
            precio={75}
            descripcion="el poder definitivo para 215+.No pierdas la oportunidad de ser el top del servidor"
        ></Nuevatarjeta>
    </div>
    <div class="flex flex-row justify-center gap-8 p-10">
        <Nuevatarjeta
            titulo="SET DE ENERGIA PERFECTO DOP"
            img="/setenergia.jpg"
            precio={35}
            descripcion="Domina el PVM y genera Won masivamente desde nivel 75 hasta 215 con este equipamiento optimizado"
        ></Nuevatarjeta>

</div>
</section>
