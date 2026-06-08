<section class="relative bg-neutral-950 py-24 overflow-hidden">
    <img 
        src="newseguridad2.png" 
        alt="Fondo Seguridad" 
        class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl opacity-10 pointer-events-none"
    >
    
    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <h2 class="text-5xl md:text-7xl font-extrabold text-white tracking-tighter uppercase leading-none">
            Seguridad y 
            <span class="block mt-4 font-black italic text-transparent bg-clip-text bg-gradient-to-t from-orange-600 via-amber-400 to-yellow-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] tracking-wider">
                Garantía
            </span>
        </h2>
        
        <div class="w-32 h-[2px] bg-white/10 mx-auto"></div>

        <p class="text-neutral-400 font-medium tracking-widest uppercase text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Forjando confianza en cada transacción. Tu equipo legendario protegido por los métodos de entrega más seguros del reino.
        </p>
    </div>
</section>

<section class="max-w-5xl mx-auto px-6 -mt-10 mb-20">
    <div class="bg-neutral-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div class="text-center space-y-6">
            <h3 class="text-white font-bold tracking-[0.2em] uppercase text-2xl">Proceso Garantizado</h3>
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                {#each [{n: '9+', t: 'Años'}, {n: '14+', t: 'Grupos'}, {n: '5k+', t: 'Guerreros satisfechos'}] as stat}
                    <div class="bg-white/5 rounded-2xl p-4 border border-white/5">
                        <div class="text-yellow-500 font-black text-2xl">{stat.n}</div>
                        <div class="text-neutral-500 text-xs font-bold uppercase">{stat.t}</div>
                    </div>
                {/each}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <img src="/comocomprar.jpg" alt="Proceso 1" class="w-full rounded-2xl shadow-lg border border-white/10 hover:scale-[1.02] transition-transform">
                <img src="/comocomprar2.jpg" alt="Proceso 2" class="w-full rounded-2xl shadow-lg border border-white/10 hover:scale-[1.02] transition-transform">
            </div>
        </div>
    </div>
</section>

<section class="py-12">
    <div class="max-w-5xl mx-auto px-6 text-center">
        <p class="text-neutral-500 font-bold uppercase tracking-[0.3em] text-xs mb-8">Comunidad Verificada</p>
        <div class="flex flex-wrap justify-center items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="/referencias10.png" alt="Referencias" class="h-16 w-auto object-contain">
            <img src="/rename2.png" alt="Grupo de Facebook" class="h-16 w-auto object-contain">
        </div>
    </div>
</section>