<script>
    import Icon from "@iconify/svelte";
</script>

<div class="relative min-h-screen overflow-hidden bg-neutral-950">
    <!-- Video de fondo con overlay para mejorar contraste -->
    <video 
        src="video2.mp4" 
        autoplay 
        loop 
        muted 
        playsinline 
        class="absolute inset-0 w-full h-full object-cover opacity-65">
    </video>
    <div class="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/80 to-neutral-950"></div>

    <!-- Contenedor Principal -->
    <main class="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-32">
        
        <!-- Hero Section -->
        <section class="text-center space-y-8 mb-24">
           
            <h1 class="text-4xl md:text-7xl font-extrabold text-white tracking-tighter uppercase space-y-2">
                <div>Poder <span class="text-red-600">Total</span></div>
                <div class="text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 drop-shadow-lg">
                    en tus pagos
                </div>
            </h1>
            
            <p class="text-neutral-300 font-bold tracking-[0.3em] uppercase text-sm">
                Equípate con lo mejor sin esperas. Obtén tus items en tiempo récord.
            </p>
        </section>

        <!-- Payment Methods Section -->
        <section class="bg-neutral-900/50 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div class="text-center mb-10">
                <h3 class="text-yellow-500 font-bold tracking-[0.3em] uppercase text-sm mb-2">Cobertura Global</h3>
                <p class="text-white font-extrabold text-3xl md:text-4xl">Métodos de Pago</p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                {#each [{name: 'Paypal', icon: 'logos:paypal'}, {name: 'Western Union', icon: 'simple-icons:westernunion'}, {name: 'Ria', img: '/ria.webp'}, {name: 'Binance', icon: 'token-branded:binance'}] as method}
                    <div class="group flex flex-col items-center gap-4 p-4 rounded-2xl transition-all hover:bg-white/5 cursor-pointer">
                        <div class="w-16 h-16 flex items-center justify-center rounded-2xl bg-neutral-800 group-hover:scale-110 transition-transform shadow-inner border border-white/10">
                            {#if method.icon}
                                <Icon icon={method.icon} class="w-8 h-8" />
                            {:else}
                                <img src={method.img} alt={method.name} class="w-8 h-8 object-contain" />
                            {/if}
                        </div>
                        <span class="text-neutral-300 font-semibold text-sm tracking-wide">{method.name}</span>
                    </div>
                {/each}
            </div>
        </section>

    </main>
</div>
<section class="py-20 bg-[#050505]">
    <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-center gap-6 mb-16">
            <div class="h-[1px] flex-1 bg-gradient-to-r from-transparent via-red-900 to-red-600"></div>
            <h3 class="text-white font-bold text-2xl tracking-[0.3em] uppercase">
                Selecciona tu <span class="text-yellow-500">País</span>
            </h3>
            <div class="h-[1px] flex-1 bg-gradient-to-l from-transparent via-red-900 to-red-600"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {#each [
                { nombre: "COLOMBIA", metodos: ["Nequi", "Daviplata", "Bancolombia"] },
                { nombre: "PERU", metodos: ["BCP", "Yape"] },
                { nombre: "MEXICO", metodos: ["OXXO", "Transferencia BBVA"] },
                { nombre: "ARGENTINA", metodos: ["Mercado Pago", "Prex"] },
                { nombre: "R. DOMINICANA", metodos: ["Banreservas", "Y+ Bancos"] },
                { nombre: "URUGUAY", metodos: ["BBVA", "Prex"] },
                { nombre: "EEUU", metodos: ["Zelle"] },
                { nombre: "ECUADOR", metodos: ["Pichincha"] },
                { nombre: "ESPAÑA", metodos: ["Bizum", "BBVA"] },
                { nombre: "BRASIL", metodos: ["Pix"] },
                { nombre: "CHILE", metodos: ["Banco Estado"] }
            ] as pais}
                <div class="group relative p-6 bg-[#0d0d0d] border border-white/5 hover:border-yellow-500/50 rounded-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.2)]">
                    <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                    
                    <h4 class="relative text-gray-200 font-semibold tracking-wider mb-4 group-hover:text-yellow-400 transition-colors">
                        {pais.nombre}
                    </h4>
                    
                    <div class="relative flex flex-col gap-2.5">
                        {#each pais.metodos as metodo}
                            <div class="flex items-center gap-3 text-[13px] text-gray-500 group-hover:text-gray-300 transition-colors">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600/50 group-hover:bg-yellow-400 transition-colors"></span>
                                {metodo}
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>