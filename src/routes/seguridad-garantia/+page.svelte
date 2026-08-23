<!-- Sección 1: Seguridad Legendaria -->
<section class="relative bg-[#0d0d0f] py-14 sm:py-24 overflow-hidden border-b border-white/15">
    <!-- Patrón de puntos sutil característico -->
    <div class="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#e60012_1px,transparent_1px)] [background-size:16px_16px]"></div>
    
    <!-- Imagen de fondo optimizada y adaptada para móvil -->
    <img src="gnch.png" alt="Fondo" class="absolute right-0 top-0 h-full w-auto max-w-[85%] sm:max-w-[60%] opacity-15 brightness-125 contrast-125 pointer-events-none mix-blend-screen object-cover">
    
    <!-- Contenido adaptado para móviles -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 items-center">
        <div class="text-left animate-fade-in-up">
            <div class="inline-block bg-[#e60012] text-white font-black text-[10px] sm:text-xs uppercase tracking-[0.25em] px-3.5 sm:px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(230,0,18,0.5)] transform -rotate-1 mb-4 sm:mb-6">
                Protección Garantizada
            </div>

            <h2 class="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.95]">
                Seguridad 
                
                <!-- Título estilizado con tipografía Cinzel Decorative, titileo y gotas de sangre -->
                <span class="block mt-2 sm:mt-4 font-fantasy font-black uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-950 via-red-600 to-rose-400 blood-pulse-flicker relative pb-3 cursor-default inline-block">
                    Legendaria
                    
                    <!-- Gotas de Sangre acopladas al ras -->
                    <span class="blood-drop drop-1"></span>
                    <span class="blood-drop drop-2"></span>
                    <span class="blood-drop drop-3"></span>
                    <span class="blood-drop drop-4"></span>
                </span>
            </h2>
            
            <p class="text-neutral-400 font-bold tracking-wide text-xs sm:text-lg max-w-md mt-6 sm:mt-8 uppercase leading-relaxed pl-4 sm:pl-6 border-l-4 border-[#e60012] shadow-sm">
                Tu equipo está protegido bajo los estándares más estrictos. 9+ años forjando confianza.
            </p>
        </div>
    </div>
</section>

<!-- Sección de estadísticas y guías (Stats) -->
<section class="max-w-6xl mx-auto px-3 sm:px-6 -mt-10 sm:-mt-16 mb-12 sm:mb-20 relative z-20">
    <div class="bg-[#121216] border border-white/10 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-12 md:p-16 shadow-2xl backdrop-blur-xl">
        <div class="grid grid-cols-3 gap-2.5 sm:gap-6 mb-10 sm:mb-16">
            {#each [{n: '9+', t: 'Años'}, {n: '14+', t: 'Grupos'}, {n: '5k+', t: 'Ventas'}] as stat}
                <div class="relative group bg-[#17171c] border border-white/10 rounded-xl sm:rounded-2xl p-3.5 sm:p-8 text-center transition-all hover:border-[#e60012] shadow-lg">
                    <div class="text-white font-black text-xl sm:text-4xl mb-0.5 sm:mb-1 group-hover:text-[#e60012] transition-colors">{stat.n}</div>
                    <div class="text-neutral-500 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">{stat.t}</div>
                </div>
            {/each}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div class="animate-float-slow group relative rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden cursor-pointer transition-all hover:-translate-y-1 sm:hover:-translate-y-2 shadow-xl bg-[#17171c]">
                <img src="/comocomprar.jpg" alt="Proceso 1" class="w-full h-auto transition-transform duration-700 group-hover:scale-105 opacity-90">
            </div>
            <div class="animate-float-fast group relative rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden cursor-pointer transition-all hover:-translate-y-1 sm:hover:-translate-y-2 shadow-xl bg-[#17171c]">
                <img src="/comocomprar2.jpg" alt="Proceso 2" class="w-full h-auto transition-transform duration-700 group-hover:scale-105 opacity-90">
            </div>
        </div>
    </div>
</section>

<!-- Sección de Referencias y Testimonios -->
<section class="py-14 sm:py-24 bg-[#0d0d0f] px-4 sm:px-6 border-b border-white/10 relative">
    <div class="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#e60012_1px,transparent_1px)] [background-size:16px_16px]"></div>

    <div class="max-w-6xl mx-auto relative z-10">
        <!-- Encabezado Estilo Gaming -->
        <div class="flex flex-col items-center mb-14 sm:mb-24 text-center animate-fade-in-up">
            <h2 class="text-white text-3xl xs:text-4xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.95] tracking-tighter">
                Seguridad 
                <span class="font-fantasy font-black uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-950 via-red-600 to-rose-400 blood-pulse-flicker relative pb-3 cursor-default inline-block mx-2">
                    LEGENDARIA
                    <span class="blood-drop drop-1"></span>
                    <span class="blood-drop drop-2"></span>
                    <span class="blood-drop drop-3"></span>
                    <span class="blood-drop drop-4"></span>
                </span><br/>
                <span class="italic text-neutral-400">
                    en cada entrega
                </span>
            </h2>
            <p class="text-neutral-500 uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs font-black mt-4 sm:mt-8">
                Historias de éxito real de nuestra comunidad
            </p>
        </div>

        <!-- Grid de Referencias (Mobile First) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            <!-- Tarjeta 1 -->
            <a href="https://www.facebook.com/share/p/1BJFKDdHai/" target="_blank" rel="noopener noreferrer" class="group bg-[#121216] border border-white/10 p-5 sm:p-8 rounded-xl sm:rounded-2xl hover:border-[#e60012] transition-all cursor-pointer hover:-translate-y-1 sm:hover:-translate-y-2 shadow-xl flex flex-col justify-between">
                <div>
                    <div class="text-[#e60012] mb-3 sm:mb-6 text-base sm:text-xl font-black">★★★★★</div>
                    <p class="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-bold italic">"La entrega fue inmediata, sin complicaciones. Totalmente recomendado para cualquier jugador de Metin2."</p>
                </div>
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#17171c] border border-white/10 flex items-center justify-center text-neutral-300 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <span class="text-white text-[11px] sm:text-xs font-black uppercase tracking-wider">Cliente Verificado</span>
                </div>
            </a>

            <!-- Tarjeta 2 -->
            <a href="https://www.facebook.com/share/p/1BJFKDdHai/" target="_blank" rel="noopener noreferrer" class="group bg-[#121216] border border-white/10 p-5 sm:p-8 rounded-xl sm:rounded-2xl hover:border-[#e60012] transition-all cursor-pointer hover:-translate-y-1 sm:hover:-translate-y-2 shadow-xl flex flex-col justify-between">
                <div>
                    <div class="text-[#e60012] mb-3 sm:mb-6 text-base sm:text-xl font-black">★★★★★</div>
                    <p class="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-bold italic">"Llevo años comprando con ellos, siempre brindan la mayor seguridad. El mejor servicio de la comunidad."</p>
                </div>
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#17171c] border border-white/10 flex items-center justify-center text-neutral-300 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <span class="text-white text-[11px] sm:text-xs font-black uppercase tracking-wider">Jugador habitual</span>
                </div>
            </a>

            <!-- Tarjeta 3 - Botón Estilizado Gaming -->
            <a href="https://www.facebook.com/share/p/1BJFKDdHai/" target="_blank" rel="noopener noreferrer" class="w-full relative group overflow-hidden bg-[#e60012] border border-white/10 text-white font-black uppercase text-xs sm:text-sm tracking-widest py-6 sm:py-8 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-[#cc0010] shadow-[0_0_20px_rgba(230,0,18,0.4)] flex flex-col items-center justify-center text-center active:translate-x-1 active:translate-y-1">
                <span class="relative z-10 text-white drop-shadow-md">
                    Ver más referencias
                </span>
                <span class="relative z-10 text-[9px] sm:text-[10px] text-neutral-200 mt-1.5 sm:mt-2 font-bold bg-black/30 px-2.5 py-1 rounded-md">En Facebook</span>
            </a>
        </div>
    </div>
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap');

    .font-fantasy {
        font-family: 'Cinzel Decorative', serif;
    }

    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
    .animate-float-slow { animation: float 6s ease-in-out infinite; }
    .animate-float-fast { animation: float 4s ease-in-out infinite; }
    @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }

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