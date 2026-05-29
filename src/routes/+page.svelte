<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
</script>

<section class="flex items-center justify-center py-56 relative overflow-hidden text-center">
    <img src="/logo.jpg" alt="" class="absolute -z-10 top-0 left-0 w-full opacity-30" />

    <div class=" p-12">
        <p class="text-5xl text-white font-extrabold pb-5 tracking-widest">EQUIPATE COMO UN DIOS</p>
        <p class="text-white justify-center font-bold">
            Los mejores ìtems de metin2 al alcance de tus
            manos,seguridad,rapidez y confianza
        </p>
    </div>
</section>

<section>
    <div>
        <p>Equipamiento de elite</p>
        <p>VISTA DEL CATALOGO</p>
    </div>
    <button>Seccion principal</button>

    <div>
        <!-- tarjjetas nuevas -->
        <Nuevatarjeta
            titulo="Set de energia perfecto DOP"
            img="/setenergia.jpg"
            precio={35.0}
            descripcion="Domina el PVM y genera won masivamente desde nivel 75 hasta 215 con este equipamiento optimizado"
        ></Nuevatarjeta>
        <Nuevatarjeta
            titulo="Set del caos perfecto DOP"
            img="/setcaos.jpg"
            precio={75.0}
            descripcion="el poder definitivo para 215+.No pierdas la oportunidad de ser el top del servidor"
        ></Nuevatarjeta>
    </div>
</section>
