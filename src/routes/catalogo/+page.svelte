
<script>
    import Icon from "@iconify/svelte";
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
</script>

<section class="text-white p-8 bg-[#0a0f1d]">

  <div class="mb-16 border-l-4 border-yellow-500 pl-6 py-2">
    <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
        Vista del Catálogo
    </h2>
    
    <div class="flex items-center gap-4 text-blue-200/50 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold">
        <span>Metin2 Guabina</span>
        <span class="w-8 h-[1px] bg-blue-900"></span>
        <span>Equipamiento de Elite</span>
    </div>
</div>

    <div class="grid grid-cols-2 gap-8">
        <Nuevatarjeta titulo="SET DEL CAOS PERFECTO DOP" img="/setcaos.jpg" descripcion="El poder definitivo 60 media, para 215+.No pierdas la oportunidad de ser el top del servidor en PVM + GUÍA DE PVM"></Nuevatarjeta>
        <Nuevatarjeta titulo="SET DE ENERGIA PERFECTO DOP " img="/setenergia.jpg" precio="35.00" descripcion="Domina el PVM y genera Won masivamente desde nivel 75 hasta 215 con este equipamiento optimizado + GUÍA DE PVM"></Nuevatarjeta>
        <Nuevatarjeta titulo="SET'S PERFECTOS PVP" img="/pvpset.jpeg" precio="75.00" descripcion="Set perfecto EUFORIA desde lv85 a 160, set perfecto ELEMENTAL desde lv235+.No piedras la oportunidad y se el"></Nuevatarjeta>
         <Nuevatarjeta titulo="PERSONAJE EQUIPADO LV85" img="/lv85.jpeg" precio="25.00" descripcion="Eleva tu diversión a otro nivel, 4 set perfectos lv85, 4 armas piedras +6, 4 armaduras y 70.000 WON"></Nuevatarjeta>
        <Nuevatarjeta titulo="PERSONAJE EQUIPADO LV215" img="/personaje.jpg" precio="130.00" descripcion="Haz una sola inversion y obten todo lo que necesitas para ser el mejor 10 equipos,perfectos armas, y armaduras"></Nuevatarjeta>
          <Nuevatarjeta titulo="PERSONAJE EQUIPADO LV 235" img="/235set.jpeg" precio="25.00" descripcion="4 Set's perfectos pvp, con armas & armaduras +9 o +10, cinto de guerra, libro potenciacion, guantes del caos"></Nuevatarjeta>
        <Nuevatarjeta titulo="WON AL MEJOR PRECIO DEL MERCADO" img="/won.jpg" precio="15.00" descripcion="Entrega inmediata en tu servidor preferido, ofrecemos won en todos los sever, Guabina, Iberia &+"></Nuevatarjeta>
    
        <Nuevatarjeta titulo="MONTURAS GOLD" img="/monturas2.jpeg" precio="40.00" descripcion="Velocidad y bonus exclusivos para tu personaje"></Nuevatarjeta>
        <Nuevatarjeta titulo="GUANTES+9" img="/guante.jpg" precio="110.00" descripcion="El poder que necesitas, te ofrecemos el guante que elijas."></Nuevatarjeta>
        <Nuevatarjeta titulo="CINTOS+9" img="/cinto.jpg" precio="60.00" descripcion="Cinto de guerra para PVP, cinto de vida para PVM,y todos los que ocupes dentro del juego"></Nuevatarjeta>
        <Nuevatarjeta titulo="ARMAS & ARMADURAS+10" img="/masdiez.jpeg" precio="110.00" descripcion="Domina el juego en su totalidad con el poder maximo"></Nuevatarjeta>
        <Nuevatarjeta titulo="ATUENDOS" img="/elatuendo.jpg" precio="75.00" descripcion="Haz que tu personaje sea único. Selecciona tu estilo y solicita tu diseño personalizado hoy mismo"></Nuevatarjeta>
        <Nuevatarjeta titulo="NARUTO & AKATSUKI" img="/naruto.jpg" precio="110.00" descripcion="Todos amamos naruto, y mucho mas en nuestro juego favorito. Domina el PVM con el atuendo NARUTO, y el PVP con el AKATSUKI"></Nuevatarjeta>
        <Nuevatarjeta titulo="ESTOLAS" img="/estolas2.png" precio="35.00" descripcion="Incrementa tu ataque con las mejores estolas,en PVM O PVP"></Nuevatarjeta>
        <Nuevatarjeta titulo="EFECTOS" img="/efectos.png" precio="8.00" descripcion="Lleva el estilo contigo, convierte tu personaje esteticamente a tu gusto, efectos disponibles para armas&armaduras. elige el que desees y lo haremos realidad"></Nuevatarjeta>
        <Nuevatarjeta titulo="MASCOTAS" img="/mascotas.png" precio="75.00" descripcion="Potencia tu poder, tenemos para ti mascotas PVM & PVP"></Nuevatarjeta>
        <Nuevatarjeta titulo="SUBE DE NIVEL CON UN CLICK" img="/livro.jpg" precio="25.00" descripcion="Con el Aprendizaje 215, sube de nivel a Lv215 con un click, con el Libro de potenciacición sube a Lv235 con un click"></Nuevatarjeta>

    </div>
</section>

<section class="py-24 px-6 bg-[#05070d] border-t border-blue-900/50">
    <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-black text-center mb-16 uppercase tracking-tighter text-white drop-shadow-[0_0_10px_rgba(234,179,8,0.2)]">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800">
                Preguntas 
            </span>
            <span class="text-white">Frecuentes</span>
        </h2>

        <div class="space-y-8">
            {#each [
                { q: "¿Los items vienen dopados?", a: "Absolutamente. Cada pieza es optimizada al máximo nivel, incluyendo piedras de alta calidad y bonus perfectos para asegurar tu dominio en el campo de batalla." },
                { q: "¿Cómo puedo generar won?", a: "Al adquirir uno de nuestros sets PvM, recibirás acceso exclusivo a nuestra guía estratégica personalizada según tu nivel, diseñada para maximizar tu capacidad de farmeo." },
                { q: "¿Qué métodos de pago aceptan?", a: "Disponemos de una infraestructura de pago global segura. Consulta nuestra sección dedicada para ver el catálogo completo de transferencias y monederos digitales disponibles en tu región." }
            ] as item}
                <div class="group relative bg-gradient-to-br from-[#0a0f1d] to-[#121828] border border-blue-900/50 rounded-xl p-8 hover:border-yellow-600/50 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                    <div class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-yellow-600/50"></div>
                    
                    <h3 class="text-xl font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-3">
                        <span class="text-yellow-600 text-2xl font-black">/</span> {item.q}
                    </h3>
                    <p class="text-blue-200/70 leading-relaxed font-light pl-6 border-l-2 border-blue-600/30">
                        {item.a}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
