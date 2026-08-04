<script>
    const monturas = [
        { bg: "bg-[url('/cangrejo.webp')]", desc: "Fuerza contra monstruos +45% +20% exp +20% objetos." },
        { bg: "bg-[url('/dragon2.webp')]", desc: "Fuerza contra monstruos +45% +20% exp +20% objetos." },
        { bg: "bg-[url('/araña.webp')]", desc: "Fuerza contra monstruos +45% +20% exp +20% objetos." },
        { bg: "bg-[url('/tiburon.png')]", desc: "Fuerza contra monstruos +45% +20% exp +20% objetos." },
    ];

    const armas = [
        { bg: "bg-[url('/pvm3.png')]", desc: "Fuerza contra monstruos +15% +20% exp +5% objetos." },
        { bg: "bg-[url('/eli.png')]", desc: "Fuerza contra monstruos +35% +30% exp +15% objetos." },
        { bg: "bg-[url('/pvm2.png')]", desc: "Fuerza contra monstruos +25% +5% Jefes +10% objetos." },
        { bg: "bg-[url('/pvm1.png')]", desc: "Fuerza contra monstruos +25% +5% Jefes +10% objetos." },
    ];

    const eventos = [
        { bg: "bg-[url('/akatsuki2.png')]", desc: "Max. HP +4500 Medio Humanos +40%." },
        { bg: "bg-[url('/atuendo22.png')]", desc: "Max. HP +4500 Medio Humanos +40%." },
        { bg: "bg-[url('/atuendo33.png')]", desc: "Max. HP +4500 Medio Humanos +40%." },
        { bg: "bg-[url('/atuendo11.png')]", desc: "Max. HP +4500 Medio Humanos +40%." },
    ];

    const armaduras = [
        { bg: "bg-[url('/+101.png')]", desc: "Ataque absoluto contra todo daño." },
        { bg: "bg-[url('/+102.png')]", desc: "Mejorada a +10 para el máximo poder." },
        { bg: "bg-[url('/+103.png')]", desc: "Equipo de élite garantizada." },
        { bg: "bg-[url('/+104.png')]", desc: "El mejor equipo para el nivel máximo." },
    ];

    const skins = [
        { bg: "bg-[url('/espadita.png')]", desc: "Golpes Criticos +10% Golpes de penetracion +10%." },
        { bg: "bg-[url('/new3.png')]", desc: "Golpes Criticos +10% Golpes de penetracion +10%." },
        { bg: "bg-[url('/shadow.png')]", desc: "Golpes Criticos +10% Golpes de penetracion +10%." },
        { bg: "bg-[url('/fan.png')]", desc: "Golpes Criticos +10% Golpes de penetracion +10%." },
    ];

    const secciones = [
        { titulo: "Monturas", data: monturas, fondo: "/itemfondo2.png" },
        { titulo: "Atuendos PVM", data: armas, fondo: "/itemfondo.png" },
        { titulo: "Atuendos PVP", data: eventos, fondo: "/itemfondo_evento.png" },
        { titulo: "ARMAS Y ARMADURAS +10", data: armaduras, fondo: "/itemfondo3.png" },
        { titulo: "SKINS", data: skins, fondo: "/itemfondo4.jpg" },
    ];
</script>

<div class="bg-[#f4f4f6] text-neutral-900 py-24 border-b border-neutral-300">
    <div class="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h1 class="text-5xl md:text-7xl font-black text-neutral-900 uppercase tracking-tighter leading-[0.9] mb-8">
            <span class="block">Envíanos tu item favorito</span>
            <span class="block text-red-600 mt-2">
                Lo hacemos realidad
            </span>
        </h1>

        <div class="max-w-2xl mx-auto">
            <p class="text-neutral-600 font-bold text-base md:text-lg mb-8 leading-relaxed uppercase">
                Explora nuestra vista previa de equipamiento de élite. 
                <strong class="text-neutral-900">No busques más: tenemos absolutamente todo lo que ocupes para dominar el servidor.</strong>
            </p>
            
            <div class="flex justify-center w-full">
                <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noopener noreferrer" class="w-full max-w-xs">
                    <button type="button" class="w-full relative group overflow-hidden bg-neutral-900 hover:bg-red-600 text-white font-black uppercase text-xs sm:text-sm tracking-widest py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg cursor-pointer">
                        <span class="relative z-10 transition-colors duration-300">
                            Haz tu pedido ahora
                        </span>
                    </button>
                </a>
            </div>
        </div>
    </div>

    <div class="space-y-24">
        {#each secciones as seccion}
            <section class="relative px-6 py-4">
                <img src={seccion.fondo} alt="" class="absolute inset-0 w-full h-full object-cover opacity-5" />
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#f4f4f6]/80 to-[#f4f4f6]"></div>

                <div class="mb-12 flex items-center gap-8 max-w-7xl mx-auto relative z-10">
                    <h2 class="text-3xl md:text-6xl font-black uppercase tracking-tighter text-neutral-900">
                        {seccion.titulo}
                    </h2>
                    <div class="h-px flex-grow bg-neutral-300"></div>
                </div>

                <div class="grid grid-cols-2 md:flex md:h-[50vh] gap-4 max-w-7xl mx-auto relative z-10">
                    {#each seccion.data as cat}
                        <div class="relative h-48 md:h-full flex-1 group cursor-pointer overflow-hidden rounded-3xl bg-white border border-neutral-300 transition-all duration-500 ease-out md:hover:flex-[4] hover:border-red-600 shadow-xl">
                            
                            <div class="absolute inset-2 md:inset-4 {cat.bg} bg-center bg-no-repeat bg-contain transition-all duration-500 scale-95 group-hover:scale-100"></div>

                            <div class="absolute bottom-0 left-0 w-full p-2 md:p-6 translate-y-0 md:translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-neutral-900/90 to-transparent z-20">
                                <p class="text-white font-black uppercase tracking-widest text-[10px] md:text-xs opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                    {cat.desc}
                                </p>
                            </div>

                            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    {/each}
                </div>
            </section>
        {/each}
    </div>
</div>