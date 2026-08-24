<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/logo3.png";
    import Icon from "@iconify/svelte";

    let { children } = $props();
    let isMenuOpen = $state(false);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<!-- Contenedor raíz unificado -->
<div class="min-h-screen bg-[#0a0a0c] text-white flex flex-col justify-between selection:bg-orange-600 selection:text-white font-sans">

    <div>
        <!-- Navbar Flotante Glassmorphism Limpio -->
        <header class="fixed top-3 left-3 right-3 sm:top-5 sm:left-8 sm:right-8 z-50">
            <nav class="max-w-7xl mx-auto bg-[#121216]/85 backdrop-blur-xl border border-white/10 shadow-2xl px-4 sm:px-6 py-3 flex justify-between items-center rounded-2xl transition-all duration-300">
                
                <!-- Logo y enlaces de escritorio -->
                <div class="flex items-center gap-6 lg:gap-10">
                    <a href="/" class="group flex items-center gap-2.5">
                        <img 
                            class="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105" 
                            src="/eblogo3.png" 
                            alt="EB Logo"
                        />
                    </a>
                    
                    <!-- Navegación Desktop Sutil y Limpia -->
                    <div class="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-neutral-300">
                        <a href="/catalogo" class="hover:text-white transition-colors">Catálogo</a>
                        <a href="/items" class="hover:text-white transition-colors">Items</a>
                        <a href="/seguridad-garantia" class="hover:text-white transition-colors">Seguridad</a>
                        <a href="/metodos-de-pago" class="hover:text-white transition-colors">Pagos</a>
                        <a href="/albion-online" class="hover:text-white transition-colors">Albion</a>
                        <a href="/vista-previa" class="hover:text-white transition-colors">Metin2.es</a>
                    </div>
                </div>

                <!-- Botones de Escritorio Derecha (Todos con estilo Login) -->
                <div class="hidden lg:flex items-center gap-3">
                    <a href="/login" class="px-5 py-2.5 text-xs font-semibold text-white border border-white/10 hover:border-white/30 uppercase tracking-wider transition-all bg-white/5 backdrop-blur-sm rounded-xl">
                        Login
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noreferrer" 
                       class="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white border border-white/10 hover:border-white/30 uppercase tracking-wider transition-all bg-white/5 backdrop-blur-sm rounded-xl">
                        <span>WhatsApp</span>
                        <Icon height="16" icon="ic:baseline-whatsapp" width="16" />
                    </a>
                </div>

                <!-- Botones Móviles -->
                <div class="flex lg:hidden items-center gap-2.5">
                    <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noreferrer" 
                       class="w-10 h-10 text-white bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-white/10 active:scale-95 backdrop-blur-sm rounded-xl"
                       aria-label="Soporte WhatsApp">
                        <Icon height="18" icon="ic:baseline-whatsapp" width="18" />
                    </a>
                    <button 
                        onclick={() => isMenuOpen = !isMenuOpen}
                        class="w-10 h-10 text-white bg-white/5 border border-white/10 flex items-center justify-center focus:outline-none transition-all hover:bg-white/10 active:scale-90 rounded-xl backdrop-blur-sm"
                        aria-label="Abrir Menú"
                    >
                        <div class="transition-transform duration-300 ease-out {isMenuOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'}">
                            <Icon height="20" icon={isMenuOpen ? "ic:baseline-close" : "ic:baseline-menu"} width="20" />
                        </div>
                    </button>
                </div>
            </nav>

            <!-- Menú Desplegable Móvil Flotante -->
            {#if isMenuOpen}
                <div class="absolute top-[calc(100%+10px)] left-0 right-0 bg-[#121216]/95 backdrop-blur-2xl border border-white/10 shadow-2xl p-4 flex flex-col gap-1 lg:hidden z-50 rounded-2xl animate-in fade-in slide-in-from-top-3 duration-200">
                    <a href="/catalogo" onclick={() => isMenuOpen = false} class="text-neutral-300 hover:text-white font-semibold uppercase text-xs tracking-wider hover:bg-white/5 transition-all py-3 px-4 rounded-xl block">
                        Catálogo General
                    </a>
                    <a href="/items" onclick={() => isMenuOpen = false} class="text-neutral-300 hover:text-white font-semibold uppercase text-xs tracking-wider hover:bg-white/5 transition-all py-3 px-4 rounded-xl block">
                        Items Destacados
                    </a>
                    <a href="/seguridad-garantia" onclick={() => isMenuOpen = false} class="text-neutral-300 hover:text-white font-semibold uppercase text-xs tracking-wider hover:bg-white/5 transition-all py-3 px-4 rounded-xl block">
                        Seguridad y Garantía
                    </a>
                    <a href="/metodos-de-pago" onclick={() => isMenuOpen = false} class="text-neutral-300 hover:text-white font-semibold uppercase text-xs tracking-wider hover:bg-white/5 transition-all py-3 px-4 rounded-xl block">
                        Métodos de Pago
                    </a>
                    <a href="/albion-online" onclick={() => isMenuOpen = false} class="text-neutral-300 hover:text-white font-semibold uppercase text-xs tracking-wider hover:bg-white/5 transition-all py-3 px-4 rounded-xl block">
                        Albion Online
                    </a>
                    <a href="/vista-previa" onclick={() => isMenuOpen = false} class="text-neutral-300 hover:text-white font-semibold uppercase text-xs tracking-wider hover:bg-white/5 transition-all py-3 px-4 rounded-xl block">
                        Metin2.es
                    </a>
                    
                    <div class="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                        <a href="/login" onclick={() => isMenuOpen = false} class="w-full text-center block py-3 text-xs font-semibold text-white border border-white/10 hover:border-white/30 uppercase tracking-wider transition-all bg-white/5 rounded-xl active:scale-95">
                            Mi Cuenta / Login
                        </a>
                    </div>
                </div>
            {/if}
        </header>

        <!-- Espaciado fluido superior -->
        <main class="min-h-[70vh] overflow-x-hidden pt-20 sm:pt-24 px-0">
            {@render children()}
        </main>
    </div>

    <!-- Footer Modernizado y Elegante -->
    <footer class="bg-[#0c0c0e] text-white border-t border-white/10 mt-24 relative overflow-hidden">
        
        <!-- Franja superior del Footer -->
        <div class="bg-[#121216]/50 border-b border-white/5 py-8 px-6">
            <div class="max-w-7xl mx-auto flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
                <div class="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <img 
                        class="h-9 w-auto object-contain" 
                        src="/eblogo3.png" 
                        alt="EB Logo Footer"
                    />
                    <div>
                        <p class="text-[11px] font-medium tracking-wider text-neutral-400">Plataforma de comercio digital</p>
                    </div>
                </div>

                <div class="w-full sm:w-auto flex justify-center">
                    <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noreferrer" 
                       class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white border border-white/10 hover:border-white/30 uppercase tracking-wider transition-all bg-white/5 backdrop-blur-sm rounded-xl">
                        <Icon height="16" icon="ic:baseline-whatsapp" width="16" />
                        <span>Soporte por WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Enlaces principales del Footer -->
        <div class="max-w-7xl mx-auto px-6 py-12">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div class="space-y-4">
                    <h5 class="text-xs font-bold uppercase tracking-wider text-white">Tienda</h5>
                    <ul class="space-y-2.5 text-xs font-medium text-neutral-400">
                        <li><a href="/catalogo" class="hover:text-white transition-colors block">Catálogo General</a></li>
                        <li><a href="/items" class="hover:text-white transition-colors block">Items Destacados</a></li>
                        <li><a href="/metodos-de-pago" class="hover:text-white transition-colors block">Métodos de Pago</a></li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h5 class="text-xs font-bold uppercase tracking-wider text-white">Universos</h5>
                    <ul class="space-y-2.5 text-xs font-medium text-neutral-400">
                        <li><a href="/vista-previa" class="hover:text-white transition-colors block">Metin2.es</a></li>
                        <li><a href="/albion-online" class="hover:text-white transition-colors block">Albion Online</a></li>
                        <li><a href="/catalogo" class="hover:text-white transition-colors block">Metin2 Guabina</a></li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h5 class="text-xs font-bold uppercase tracking-wider text-white">Soporte</h5>
                    <ul class="space-y-2.5 text-xs font-medium text-neutral-400">
                        <li><a href="/seguridad-garantia" class="hover:text-white transition-colors block">Seguridad y Garantía</a></li>
                        <li><a href="/login" class="hover:text-white transition-colors block">Mi Cuenta / Login</a></li>
                    </ul>
                </div>

                <div class="space-y-4 col-span-2 md:col-span-1">
                    <h5 class="text-xs font-bold uppercase tracking-wider text-white">Estado</h5>
                    <p class="text-xs font-medium text-neutral-400 leading-relaxed">
                        Transacciones blindadas y entregas directas seguras 24/7.
                    </p>
                </div>
            </div>

            <!-- Copyright y Términos -->
            <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                <p class="text-xs font-medium text-neutral-500 tracking-wider">
                    © {new Date().getFullYear()} EBGAMING SHOP. Todos los derechos reservados.
                </p>
                <div class="flex items-center gap-6 text-xs font-medium text-neutral-400 flex-wrap justify-center">
                    <a href="/seguridad-garantia" class="hover:text-white transition-colors">Privacidad y Términos</a>
                    <a href="/metodos-de-pago" class="hover:text-white transition-colors">Políticas de Compra</a>
                </div>
            </div>
        </div>
    </footer>
</div>