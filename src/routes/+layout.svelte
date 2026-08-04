<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/logo3.png";
    import Icon from "@iconify/svelte";

    let { children } = $props();
    let isMenuOpen = $state(false);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<!-- Header Flotante Estilo Nintendo eShop (Blanco, Rojo y Gris Claro) -->
<header class="sticky top-4 z-50 w-full px-4 sm:px-6">
    <nav class="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 py-3.5 bg-white/90 backdrop-blur-xl border border-neutral-200 shadow-[0_4px_25px_rgba(0,0,0,0.08)] rounded-2xl lg:rounded-3xl relative transition-all duration-300">
        <div class="flex gap-6 lg:gap-8 text-neutral-900 font-semibold uppercase items-center text-sm lg:text-base">
            <a href="/">
                <img class="rounded-full w-12 lg:w-16 border-2 border-red-500/20 shadow-sm" src="/logofondox.png" alt="Logo"/>
            </a>
            <div class="hidden lg:flex gap-8 text-sm">
                <a href="/catalogo" class="hover:text-[#e60012] transition-colors">Catalogo</a>
                <a href="/items" class="hover:text-[#e60012] transition-colors">Items</a>
                <a href="/seguridad-garantia" class="hover:text-[#e60012] transition-colors">Seguridad</a>
                <a href="/metodos-de-pago" class="hover:text-[#e60012] transition-colors">Pagos</a>
                <a href="/albion-online" class="hover:text-[#e60012] transition-colors">Albion</a>
                <a href="/vista-previa" class="hover:text-[#e60012] transition-colors">Metin2.es</a>
            </div>
        </div>

        <!-- Botones de Escritorio -->
        <div class="hidden lg:flex items-center gap-4">
            <a href="/login" class="px-5 py-2 text-sm font-bold text-neutral-900 border border-neutral-300 hover:border-[#e60012] hover:text-[#e60012] uppercase transition-all rounded-xl">
                Login
            </a>
            <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noreferrer" 
               class="flex items-center gap-2 px-5 py-2 text-sm font-bold uppercase text-white bg-[#e60012] hover:bg-[#cc0010] hover:shadow-lg hover:shadow-red-600/20 transition-all rounded-xl">
                <span>WhatsApp</span>
                <Icon height="20" icon="ic:baseline-whatsapp" width="20" />
            </a>
        </div>

        <!-- Botón Hamburguesa (Móvil) -->
        <div class="flex lg:hidden items-center gap-3">
            <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noreferrer" 
               class="p-2 text-white bg-[#e60012] rounded-lg flex items-center justify-center">
                <Icon height="22" icon="ic:baseline-whatsapp" width="22" />
            </a>
            <button 
                onclick={() => isMenuOpen = !isMenuOpen}
                class="p-2 text-neutral-900 bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none"
                aria-label="Abrir Menú"
            >
                <Icon height="26" icon={isMenuOpen ? "ic:baseline-close" : "ic:baseline-menu"} width="26" />
            </button>
        </div>

        <!-- Menú Desplegable Móvil Flotante -->
        {#if isMenuOpen}
            <div class="absolute top-[calc(100%+0.75rem)] left-0 w-full bg-white border border-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-2xl py-6 px-8 flex flex-col gap-4 lg:hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <a href="/catalogo" onclick={() => isMenuOpen = false} class="text-neutral-900 font-semibold uppercase text-sm hover:text-[#e60012] transition-colors py-2 border-b border-neutral-100">Catalogo</a>
                <a href="/items" onclick={() => isMenuOpen = false} class="text-neutral-900 font-semibold uppercase text-sm hover:text-[#e60012] transition-colors py-2 border-b border-neutral-100">Items</a>
                <a href="/seguridad-garantia" onclick={() => isMenuOpen = false} class="text-neutral-900 font-semibold uppercase text-sm hover:text-[#e60012] transition-colors py-2 border-b border-neutral-100">Seguridad</a>
                <a href="/metodos-de-pago" onclick={() => isMenuOpen = false} class="text-neutral-900 font-semibold uppercase text-sm hover:text-[#e60012] transition-colors py-2 border-b border-neutral-100">Pagos</a>
                <a href="/albion-online" onclick={() => isMenuOpen = false} class="text-neutral-900 font-semibold uppercase text-sm hover:text-[#e60012] transition-colors py-2 border-b border-neutral-100">Albion</a>
                <a href="/vista-previa" onclick={() => isMenuOpen = false} class="text-neutral-900 font-semibold uppercase text-sm hover:text-[#e60012] transition-colors py-2 border-b border-neutral-100">Metin2.es</a>
                
                <div class="pt-2">
                    <a href="/login" onclick={() => isMenuOpen = false} class="w-full text-center block px-5 py-3 text-sm font-bold text-neutral-900 border border-neutral-300 hover:border-[#e60012] hover:text-[#e60012] uppercase transition-all rounded-xl">
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

<footer class="bg-white py-16 border-t border-neutral-200">
    <div class="flex flex-col items-center justify-center gap-4">
        <img class="rounded-full border border-neutral-200 shadow-sm" src="/logofondox.png" width="64" alt="Logo Footer" />
        <p class="font-extrabold text-neutral-900 uppercase tracking-[0.2em]">
            EBGAMING SHOP
        </p>
        <p class="text-neutral-500 font-bold uppercase tracking-[0.2em] text-[10px] mt-6">
            Comunidad y Referencias Verificadas | Seguridad Garantizada
        </p>
    </div>
</footer>