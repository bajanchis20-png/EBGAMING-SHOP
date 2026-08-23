<script>
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";

    let nombre = $state("");
    let pedido = $state("");

    // Array con elementos multimedia: el video colocado de primero y luego las imágenes
    const mediaHero = [
        { tipo: "video", src: "/videohome.mp4" }, // <--- Video colocado de primero
        { tipo: "imagen", src: "/fondoname1.png" },
        { tipo: "imagen", src: "/fondoname2.png" },
        { tipo: "imagen", src: "/fondoname3.png" },
        { tipo: "imagen", src: "/fondoname4.png" },
        { tipo: "imagen", src: "/fondoname5.png" }
    ];

    let indiceActual = $state(0);

    onMount(() => {
        const intervalo = setInterval(() => {
            indiceActual = (indiceActual + 1) % mediaHero.length;
        }, 5000);

        return () => clearInterval(intervalo);
    });

    function enviarPedido(event) {
        event.preventDefault();
        if (!nombre || !pedido) return;
        window.open(`https://api.whatsapp.com/send/?phone=584149430559&text=Hola,%20soy%20${encodeURIComponent(nombre)}%20y%20quiero%20pedir:%20${encodeURIComponent(pedido)}`);
    }
</script>

<!-- HERO SECTION: TEXTO IZQUIERDA + CARRUSEL AMBIENTAL DIFUMINADO -->
<section class="relative w-full min-h-[75vh] sm:min-h-[80vh] lg:min-h-[85vh] bg-[#0a0a0c] overflow-hidden flex flex-col justify-center pt-10 pb-28 sm:pb-32 lg:py-16">
    
    <!-- Carrusel Multimedia de Fondo en la Columna Derecha (Videos e Imágenes integrados sin parpadeos) -->
    <div class="absolute inset-0 lg:left-[45%] z-0 pointer-events-none opacity-40 lg:opacity-50 bg-[#0a0a0c]">
        {#each mediaHero as item, index}
            <div class="absolute inset-0 transition-opacity duration-1000 ease-in-out bg-[#0a0a0c] {index === indiceActual ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}">
                
                {#if item.tipo === "video"}
                    <video src={item.src} autoplay muted loop playsinline class="w-full h-full object-cover object-center"></video>
                {:else}
                    <img src={item.src} alt="Fondo Hero Ambiental" class="w-full h-full object-cover object-center" />
                {/if}

                <!-- Máscaras de difuminado integradas por cada slide para evitar cortes o líneas -->
                <div class="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent z-10"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c] z-10"></div>
            </div>
        {/each}
    </div>

    <div class="relative z-20 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        <!-- Columna Izquierda: Títulos y Botones (Centrados globalmente en responsive) -->
        <div class="lg:col-span-7 flex flex-col items-center lg:items-start justify-center relative text-center lg:text-left">
            
            <!-- Contenedor del Título Ordenado -->
            <div class="flex flex-col mb-6 relative w-full items-center lg:items-start">
                
                <!-- Línea 1 -->
                <h1 class="font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-wider text-white drop-shadow-md mb-2 w-full text-center lg:text-left">
                    Equípate como un 
                </h1>
                
                <!-- Línea 2 -->
                <h1 class="font-fantasy text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-wide leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-red-950 via-red-600 to-rose-400 blood-pulse-flicker relative pb-3 cursor-default inline-block w-full text-center lg:text-left">
                    Dios del reino
                    
                    <!-- Gotas de Sangre acopladas al ras de las letras -->
                    <span class="blood-drop drop-1"></span>
                    <span class="blood-drop drop-2"></span>
                    <span class="blood-drop drop-3"></span>
                    <span class="blood-drop drop-4"></span>
                </h1>
            </div>
            
            <!-- Párrafo descriptivo -->
            <p class="text-neutral-300 font-normal text-xs sm:text-sm lg:text-base max-w-xl mb-6 sm:mb-8 leading-relaxed drop-shadow w-full text-center lg:text-left">
                Domina cada rincón con items de élite. Seguridad absoluta, transacciones blindadas y entrega inmediata en Metin2 Guabina, Metin2.es & Albion Online.
            </p>

            <!-- Botones Alargados en Mobile y Auto en PC -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto">
                <a href="/catalogo" class="w-full sm:w-auto px-6 py-4 sm:py-3 bg-white text-black hover:bg-neutral-200 font-bold text-xs tracking-wider uppercase transition-all duration-300 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-white/10 active:scale-[0.98]">
                    <span>Ver Catálogo</span>
                    <Icon icon="lucide:arrow-right" class="w-4 h-4" />
                </a>
                
                <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,%20estoy%20interesado%20en%20recibir%20asesoría%20sobre%20tus%20artículos" target="_blank" rel="noreferrer" class="w-full sm:w-auto px-6 py-4 sm:py-3 bg-black/50 hover:bg-black/70 text-white border border-white/20 font-bold text-xs tracking-wider uppercase transition-all duration-300 backdrop-blur-md rounded-xl text-center shadow-lg active:scale-[0.98]">
                    Asesoría WhatsApp
                </a>

                <a href="https://www.facebook.com/share/p/1BJFKDdHai/" target="_blank" rel="noreferrer" class="w-full sm:w-auto px-6 py-4 sm:py-3 bg-black/50 hover:bg-black/70 text-white border border-white/20 font-bold text-xs tracking-wider uppercase transition-all duration-300 backdrop-blur-md rounded-xl text-center shadow-lg flex items-center justify-center gap-2 active:scale-[0.98]">
                    <span>Referencias</span>
                </a>
            </div>
        </div>

    </div>
</section>

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

<!-- TARJETAS DE UNIVERSOS + FORMULARIO -->
<section class="relative z-30 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 -mt-24 sm:-mt-20 lg:-mt-24 mb-20">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        
        <!-- Tarjeta 1: Guabina -->
        <div class="relative h-[440px] sm:h-[460px] lg:h-[490px] bg-[#121216] border border-white/10 hover:border-red-600/50 overflow-hidden flex flex-col justify-between group transition-all duration-500 rounded-2xl p-5 sm:p-6 shadow-xl">
            <div class="absolute inset-0 z-0">
                <video autoplay loop muted playsinline class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40">
                    <source src="/guabi.mp4" type="video/mp4" />
                </video>
                <div class="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/60 to-transparent"></div>
            </div>

            <div class="relative z-10 flex justify-between items-center">
                <span class="text-[10px] font-bold uppercase tracking-widest text-red-500 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
                    Guabina
                </span>
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>

            <div class="relative z-10 flex flex-col items-center justify-center my-auto pointer-events-none">
                <img src="/guabina.png" alt="Guabina Logo" class="w-40 sm:w-48 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div class="relative z-10 space-y-3">
                <div class="space-y-1">
                    <h3 class="text-white font-bold text-sm sm:text-base tracking-wide">PACK GUABINA</h3>
                    <p class="text-[11px] text-neutral-400 leading-snug font-normal">
                        Equipamiento pesado, yang y servicios de nivel superior garantizados.
                    </p>
                </div>
                <a href="/catalogo" class="w-full py-2.5 bg-white/10 hover:bg-red-600 text-white text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 block text-center rounded-xl border border-white/10 hover:border-red-500">
                    Comprar Ahora
                </a>
            </div>
        </div>

        <!-- Tarjeta 2: Metin2.es -->
        <div class="relative h-[440px] sm:h-[460px] lg:h-[490px] bg-[#121216] border border-white/10 hover:border-white/40 overflow-hidden flex flex-col justify-between group transition-all duration-500 rounded-2xl p-5 sm:p-6 shadow-xl">
            <div class="absolute inset-0 z-0">
                <video autoplay loop muted playsinline class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40">
                    <source src="/fondovideo4.mp4" type="video/mp4" />
                </video>
                <div class="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/60 to-transparent"></div>
            </div>

            <div class="relative z-10 flex justify-between items-center">
                <span class="text-[10px] font-bold uppercase tracking-widest text-neutral-300 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                    Metin2.es
                </span>
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>

            <div class="relative z-10 flex flex-col items-center justify-center my-auto pointer-events-none">
                <img src="/metin2logo.png" alt="Metin2.es Logo" class="w-36 sm:w-44 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div class="relative z-10 space-y-3">
                <div class="space-y-1">
                    <h3 class="text-white font-bold text-sm sm:text-base tracking-wide">PACK METIN2.ES</h3>
                    <p class="text-[11px] text-neutral-400 leading-snug font-normal">
                        Yang y elementos esenciales asegurados en los servidores oficiales.
                    </p>
                </div>
                <a href="/vista-previa" class="w-full py-2.5 bg-white/10 hover:bg-white hover:text-black text-white text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 block text-center rounded-xl border border-white/10">
                    Comprar Ahora
                </a>
            </div>
        </div>

        <!-- Tarjeta 3: Albion Online -->
        <div class="relative h-[440px] sm:h-[460px] lg:h-[490px] bg-[#121216] border border-white/10 hover:border-blue-500/50 overflow-hidden flex flex-col justify-between group transition-all duration-500 rounded-2xl p-5 sm:p-6 shadow-xl">
            <div class="absolute inset-0 z-0">
                <video autoplay loop muted playsinline class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40">
                    <source src="/video5.mp4" type="video/mp4" />
                </video>
                <div class="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/60 to-transparent"></div>
            </div>

            <div class="relative z-10 flex justify-between items-center">
                <span class="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                    Albion
                </span>
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>

            <div class="relative z-10 flex flex-col items-center justify-center my-auto pointer-events-none">
                <img src="/albion.png" alt="Albion Online Logo" class="w-36 sm:w-44 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div class="relative z-10 space-y-3">
                <div class="space-y-1">
                    <h3 class="text-white font-bold text-sm sm:text-base tracking-wide">PACK ALBION</h3>
                    <p class="text-[11px] text-neutral-400 leading-snug font-normal">
                        Plata segura, sets optimizados y recursos para dominar las tierras.
                    </p>
                </div>
                <a href="/albion-online" class="w-full py-2.5 bg-white/10 hover:bg-blue-600 text-white text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 block text-center rounded-xl border border-white/10 hover:border-blue-500">
                    Comprar Ahora
                </a>
            </div>
        </div>

        <!-- Tarjeta 4: Formulario Exprés Integrado -->
        <div class="relative h-[440px] sm:h-[460px] lg:h-[490px] bg-[#121216] border border-white/10 flex flex-col justify-between rounded-2xl p-5 sm:p-6 shadow-xl sm:col-span-2 lg:col-span-1">
            <div class="space-y-1">
                <h3 class="text-white font-bold text-sm sm:text-base tracking-wide flex items-center justify-between">
                    <span>Pedido Exprés</span>
                    <span class="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                </h3>
                <p class="text-neutral-400 text-xs font-normal">
                    Cotización directa y prioritaria por WhatsApp.
                </p>
            </div>

            <form onsubmit={enviarPedido} class="space-y-2.5">
                <div class="space-y-1">
                    <label class="text-neutral-300 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider">
                        Personaje
                    </label>
                    <input bind:value={nombre} placeholder="Ej: Carlos Silva" required 
                           class="w-full bg-[#0a0a0c] border border-white/10 focus:border-red-600 px-3.5 py-2 text-xs text-white placeholder:text-neutral-600 outline-none transition-all rounded-xl" />
                </div>

                <div class="space-y-1">
                    <label class="text-neutral-300 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider">
                        Items / Paquete
                    </label>
                    <textarea bind:value={pedido} placeholder="¿Qué necesitas cotizar?" required 
                              class="w-full bg-[#0a0a0c] border border-white/10 focus:border-red-600 px-3.5 py-2 text-xs text-white placeholder:text-neutral-600 h-14 sm:h-16 outline-none transition-all resize-none rounded-xl"></textarea>
                </div>
                
                <button type="submit" class="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-semibold uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-all duration-300 rounded-xl shadow-lg shadow-red-600/20 active:scale-[0.98]">
                    <Icon icon="ic:baseline-whatsapp" class="w-4 h-4" />
                    <span>Enviar a WhatsApp</span>
                </button>
            </form>

            <div class="text-center text-neutral-500 text-[10px] uppercase tracking-widest font-medium">
                <span>Transacción 100% Segura</span>
            </div>
        </div>

    </div>
</section>

<!-- Sección de Comunidades -->
<section class="py-16 sm:py-20 bg-[#0a0a0c] relative">
    <div class="max-w-6xl mx-auto px-5 sm:px-8">
        <div class="text-center mb-10 sm:mb-12">
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                Únete a la <span class="text-neutral-500">Comunidad</span>
            </h3>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {#each 
                [
                    { title: "Metin2 Guabina", sub: "7.000 Usuarios", link: "https://www.facebook.com/groups/126085554213066" },
                    { title: "Albion Online", sub: "22.000 Usuarios", link: "https://www.facebook.com/groups/ALBI0NONLINE" },
                    { title: "EBGAMING SHOP", sub: "Página Oficial", link: "https://www.facebook.com/Metin2Guabinaventaseb" }
                ] as item
            }
                <a href={item.link} target="_blank" rel="noreferrer" 
                   class="group flex flex-col items-center text-center p-6 bg-[#121216]/40 hover:bg-[#121216] transition-all duration-300 rounded-2xl">
                    
                    <div class="mb-3 sm:mb-4 text-neutral-400 group-hover:text-white transition-colors duration-300">
                        <Icon class="w-7 h-7 sm:w-8 sm:h-8" icon="ic:baseline-facebook"/>
                    </div>

                    <h4 class="text-white font-bold text-sm tracking-wide mb-1 group-hover:text-neutral-200 transition-colors">
                        {item.title}
                    </h4>
                    
                    <p class="text-neutral-500 text-xs font-medium tracking-wider">
                        {item.sub}
                    </p>
                </a>
            {/each}
        </div>
    </div> 
</section>