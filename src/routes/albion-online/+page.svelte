<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
</script>

<section class="relative min-h-[75vh] flex items-center bg-[#05070d] overflow-hidden border-b border-blue-900/30 py-20">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(30,58,138,0.2)_0%,_transparent_50%)]"></div>

    <div class="max-w-7xl mx-auto w-full px-8 grid lg:grid-cols-2 gap-16 items-center z-10">
        <div class="space-y-8">
            <div class="inline-flex items-center gap-3">
                <span class="h-px w-10 bg-yellow-600"></span>
                <span class="text-[10px] font-black tracking-[0.3em] text-yellow-500 uppercase">EBGAMING SHOP</span>
            </div>
            
          <h1 class="text-7xl md:text-8xl font-black text-white uppercase tracking-[-0.04em] leading-[0.9]">
  Albion <br/>
  <span class="inline-block animate-shimmer bg-[linear-gradient(90deg,theme(colors.blue.400),theme(colors.blue.600),theme(colors.yellow.600),theme(colors.blue.600),theme(colors.blue.400))] bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(37,99,235,0.3)]">
    Online
  </span>
</h1>

<style>
  @keyframes shimmer {
    0% { background-position: 100% 50%; }
    100% { background-position: -100% 50%; }
  }
  .animate-shimmer { 
    animation: shimmer 4s linear infinite; 
  }
</style>
            
            <p class="text-blue-200/60 text-base font-bold leading-relaxed max-w-md border-l border-blue-900 pl-6 uppercase">
                Abastecimiento directo, mercado de alta gama y protección total contra baneos. Tu acceso premium al reino empieza aquí.
            </p>
        </div>

        <div class="relative group">
            <div class="absolute -inset-0.5 bg-gradient-to-br from-blue-600/30 to-yellow-900/30 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-700"></div>
            
            <div class="relative bg-[#0a0f1d] p-1.5 rounded-2xl border border-blue-900/50 shadow-2xl">
                <div class="relative rounded-[14px] overflow-hidden aspect-video">
                    <video src="video5.mp4" autoplay loop muted playsinline class="w-full h-full object-cover"></video>
                    <div class="absolute inset-0 bg-gradient-to-tr from-[#05070d]/60 to-transparent"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="max-w-7xl mx-auto py-24 px-8">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
        
        <div class="flex justify-center items-center">
            <div class="relative group w-fit">
                <div class="absolute -inset-1 bg-gradient-to-br from-blue-700/20 to-yellow-700/20 rounded-3xl blur-xl group-hover:opacity-100 transition duration-700"></div>
                <div class="relative bg-[#0a0f1d] p-1 rounded-3xl border border-blue-900/50">
                    <Nuevatarjeta 
                        titulo="ALBION ONLINE" 
                        img="/albion.jpeg" 
                        descripcion="Silver & Cuentas en Albion Online" 
                    />
                </div>
            </div>
        </div>

        <div class="space-y-10">
            <h3 class="text-4xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                <span class="w-2 h-10 bg-yellow-600 rounded-full"></span>
                Protocolo de <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-500">Seguridad</span>
            </h3>
            <p class="text-blue-200/60 leading-relaxed font-bold border-l-2 border-yellow-600/50 pl-6 uppercase">
                Tu cuenta principal nunca entra en contacto con trade sospechoso. Implementamos una <span class="text-yellow-500">capa de transferencia aislada</span> para camuflar el origen de los recursos. Para garantizar tu seguridad, implementamos un sistema de transferencia única, te proporcionamos acceso total a una <span class="text-yellow-500">cuenta con la que podrás hacer una única transferencia</span> a través del gremio. Este procedimiento asegura total discreción, y recuerda qué tu seguridad es la nuestra.
            </p>
        </div>
    </div>
</section>