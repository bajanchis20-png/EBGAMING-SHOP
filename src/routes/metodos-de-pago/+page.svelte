<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
    import Icon from "@iconify/svelte";

</script>
<div class="relative overflow-hidden">
    <video 
  src="video2.mp4" 
  autoplay 
  loop 
  muted 
  playsinline 
  class="absolute -z-10 top-0 left-0 w-full h-full object-cover opacity-30 shadow">
</video>

    <section class="flex items-center justify-center py-56  text-center">
        <div class="p-12">
          <div class="inline-flex items-center gap-2 px-6 py-2 border border-red-700 bg-red-950/30 text-red-700 font-extrabold tracking-widest uppercase shadow-[0_0_10px_rgba(239,68,68,0.5)] hover:shadow-[0_0_20px_rgba(239,68,68,0.8)] transition-all cursor-default">

  <span>Transacciones Seguras</span>
</div>
            <p class="text-5xl font-extrabold text-white text-center tracking-widest uppercase py-6 border-y border-white/10">
  PODER <span class="text-red-700 px-2 bg-red-950/20">TOTAL</span> 
  EN TUS <span class="font-black italic text-transparent bg-clip-text bg-gradient-to-t from-yellow-600 via-yellow-400 to-yellow-200 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)] uppercase tracking-wider">PAGOS</span>
</p>
            
               <p class="text-transparent bg-clip-text bg-gradient-to-r from-white to-white font-bold tracking-widest uppercase text-center shadow-lg">
    EQUIPATE CON LO MEJOR SIN ESPERAS, TUS ITEMS EN TIEMPO RECORD
</p>
        </div>
    
    
    </section>
    
    <section>
        <div>
        
      <p class="w-full text-center font-bold text-transparent bg-clip-text bg-gradient-to-t from-yellow-600 via-yellow-400 to-yellow-200 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)] uppercase tracking-widest">
    COBERTURA GLOBAL
</p>
            <p class="text-white font-extrabold text-5xl pb-7 tracking-tight text-center ">PAGOS POR <span class="text-red-700 font-black italic tracking-widest">PAIS</span></p>
        </div>
    
        <div class="pb-5 flex justify-items-center align-text px-20 bg-neutral-950/80 rounded-3xl gap max-w-7xl m-auto">
            <div class="flex-1 text-center">
               <Icon icon="logos:paypal" width={24} height={24} class="m-auto" />
                <p class="text-white">Paypal</p>
            </div>
            <div class="flex-1 text-center">
                <Icon icon="simple-icons:westernunion" width={24} height={24} class="text-white m-auto" />
                <p class="text-white">Western Union</p>
            </div>
            <div class="flex-1 text-center">
                <img src="/ria.webp" alt="" width={24} height={24} class="m-auto"/>
                <p class="text-white">Ria</p>
            </div>
            <div class="flex-1 text-center">
                 <Icon icon="token-branded:binance" width={24} height={24} class="m-auto" />
                <p class="text-white">Binance</p>
            </div>
        </div>
<div>
</div>
    </section>
</div>
