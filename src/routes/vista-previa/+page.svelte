<section class="relative min-h-[60vh] flex flex-col items-center justify-center py-24 overflow-hidden bg-[#05070d]">
    <img src="/metin2.png" alt="Fondo Metin2" class="absolute inset-0 w-full h-full object-cover opacity-10 mask-image-bottom" />
    <div class="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/60 to-transparent"></div>

    <div class="relative z-10 max-w-3xl px-6 text-center space-y-8">
        <h1 class="text-7xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            <span class="bg-clip-text text-transparent bg-gradient-to-b from-[#fdfdfd] via-[#a3a3a3] to-[#525252] border-b-2 border-blue-900 pb-2">
                METIN2
            </span>
            <span class="inline-block animate-shimmer bg-[linear-gradient(90deg,#60a5fa,#2563eb,#ca8a04,#2563eb,#60a5fa)] bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
  .ES
</span>

<style>
  @keyframes shimmer {
    0% { background-position: 100% 50%; }
    100% { background-position: -100% 50%; }
  }
  .animate-shimmer { 
    animation: shimmer 4s linear infinite; 
  }
</style>
        </h1>
        
        <div class="inline-block px-6 py-2 bg-gradient-to-r from-yellow-600/10 to-transparent border-l-4 border-yellow-600">
            <h2 class="text-2xl font-bold italic text-yellow-500 uppercase tracking-widest drop-shadow-md">
                ¡WON DISPONIBLE PARA TU ASCENSO!
            </h2>
        </div>

        <p class="text-blue-200/60 text-lg font-bold uppercase max-w-xl mx-auto">
            Optimiza tu progreso. Obtén <span class="text-white font-bold italic">Wons</span> con entrega inmediata y asegura tu equipo legendario.
        </p>

     <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noopener noreferrer" class="block w-full max-w-sm mx-auto">
    <button type="button" class="w-full relative group overflow-hidden bg-white/5 border border-amber-800/30 text-white font-black uppercase tracking-[0.2em] py-6 rounded-xl transition-all duration-500 hover:border-amber-400/80 shadow-lg shadow-black/30">
        
        <div class="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"></div>
        
        <span class="relative z-10 text-white group-hover:text-black transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            Equípate como un Dios
        </span>
    </button>
</a>
</section>

<section class="py-20 bg-[#05070d] border-y border-blue-900/40 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent"></div>

    <div class="max-w-5xl mx-auto px-6">
        <div class="flex items-center gap-6 mb-12">
            <h3 class="text-blue-200/60 font-bold text-sm tracking-[0.3em] uppercase">Selecciona tu servidor</h3>
            <div class="h-[1px] flex-1 bg-gradient-to-r from-yellow-600/50 to-transparent"></div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {#each ["IBERIA", "TEUTONIA", "TIGERHOST", "AZRAEL", "RUBY", "EUROPA"] as servidor}
                <button class="group relative p-4 bg-gradient-to-b from-[#0a0f1d] to-[#05070d] border border-blue-900/50 hover:border-yellow-600/50 transition-all duration-300 text-center rounded-lg shadow-lg hover:shadow-yellow-900/10">
                    <div class="absolute inset-0 bg-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    
                    <span class="relative z-10 block text-white font-black tracking-widest text-xs uppercase group-hover:text-yellow-400 transition-colors">
                        {servidor}
                    </span>
                    
                    <div class="relative z-10 flex justify-center mt-3 gap-1">
                        <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                    </div>
                </button>
            {/each}
        </div>

        <div class="mt-16 flex justify-center items-center gap-4">
            <span class="text-[10px] text-blue-200/40 uppercase tracking-[0.2em]">Estado de Stock:</span>
            <div class="flex gap-1.5">
                {#each [1, 2, 3] as _}
                    <div class="h-1 w-8 bg-emerald-600/30 rounded-full overflow-hidden">
                        <div class="h-full w-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    </div>
                {/each}
            </div>
            <span class="text-[10px] font-black text-emerald-500 uppercase tracking-widest ml-2">Optimal</span>
        </div>
    </div>
</section>