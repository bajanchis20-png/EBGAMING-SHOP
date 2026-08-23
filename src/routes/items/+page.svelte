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

    // Estado reactivo Svelte 5
    let activeIndices = $state(secciones.map(() => 0));

    function nextSlide(sectionIndex) {
        activeIndices[sectionIndex] = (activeIndices[sectionIndex] + 1) % secciones[sectionIndex].data.length;
    }

    function prevSlide(sectionIndex) {
        const length = secciones[sectionIndex].data.length;
        activeIndices[sectionIndex] = (activeIndices[sectionIndex] - 1 + length) % length;
    }
</script>

<div class="bg-[#0d0d0f] text-white py-10 md:py-24 border-b border-white/10 font-sans min-h-screen">
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-4 lg:px-6 mb-12 md:mb-24 text-center relative z-10">
        <h1 class="text-3xl min-[400px]:text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[1.1] md:leading-[0.95] mb-6 md:mb-8 text-balance">
            <span class="block">Envíanos tu item favorito</span>
            
            <!-- Título estilizado con tipografía Cinzel Decorative, titileo y gotas de sangre -->
            <span class="font-fantasy font-black uppercase tracking-wide leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-red-950 via-red-600 to-rose-400 blood-pulse-flicker relative pb-3 cursor-default inline-block mt-2 md:mt-3">
                Lo hacemos realidad
                
                <!-- Gotas de Sangre acopladas al ras -->
                <span class="blood-drop drop-1"></span>
                <span class="blood-drop drop-2"></span>
                <span class="blood-drop drop-3"></span>
                <span class="blood-drop drop-4"></span>
            </span>
        </h1>

        <div class="max-w-2xl mx-auto px-2">
            <p class="text-neutral-400 font-bold text-[11px] min-[400px]:text-xs md:text-lg mb-6 md:mb-8 leading-relaxed uppercase">
                Explora nuestra vista previa de equipamiento de élite. 
                <strong class="text-white block mt-1 md:mt-2 text-pretty">No busques más: tenemos absolutamente todo lo que ocupes para dominar el servidor.</strong>
            </p>
            
            <div class="flex justify-center w-full">
                <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noopener noreferrer" class="w-full max-w-[280px] md:max-w-xs group">
                    <button type="button" class="w-full relative overflow-hidden bg-[#e60012] hover:bg-[#cc0010] text-white font-black uppercase text-xs md:text-sm tracking-widest py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(230,0,18,0.4)] active:scale-95">
                        <span class="relative z-10">Haz tu pedido ahora</span>
                    </button>
                </a>
            </div>
        </div>
    </div>

    <!-- Secciones de Carruseles -->
    <div class="space-y-12 md:space-y-24">
        {#each secciones as seccion, sIdx}
            <section class="relative px-3 md:px-6 py-4">
                <!-- Fondo ambiental -->
                <img src={seccion.fondo} alt="" class="absolute inset-0 w-full h-full object-cover opacity-5" />
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0f]/80 to-[#0d0d0f]"></div>

                <!-- Título de Sección -->
                <div class="mb-6 md:mb-12 flex items-center gap-3 md:gap-8 max-w-5xl mx-auto relative z-10 px-1">
                    <h2 class="text-xl min-[400px]:text-2xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white shrink-0">
                        {seccion.titulo}
                    </h2>
                    <div class="h-px flex-grow bg-white/10"></div>
                </div>

                <!-- Contenedor Carrusel (Responsive Extremadamente Ajustado) -->
                <div class="max-w-4xl mx-auto relative z-10 group">
                    
                    <div class="relative w-full h-[280px] min-[400px]:h-[350px] lg:h-[450px] rounded-[1.25rem] lg:rounded-[2.5rem] bg-[#121216] border border-white/10 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-colors lg:hover:border-white/20">
                        
                        <!-- Flecha Izquierda -->
                        <button 
                            type="button"
                            class="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-30 p-1.5 md:p-3 lg:p-4 rounded-full bg-black/60 border border-white/10 text-white active:bg-[#e60012] lg:hover:bg-[#e60012] lg:hover:border-[#e60012] transition-all duration-300 backdrop-blur-sm"
                            onclick={() => prevSlide(sIdx)}
                            aria-label="Anterior"
                        >
                            <svg class="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>

                        <!-- Flecha Derecha -->
                        <button 
                            type="button"
                            class="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-30 p-1.5 md:p-3 lg:p-4 rounded-full bg-black/60 border border-white/10 text-white active:bg-[#e60012] lg:hover:bg-[#e60012] lg:hover:border-[#e60012] transition-all duration-300 backdrop-blur-sm"
                            onclick={() => nextSlide(sIdx)}
                            aria-label="Siguiente"
                        >
                            <svg class="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>

                        <!-- Items del Carrusel -->
                        {#each seccion.data as cat, i}
                            <div class="absolute inset-0 transition-opacity duration-500 md:duration-700 ease-in-out {activeIndices[sIdx] === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}">
                                
                                <!-- Imagen (espaciada para evitar botones en móvil) -->
                                <div class="absolute inset-x-12 min-[400px]:inset-x-14 md:inset-x-20 lg:inset-x-32 inset-y-6 md:inset-y-12 {cat.bg} bg-center bg-no-repeat bg-contain transform transition-transform duration-700 {activeIndices[sIdx] === i ? 'scale-100' : 'scale-95'}"></div>
                                
                                <!-- Panel de texto Inferior -->
                                <div class="absolute bottom-0 left-0 w-full px-2 py-4 md:p-8 bg-gradient-to-t from-black/95 via-black/80 to-transparent z-20 flex flex-col justify-end min-h-[80px]">
                                    <p class="text-white font-bold md:font-black uppercase tracking-wide md:tracking-wider text-[10px] md:text-xs leading-snug md:leading-relaxed text-center px-6 md:px-10 text-balance">
                                        {cat.desc}
                                    </p>
                                </div>
                            </div>
                        {/each}
                    </div>

                    <!-- Indicadores Paginación -->
                    <div class="flex justify-center items-center gap-2 md:gap-3 mt-4 md:mt-6">
                        {#each seccion.data as _, i}
                            <!-- Área táctil ampliada para móviles (-m-2 p-2) -->
                            <button 
                                type="button"
                                aria-label="Ir a slide {i + 1}"
                                class="relative p-2 -m-2 group/dot"
                                onclick={() => { activeIndices[sIdx] = i; }}
                            >
                                <div class="h-1.5 md:h-2 transition-all duration-300 rounded-full {activeIndices[sIdx] === i ? 'w-8 md:w-10 bg-[#e60012] shadow-[0_0_10px_rgba(230,0,18,0.5)]' : 'w-2 md:w-3 bg-white/20 group-hover/dot:bg-white/50'}"></div>
                            </button>
                        {/each}
                    </div>

                </div>
            </section>
        {/each}
    </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap');

  .font-fantasy {
    font-family: 'Cinzel Decorative', serif;
  }

  /* Animación de titileo y pulso en rojo sangre gamer */
  @keyframes bloodFlicker {
    0%, 100% {
      filter: drop-shadow(0 0 8px rgba(220, 38, 38, 0.6)) drop-shadow(0 0 20px rgba(153, 27, 27, 0.4));
      opacity: 1;
    }
    50% {
      filter: drop-shadow(0 0 18px rgba(255, 75, 75, 0.95)) drop-shadow(0 0 35px rgba(220, 38, 38, 0.7));
      opacity: 0.88;
    }
    70% {
      filter: drop-shadow(0 0 5px rgba(185, 28, 28, 0.5));
      opacity: 1;
    }
  }

  .blood-pulse-flicker {
    background-size: 200% auto;
    animation: bloodFlicker 2.5s infinite ease-in-out;
    transition: 0.4s ease-in-out;
  }

  .blood-pulse-flicker:hover {
    background-position: right center;
    filter: drop-shadow(0 0 25px rgba(255, 50, 50, 1)) drop-shadow(0 0 50px rgba(220, 38, 38, 0.9));
    opacity: 1;
  }

  /* Gotas de sangre con origen pegado al ras de las letras */
  .blood-drop {
    position: absolute;
    bottom: 2px;
    width: 4px;
    height: 20px;
    background: linear-gradient(
      to bottom, 
      rgba(255, 100, 100, 0.95) 0%, 
      rgba(190, 15, 15, 0.95) 30%, 
      rgba(90, 5, 5, 1) 75%, 
      rgba(35, 0, 0, 1) 100%
    );
    border-radius: 50% 50% 50% 50% / 20% 20% 80% 80%;
    opacity: 0;
    pointer-events: none;
    box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.65), 0 0 8px rgba(239, 68, 68, 0.85);
    transform-origin: top center;
    z-index: 25 !important;
  }

  @keyframes realFluidDripFlush {
    0% {
      transform: translateY(0) scaleY(0.02) scaleX(0.6);
      opacity: 0;
    }
    12% {
      opacity: 1;
      transform: translateY(2px) scaleY(0.4) scaleX(1.1);
    }
    30% {
      transform: translateY(11px) scaleY(2.3) scaleX(0.4);
    }
    50% {
      transform: translateY(24px) scaleY(1.2) scaleX(0.9);
      opacity: 0.98;
    }
    80% {
      transform: translateY(46px) scaleY(0.9) scaleX(1);
      opacity: 0.8;
    }
    100% {
      transform: translateY(58px) scaleY(0.15) scaleX(0.4);
      opacity: 0;
    }
  }

  .drop-1 {
    left: 18%;
    animation: realFluidDripFlush 3.2s infinite cubic-bezier(0.25, 1, 0.5, 1);
    animation-delay: 0.2s;
  }

  .drop-2 {
    left: 42%;
    animation: realFluidDripFlush 2.6s infinite cubic-bezier(0.25, 1, 0.5, 1);
    animation-delay: 1.1s;
  }

  .drop-3 {
    left: 65%;
    animation: realFluidDripFlush 3.8s infinite cubic-bezier(0.25, 1, 0.5, 1);
    animation-delay: 0.6s;
  }

  .drop-4 {
    left: 85%;
    animation: realFluidDripFlush 2.9s infinite cubic-bezier(0.25, 1, 0.5, 1);
    animation-delay: 1.8s;
  }
</style>