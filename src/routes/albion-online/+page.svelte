<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
</script>

<section class="relative min-h-[80vh] flex items-center justify-center py-20 px-6 overflow-hidden bg-[#0a0a0c]">
    <video src="video5.mp4" autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"></video>
    
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(185,28,28,0.12)_0%,_rgba(5,5,5,0.85)_50%,_rgba(0,0,0,0.95)_100%)]"></div>

    <div class="relative z-10 text-center max-w-4xl space-y-8">
        <h1 class="text-6xl md:text-8xl font-black text-white uppercase tracking-[-0.05em] drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]">
            Albion <span class="text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-700 to-amber-900 drop-shadow-[0_4px_8px_rgba(220,38,38,0.3)]">Online</span>
        </h1>
        
        <div class="flex items-center justify-center gap-4 pt-6 border-t border-white/10 max-w-2xl mx-auto">
            <p class="text-neutral-400 font-semibold tracking-[0.25em] uppercase text-xs">
                Abastecimiento directo • Mercado de alta gama • Protección Anti-Ban
            </p>
        </div>
    </div>
    
    <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-40"></div>
</section>

<section class="max-w-6xl mx-auto px-6 py-24">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
        
        <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-br from-red-600 via-amber-700 to-neutral-950 rounded-3xl opacity-25 blur-2xl group-hover:opacity-50 transition duration-700"></div>
            <div class="relative bg-[#0f0f13] p-1 rounded-3xl border border-white/5">
                <Nuevatarjeta
                    titulo="ALBION ONLINE"
                    img="/albion.jpeg"
                    precio="15.00"
                    descripcion="Silver & Cuentas en Albion Online"
                />
            </div>
        </div>

        <div class="space-y-10">
            <div class="space-y-5">
                <h3 class="text-4xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                    <span class="w-2 h-10 bg-red-600 rounded-full"></span>
                    Protocolo de <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Seguridad</span>
                </h3>
                <p class="text-neutral-300 leading-relaxed text-base border-l-2 border-red-600/80 pl-6 py-1 bg-white/[0.01] rounded-r-xl">
                    Tu cuenta principal nunca entra en contacto con trade sospechoso. Implementamos una <strong>capa de transferencia aislada</strong> (trade intermedio) para camuflar el origen de los recursos.
                </p>
            </div>

            <div class="grid grid-cols-2 gap-4">
                {#each [
                    { title: "Entrega Inmediata", icon: "⚡" },
                    { title: "Safe Trade Zone", icon: "🛡️" },
                    { title: "Cuentas Verificadas", icon: "✅" },
                    { title: "Soporte 24/7", icon: "💬" }
                ] as item}
                    <div class="p-5 bg-[#141419] border border-white/5 rounded-2xl hover:border-red-600/40 hover:bg-[#1a1a24] transition-all duration-300 flex flex-col justify-between h-24 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                        <span class="text-2xl block filter drop-shadow-md">{item.icon}</span>
                        <span class="text-neutral-200 text-[11px] font-bold uppercase tracking-wider">{item.title}</span>
                    </div>
                {/each}
            </div>

            <div class="relative p-6 bg-gradient-to-br from-red-950/30 to-[#121215] border border-red-900/30 rounded-2xl overflow-hidden shadow-inner">
                <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-transparent"></div>
                <p class="text-neutral-200 text-sm leading-relaxed font-medium italic relative z-10">
                    "Al ser una cuenta de un único trade, simulamos el comportamiento de un jugador casual. Evitamos disparar las alarmas de detección automática de Albion al no mantener balances sospechosos."
                </p>
                <div class="absolute right-4 bottom-[-10px] text-7xl text-red-950/20 font-serif select-none">"</div>
            </div>
        </div>
    </div>
</section>

<section class="py-16 border-t border-white/5 bg-[#09090b]">
    <div class="max-w-5xl mx-auto px-6 text-center space-y-6">
        <p class="text-neutral-500 font-black uppercase tracking-[0.3em] text-[10px] tracking-widest">
            Comunidad y Referencias Verificadas
        </p>
        <div class="flex justify-center items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 scale-90 hover:scale-100">
            <img src="/comunidad.png" alt="Referencias" class="h-32 w-auto object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
        </div>
    </div>
</section>