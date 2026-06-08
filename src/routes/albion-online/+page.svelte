<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
</script>

<!-- Hero Section Mejorado -->
<section class="relative min-h-[70vh] flex items-center justify-center py-20 px-6 overflow-hidden bg-black">
    <video src="video5.mp4" autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover opacity-30"></video>
    
    <!-- Gradiente más profundo para mayor impacto -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)]"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>

    <div class="relative z-10 text-center space-y-4 max-w-4xl">
        
        
        <h1 class="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
            Albion <span class="text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]">Online</span>
        </h1>
        
        <p class="text-neutral-400 font-medium tracking-[0.2em] uppercase text-sm pt-4 border-t border-white/5">
            Abastecimiento inmediato • Entrega segura • Métodos anti-ban
        </p>
    </div>
</section>

<!-- Content Section con Estilo Premium -->
<section class="max-w-6xl mx-auto px-6 py-20">
    <div class="grid md:grid-cols-2 gap-16 items-start">
        
        <!-- Tarjeta de Producto -->
        <div class="group relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div class="relative">
                <Nuevatarjeta
                    titulo="ALBION ONLINE"
                    img="/albion.jpeg"
                    precio="15.00"
                    descripcion="Silver & Cuentas en Albion Online"
                />
            </div>
        </div>

        <!-- Caja de Seguridad Mejorada -->
        <div class="relative bg-neutral-900/50 backdrop-blur-xl border border-white/5 p-10 rounded-3xl space-y-6 hover:border-red-900/50 transition-colors duration-500">
            <div class="absolute -top-4 -right-4 bg-red-600 text-white p-3 rounded-2xl rotate-3 shadow-lg">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            
            <h3 class="text-3xl font-black text-white uppercase tracking-tight">
                TU SEGURIDAD <span class="text-red-500">ES LA NUESTRA</span>
            </h3>
            <p class="text-neutral-400 leading-relaxed">
                Utilizamos <strong> cuenta de transferencia única</strong> Tu cuenta principal se mantiene invisible, garantizando un proceso 100% libre de riesgos.
            </p>
            
            <div class="bg-gradient-to-br from-red-950/40 to-black border border-red-900/30 p-6 rounded-2xl">
                <h4 class="text-red-500 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Ventaja táctica
                </h4>
                <p class="text-neutral-300 text-sm italic">
                    "Operamos bajo el radar, permitiendo que tu progreso sea constante sin alertas en el sistema del juego al ser una cuenta con un unico TRADE hacia ti."
                </p>
            </div>
        </div>
    </div>
</section>