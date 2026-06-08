<section class="relative min-h-[50vh] flex flex-col items-center justify-center py-20 overflow-hidden">
    <!-- Fondo inmersivo -->
    <img src="/metin2.png" alt="Fondo Metin2" class="absolute inset-0 w-full h-full object-cover opacity-15" />
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black/80 to-black"></div>

    <div class="relative z-10 max-w-4xl px-6 text-center group">
        <!-- Efecto de "Data Loading" -->
        <div class="mb-4 inline-block px-3 py-1 bg-[#00a8ff]/10 border border-[#00a8ff]/50 rounded-full">
            <span class="text-[#00a8ff] text-xs font-mono tracking-widest animate-pulse">● Transacciones seguras</span>
        </div>

        <!-- Título con estilo de neón azul y oro -->
        <h1 class="text-6xl md:text-7xl font-black text-white uppercase tracking-[0.1em] drop-shadow-[0_0_15px_rgba(0,168,255,0.6)]">
            METIN2<span class="text-[#00a8ff]">.ES</span>
        </h1>
        
        <div class="mt-6 border-b-2 border-yellow-500/50 w-24 mx-auto mb-8"></div>

        <h2 class="text-3xl font-bold italic text-transparent bg-clip-text bg-gradient-to-tr from-yellow-500 to-yellow-200 mb-6 drop-shadow-lg">
            ¡WON DISPONIBLE PARA TU ASCENSO!
        </h2>

        <!-- Descripción interactiva -->
        <p class="text-gray-300 text-lg font-medium max-w-2xl mx-auto leading-relaxed bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/5">
            Deja de farmear por horas. Obtén tus <span class="text-yellow-400 font-bold">Wons</span> al instante y domina el ranking. 
            <span class="block mt-2 text-[#00a8ff] font-bold">Tu equipo legendario te espera.</span>
        </p>

        <!-- Botón de acción tipo "Juego" -->
        <div class="mt-10">
            <button class="relative px-8 py-3 bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-black uppercase tracking-widest transition-all duration-300 border-b-4 border-red-950 hover:scale-105 active:scale-95 shadow-xl">
                Equípate como un Dios
            </button>
        </div>
    </div>
</section>
<section class="py-20 bg-black/50">
    <div class="max-w-5xl mx-auto px-6">
        <!-- Título de la sección -->
        <div class="flex items-center gap-4 mb-10">
            <div class="h-px flex-1 bg-gradient-to-r from-transparent to-[#00a8ff]"></div>
            <h3 class="text-[#00a8ff] font-mono text-xl tracking-[0.2em] uppercase">Selecciona tu Servidor</h3>
            <div class="h-px flex-1 bg-gradient-to-l from-transparent to-[#00a8ff]"></div>
        </div>

        <!-- Grid de Servidores -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {#each ["IBERIA", "TEUTONIA", "TIGERHOST", "AZRAEL", "RUBY", "EUROPA"] as servidor}
                <button 
                    class="group relative p-4 bg-[#1a1a1a] border border-[#333] hover:border-[#00a8ff] transition-all duration-300 hover:bg-[#00a8ff]/10 text-center"
                >
                    <span class="block text-white font-bold tracking-widest group-hover:text-[#00a8ff] transition-colors">
                        {servidor}
                    </span>
                    <!-- Efecto de borde activo -->
                    <div class="absolute bottom-0 left-0 w-full h-0.5 bg-[#00a8ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </button>
            {/each}
        </div>

        <!-- Nota de disponibilidad -->
        <div class="mt-8 text-center">
            <p class="text-xs text-gray-500 font-mono italic">
                * Stock verificado en tiempo real para todos los nodos activos.
            </p>
        </div>
    </div>
</section>