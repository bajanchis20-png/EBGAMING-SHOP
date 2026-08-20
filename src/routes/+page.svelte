<script>
    import Icon from "@iconify/svelte";

    let nombre = $state("");
    let pedido = $state("");

    // Array con las imágenes para el carrusel de fondo del Hero
    const imagenesHero = [
        "/fondoname1.png",
        "/fondoname2.png",
        "/fondoname3.png",
        "/fondoname4.png",
        "/fondoname5.png"
    ];

    let indiceActual = $state(0);

    // Cambiar de imagen automáticamente cada 4 segundos
    import { onMount } from "svelte";
    onMount(() => {
        const intervalo = setInterval(() => {
            indiceActual = (indiceActual + 1) % imagenesHero.length;
        }, 4000);

        return () => clearInterval(intervalo);
    });

    function enviarPedido(event) {
        event.preventDefault();
        if (!nombre || !pedido) return;
        window.open(`https://api.whatsapp.com/send/?phone=584149430559&text=Hola,%20soy%20${encodeURIComponent(nombre)}%20y%20quiero%20pedir:%20${encodeURIComponent(pedido)}`);
    }
</script>

<!-- Hero Section adaptado de forma fluida para mobile, tablet y PC -->
<section class="relative w-full min-h-[85vh] sm:min-h-[90vh] lg:min-h-[95vh] bg-[#050505] overflow-hidden flex flex-col justify-end pb-16 sm:pb-24 lg:pb-32">
    
    <!-- Carrusel de Imágenes de Fondo -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {#each imagenesHero as img, i}
            <div class="absolute inset-0 transition-opacity duration-1000 ease-in-out {i === indiceActual ? 'opacity-90 scale-105' : 'opacity-0 scale-100'}">
                <img src={img} alt="Fondo Hero" class="w-full h-full object-cover transition-transform duration-1000" />
            </div>
        {/each}

        <!-- Viñetas y degradados cinematográficos -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/70 z-10"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/60 to-transparent z-10"></div>
    </div>

    <!-- Contenido Principal optimizado -->
    <div class="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 flex flex-col items-start justify-end">
        
        <!-- Título Responsivo Dinámico -->
        <h1 class="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.95] sm:leading-[0.9] drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] max-w-4xl mb-3 sm:mb-5">
            Equípate como un 
            <span class="block text-[#ff0022] font-black italic mt-1 drop-shadow-[0_5px_15px_rgba(255,0,34,0.5)]">
                Dios del Reino
            </span>
        </h1>
        
        <!-- Descripción Clara y Adaptativa -->
        <p class="text-neutral-300 font-bold uppercase text-[11px] xs:text-xs sm:text-sm lg:text-base tracking-wide max-w-xl lg:max-w-2xl drop-shadow-md mb-6 sm:mb-8 leading-relaxed">
            Domina cada rincón con items de élite. Seguridad absoluta, transacciones blindadas y entrega inmediata en Metin2 Guabina, Metin2.es & Albion Online.
        </p>

        <!-- Botones de Acción Flexibles -->
        <div class="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a href="/catalogo" class="px-5 py-3.5 sm:px-7 sm:py-4 bg-[#141416]/95 hover:bg-black text-white border border-white/20 font-black uppercase text-[11px] sm:text-xs tracking-widest transition-all text-center active:scale-95 backdrop-blur-md rounded-xl flex items-center justify-center gap-2">
                <span>Ver Catálogo</span>
                <span class="text-sm leading-none">→</span>
            </a>
            
            <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,%20estoy%20interesado%20en%20recibir%20asesoría%20sobre%20tus%20artículos" target="_blank" rel="noreferrer" class="px-5 py-3.5 sm:px-7 sm:py-4 bg-[#141416]/95 hover:bg-black text-white border border-white/20 font-black uppercase text-[11px] sm:text-xs tracking-widest transition-all text-center active:scale-95 backdrop-blur-md rounded-xl">
                Asesoría WhatsApp
            </a>

            <a href="https://www.facebook.com/share/p/1BJFKDdHai/" target="_blank" rel="noreferrer" class="px-5 py-3.5 sm:px-7 sm:py-4 bg-[#141416]/95 hover:bg-black text-white border border-white/20 font-black uppercase text-[11px] sm:text-xs tracking-widest transition-all text-center active:scale-95 backdrop-blur-md rounded-xl">
                Referencias
            </a>
        </div>
    </div>

    <!-- Paginador / Indicadores inferiores -->
    <div class="absolute bottom-4 right-4 z-30 hidden xs:flex items-center gap-1.5 sm:gap-2">
        <span class="text-white text-[10px] font-bold mr-1">▶</span>
        {#each imagenesHero as _, index}
            <button 
                onclick={() => indiceActual = index}
                class="h-1.5 sm:h-2 rounded-full transition-all duration-300 {index === indiceActual ? 'w-8 sm:w-10 bg-[#ff0022]' : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white'}"
                aria-label={`Ir a imagen ${index + 1}`}>
            </button>
        {/each}
    </div>
</section>

<!-- TARJETAS DE UNIVERSOS (Grid Adaptado para Tablets y PC) -->
<section class="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 lg:-mt-20 mb-12 sm:mb-20">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        
        <!-- Tarjeta 1: Guabina -->
        <div class="relative w-full h-[380px] sm:h-[420px] lg:h-[450px] bg-[#0c0c0c] border border-white/15 overflow-hidden flex flex-col justify-between group hover:border-[#ff0022] transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.8)] rounded-2xl">
            <div class="absolute inset-0 z-0">
                <video autoplay loop muted playsinline class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 filter saturate-125">
                    <source src="/guabi.mp4" type="video/mp4" />
                </video>
                <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#0c0c0c]/40 to-black/70"></div>
            </div>

            <div class="relative z-10 p-4 sm:p-6 flex justify-between items-start">
                <span class="bg-[#ff0022] text-white text-[9px] sm:text-[10px] font-black uppercase px-2.5 py-1 tracking-widest shadow-md rounded-md">
                    GUABINA 🔥
                </span>
                <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-black/80 px-2.5 py-1 border border-white/10 rounded-md">
                    STOCK OK
                </span>
            </div>

            <div class="relative z-10 p-4 sm:p-6 flex flex-col justify-end space-y-3 sm:space-y-4">
                <div class="space-y-1">
                    <h3 class="text-white font-black text-base sm:text-lg uppercase tracking-wider drop-shadow-md">PACK GUABINA</h3>
                    <p class="text-[11px] sm:text-xs text-neutral-300 font-bold uppercase leading-relaxed">
                        Equipamiento pesado, yang y servicios de nivel superior.
                    </p>
                </div>
                <a href="/catalogo" class="w-full py-3 sm:py-3.5 bg-[#ff0022] hover:bg-[#d9001d] text-white text-[11px] sm:text-xs font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 block text-center rounded-xl">
                    Comprar Ahora
                </a>
            </div>
        </div>

        <!-- Tarjeta 2: Metin2.es -->
        <div class="relative w-full h-[380px] sm:h-[420px] lg:h-[450px] bg-[#0c0c0c] border border-white/15 overflow-hidden flex flex-col justify-between group hover:border-white transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.8)] rounded-2xl">
            <div class="absolute inset-0 z-0">
                <video autoplay loop muted playsinline class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 filter saturate-125">
                    <source src="/fondovideo4.mp4" type="video/mp4" />
                </video>
                <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#0c0c0c]/40 to-black/70"></div>
            </div>

            <div class="relative z-10 p-4 sm:p-6 flex justify-between items-start">
                <span class="bg-white text-black text-[9px] sm:text-[10px] font-black uppercase px-2.5 py-1 tracking-widest shadow-md rounded-md">
                    METIN2.ES ⚔️
                </span>
                <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-neutral-300 bg-black/80 px-2.5 py-1 border border-white/10 rounded-md">
                    OFICIAL
                </span>
            </div>

            <div class="relative z-10 p-4 sm:p-6 flex flex-col justify-end space-y-3 sm:space-y-4">
                <div class="space-y-1">
                    <h3 class="text-white font-black text-base sm:text-lg uppercase tracking-wider drop-shadow-md">PACK METIN2.ES</h3>
                    <p class="text-[11px] sm:text-xs text-neutral-300 font-bold uppercase leading-relaxed">
                        Yang y elementos garantizados en servidores oficiales.
                    </p>
                </div>
                <a href="/vista-previa" class="w-full py-3 sm:py-3.5 bg-white text-black hover:bg-neutral-200 text-[11px] sm:text-xs font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 block text-center rounded-xl">
                    COMPRAR AHORA
                </a>
            </div>
        </div>

        <!-- Tarjeta 3: Albion Online -->
        <div class="relative w-full h-[380px] sm:h-[420px] lg:h-[450px] bg-[#0c0c0c] border border-white/15 overflow-hidden flex flex-col justify-between group hover:border-blue-500 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.8)] rounded-2xl">
            <div class="absolute inset-0 z-0">
                <video autoplay loop muted playsinline class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 filter saturate-125">
                    <source src="/video5.mp4" type="video/mp4" />
                </video>
                <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#0c0c0c]/40 to-black/70"></div>
            </div>

            <div class="relative z-10 p-4 sm:p-6 flex justify-between items-start">
                <span class="bg-blue-600 text-white text-[9px] sm:text-[10px] font-black uppercase px-2.5 py-1 tracking-widest shadow-md rounded-md">
                    ALBION 🛡️
                </span>
                <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-blue-400 bg-black/80 px-2.5 py-1 border border-white/10 rounded-md">
                    ONLINE
                </span>
            </div>

            <div class="relative z-10 p-4 sm:p-6 flex flex-col justify-end space-y-3 sm:space-y-4">
                <div class="space-y-1">
                    <h3 class="text-white font-black text-base sm:text-lg uppercase tracking-wider drop-shadow-md">PACK ALBION</h3>
                    <p class="text-[11px] sm:text-xs text-neutral-300 font-bold uppercase leading-relaxed">
                        Plata segura, sets y recursos para dominar las tierras.
                    </p>
                </div>
                <a href="/albion-online" class="w-full py-3 sm:py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-[11px] sm:text-xs font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 block text-center rounded-xl">
                    COMPRAR AHORA
                </a>
            </div>
        </div>

    </div>
</section>

<!-- FORMULARIO DE PEDIDO EXPRÉS -->
<section class="py-12 sm:py-16 md:py-20 bg-[#080808] relative overflow-hidden border-y border-white/10">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="text-center mb-8 sm:mb-10 space-y-2.5">
            <h3 class="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
                Haz tu pedido <span class="text-[#ff0022] italic">Exprés</span>
            </h3>
            <p class="text-neutral-400 text-[11px] xs:text-xs sm:text-sm font-bold uppercase tracking-wider max-w-lg mx-auto leading-relaxed">
                Completa los datos de tu personaje y recibe atención prioritaria inmediata vía WhatsApp.
            </p>
        </div>

        <form onsubmit={enviarPedido} class="bg-[#101012] p-5 sm:p-8 lg:p-10 border-t-4 border-[#ff0022] border-x border-b border-white/10 shadow-2xl space-y-4 sm:space-y-6 rounded-2xl">
            <div class="space-y-1.5">
                <label class="flex items-center gap-2 text-neutral-200 text-[11px] sm:text-xs font-black uppercase tracking-widest">
                    <span class="w-2 h-2 bg-[#ff0022] rounded-full"></span>
                    Tu Nombre / Personaje
                </label>
                <input bind:value={nombre} placeholder="Ej: Carlos Silva (Guabina / Albion)" required 
                       class="w-full bg-[#050505] border border-white/25 focus:border-[#ff0022] px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition-all font-bold rounded-xl" />
            </div>

            <div class="space-y-1.5">
                <label class="flex items-center gap-2 text-neutral-200 text-[11px] sm:text-xs font-black uppercase tracking-widest">
                    <span class="w-2 h-2 bg-[#ff0022] rounded-full"></span>
                    Detalles del Pedido / Items
                </label>
                <textarea bind:value={pedido} placeholder="Describe los items, cantidad o paquete que necesitas cotizar..." required 
                          class="w-full bg-[#050505] border border-white/25 focus:border-[#ff0022] px-4 py-3 text-sm text-white placeholder:text-neutral-600 h-28 sm:h-32 outline-none transition-all font-bold resize-none rounded-xl"></textarea>
            </div>
            
            <button type="submit" class="w-full px-5 py-3.5 sm:py-4 bg-[#ff0022] hover:bg-[#d9001d] text-white font-black uppercase text-[11px] sm:text-sm tracking-widest flex items-center justify-center gap-2.5 transition-colors shadow-lg cursor-pointer rounded-xl active:scale-95">
                <Icon icon="ic:baseline-whatsapp" class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                <span>Realizar Pedido por WhatsApp</span>
            </button>

            <div class="flex items-center justify-center gap-2 pt-1 text-neutral-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                <span>Transacción 100% Segura y Verificada</span>
            </div>
        </form>
    </div>
</section>

<!-- Sección de Comunidades -->
<section class="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="text-center mb-10 sm:mb-14">
            <h3 class="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                Únete a la <span class="text-neutral-500">Comunidad</span>
            </h3>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {#each 
                [
                    { title: "Metin2 Guabina", sub: "7.000 Usuarios", link: "https://www.facebook.com/groups/126085554213066" },
                    { title: "Albion Online", sub: "22.000 Usuarios", link: "https://www.facebook.com/groups/ALBI0NONLINE" },
                    { title: "EBGAMING SHOP", sub: "Página Oficial", link: "https://www.facebook.com/Metin2Guabinaventaseb" }
                ] as item
            }
                <a href={item.link} target="_blank" rel="noreferrer" 
                   class="group flex flex-col items-center text-center p-4 transition-all duration-300">
                    
                    <!-- Ícono sin cuadro de fondo -->
                    <div class="mb-4 text-neutral-400 group-hover:text-white transition-colors duration-300">
                        <Icon class="w-10 h-10 sm:w-12 sm:h-12" icon="ic:baseline-facebook"/>
                    </div>

                    <!-- Título -->
                    <h4 class="text-white font-black text-sm sm:text-base uppercase tracking-wider mb-2 group-hover:text-neutral-300 transition-colors">
                        {item.title}
                    </h4>
                    
                    <!-- Badge de información -->
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-black/40 border border-white/10 rounded-full">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <p class="text-neutral-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">
                            {item.sub}
                        </p>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>