<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
</script>

<section class="relative min-h-[60vh] flex items-center justify-center py-20 px-6 overflow-hidden">
    <video 
        src="video5.mp4" 
        autoplay loop muted playsinline 
        class="absolute inset-0 w-full h-full object-cover opacity-40">
    </video>
    <!-- Overlay con tinte rojizo para unificar -->
    <div class="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-red-950/70 to-neutral-950"></div>

    <div class="relative z-10 text-center space-y-6">
        <h1 class="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter border-y border-white/10 py-8">
            Albion 
            <span class="italic text-transparent bg-clip-text bg-gradient-to-b from-red-600 via-red-800 to-red-950 drop-shadow-[0_6px_3px_rgba(0,0,0,0.9)] [text-shadow:_0_3px_15px_rgba(185,28,28,0.5)]" 
                  style="-webkit-text-stroke: 1px rgba(185,28,28,0.3);">
                Online
            </span>
        </h1>
        <p class="text-neutral-300 font-bold tracking-[0.3em] uppercase text-sm">
            Abastecimiento inmediato • Entrega segura • Métodos anti-ban
        </p>
    </div>
</section>

<!-- Content Section -->
<section class="max-w-6xl mx-auto px-6 py-16">
    <div class="grid md:grid-cols-2 gap-12 items-center">
        
        <!-- Tarjeta de Producto -->
        <div class="w-full text-white">
            <Nuevatarjeta
                titulo="ALBION ONLINE"
                img="/albion.jpeg"
                precio="15.00"
                descripcion="Silver & Cuentas en Albion Online"
            />
        </div>

        <!-- Caja de Información de Seguridad (Ajustada a estética Albion) -->
        <div class="bg-neutral-900/80 backdrop-blur-md border border-red-900/30 p-8 rounded-3xl space-y-6 shadow-[0_0_30px_rgba(153,27,27,0.15)]">
            <h3 class="text-2xl font-black text-white uppercase tracking-tight">
                Tu seguridad es la <span class="text-red-500 drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">nuestra</span>
            </h3>
            <p class="text-neutral-400 leading-relaxed text-sm">
                Para maximizar tu protección, implementamos el sistema de <strong>transferencia única</strong>. 
                Te proporcionamos acceso total a una cuenta de suministro externa desde la cual realizarás la transacción a través de tu gremio.
            </p>
            
            <!-- Caja de Beneficio (Estilo pergamino/forja) -->
            <div class="bg-red-950/20 border border-red-900/50 p-4 rounded-xl relative overflow-hidden">
                <div class="absolute inset-0 bg-[url('patron-piedra.png')] opacity-5"></div>
                <p class="text-red-200 text-xs font-bold uppercase tracking-widest relative z-10">
                    Beneficio clave:
                </p>
                <p class="text-red-100/70 text-xs mt-1 relative z-10">
                    Tu cuenta principal permanece fuera de riesgos directos, manteniendo el anonimato y la protección total de tus activos.
                </p>
            </div>
        </div>

    </div>
</section>
<section class="py-12">
    <div class="max-w-5xl mx-auto px-6 text-center">
        <p class="text-neutral-500 font-bold uppercase tracking-[0.3em] text-xs mb-8">Comunidad Verificada</p>
        <div class="flex flex-wrap justify-center items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="/comunidad.png" alt="" class="h-38 w-auto object-contain">
        </div>
    </div>
</section>