<script>
    import Icon from "@iconify/svelte";

</script>
<div class="relative overflow-hidden">
    <img src="/imagendepagos.jpg" alt=""class="absolute -z-10 top-0 left-0 w-full opacity-30 shadow" />

    <section class="flex items-center justify-center py-56  text-center">
        <div class="p-12">
            <p class="text-red-500 border-red-500 border font-extrabold inline">TRANSSACCIONES SEGURAS</p>
            <p class="text-5xl text-white font-extrabold pb-5 tracking-wides text-center">PODER <span class="text-red-500">TOTAL</span> EN TUS <span class="text-red-500">PAGOS</span></p>
            
            <p class="text-white justify-center font-bold">
                Equipate con lo mejor sin esperas. nuestro ecosistema de pagos esta
                diseñado para la maxima velocidad, garatizando que tus activos
                lleguen a tu inventario en tiempo record.
            </p>
        </div>
    
    
    </section>
    
    <section>
        <div>
        
            <p class="text-amber-300 font-extrabold pb-5 -tracking-widest text-center">COBERTURA GLOBAL</p>
            
            <p class="text-white font-extrabold text-5xl pb-5 -tracking-widest text-center ">PAGOS POR <span class="text-red-500">PAIS</span></p>
        </div>
    
        <div class="flex justify-items-center align-text px-20 bg-neutral-950/50 rounded-3xl gap max-w-7xl m-auto">
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
    </section>
</div>
