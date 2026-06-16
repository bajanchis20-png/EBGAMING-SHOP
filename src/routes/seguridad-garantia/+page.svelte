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