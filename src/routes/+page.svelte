<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
</script>

<section>
    <img src="/logo.jpg" alt="" />

    <div>
        <p>EQUIPATE COMO UN DIOS</p>
        <p>
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
