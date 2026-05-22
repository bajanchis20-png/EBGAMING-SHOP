<script>
    import Tarjetacatalogo from "$lib/components/Tarjetacatalogo.svelte";
</script>

<section>
    <div>
        <p>Domina el juego</p>
        <button>Ver catergorìa completa</button>
    </div>

    <div>
        <Tarjetacatalogo precio={40.00} titulo="Monturas Especiales" img="/monturas.jpg" descripcion="Velocidad y bonus exclusivos para tu personaje."/>
        <Tarjetacatalogo precio={15.00} titulo="Won" img="/won.jpg" descripcion="entrega inmediata en tu servidor preferido"/>
        <Tarjetacatalogo precio={35.00} titulo="Set de energia" img="/setenergia.jpg" descripcion="Domina el PVM y genera Won masivamente desde nivel 75 hasta 215 con este equipamiento optimizado."/>
        <Tarjetacatalogo precio={75.00} titulo="Set del caos" img="setcaos.jpg" descripcion="El poder definitivo para niveles 215+ no pierdas la oportunidad de ser TOP en el servidor"/>
    </div>
</section>
