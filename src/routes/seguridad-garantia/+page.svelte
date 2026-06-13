<section class="relative bg-neutral-950 py-24 overflow-hidden border-b border-white/5">
    <img src="newseguridad2.png" alt="Fondo Seguridad" class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl opacity-5 pointer-events-none">
    
    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <h2 class="text-5xl md:text-7xl font-extrabold text-white tracking-tighter uppercase leading-none">
            Seguridad y <br>
            <span class="block mt-4 font-black italic text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-amber-600 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                Garantía
            </span>
        </h2>
        <div class="w-24 h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-12"></div>
        <p class="text-neutral-400 font-bold tracking-wide text-sm md:text-base max-w-lg mx-auto mt-8 uppercase text-sm">
            Forjando confianza en cada operación. Tu equipo legendario está protegido bajo los estándares más estrictos del reino.
        </p>
    </div>
</section>

<section class="max-w-5xl mx-auto px-6 -mt-16 mb-20 relative z-20">
    <div class="bg-[#05070d] backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
        <h3 class="text-white font-bold tracking-[0.25em] uppercase text-xl mb-12 text-center after:block after:w-12 after:h-[2px] after:bg-yellow-500 after:mx-auto after:mt-4">
            Récord de Confianza
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {#each [{n: '9+', t: 'Años de Trayectoria'}, {n: '14+', t: 'Grupos Establecidos'}, {n: '5k+', t: 'Guerreros Respaldados'}] as stat}
                <div class="bg-black/40 border border-white/5 rounded-2xl p-6 text-center hover:border-yellow-500/30 transition-colors">
                    <div class="text-yellow-500 font-black text-3xl mb-1">{stat.n}</div>
                    <div class="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">{stat.t}</div>
                </div>
            {/each}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div class="group cursor-pointer overflow-hidden rounded-2xl border border-white/10">
                <img src="/comocomprar.jpg" alt="Proceso 1" class="w-full transform group-hover:scale-105 transition-transform duration-700">
            </div>
            <div class="group cursor-pointer overflow-hidden rounded-2xl border border-white/10">
                <img src="/comocomprar2.jpg" alt="Proceso 2" class="w-full transform group-hover:scale-105 transition-transform duration-700">
            </div>
        </div>
    </div>
</section>

<div class="flex justify-center w-full mt-16 mb-16">
    <a 
        href="https://www.facebook.com/share/g/1CuzL1wnvd/" 
        target="_blank" 
        rel="noopener noreferrer"
        class="flex justify-center items-center w-full max-w-xs relative group overflow-hidden bg-white/5 border border-amber-800/30 text-white font-black uppercase tracking-[0.2em] py-6 rounded-xl transition-all duration-500 hover:border-amber-400/80 shadow-lg shadow-black/30"
    >
        
        <div class="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"></div>
        
        <span class="relative z-10 text-white group-hover:text-black transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            Referencias
        </span>
    </a>
</div>
