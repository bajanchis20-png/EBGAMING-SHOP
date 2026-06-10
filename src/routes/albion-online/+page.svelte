<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
</script>

<section class="relative min-h-[75vh] flex items-center bg-[#050505] overflow-hidden border-b border-white/5 py-20">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(185,28,28,0.15)_0%,_transparent_50%)]"></div>

    <div class="max-w-7xl mx-auto w-full px-8 grid lg:grid-cols-2 gap-16 items-center z-10">
        
        <div class="space-y-8">
            <div class="inline-flex items-center gap-3">
                <span class="h-px w-10 bg-red-600"></span>
                <span class="text-[10px] font-black tracking-[0.3em] text-red-500 uppercase">EBGAMING SHOP</span>
            </div>
            
            <h1 class="text-7xl md:text-8xl font-black text-white uppercase tracking-[-0.04em] leading-[0.9]">
                Albion <br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-amber-600 drop-shadow-[0_4px_8px_rgba(220,38,38,0.3)]">
                    Online
                </span>
            </h1>
            
            <p class="text-neutral-400 text-base leading-relaxed max-w-md border-l border-neutral-800 pl-6">
                Abastecimiento directo, mercado de alta gama y protección total contra baneos. Tu acceso premium al reino empieza aquí.
            </p>
        </div>

        <div class="relative group">
            <div class="absolute -inset-0.5 bg-gradient-to-br from-red-600/50 to-amber-900/50 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-700"></div>
            
            <div class="relative bg-[#0a0a0c] p-1.5 rounded-2xl border border-white/10 shadow-2xl">
                <div class="relative rounded-[14px] overflow-hidden aspect-video">
                    <video src="video5.mp4" autoplay loop muted playsinline class="w-full h-full object-cover"></video>
                    <div class="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="max-w-8xl m-10 py-24 -px-2">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-br from-red-600 via-amber-700 to-neutral-950 rounded-3xl opacity-25 blur-2xl group-hover:opacity-50 transition duration-700"></div>
            <div class="relative bg-[#0f0f13] p-1 rounded-3xl border border-white/5">
                <Nuevatarjeta titulo="ALBION ONLINE" img="/albion.jpeg" precio="15.00" descripcion="Silver & Cuentas en Albion Online" />
            </div>
        </div>

        <div class="space-y-10">
            <h3 class="text-4xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                <span class="w-2 h-10 bg-red-600 rounded-full"></span>
                Protocolo de <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Seguridad</span>
            </h3>
            <p class="text-neutral-300 leading-relaxed text-base border-l-2 border-red-600/80 pl-6">
                Tu cuenta principal nunca entra en contacto con trade sospechoso. Implementamos una <strong>capa de transferencia aislada</strong> para camuflar el origen de los recursos. Para garatizar tu seguridad, implementamos un sistema de transferencia unica, te proporcionamos acceso total a una cuenta con la que podras hacer una unica transferencia a traves del gremio. Este procedimiento asegura total procedimiento, y recuerda qué tu seguridad es la nuestra.
            </p>
            
            <div class="grid grid-cols-2 gap-4">
                {#each [{ title: "Entrega Inmediata", icon: "⚡" }, { title: "Safe Trade Zone", icon: "🛡️" }, { title: "Cuentas Verificadas", icon: "✅" }, { title: "Soporte 24/7", icon: "💬" }] as item}
                    <div class="p-5 bg-[#141419] border border-white/5 rounded-2xl hover:border-red-600/40 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                        <span class="text-2xl block mb-2">{item.icon}</span>
                        <span class="text-neutral-200 text-[11px] font-bold uppercase tracking-wider">{item.title}</span>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>