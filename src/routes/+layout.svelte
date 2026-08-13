<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/logo3.png";
    import Icon from "@iconify/svelte";

    let { children } = $props();
    let isMenuOpen = $state(false);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<!-- Contenedor raíz Mobile First -->
<div class="min-h-screen bg-[#0d0d0f] text-neutral-100 flex flex-col justify-between selection:bg-[#e60012] selection:text-white">

    <div>
        <!-- Header Flotante Mobile First -->
        <header class="sticky top-2 sm:top-4 z-50 w-full px-2 sm:px-6">
            <nav class="max-w-7xl mx-auto flex justify-between items-center px-3.5 py-3 sm:px-6 sm:py-3.5 bg-[#121216]/95 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl lg:rounded-3xl relative transition-all duration-300">
                
                <!-- Logo y enlaces de escritorio -->
                <div class="flex gap-4 lg:gap-8 text-neutral-200 font-semibold uppercase items-center text-sm lg:text-base">
                    <a href="/" class="group flex-shrink-0 flex items-center">
                        <div class="rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 overflow-hidden border-2 border-[#e60012]/40 group-hover:border-[#e60012] shadow-[0_0_15px_rgba(230,0,18,0.3)] transition-all flex items-center justify-center bg-black/60">
                            <img 
                                class="w-full h-full object-cover transform scale-125 [image-rendering:-webkit-optimize-contrast]" 
                                src="/logofondox.png" 
                                alt="Logo"
                                style="image-rendering: high-quality;"
                            />
                        </div>
                    </a>
                    
                    <!-- Navegación Desktop (Oculta en móviles) -->
                    <div class="hidden lg:flex gap-6 xl:gap-8 text-xs tracking-wider">
                        <a href="/catalogo" class="text-neutral-400 hover:text-[#e60012] transition-colors">Catálogo</a>
                        <a href="/items" class="text-neutral-400 hover:text-[#e60012] transition-colors">Items</a>
                        <a href="/seguridad-garantia" class="text-neutral-400 hover:text-[#e60012] transition-colors">Seguridad</a>
                        <a href="/metodos-de-pago" class="text-neutral-400 hover:text-[#e60012] transition-colors">Pagos</a>
                        <a href="/albion-online" class="text-neutral-400 hover:text-[#e60012] transition-colors">Albion</a>
                        <a href="/vista-previa" class="text-neutral-400 hover:text-[#e60012] transition-colors">Metin2.es</a>
                    </div>
                </div>

                <!-- Botones de Escritorio -->
                <div class="hidden lg:flex items-center gap-4">
                    <a href="/login" class="px-5 py-2 text-xs font-bold text-neutral-300 border border-white/10 hover:border-[#e60012] hover:text-[#e60012] uppercase tracking-wider transition-all rounded-xl bg-white/5">
                        Login
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noreferrer" 
                       class="flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#e60012] hover:bg-[#cc0010] shadow-[0_0_20px_rgba(230,0,18,0.4)] hover:shadow-[0_0_25px_rgba(230,0,18,0.6)] transition-all rounded-xl">
                        <span>WhatsApp</span>
                        <Icon height="18" icon="ic:baseline-whatsapp" width="18" />
                    </a>
                </div>

                <!-- Botones Móviles optimizados (Acceso Rápido + Hamburguesa) -->
                <div class="flex lg:hidden items-center gap-2">
                    <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noreferrer" 
                       class="p-2.5 text-white bg-[#e60012] shadow-[0_0_15px_rgba(230,0,18,0.4)] rounded-xl flex items-center justify-center transition-transform active:scale-95"
                       aria-label="Soporte WhatsApp">
                        <Icon height="22" icon="ic:baseline-whatsapp" width="22" />
                    </a>
                    <button 
                        onclick={() => isMenuOpen = !isMenuOpen}
                        class="p-2.5 text-neutral-200 bg-white/5 border border-white/10 rounded-xl focus:outline-none transition-all duration-300 ease-out hover:bg-white/15 active:scale-90"
                        aria-label="Abrir Menú"
                    >
                        <div class="transition-transform duration-300 ease-out {isMenuOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'}">
                            <Icon height="24" icon={isMenuOpen ? "ic:baseline-close" : "ic:baseline-menu"} width="24" />
                        </div>
                    </button>
                </div>

                <!-- Menú Desplegable Móvil Extremo -->
                {#if isMenuOpen}
                    <div class="absolute top-[calc(100%+0.5rem)] left-0 w-full bg-[#121216]/98 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] rounded-2xl py-5 px-5 flex flex-col gap-2 lg:hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <a href="/catalogo" onclick={() => isMenuOpen = false} class="text-neutral-300 font-semibold uppercase text-xs tracking-wider hover:text-[#e60012] transition-colors py-3 px-2 rounded-lg hover:bg-white/5 border-b border-white/5">Catálogo</a>
                        <a href="/items" onclick={() => isMenuOpen = false} class="text-neutral-300 font-semibold uppercase text-xs tracking-wider hover:text-[#e60012] transition-colors py-3 px-2 rounded-lg hover:bg-white/5 border-b border-white/5">Items</a>
                        <a href="/seguridad-garantia" onclick={() => isMenuOpen = false} class="text-neutral-300 font-semibold uppercase text-xs tracking-wider hover:text-[#e60012] transition-colors py-3 px-2 rounded-lg hover:bg-white/5 border-b border-white/5">Seguridad</a>
                        <a href="/metodos-de-pago" onclick={() => isMenuOpen = false} class="text-neutral-300 font-semibold uppercase text-xs tracking-wider hover:text-[#e60012] transition-colors py-3 px-2 rounded-lg hover:bg-white/5 border-b border-white/5">Pagos</a>
                        <a href="/albion-online" onclick={() => isMenuOpen = false} class="text-neutral-300 font-semibold uppercase text-xs tracking-wider hover:text-[#e60012] transition-colors py-3 px-2 rounded-lg hover:bg-white/5 border-b border-white/5">Albion</a>
                        <a href="/vista-previa" onclick={() => isMenuOpen = false} class="text-neutral-300 font-semibold uppercase text-xs tracking-wider hover:text-[#e60012] transition-colors py-3 px-2 rounded-lg hover:bg-white/5 border-b border-white/5">Metin2.es</a>
                        
                        <div class="pt-3">
                            <a href="/login" onclick={() => isMenuOpen = false} class="w-full text-center block py-3.5 text-xs font-bold text-neutral-200 border border-white/10 hover:border-[#e60012] hover:text-[#e60012] uppercase tracking-wider transition-all rounded-xl bg-white/5 active:scale-95">
                                Login
                            </a>
                        </div>
                    </div>
                {/if}
            </nav>
        </header>

        <main class="min-h-[70vh] overflow-x-hidden">
            {@render children()}
        </main>
    </div>

    <!-- Footer Mobile First -->
    <footer class="bg-[#121216] text-neutral-400 border-t border-white/10 mt-12 sm:mt-20 relative overflow-hidden">
        
        <!-- Línea superior de brillo rojo sutil -->
        <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#e60012] to-transparent opacity-50"></div>

        <!-- Franja superior de marca / contacto rápido -->
        <div class="bg-[#17171c] border-b border-white/5 py-6 px-4">
            <div class="max-w-7xl mx-auto flex flex-col items-center justify-center sm:justify-between gap-5 text-center sm:flex-row sm:text-left">
                <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                    <div class="rounded-full border border-white/10 shadow-md w-12 h-12 overflow-hidden flex-shrink-0 flex items-center justify-center bg-black/60">
                        <img 
                            class="w-full h-full object-cover transform scale-125 [image-rendering:-webkit-optimize-contrast]" 
                            src="/logofondox.png" 
                            alt="Logo Footer"
                            style="image-rendering: high-quality;"
                        />
                    </div>
                    <div>
                        <span class="text-base font-black tracking-wider uppercase text-white block">
                            EB<span class="text-[#e60012]">GAMING</span>
                        </span>
                        <p class="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-neutral-500">Plataforma de comercio digital</p>
                    </div>
                </div>

                <div class="w-full sm:w-auto flex justify-center">
                    <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noreferrer" 
                       class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#e60012] hover:bg-[#cc0010] shadow-[0_0_15px_rgba(230,0,18,0.3)] transition-all rounded-full active:scale-95">
                        <Icon height="16" icon="ic:baseline-whatsapp" width="16" />
                        <span>Soporte por WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Enlaces principales del footer en columnas responsivas -->
        <div class="max-w-7xl mx-auto px-4 py-8 sm:py-12">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                
                <!-- Columna 1 -->
                <div class="space-y-3">
                    <h5 class="text-xs font-bold uppercase tracking-wider text-white">Tienda</h5>
                    <ul class="space-y-2.5 text-xs font-semibold">
                        <li><a href="/catalogo" class="hover:text-[#e60012] transition-colors py-1 block">Catálogo General</a></li>
                        <li><a href="/items" class="hover:text-[#e60012] transition-colors py-1 block">Items Destacados</a></li>
                        <li><a href="/metodos-de-pago" class="hover:text-[#e60012] transition-colors py-1 block">Métodos de Pago</a></li>
                    </ul>
                </div>

                <!-- Columna 2 -->
                <div class="space-y-3">
                    <h5 class="text-xs font-bold uppercase tracking-wider text-white">Universos</h5>
                    <ul class="space-y-2.5 text-xs font-semibold">
                        <li><a href="/vista-previa" class="hover:text-[#e60012] transition-colors py-1 block">Metin2.es</a></li>
                        <li><a href="/albion-online" class="hover:text-[#e60012] transition-colors py-1 block">Albion Online</a></li>
                        <li><a href="/catalogo" class="hover:text-[#e60012] transition-colors py-1 block">Metin2 Guabina</a></li>
                    </ul>
                </div>

                <!-- Columna 3 -->
                <div class="space-y-3">
                    <h5 class="text-xs font-bold uppercase tracking-wider text-white">Soporte y Ayuda</h5>
                    <ul class="space-y-2.5 text-xs font-semibold">
                        <li><a href="/seguridad-garantia" class="hover:text-[#e60012] transition-colors py-1 block">Seguridad y Garantía</a></li>
                        <li><a href="/login" class="hover:text-[#e60012] transition-colors py-1 block">Mi Cuenta / Login</a></li>
                    </ul>
                </div>

                <!-- Columna 4 -->
                <div class="space-y-3 col-span-2 md:col-span-1">
                    <h5 class="text-xs font-bold uppercase tracking-wider text-white">Estado del servicio</h5>
                    <p class="text-[11px] text-neutral-500 leading-relaxed pt-1">
                        Transacciones blindadas y entregas directas seguras.
                    </p>
                </div>

            </div>

            <!-- Copyright y textos legales inferiores -->
            <div class="border-t border-white/5 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                <p class="text-[11px] text-neutral-500 font-medium leading-relaxed">
                    © {new Date().getFullYear()} EBGAMING SHOP. Todos los derechos reservados. Las marcas y logotipos pertenecen a sus respectivos dueños.
                </p>
                <div class="flex items-center gap-6 text-[11px] font-semibold text-neutral-400 flex-wrap justify-center">
                    <a href="/seguridad-garantia" class="hover:text-[#e60012] transition-colors py-1">Privacidad y Términos</a>
                    <a href="/metodos-de-pago" class="hover:text-[#e60012] transition-colors py-1">Políticas de Compra</a>
                </div>
            </div>

        </div>
    </footer>
</div>