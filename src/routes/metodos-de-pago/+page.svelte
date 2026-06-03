<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
    import Icon from "@iconify/svelte";

</script>
<div class="relative overflow-hidden">
    <img src="/imagendepagos.jpg" alt=""class="absolute -z-10 top-0 left-0 w-full opacity-30 shadow" />

    <section class="flex items-center justify-center py-56  text-center">
        <div class="p-12">
            <p class="text-red-500 border-red-500 border font-extrabold inline">TRANSACCIONES SEGURAS</p>
            <p class="text-5xl text-white font-extrabold pb-5 tracking-wides text-center">PODER <span class="text-red-500">TOTAL</span> EN TUS <span class="text-red-500">PAGOS</span></p>
            
               <p class="text-transparent bg-clip-text bg-gradient-to-r from-white to-white font-bold tracking-widest uppercase text-center shadow-lg">
    EQUIPATE CON LO MEJOR SIN ESPERAS, TUS ITEMS EN TIEMPO RECORD
</p>
        </div>
    
    
    </section>
    
    <section>
        <div>
        
            <p class="text-amber-300 font-bold pb-1 -tracking-widest text-center">COBERTURA GLOBAL</p>
            
            <p class="text-white font-extrabold text-5xl pb-7 -tracking-widest text-center ">PAGOS POR <span class="text-red-500">PAIS</span></p>
        </div>
    
        <div class="pb-5 flex justify-items-center align-text px-20 bg-neutral-950/50 rounded-3xl gap max-w-7xl m-auto">
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
