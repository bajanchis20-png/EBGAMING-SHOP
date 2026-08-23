<script>
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";

    let nombre = $state("");
    let pedido = $state("");

    // Array con elementos multimedia: el video colocado de primero y luego las imágenes
    const mediaHero = [
        { tipo: "video", src: "/videohome.mp4" },
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
<section class="relative w-full min-h-[75vh] sm:min-h-[80vh] lg:min-h-[85vh] bg-[#0a0a0c] overflow-hidden flex flex-col justify-center pt-12 sm:pt-16 pb-24 sm:pb-32 lg:py-16">
    
    <!-- Carrusel Multimedia de Fondo en la Columna Derecha -->
    <div class="absolute inset-0 lg:left-[45%] z-0 pointer-events-none opacity-30 sm:opacity-40 lg:opacity-50 bg-[#0a0a0c]">
        {#each mediaHero as item, index}
            <div class="absolute inset-0 transition-opacity duration-1000 ease-in-out bg-[#0a0a0c] {index === indiceActual ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}">
                
                {#if item.tipo === "video"}
                    <video src={item.src} autoplay muted loop playsinline class="w-full h-full object-cover object-center"></video>
                {:else}
                    <img src={item.src} alt="Fondo Hero Ambiental" class="w-full h-full object-cover object-center" />
                {/if}

                <!-- Máscaras de difuminado adaptativas -->
                <div class="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/85 sm:via-[#0a0a0c]/60 to-[#0a0a0c]/90 sm:to-transparent z-10"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c] z-10"></div>
            </div>
        {/each}
    </div>

    <div class="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
        
        <!-- Columna Izquierda: Títulos y Botones -->
        <div class="lg:col-span-7 flex flex-col items-center lg:items-start justify-center relative text-center lg:text-left">
            
            <!-- Contenedor del Título Ordenado -->
       <!-- Contenedor del Título Ordenado -->
<div class="flex flex-col mb-4 sm:mb-6 relative w-full items-center lg:items-start">
    <div class="mb-2 sm:mb-3 w-full flex justify-center lg:justify-start">
        <!-- Resplandor blanco/plateado sutil y elegante que combina con el diseño -->
        <img src="/gamin2.png" alt="Gamin" class="w-64 xs:w-72 sm:w-96 lg:w-[28xl] max-w-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] animate-pulse" />
    </div>
</div>
            <!-- Párrafo descriptivo optimizado -->
            <p class="text-neutral-300 font-normal text-xs sm:text-sm lg:text-base max-w-lg lg:max-w-xl mb-6 sm:mb-8 leading-relaxed drop-shadow w-full text-center lg:text-left px-2 sm:px-0">
                Domina cada rincón con items de élite. Seguridad absoluta, transacciones blindadas y entrega inmediata en Metin2 Guabina, Metin2.es & Albion Online.
            </p>

            <!-- Botones flexibles con estilo Login -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
                <a href="/catalogo" class="w-full sm:w-auto px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 font-semibold text-xs tracking-wider uppercase transition-all duration-300 backdrop-blur-sm rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-[0.98]">
                    <span>Ver Catálogo</span>
                    <Icon icon="lucide:arrow-right" class="w-4 h-4 shrink-0" />
                </a>
                
                <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,%20estoy%20interesado%20en%20recibir%20asesoría%20sobre%20tus%20artículos" target="_blank" rel="noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 font-semibold text-xs tracking-wider uppercase transition-all duration-300 backdrop-blur-sm rounded-xl text-center shadow-lg active:scale-[0.98]">
                    Asesoría WhatsApp
                </a>

                <a href="https://www.facebook.com/share/p/1BJFKDdHai/" target="_blank" rel="noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 font-semibold text-xs tracking-wider uppercase transition-all duration-300 backdrop-blur-sm rounded-xl text-center shadow-lg flex items-center justify-center gap-2 active:scale-[0.98]">
                    <span>Referencias</span>
                </a>
            </div>
        </div>

    </div>
</section>

<!-- TARJETAS DE UNIVERSOS + FORMULARIO -->
<section class="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 -mt-16 sm:-mt-20 lg:-mt-24 mb-16 sm:mb-20">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        
        <!-- Tarjeta 1: Guabina -->
        <div class="relative h-[420px] xs:h-[440px] sm:h-[460px] lg:h-[490px] bg-[#121216] border border-white/10 hover:border-white/30 overflow-hidden flex flex-col justify-between group transition-all duration-500 rounded-2xl p-4 sm:p-6 shadow-xl">
            <div class="absolute inset-0 z-0">
                <video autoplay loop muted playsinline class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40">
                    <source src="/guabi.mp4" type="video/mp4" />
                </video>
                <div class="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/60 to-transparent"></div>
            </div>

            <div class="relative z-10 flex justify-between items-center">
                <span class="text-[10px] font-bold uppercase tracking-widest text-neutral-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                    Guabina
                </span>
                <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            </div>

            <div class="relative z-10 flex flex-col items-center justify-center my-auto pointer-events-none">
                <img src="/guabina.png" alt="Guabina Logo" class="w-36 xs:w-40 sm:w-48 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div class="relative z-10 space-y-3">
                <div class="space-y-1">
                    <h3 class="text-white font-bold text-sm sm:text-base tracking-wide">PACK GUABINA</h3>
                    <p class="text-[11px] text-neutral-400 leading-snug font-normal">
                        Equipamiento pesado, yang y servicios de nivel superior garantizados.
                    </p>
                </div>
                <a href="/catalogo" class="w-full px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 block text-center rounded-xl border border-white/10 hover:border-white/30 backdrop-blur-sm active:scale-[0.98]">
                    Comprar Ahora
                </a>
            </div>
        </div>

        <!-- Tarjeta 2: Metin2.es -->
        <div class="relative h-[420px] xs:h-[440px] sm:h-[460px] lg:h-[490px] bg-[#121216] border border-white/10 hover:border-white/30 overflow-hidden flex flex-col justify-between group transition-all duration-500 rounded-2xl p-4 sm:p-6 shadow-xl">
            <div class="absolute inset-0 z-0">
                <video autoplay loop muted playsinline class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40">
                    <source src="/fondovideo4.mp4" type="video/mp4" />
                </video>
                <div class="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/60 to-transparent"></div>
            </div>

            <div class="relative z-10 flex justify-between items-center">
                <span class="text-[10px] font-bold uppercase tracking-widest text-neutral-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                    Metin2.es
                </span>
                <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            </div>

            <div class="relative z-10 flex flex-col items-center justify-center my-auto pointer-events-none">
                <img src="/metin2logo.png" alt="Metin2.es Logo" class="w-32 xs:w-36 sm:w-44 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div class="relative z-10 space-y-3">
                <div class="space-y-1">
                    <h3 class="text-white font-bold text-sm sm:text-base tracking-wide">PACK METIN2.ES</h3>
                    <p class="text-[11px] text-neutral-400 leading-snug font-normal">
                        Yang y elementos esenciales asegurados en los servidores oficiales.
                    </p>
                </div>
                <a href="/vista-previa" class="w-full px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 block text-center rounded-xl border border-white/10 hover:border-white/30 backdrop-blur-sm active:scale-[0.98]">
                    Comprar Ahora
                </a>
            </div>
        </div>

        <!-- Tarjeta 3: Albion Online -->
        <div class="relative h-[420px] xs:h-[440px] sm:h-[460px] lg:h-[490px] bg-[#121216] border border-white/10 hover:border-white/30 overflow-hidden flex flex-col justify-between group transition-all duration-500 rounded-2xl p-4 sm:p-6 shadow-xl">
            <div class="absolute inset-0 z-0">
                <video autoplay loop muted playsinline class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40">
                    <source src="/video5.mp4" type="video/mp4" />
                </video>
                <div class="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/60 to-transparent"></div>
            </div>

            <div class="relative z-10 flex justify-between items-center">
                <span class="text-[10px] font-bold uppercase tracking-widest text-neutral-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                    Albion
                </span>
                <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            </div>

            <div class="relative z-10 flex flex-col items-center justify-center my-auto pointer-events-none">
                <img src="/albion.png" alt="Albion Online Logo" class="w-32 xs:w-36 sm:w-44 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div class="relative z-10 space-y-3">
                <div class="space-y-1">
                    <h3 class="text-white font-bold text-sm sm:text-base tracking-wide">PACK ALBION</h3>
                    <p class="text-[11px] text-neutral-400 leading-snug font-normal">
                        Plata segura, sets optimizados y recursos para dominar las tierras.
                    </p>
                </div>
                <a href="/albion-online" class="w-full px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 block text-center rounded-xl border border-white/10 hover:border-white/30 backdrop-blur-sm active:scale-[0.98]">
                    Comprar Ahora
                </a>
            </div>
        </div>

        <!-- Tarjeta 4: Formulario Exprés Integrado -->
        <div class="relative h-[420px] xs:h-[440px] sm:h-[460px] lg:h-[490px] bg-[#121216] border border-white/10 flex flex-col justify-between rounded-2xl p-4 sm:p-6 shadow-xl sm:col-span-2 lg:col-span-1">
            <div class="space-y-1">
                <h3 class="text-white font-bold text-sm sm:text-base tracking-wide flex items-center justify-between">
                    <span>Pedido Exprés</span>
                    <span class="w-2 h-2 rounded-full bg-orange-500 animate-ping shrink-0"></span>
                </h3>
                <p class="text-neutral-400 text-xs font-normal">
                    Cotización directa y prioritaria por WhatsApp.
                </p>
            </div>

            <form onsubmit={enviarPedido} class="space-y-2 sm:space-y-2.5">
                <div class="space-y-1">
                    <label class="text-neutral-300 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider">
                        Personaje
                    </label>
                    <input bind:value={nombre} placeholder="Ej: Carlos Silva" required 
                           class="w-full bg-[#0a0a0c] border border-white/10 focus:border-white/30 px-3.5 py-2 text-xs text-white placeholder:text-neutral-600 outline-none transition-all rounded-xl" />
                </div>

                <div class="space-y-1">
                    <label class="text-neutral-300 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider">
                        Items / Paquete
                    </label>
                    <textarea bind:value={pedido} placeholder="¿Qué necesitas cotizar?" required 
                              class="w-full bg-[#0a0a0c] border border-white/10 focus:border-white/30 px-3.5 py-2 text-xs text-white placeholder:text-neutral-600 h-14 sm:h-16 outline-none transition-all resize-none rounded-xl"></textarea>
                </div>
                
                <button type="submit" class="w-full px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 font-semibold text-xs tracking-wider uppercase transition-all duration-300 backdrop-blur-sm rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-[0.98]">
                    <Icon icon="ic:baseline-whatsapp" class="w-4 h-4 shrink-0" />
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
<section class="py-12 sm:py-20 bg-[#0a0a0c] relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="text-center mb-8 sm:mb-12">
            <h3 class="text-xl sm:text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight">
                Únete a la <span class="text-neutral-500">Comunidad</span>
            </h3>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {#each 
                [
                    { title: "Metin2 Guabina", sub: "7.000 Usuarios", link: "https://www.facebook.com/groups/126085554213066" },
                    { title: "Albion Online", sub: "22.000 Usuarios", link: "https://www.facebook.com/groups/ALBI0NONLINE" },
                    { title: "EBGAMING SHOP", sub: "Página Oficial", link: "https://www.facebook.com/Metin2Guabinaventaseb" }
                ] as item
            }
                <a href={item.link} target="_blank" rel="noreferrer" 
                   class="group flex flex-col items-center text-center p-5 sm:p-6 transition-all duration-300 active:scale-[0.98]">
                    
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