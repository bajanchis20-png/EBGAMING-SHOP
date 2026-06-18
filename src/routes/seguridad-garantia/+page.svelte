<section class="relative bg-[#020408] py-24 overflow-hidden border-b border-amber-500/10">
    <!-- Fondo que se desvanece hacia abajo -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#0e0e12] via-[#05060b] to-[#020408]"></div>
    
    <!-- Imagen de fondo optimizada y más ancha -->
    <img src="gnch.png" alt="Fondo" class="absolute right-0 top-0 h-full w-auto max-w-[60%] opacity-20 brightness-125 contrast-125 pointer-events-none mix-blend-screen object-cover">
    
    <!-- Contenido alineado a la izquierda -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center">
        <div class="text-left animate-fade-in-up">
            <h2 class="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                Seguridad 
                <span class="block mt-4 italic animate-shimmer bg-[linear-gradient(90deg,theme(colors.blue.400),theme(colors.blue.600),theme(colors.yellow.600),theme(colors.blue.600),theme(colors.blue.400))] bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(37,99,235,0.3)]">
                    Legendaria
                </span>
            </h2>
            
            <p class="text-neutral-400 font-bold tracking-wide text-sm md:text-lg max-w-md mt-8 uppercase leading-relaxed pl-6">
                Tu equipo está protegido bajo los estándares más estrictos. 9+ años forjando confianza.
            </p>
        </div>
    </div>
</section>

<!-- El resto de la sección de estadísticas (Stats) se mantiene igual para seguir debajo -->
<section class="max-w-6xl mx-auto px-6 -mt-16 mb-20 relative z-20">
    <div class="bg-[#05070d]/60 backdrop-blur-2xl border border-blue-900/30 rounded-3xl p-8 md:p-16 shadow-[0_0_60px_-15px_rgba(217,119,6,0.2)]">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {#each [{n: '9+', t: 'Años'}, {n: '14+', t: 'Grupos'}, {n: '5k+', t: 'Ventas'}] as stat}
                <div class="relative group bg-gradient-to-b from-white/5 to-transparent border border-blue-900/30 rounded-2xl p-8 text-center transition-all hover:border-amber-500/50">
                    <div class="text-white font-black text-4xl mb-1 group-hover:text-amber-400 transition-colors">{stat.n}</div>
                    <div class="text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.t}</div>
                </div>
            {/each}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="animate-float-slow group relative rounded-2xl border border-blue-900/30 overflow-hidden cursor-pointer transition-all hover:-translate-y-2 hover:border-amber-500/50">
                <img src="/comocomprar.jpg" alt="Proceso 1" class="w-full h-auto transition-transform duration-700 group-hover:scale-110">
            </div>
            <div class="animate-float-fast group relative rounded-2xl border border-blue-900/30 overflow-hidden cursor-pointer transition-all hover:-translate-y-2 hover:border-amber-500/50">
                <img src="/comocomprar2.jpg" alt="Proceso 2" class="w-full h-auto transition-transform duration-700 group-hover:scale-110">
            </div>
        </div>
    </div>
</section>

<style>
    @keyframes shimmer { 0% { background-position: 100% 50%; } 100% { background-position: -100% 50%; } }
    .animate-shimmer { animation: shimmer 4s linear infinite; }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
    .animate-float-slow { animation: float 6s ease-in-out infinite; }
    .animate-float-fast { animation: float 4s ease-in-out infinite; }
    @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
</style>
<section class="py-24 bg-[#020408] px-6">
    <div class="max-w-6xl mx-auto">
        <!-- Encabezado -->
       <div class="flex flex-col items-center mb-24 text-center animate-fade-in-up">
    <h2 class="text-white text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
        Seguridad <span class="text-transparent bg-clip-text animate-shimmer bg-[linear-gradient(90deg,#60a5fa,#2563eb,#ca8a04,#2563eb,#60a5fa)] bg-[length:200%_100%]">LEGENDARIA</span><br/>
        <span class="italic text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 drop-shadow-[0_0_20px_rgba(202,138,4,0.4)]">
            en cada entrega
        </span>
    </h2>
    <p class="text-neutral-500 uppercase tracking-[0.2em] text-xs font-bold mt-8">
        Historias de éxito real de nuestra comunidad
    </p>
</div>

        <!-- Grid de Referencias -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <!-- Tarjeta 1 -->
            <a href="https://www.facebook.com/share/p/1BJFKDdHai/" target="_blank" class="group bg-white/5 border border-neutral-800 p-8 rounded-2xl hover:border-amber-500/50 transition-all cursor-pointer hover:-translate-y-2">
                <div class="text-amber-400 mb-6 text-xl">★★★★★</div>
                <p class="text-neutral-400 text-sm leading-relaxed mb-8 italic">"La entrega fue inmediata, sin complicaciones. Totalmente recomendado para cualquier jugador de Metin2."</p>
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <span class="text-white text-xs font-bold uppercase tracking-wider">Cliente Verificado</span>
                </div>
            </a>

            <!-- Tarjeta 2 -->
            <a href="https://www.facebook.com/share/p/1BJFKDdHai/" target="_blank" class="group bg-white/5 border border-neutral-800 p-8 rounded-2xl hover:border-amber-500/50 transition-all cursor-pointer hover:-translate-y-2">
                <div class="text-amber-400 mb-6 text-xl">★★★★★</div>
                <p class="text-neutral-400 text-sm leading-relaxed mb-8 italic">"Llevo años comprando con ellos, siempre brindan la mayor seguridad. El mejor servicio de la comunidad."</p>
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <span class="text-white text-xs font-bold uppercase tracking-wider">Jugador habitual</span>
                </div>
            </a>

            <!-- Tarjeta 3 - Botón Estilizado -->
            <a href="https://www.facebook.com/share/p/1BJFKDdHai/" target="_blank" class="w-full relative group overflow-hidden bg-white/5 border border-amber-800/30 text-white font-black uppercase text-sm tracking-widest py-6 rounded-xl transition-all duration-500 hover:border-amber-400/80 shadow-lg shadow-black/30 flex flex-col items-center justify-center text-center">
                <div class="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"></div>
                
                <span class="relative z-10 text-white group-hover:text-black transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                    Ver más referencias
                </span>
                <span class="relative z-10 text-[10px] text-neutral-400 group-hover:text-black/80 mt-2">En Facebook</span>
            </a>
        </div>
    </div>
</section>