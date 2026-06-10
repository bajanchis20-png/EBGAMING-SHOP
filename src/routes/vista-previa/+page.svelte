<section class="relative min-h-[60vh] flex flex-col items-center justify-center py-24 overflow-hidden bg-[#050505]">
    <img src="/metin2.png" alt="Fondo Metin2" class="absolute inset-0 w-full h-full object-cover opacity-20 mask-image-bottom" />
    <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>

    <div class="relative z-10 max-w-3xl px-6 text-center space-y-8">
  <h1 class="text-7xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
    <span class="bg-clip-text text-transparent bg-gradient-to-b from-[#fdfdfd] via-[#a3a3a3] to-[#525252] border-b-2 border-neutral-700 pb-2">
        METIN2
    </span>
    <span class="text-[#e11d1d] drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">.ES</span>
</h1>
        
        <div class="inline-block px-6 py-2 bg-gradient-to-r from-yellow-600/20 to-transparent border-l-4 border-yellow-500">
            <h2 class="text-2xl font-bold italic text-yellow-500 uppercase tracking-widest drop-shadow-md">
                ¡WON DISPONIBLE PARA TU ASCENSO!
            </h2>
        </div>

        <p class="text-neutral-300 text-lg font-bold uppercase max-w-xl mx-auto">
            Optimiza tu progreso. Obtén <span class="text-white font-bold italic">Wons</span> con entrega inmediata y asegura tu equipo legendario</p>

        <button class="group relative px-10 py-4 bg-red-700 hover:bg-red-600 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)] overflow-hidden">
            <span class="relative z-10 text-white font-black uppercase tracking-[0.2em]">Equípate como un Dios</span>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
        </button>
    </div>
</section>

<section class="py-20 bg-[#0a0a0a] border-y border-white/5">
    <div class="max-w-5xl mx-auto px-6">
        <div class="flex items-center gap-6 mb-12">
            <h3 class="text-white/80 font-bold text-sm tracking-[0.3em] uppercase">Seleccióna tu sever</h3>
            <div class="h-[1px] flex-1 bg-gradient-to-r from-yellow-600/50 to-transparent"></div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {#each ["IBERIA", "TEUTONIA", "TIGERHOST", "AZRAEL", "RUBY", "EUROPA"] as servidor}
                <button class="relative p-4 bg-[#121212] border border-[#222] hover:border-yellow-600 transition-all duration-300 text-center hover:-translate-y-1">
                    <span class="block text-white font-bold tracking-wider text-sm group-hover:text-yellow-500 transition-colors">
                        {servidor}
                    </span>
                    <div class="flex justify-center mt-2 gap-1">
                        <div class="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                    </div>
                </button>
            {/each}
        </div>

        <div class="mt-12 flex justify-center items-center gap-4 text-neutral-600">
            <span class="text-xs uppercase tracking-[0.2em]">Estado de Stock:</span>
            <div class="flex gap-1.5">
                <div class="h-1 w-8 bg-green-600"></div>
                <div class="h-1 w-8 bg-green-600"></div>
                <div class="h-1 w-8 bg-green-600"></div>
            </div>
            <span class="text-xs font-mono">OPTIMAL</span>
        </div>
    </div>
</section>