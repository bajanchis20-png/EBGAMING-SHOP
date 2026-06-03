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
            descripcion="El poder definitivo para 215+.No pierdas la oportunidad de ser el top del servidor en PVM"
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
            titulo="MONTURAS GOLD"
            img="/monturas2.jpeg"
            precio="40.00"
            descripcion="Velocidad y bonus exclusivos para tu personaje"
        ></Nuevatarjeta>
           <Nuevatarjeta
            titulo="GUANTES+9"
            img="/guante.jpg"
            precio="110.00"
            descripcion="El poder que necesitas, para PVP Guante del vacio & caos, para PVM guante celestial"
        ></Nuevatarjeta>
  <Nuevatarjeta
            titulo="PERSONAJE EQUIPADO LV215"
            img="/personaje.jpg"
            precio="130.00"
            descripcion="Haz una sola inversion y obten todo lo que necesitas para ser el mejor 10 equipos,perfectos armas, y armaduras"
        ></Nuevatarjeta>
            <Nuevatarjeta
            titulo=""
            img="/setcaos.jpg"
            precio="75.00"
            descripcion="El poder definitivo para 215+.No pierdas la oportunidad de ser el top del servidor en PVM"
        ></Nuevatarjeta>
            <Nuevatarjeta
            titulo="SET DEL CAOS PERFECTO DOP"
            img="/setcaos.jpg"
            precio="75.00"
            descripcion="El poder definitivo para 215+.No pierdas la oportunidad de ser el top del servidor en PVM"
        ></Nuevatarjeta>
            <Nuevatarjeta
            titulo="SET DEL CAOS PERFECTO DOP"
            img="/setcaos.jpg"
            precio="75.00"
            descripcion="El poder definitivo para 215+.No pierdas la oportunidad de ser el top del servidor en PVM"
        ></Nuevatarjeta>
            <Nuevatarjeta
            titulo="SET DEL CAOS PERFECTO DOP"
            img="/setcaos.jpg"
            precio="75.00"
            descripcion="El poder definitivo para 215+.No pierdas la oportunidad de ser el top del servidor en PVM"
        ></Nuevatarjeta>
    </div>
    <div></div>
</section>
