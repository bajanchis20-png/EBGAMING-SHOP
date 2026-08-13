<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
    import Icon from "@iconify/svelte";
    import { db } from "$lib/firebase"; 
    import { collection, addDoc } from "firebase/firestore"; 

    let nombre = "";
    let pedido = "";

    function enviarPedido() {
        if (!nombre || !pedido) return;
        window.open(`https://api.whatsapp.com/send/?phone=584149430559&text=Hola,%20soy%20${encodeURIComponent(nombre)}%20y%20quiero%20pedir:%20${encodeURIComponent(pedido)}`);
    }
</script>

<!-- Hero Section (Mobile First Extremo) -->
<section class="relative w-full bg-[#0d0d0f] py-10 sm:py-16 md:py-24 px-3 sm:px-6 overflow-hidden border-b border-white/10">
    <!-- Fondo sutil con toque geométrico limpio -->
    <div class="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <video autoplay loop muted playsinline class="w-full h-full object-cover grayscale contrast-125">
            <source src="/videonewfinal2.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f]/80 to-transparent"></div>
    </div>

    <!-- Contenido Principal Estilo Tienda Digital -->
    <div class="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div class="space-y-4 sm:space-y-6 max-w-2xl text-center lg:text-left w-full">
            <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.1] sm:leading-[1.05]">
                Equípate como un 
                <span class="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#e60012] via-rose-500 to-[#e60012] italic">
                    Dios del Reino
                </span>
            </h1>
            
            <p class="text-neutral-400 font-bold tracking-wider uppercase text-[11px] sm:text-sm leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
                Domina cada rincón con items de élite. Seguridad absoluta, transacciones blindadas y entrega inmediata en Metin2 Guabina, Metin2.es & Albion Online.
            </p>

            <!-- Botones de Acción Rápida 100% Mobile Optimized -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2 w-full">
                <a href="/catalogo" class="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-[#e60012] hover:bg-[#cc0010] text-white font-black uppercase text-xs tracking-widest rounded-2xl transition-all text-center active:scale-95 shadow-[0_0_15px_rgba(230,0,18,0.3)]">
                    Ver Catálogo
                </a>
                <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,%20estoy%20interesado%20en%20recibir%20asesoría%20sobre%20tus%20artículos" target="_blank" rel="noreferrer" class="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-[#121216] hover:bg-white/5 text-neutral-200 border border-white/10 font-black uppercase text-xs tracking-widest rounded-2xl transition-all text-center active:scale-95">
                    Consultar Asesoría
                </a>
                <a href="https://www.facebook.com/share/p/1BJFKDdHai/" target="_blank" rel="noreferrer" class="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-[#121216] hover:bg-white/5 text-neutral-200 border border-white/10 font-black uppercase text-xs tracking-widest rounded-2xl transition-all text-center active:scale-95">
                    Ver Referencias
                </a>
            </div>
        </div>

        <!-- Contenedor de las Tres Tarjetas Interactivas (Grid adaptado para movil stack) -->
        <div class="w-full max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
            
            <!-- Tarjeta 1: Pack Guabina -->
            <div class="w-full bg-[#121216]/95 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-2xl relative group">
                <div class="absolute -top-3 right-3 bg-[#e60012] text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(230,0,18,0.5)]">
                    Guabina 🔥
                </div>
                <div class="space-y-3">
                    <div class="w-full h-24 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 relative flex items-center justify-center">
                        <video autoplay loop muted playsinline class="w-full h-full object-cover opacity-90">
                            <source src="/video3.mp4" type="video/mp4" />
                        </video>
                        <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                    </div>
                    <div>
                        <h3 class="text-white font-black text-xs uppercase tracking-wider">Pack Metin2 Guabina</h3>
                        <p class="text-[10px] text-neutral-400 font-bold uppercase mt-0.5">Entrega inmediata</p>
                    </div>
                    <div class="pt-2 flex items-center justify-between border-t border-white/5">
                        <span class="text-[9px] text-[#e60012] font-black uppercase tracking-widest">Stock</span>
                        <a href="/catalogo" class="text-[10px] text-neutral-300 font-black underline uppercase hover:text-[#e60012] transition-colors py-1">
                            Comprar →
                        </a>
                    </div>
                </div>
            </div>

            <!-- Tarjeta 2: Pack Metin2.es -->
            <div class="w-full bg-[#121216]/95 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-2xl relative group">
                <div class="absolute -top-3 right-3 bg-rose-600 text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md">
                    Metin2.es ⚔️
                </div>
                <div class="space-y-3">
                    <div class="w-full h-24 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 relative flex items-center justify-center">
                        <video autoplay loop muted playsinline class="w-full h-full object-cover opacity-90">
                            <source src="/fondovideo4.mp4" type="video/mp4" />
                        </video>
                        <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                    </div>
                    <div>
                        <h3 class="text-white font-black text-xs uppercase tracking-wider">Pack Metin2.es</h3>
                        <p class="text-[10px] text-neutral-400 font-bold uppercase mt-0.5">Oficial y seguro</p>
                    </div>
                    <div class="pt-2 flex items-center justify-between border-t border-white/5">
                        <span class="text-[9px] text-[#e60012] font-black uppercase tracking-widest">Stock</span>
                        <a href="/vista-previa" class="text-[10px] text-neutral-300 font-black underline uppercase hover:text-[#e60012] transition-colors py-1">
                            Comprar →
                        </a>
                    </div>
                </div>
            </div>

            <!-- Tarjeta 3: Pack Albion Online -->
            <div class="w-full bg-[#121216]/95 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-2xl relative group">
                <div class="absolute -top-3 right-3 bg-neutral-800 text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md border border-white/10">
                    Albion 🛡️
                </div>
                <div class="space-y-3">
                    <div class="w-full h-24 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 relative flex items-center justify-center">
                        <video autoplay loop muted playsinline class="w-full h-full object-cover opacity-90">
                            <source src="/video5.mp4" type="video/mp4" />
                        </video>
                        <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                    </div>
                    <div>
                        <h3 class="text-white font-black text-xs uppercase tracking-wider">Pack Albion</h3>
                        <p class="text-[10px] text-neutral-400 font-bold uppercase mt-0.5">Plata & Items</p>
                    </div>
                    <div class="pt-2 flex items-center justify-between border-t border-white/5">
                        <span class="text-[9px] text-[#e60012] font-black uppercase tracking-widest">Stock</span>
                        <a href="/albion-online" class="text-[10px] text-neutral-300 font-black underline uppercase hover:text-[#e60012] transition-colors py-1">
                            Comprar →
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- SECCIÓN TICKER / CINTILLO DINÁMICO -->
<div class="w-full bg-[#121216] py-3.5 overflow-hidden whitespace-nowrap relative border-y border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
    <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e60012] to-transparent opacity-70"></div>

    <div class="ticker-track inline-flex items-center text-white font-black uppercase text-[11px] sm:text-xs tracking-[0.2em]">
        <div class="inline-flex items-center space-x-8 sm:space-x-10 px-4 sm:px-5">
            <span class="text-[#e60012] flex items-center gap-2">
                <Icon icon="solar:bolt-bold" class="w-4 h-4 text-[#e60012]" /> Entrega Inmediata Garantizada
            </span>
            <span class="text-neutral-600">•</span>
            <span class="text-neutral-300 flex items-center gap-2">
                <Icon icon="solar:shield-check-bold" class="w-4 h-4 text-rose-500" /> Transacciones 100% Seguras y Blindadas
            </span>
            <span class="text-neutral-600">•</span>
            <span class="text-white flex items-center gap-2">
                <Icon icon="solar:fire-bold" class="w-4 h-4 text-orange-500" /> Stock Disponible para Metin2 Guabina, Metin2.es & Albion Online
            </span>
            <span class="text-neutral-600">•</span>
            <span class="text-rose-500 flex items-center gap-2">
                <Icon icon="solar:tag-price-bold" class="w-4 h-4 text-rose-500" /> Los Mejores Precios del Mercado Gaming
            </span>
            <span class="text-neutral-600">•</span>
            <span class="text-neutral-300 flex items-center gap-2">
                <Icon icon="fa6-brands:whatsapp" class="w-4 h-4 text-emerald-500" /> Soporte Directo por WhatsApp
            </span>
        </div>
        <div class="inline-flex items-center space-x-8 sm:space-x-10 px-4 sm:px-5" aria-hidden="true">
            <span class="text-[#e60012] flex items-center gap-2">
                <Icon icon="solar:bolt-bold" class="w-4 h-4 text-[#e60012]" /> Entrega Inmediata Garantizada
            </span>
            <span class="text-neutral-600">•</span>
            <span class="text-neutral-300 flex items-center gap-2">
                <Icon icon="solar:shield-check-bold" class="w-4 h-4 text-rose-500" /> Transacciones 100% Seguras y Blindadas
            </span>
            <span class="text-neutral-600">•</span>
            <span class="text-white flex items-center gap-2">
                <Icon icon="solar:fire-bold" class="w-4 h-4 text-orange-500" /> Stock Disponible para Metin2 Guabina, Metin2.es & Albion Online
            </span>
            <span class="text-neutral-600">•</span>
            <span class="text-rose-500 flex items-center gap-2">
                <Icon icon="solar:tag-price-bold" class="w-4 h-4 text-rose-500" /> Los Mejores Precios del Mercado Gaming
            </span>
            <span class="text-neutral-600">•</span>
            <span class="text-neutral-300 flex items-center gap-2">
                <Icon icon="fa6-brands:whatsapp" class="w-4 h-4 text-emerald-500" /> Soporte Directo por WhatsApp
            </span>
        </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<!-- Sección de Formulario de Pedido Exprés -->
<section class="py-12 sm:py-20 bg-[#121216] relative overflow-hidden border-b border-white/10">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 sm:mb-12">
            <h3 class="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                Haz tu pedido <span class="text-[#e60012] italic">Exprés</span>
            </h3>
        </div>

        <form on:submit|preventDefault={enviarPedido} class="bg-[#17171c] p-5 sm:p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-4 sm:space-y-6">
            <div>
                <label class="block text-neutral-300 text-xs font-bold uppercase tracking-wider mb-2">Tu Nombre / Personaje</label>
                <input bind:value={nombre} placeholder="Ej: Carlos Silva" required 
                        class="w-full bg-[#121216] border border-white/10 p-3.5 sm:p-4 text-white rounded-2xl placeholder:text-neutral-500 focus:border-[#e60012] focus:ring-1 focus:ring-[#e60012] outline-none transition-all text-sm font-bold" />
            </div>

            <div>
                <label class="block text-neutral-300 text-xs font-bold uppercase tracking-wider mb-2">Detalles del Pedido</label>
                <textarea bind:value={pedido} placeholder="Describe los items que necesitas (Guabina, .es o Albion...)" required 
                      class="w-full bg-[#121216] border border-white/10 p-3.5 sm:p-4 text-white rounded-2xl placeholder:text-neutral-500 h-28 sm:h-36 focus:border-[#e60012] focus:ring-1 focus:ring-[#e60012] outline-none transition-all text-sm font-bold resize-none"></textarea>
            </div>
            
            <button type="submit" class="w-full bg-[#e60012] hover:bg-[#cc0010] text-white font-black uppercase text-xs sm:text-sm tracking-widest py-4 rounded-2xl shadow-[0_0_20px_rgba(230,0,18,0.4)] transition-all transform active:scale-95 cursor-pointer">
                🛒 Realizar Pedido por WhatsApp
            </button>
        </form>
    </div>
</section>

<!-- Sección de Comunidades / Groups Mobile First -->
<section class="py-16 sm:py-24 bg-[#0a0a0c] relative overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[250px] sm:h-[300px] bg-[#e60012]/5 blur-[120px] pointer-events-none rounded-full"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="text-center mb-10 sm:mb-16">
            <h3 class="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                Únete a la <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">Comunidad</span>
            </h3>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {#each 
                [
                    { title: "Metin2 Guabina", sub: "7.000 Usuarios", link: "https://www.facebook.com/groups/126085554213066" },
                    { title: "Albion Online", sub: "22.000 Usuarios", link: "https://www.facebook.com/groups/ALBI0NONLINE" },
                    { title: "EBGAMING SHOP", sub: "Página Oficial", link: "https://www.facebook.com/Metin2Guabinaventaseb" }
                ] as item
            }
                <a href={item.link} target="_blank" rel="noreferrer" 
                   class="group relative flex flex-col items-center text-center p-6 sm:p-8 md:p-10 bg-gradient-to-b from-[#141419] to-[#0f0f13] border border-white/5 hover:border-[#e60012]/60 transition-all duration-300 rounded-3xl sm:rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.4)] active:scale-95">
                    
                    <div class="absolute inset-0 rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                    <div class="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#1a1a21] border border-white/10 flex items-center justify-center mb-4 sm:mb-6 text-neutral-300 group-hover:text-white group-hover:bg-[#e60012] group-hover:border-[#e60012] transition-all duration-300 shadow-inner">
                        <Icon class="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110" icon="devicon:facebook"/>
                    </div>

                    <h4 class="text-white font-extrabold text-sm sm:text-base uppercase tracking-wider mb-2 group-hover:text-[#e60012] transition-colors">
                        {item.title}
                    </h4>
                    
                    <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 group-hover:border-[#e60012]/30 transition-colors">
                        <p class="text-neutral-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-neutral-300">
                            {item.sub}
                        </p>
                    </div>

                    <div class="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 text-[#e60012]">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>

<!-- Estilos CSS para el scroll continuo del ticker -->
<style>
  .ticker-track {
    display: inline-flex;
    width: max-content;
    animation: scrollTicker 30s linear infinite;
  }

  @keyframes scrollTicker {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
</style>