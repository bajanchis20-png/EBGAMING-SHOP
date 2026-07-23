<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/logo.jpg";
    import Icon from "@iconify/svelte";

    let { children } = $props();
    let isMenuOpen = $state(false);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<!-- Header Flotante Futurista Gaming -->
<header class="sticky top-4 z-50 w-full px-4 sm:px-6">
    <nav class="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 py-3.5 bg-[#0a0f1d]/90 backdrop-blur-xl border border-yellow-600/30 shadow-[0_4px_25px_rgba(0,0,0,0.5),0_0_15px_rgba(202,138,4,0.1)] rounded-2xl lg:rounded-3xl relative transition-all duration-300">
        <div class="flex gap-6 lg:gap-8 text-white font-semibold uppercase items-center text-sm lg:text-base">
            <a href="/">
                <img class="rounded-full w-12 lg:w-16 border-2 border-blue-600/20 shadow-lg" src="/logofondox.png" alt="Logo"/>
            </a>
            <div class="hidden lg:flex gap-8 text-sm">
                <a href="/catalogo" class="hover:text-yellow-500 transition-colors">Catalogo</a>
                <a href="/items" class="hover:text-yellow-500 transition-colors">Items</a>
                <a href="/seguridad-garantia" class="hover:text-yellow-500 transition-colors">Seguridad</a>
                <a href="/metodos-de-pago" class="hover:text-yellow-500 transition-colors">Pagos</a>
                <a href="/albion-online" class="hover:text-yellow-500 transition-colors">Albion</a>
                <a href="/vista-previa" class="hover:text-yellow-500 transition-colors">Metin2.es</a>
            </div>
        </div>

        <!-- Botones de Escritorio -->
        <div class="hidden lg:flex items-center gap-4">
            <a href="/login" class="px-5 py-2 text-sm font-bold text-white border border-white/20 hover:border-yellow-500 hover:text-yellow-500 uppercase transition-all rounded-xl">
                Login
            </a>
            <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noreferrer" 
               class="flex items-center gap-2 px-5 py-2 text-sm font-bold uppercase text-black bg-gradient-to-r from-yellow-400 to-yellow-600 hover:shadow-lg hover:shadow-yellow-600/20 transition-all rounded-xl">
                <span>WhatsApp</span>
                <Icon height="20" icon="ic:baseline-whatsapp" width="20" />
            </a>
        </div>

        <!-- Botón Hamburguesa (Móvil) -->
        <div class="flex lg:hidden items-center gap-3">
            <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noreferrer" 
               class="p-2 text-black bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <Icon height="22" icon="ic:baseline-whatsapp" width="22" />
            </a>
            <button 
                onclick={() => isMenuOpen = !isMenuOpen}
                class="p-2 text-white bg-blue-900/40 border border-blue-900/50 rounded-lg focus:outline-none"
                aria-label="Abrir Menú"
            >
                <Icon height="26" icon={isMenuOpen ? "ic:baseline-close" : "ic:baseline-menu"} width="26" />
            </button>
        </div>

        <!-- Menú Desplegable Móvil Flotante -->
        {#if isMenuOpen}
            <div class="absolute top-[calc(100%+0.75rem)] left-0 w-full bg-[#0a0f1d] border border-yellow-600/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-2xl py-6 px-8 flex flex-col gap-4 lg:hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <a href="/catalogo" onclick={() => isMenuOpen = false} class="text-white font-semibold uppercase text-sm hover:text-yellow-500 transition-colors py-2 border-b border-blue-900/30">Catalogo</a>
                <a href="/items" onclick={() => isMenuOpen = false} class="text-white font-semibold uppercase text-sm hover:text-yellow-500 transition-colors py-2 border-b border-blue-900/30">Items</a>
                <a href="/seguridad-garantia" onclick={() => isMenuOpen = false} class="text-white font-semibold uppercase text-sm hover:text-yellow-500 transition-colors py-2 border-b border-blue-900/30">Seguridad</a>
                <a href="/metodos-de-pago" onclick={() => isMenuOpen = false} class="text-white font-semibold uppercase text-sm hover:text-yellow-500 transition-colors py-2 border-b border-blue-900/30">Pagos</a>
                <a href="/albion-online" onclick={() => isMenuOpen = false} class="text-white font-semibold uppercase text-sm hover:text-yellow-500 transition-colors py-2 border-b border-blue-900/30">Albion</a>
                <a href="/vista-previa" onclick={() => isMenuOpen = false} class="text-white font-semibold uppercase text-sm hover:text-yellow-500 transition-colors py-2 border-b border-blue-900/30">Metin2.es</a>
                
                <div class="pt-2">
                    <a href="/login" onclick={() => isMenuOpen = false} class="w-full text-center block px-5 py-3 text-sm font-bold text-white border border-white/20 hover:border-yellow-500 hover:text-yellow-500 uppercase transition-all rounded-xl">
                        Login
                    </a>
                </div>
            </div>
        {/if}
    </nav>
</header>

<main class="min-h-[70vh]">
    {@render children()}
</main>

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