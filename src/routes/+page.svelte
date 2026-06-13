<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
</script>

<section class="relative w-full bg-[#030303] py-32 px-8 overflow-hidden">
    <div class="absolute inset-0 z-0">
        <video autoplay loop muted playsinline class="w-full h-full object-cover">
            <source src="/copia.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/70 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto flex flex-col items-start justify-center min-h-[50vh]">
        
        <div class="space-y-8 max-w-3xl">
            <h1 class="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                Equípate como un 
                <span class="block mt-4 text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-amber-600 drop-shadow-[0_0_30px_rgba(245,158,11,0.4)] italic">
                    Dios
                </span>
            </h1>
            
            <p class="text-neutral-400 font-medium tracking-[0.15em] uppercase text-sm md:text-base leading-relaxed border-l-2 border-yellow-600 pl-6">
                Domina cada rincón del reino con items de élite. Seguridad absoluta, transacciones blindadas y entrega inmediata en Metin2 Guabina, Metin2.es & Albion online.
            </p>

            <div class="flex gap-4 pt-4">
                <a href="/catalogo" class="px-10 py-4 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-yellow-500 transition-all duration-300">
                    Ver Catálogo
                </a>
                <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola, EBGAMING SHOP, tengo unas dudas sobre..." target="_blank" rel="noreferrer" class="px-10 py-4 border border-white/10 text-white font-bold uppercase text-xs tracking-widest hover:bg-white/5 transition-all duration-300">
                    Soporte 24/7
                </a>
               
            </div>
        </div>
    </div>
</section>
