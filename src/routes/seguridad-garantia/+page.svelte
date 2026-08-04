<section class="relative bg-[#f5f5f7] py-24 overflow-hidden border-b-4 border-neutral-900">
    <!-- Patrón de puntos sutil característico -->
    <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#e60012_1px,transparent_1px)] [background-size:16px_16px]"></div>
    
    <!-- Imagen de fondo optimizada y más ancha -->
    <img src="gnch.png" alt="Fondo" class="absolute right-0 top-0 h-full w-auto max-w-[60%] opacity-15 brightness-125 contrast-125 pointer-events-none mix-blend-multiply object-cover">
    
    <!-- Contenido alineado a la izquierda -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center">
        <div class="text-left animate-fade-in-up">
            <div class="inline-block bg-red-600 text-white font-black text-xs uppercase tracking-[0.3em] px-4 py-1.5 rounded-full shadow-[0_4px_0_#99000a] transform -rotate-1 mb-6">
                Protección Garantizada
            </div>

            <h2 class="text-6xl md:text-8xl font-black text-neutral-900 tracking-tighter uppercase leading-[0.9]">
                Seguridad 
                <span class="block mt-4 italic text-red-600 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)]">
                    Legendaria
                </span>
            </h2>
            
            <p class="text-neutral-700 font-bold tracking-wide text-sm md:text-lg max-w-md mt-8 uppercase leading-relaxed pl-6 border-l-4 border-neutral-900 shadow-sm">
                Tu equipo está protegido bajo los estándares más estrictos. 9+ años forjando confianza.
            </p>
        </div>
    </div>
</section>

<!-- El resto de la sección de estadísticas (Stats) estilo Nintendo -->
<section class="max-w-6xl mx-auto px-6 -mt-16 mb-20 relative z-20">
    <div class="bg-white border-4 border-neutral-900 rounded-[2.5rem] p-8 md:p-16 shadow-[8px_8px_0px_0px_#171717]">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {#each [{n: '9+', t: 'Años'}, {n: '14+', t: 'Grupos'}, {n: '5k+', t: 'Ventas'}] as stat}
                <div class="relative group bg-neutral-50 border-2 border-neutral-900 rounded-2xl p-8 text-center transition-all hover:border-red-600 shadow-[4px_4px_0px_0px_#171717]">
                    <div class="text-neutral-900 font-black text-4xl mb-1 group-hover:text-red-600 transition-colors">{stat.n}</div>
                    <div class="text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.t}</div>
                </div>
            {/each}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="animate-float-slow group relative rounded-2xl border-4 border-neutral-900 overflow-hidden cursor-pointer transition-all hover:-translate-y-2 shadow-[6px_6px_0px_0px_#171717] bg-white">
                <img src="/comocomprar.jpg" alt="Proceso 1" class="w-full h-auto transition-transform duration-700 group-hover:scale-105">
            </div>
            <div class="animate-float-fast group relative rounded-2xl border-4 border-neutral-900 overflow-hidden cursor-pointer transition-all hover:-translate-y-2 shadow-[6px_6px_0px_0px_#171717] bg-white">
                <img src="/comocomprar2.jpg" alt="Proceso 2" class="w-full h-auto transition-transform duration-700 group-hover:scale-105">
            </div>
        </div>
    </div>
</section>

<section class="py-24 bg-[#f5f5f7] px-6 border-b-4 border-neutral-900 relative">
    <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#e60012_1px,transparent_1px)] [background-size:16px_16px]"></div>

    <div class="max-w-6xl mx-auto relative z-10">
        <!-- Encabezado Estilo Nintendo -->
        <div class="flex flex-col items-center mb-24 text-center animate-fade-in-up">
            <h2 class="text-neutral-900 text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
                Seguridad <span class="text-red-600 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)]">LEGENDARIA</span><br/>
                <span class="italic text-neutral-900">
                    en cada entrega
                </span>
            </h2>
            <p class="text-neutral-500 uppercase tracking-[0.2em] text-xs font-black mt-8">
                Historias de éxito real de nuestra comunidad
            </p>
        </div>

        <!-- Grid de Referencias (Estilo Nintendo Switch) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <!-- Tarjeta 1 -->
            <a href="https://www.facebook.com/share/p/1BJFKDdHai/" target="_blank" class="group bg-white border-4 border-neutral-900 p-8 rounded-2xl hover:border-red-600 transition-all cursor-pointer hover:-translate-y-2 shadow-[6px_6px_0px_0px_#171717] flex flex-col justify-between">
                <div>
                    <div class="text-red-600 mb-6 text-xl font-black">★★★★★</div>
                    <p class="text-neutral-700 text-sm leading-relaxed mb-8 font-bold italic">"La entrega fue inmediata, sin complicaciones. Totalmente recomendado para cualquier jugador de Metin2."</p>
                </div>
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-neutral-100 border-2 border-neutral-900 flex items-center justify-center text-neutral-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <span class="text-neutral-900 text-xs font-black uppercase tracking-wider">Cliente Verificado</span>
                </div>
            </a>

            <!-- Tarjeta 2 -->
            <a href="https://www.facebook.com/share/p/1BJFKDdHai/" target="_blank" class="group bg-white border-4 border-neutral-900 p-8 rounded-2xl hover:border-red-600 transition-all cursor-pointer hover:-translate-y-2 shadow-[6px_6px_0px_0px_#171717] flex flex-col justify-between">
                <div>
                    <div class="text-red-600 mb-6 text-xl font-black">★★★★★</div>
                    <p class="text-neutral-700 text-sm leading-relaxed mb-8 font-bold italic">"Llevo años comprando con ellos, siempre brindan la mayor seguridad. El mejor servicio de la comunidad."</p>
                </div>
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-neutral-100 border-2 border-neutral-900 flex items-center justify-center text-neutral-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <span class="text-neutral-900 text-xs font-black uppercase tracking-wider">Jugador habitual</span>
                </div>
            </a>

            <!-- Tarjeta 3 - Botón Estilizado Nintendo -->
            <a href="https://www.facebook.com/share/p/1BJFKDdHai/" target="_blank" class="w-full relative group overflow-hidden bg-red-600 border-4 border-neutral-900 text-white font-black uppercase text-sm tracking-widest py-8 rounded-2xl transition-all duration-300 hover:bg-red-500 shadow-[6px_6px_0px_0px_#171717] flex flex-col items-center justify-center text-center active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#171717]">
                <span class="relative z-10 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
                    Ver más referencias
                </span>
                <span class="relative z-10 text-[10px] text-neutral-100 mt-2 font-bold bg-neutral-900/30 px-2.5 py-1 rounded-md">En Facebook</span>
            </a>
        </div>
    </div>
</section>

<style>
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
    .animate-float-slow { animation: float 6s ease-in-out infinite; }
    .animate-float-fast { animation: float 4s ease-in-out infinite; }
    @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
</style>