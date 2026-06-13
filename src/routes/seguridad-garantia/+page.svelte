<section class="relative bg-[#05070d] py-24 overflow-hidden border-b border-blue-900/30">
    <img src="newseguridad2.png" alt="Fondo Seguridad" class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl opacity-5 pointer-events-none">
    
    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-5xl md:text-7xl font-extrabold text-white tracking-tighter uppercase leading-none">
            Seguridad y <br>
            <span class="block mt-4 font-black italic text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-700 drop-shadow-[0_0_15px_rgba(202,138,4,0.3)]">
                Garantía
            </span>
        </h2>
        <div class="w-24 h-[1px] bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mt-12"></div>
        <p class="text-blue-200/60 font-bold tracking-wide text-sm md:text-base max-w-lg mx-auto mt-8 uppercase">
            Forjando confianza en cada operación. Tu equipo legendario está protegido bajo los estándares más estrictos del reino.
        </p>
    </div>
</section>

<section class="max-w-5xl mx-auto px-6 -mt-16 mb-20 relative z-20">
    <div class="bg-[#0a0f1d]/90 backdrop-blur-md border border-blue-900/50 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
        <h3 class="text-white font-bold tracking-[0.25em] uppercase text-xl mb-12 text-center after:block after:w-12 after:h-[2px] after:bg-yellow-600 after:mx-auto after:mt-4">
            Récord de Confianza
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {#each [{n: '9+', t: 'Años de Trayectoria'}, {n: '14+', t: 'Grupos Establecidos'}, {n: '5k+', t: 'Guerreros Respaldados'}] as stat}
                <div class="bg-[#05070d]/50 border border-blue-900/50 rounded-2xl p-6 text-center hover:border-yellow-600/30 transition-colors">
                    <div class="text-yellow-500 font-black text-3xl mb-1">{stat.n}</div>
                    <div class="text-blue-200/40 text-[10px] font-bold uppercase tracking-widest">{stat.t}</div>
                </div>
            {/each}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div class="group cursor-pointer overflow-hidden rounded-2xl border border-blue-900/50 hover:border-yellow-600/30 transition-all">
                <img src="/comocomprar.jpg" alt="Proceso 1" class="w-full transform group-hover:scale-105 transition-transform duration-700">
            </div>
            <div class="group cursor-pointer overflow-hidden rounded-2xl border border-blue-900/50 hover:border-yellow-600/30 transition-all">
                <img src="/comocomprar2.jpg" alt="Proceso 2" class="w-full transform group-hover:scale-105 transition-transform duration-700">
            </div>
        </div>
    </div>
</section>

