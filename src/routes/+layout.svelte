<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";
    import Icon from "@iconify/svelte";

    let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="flex justify-between items-center px-8 lg:px-16 py-4 bg-black border-b-2 border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.2)]">
    <div class="flex gap-6 lg:gap-8 text-white font-semibold uppercase items-center text-sm lg:text-base">
        <a href="/">
            <img class="rounded-full w-16 lg:w-20" src="/logofondox.png" alt="Logo"/>
        </a>
        <div class="hidden lg:flex gap-6">
            <a href="/catalogo" class="hover:text-red-500 transition-colors">Catalogo</a>
            <a href="/items" class="hover:text-red-500 transition-colors">Items</a>
            <a href="/seguridad-garantia" class="hover:text-red-500 transition-colors">Seguridad</a>
            <a href="/metodos-de-pago" class="hover:text-red-500 transition-colors">Pagos</a>
            <a href="/albion-online" class="hover:text-red-500 transition-colors">Albion</a>
            <a href="/vista-previa" class="hover:text-red-500 transition-colors">Metin2.es</a>
           
        </div>
    </div>

    <div class="flex items-center gap-4">
        <a href="/login" class="px-5 py-2 text-sm font-bold text-red-500 border border-red-500 uppercase transition-all hover:bg-red-600 hover:text-white">
            Login
        </a>
        <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" 
           class="flex items-center gap-2 px-5 py-2 text-sm font-bold uppercase text-white bg-red-600 transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-900/20">
            <span>WhatsApp</span>
            <Icon icon="ic:baseline-whatsapp" width={20} height={20} />
        </a>
    </div>
</nav>

{@render children()}

<footer class="bg-black py-16 border-t border-red-900/50">
    <div class="flex flex-col items-center justify-center gap-4">
        <img class="rounded-full" src="/logofondox.png" width="64" alt="Logo Footer" />
        <p class="font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-red-800 via-red-500 to-red-200 uppercase tracking-[0.2em]">
            EBGAMING SHOP
        </p>
        <p class="text-neutral-600 font-bold uppercase tracking-[0.2em] text-[10px] mt-6">
            Comunidad y Referencias Verificadas
        </p>
    </div>
</footer>