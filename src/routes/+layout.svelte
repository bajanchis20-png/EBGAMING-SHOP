<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/logo.jpg";
    import Icon from "@iconify/svelte";

    let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="flex justify-between items-center px-8 lg:px-16 py-4 bg-[#0a0f1d] border-b border-yellow-600/30 shadow-[0_2px_15px_rgba(0,0,0,0.3)]">
    <div class="flex gap-6 lg:gap-8 text-white font-semibold uppercase items-center text-sm lg:text-base">
        <a href="/">
            <img class="rounded-full w-16 lg:w-20 border-2 border-blue-600/20" src="/logofondox.png" alt="Logo"/>
        </a>
        <div class="hidden lg:flex gap-8">
            <a href="/catalogo" class="hover:text-yellow-500 transition-colors">Catalogo</a>
            <a href="/items" class="hover:text-yellow-500 transition-colors">Items</a>
            <a href="/seguridad-garantia" class="hover:text-yellow-500 transition-colors">Seguridad</a>
            <a href="/metodos-de-pago" class="hover:text-yellow-500 transition-colors">Pagos</a>
            <a href="/albion-online" class="hover:text-yellow-500 transition-colors">Albion</a>
            <a href="/vista-previa" class="hover:text-yellow-500 transition-colors">Metin2.es</a>
            
        </div>
    </div>

    <div class="flex items-center gap-4">
        <a href="/login" class="px-5 py-2 text-sm font-bold text-white border border-white/20 hover:border-yellow-500 hover:text-yellow-500 uppercase transition-all">
            Login
        </a>
        <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noreferrer" 
           class="flex items-center gap-2 px-5 py-2 text-sm font-bold uppercase text-black bg-gradient-to-r from-yellow-400 to-yellow-600 hover:shadow-lg hover:shadow-yellow-600/20 transition-all">
            <span>WhatsApp</span>
            <Icon icon="ic:baseline-whatsapp" width={20} height={20} />
        </a>
        
    </div>
</nav>

{@render children()}

<footer class="bg-[#05070d] py-16 border-t border-blue-900/30">
    <div class="flex flex-col items-center justify-center gap-4">
        <img class="rounded-full border border-blue-600/10" src="/logofondox.png" width="64" alt="Logo Footer" />
        <p class="font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-yellow-700 via-yellow-500 to-yellow-200 uppercase tracking-[0.2em]">
            EBGAMING SHOP
        </p>
        <p class="text-blue-400/60 font-bold uppercase tracking-[0.2em] text-[10px] mt-6">
            Comunidad y Referencias Verificadas | Seguridad Garantizada
        </p>
    </div>
</footer>