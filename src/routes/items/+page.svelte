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

<div class="bg-[#0a0f1d] text-white py-24">
  <div class="max-w-7xl mx-auto px-6 mb-24 text-center">
    <h1 class="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
      <span class="block">Envíanos tu item favorito</span>
      <span class="block text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-amber-500 mt-2 drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]">
        Lo hacemos realidad
      </span>
    </h1>

    <div class="max-w-2xl mx-auto">
      <p class="text-blue-200/60 text-lg mb-8 leading-relaxed">
        Explora nuestra vista previa de equipamiento de élite. 
        <strong class="text-white">No busques más: tenemos absolutamente todo lo que ocupes para dominar el servidor.</strong>
      </p>
      
      <div class="flex justify-center w-full">
        <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noopener noreferrer" class="block w-full max-w-sm">
          <button type="button" class="w-full relative group overflow-hidden bg-white/5 border border-amber-800/30 text-white font-black uppercase text-sm tracking-widest py-6 rounded-xl transition-all duration-500 hover:border-amber-400/80 shadow-lg shadow-black/30">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"></div>
            <span class="relative z-10 text-white group-hover:text-black transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
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
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1d]/80 to-[#0a0f1d]"></div>

        <div class="mb-12 flex items-center gap-8 max-w-7xl mx-auto relative z-10">
          <h2 class="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white drop-shadow-[0_0_10px_rgba(202,138,4,0.3)]">
            {seccion.titulo}
          </h2>
          <div class="h-px flex-grow bg-gradient-to-r from-blue-900 via-yellow-600 to-transparent"></div>
        </div>

        <div class="flex flex-col md:flex-row w-full h-auto md:h-[50vh] gap-4 max-w-7xl mx-auto relative z-10">
          {#each seccion.data as cat}
            <div class="relative w-full h-64 md:h-full flex-1 group cursor-pointer overflow-hidden rounded-lg border border-blue-900/40 transition-all duration-[700ms] ease-out md:hover:flex-[4] hover:border-yellow-600/50 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              
              <div class="absolute inset-4 {cat.bg} bg-center bg-no-repeat bg-contain transition-all duration-[1000ms] brightness-75 grayscale group-hover:grayscale-0 group-hover:brightness-110 scale-95 group-hover:scale-100"></div>

              <div class="absolute bottom-0 left-0 w-full p-6 translate-y-0 md:translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/90 to-transparent z-20">
                <p class="text-white font-bold uppercase tracking-widest text-xs md:text-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {cat.desc}
                </p>
              </div>

              <div class="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div class="absolute inset-0 border-2 border-transparent group-hover:border-yellow-600/30 rounded-lg transition-colors duration-500"></div>
              <div class="absolute -inset-full h-full w-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 rotate-[30deg] translate-x-[-50%] group-hover:translate-x-[50%] transition-all duration-[1500ms]"></div>
            </div>
          {/each}
        </div>
      </section>
    {/each}
  </div>
</div>