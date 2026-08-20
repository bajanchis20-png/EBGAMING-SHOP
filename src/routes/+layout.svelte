<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/logo3.png";
    import Icon from "@iconify/svelte";

    let { children } = $props();
    let isMenuOpen = $state(false);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<!-- Contenedor raíz Estilo Rockstar Games -->
<div class="min-h-screen bg-[#050505] text-white flex flex-col justify-between selection:bg-[#ff0022] selection:text-white">

    <div>
        <!-- Navbar Flotante Transparente Extreme -->
        <header class="fixed top-2.5 left-2.5 right-2.5 sm:top-4 sm:left-6 sm:right-6 z-50">
            <nav class="max-w-7xl mx-auto bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.8)] px-3.5 sm:px-6 py-2.5 sm:py-3.5 flex justify-between items-center rounded-2xl transition-all duration-300">
                
                <!-- Logo y enlaces de escritorio -->
                <div class="flex items-center gap-4 lg:gap-8">
                    <a href="/" class="group flex items-center gap-2.5">
                        <div class="w-9 h-9 sm:w-11 sm:h-11 overflow-hidden border border-white/20 group-hover:border-[#ff0022] transition-all flex items-center justify-center bg-black/60 rounded-xl shadow-inner">
                            <img 
                                class="w-full h-full object-cover transform scale-125 [image-rendering:-webkit-optimize-contrast]" 
                                src="/logofondox.png" 
                                alt="Logo"
                                style="image-rendering: high-quality;"
                            />
                        </div>
                    </a>
                    
                    <!-- Navegación Desktop -->
                    <div class="hidden lg:flex items-center gap-4 xl:gap-6 text-xs font-bold uppercase tracking-widest text-neutral-200">
                        <a href="/catalogo" class="hover:text-[#ff0022] transition-colors drop-shadow-sm">Catálogo</a>
                        <a href="/items" class="hover:text-[#ff0022] transition-colors drop-shadow-sm">Items</a>
                        <a href="/seguridad-garantia" class="hover:text-[#ff0022] transition-colors drop-shadow-sm">Seguridad</a>
                        <a href="/metodos-de-pago" class="hover:text-[#ff0022] transition-colors drop-shadow-sm">Pagos</a>
                        <a href="/albion-online" class="hover:text-[#ff0022] transition-colors drop-shadow-sm">Albion</a>
                        <a href="/vista-previa" class="hover:text-[#ff0022] transition-colors drop-shadow-sm">Metin2.es</a>
                    </div>
                </div>

                <!-- Botones de Escritorio Derecha -->
                <div class="hidden lg:flex items-center gap-3">
                    <a href="/login" class="px-5 py-2 text-xs font-black text-white border border-white/20 hover:border-[#ff0022] hover:text-[#ff0022] uppercase tracking-widest transition-all bg-black/40 backdrop-blur-sm rounded-xl">
                        Login
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noreferrer" 
                       class="flex items-center gap-2 px-5 py-2 text-xs font-black uppercase tracking-widest text-white bg-[#ff0022] hover:bg-[#d9001d] shadow-lg transition-all rounded-xl">
                        <span>WhatsApp</span>
                        <Icon height="16" icon="ic:baseline-whatsapp" width="16" />
                    </a>
                </div>

                <!-- Botones Móviles Transparentes -->
                <div class="flex lg:hidden items-center gap-2">
                    <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noreferrer" 
                       class="w-9 h-9 text-white bg-[#ff0022] flex items-center justify-center transition-transform active:scale-95 shadow-md rounded-xl"
                       aria-label="Soporte WhatsApp">
                        <Icon height="18" icon="ic:baseline-whatsapp" width="18" />
                    </a>
                    <button 
                        onclick={() => isMenuOpen = !isMenuOpen}
                        class="w-9 h-9 text-white bg-black/50 border border-white/20 flex items-center justify-center focus:outline-none transition-all hover:bg-black/80 active:scale-90 rounded-xl backdrop-blur-sm"
                        aria-label="Abrir Menú"
                    >
                        <div class="transition-transform duration-300 ease-out {isMenuOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'}">
                            <Icon height="20" icon={isMenuOpen ? "ic:baseline-close" : "ic:baseline-menu"} width="20" />
                        </div>
                    </button>
                </div>
            </nav>

            <!-- Menú Desplegable Móvil Flotante Transparente -->
            {#if isMenuOpen}
                <div class="absolute top-[calc(100%+8px)] left-0 right-0 bg-black/85 backdrop-blur-2xl border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.95)] p-4 flex flex-col gap-1.5 lg:hidden z-50 rounded-2xl animate-in fade-in slide-in-from-top-3 duration-200">
                    <a href="/catalogo" onclick={() => isMenuOpen = false} class="text-white font-bold uppercase text-[11px] tracking-widest hover:text-[#ff0022] hover:bg-white/10 transition-all py-2.5 px-3 rounded-xl block">
                        Catálogo General
                    </a>
                    <a href="/items" onclick={() => isMenuOpen = false} class="text-white font-bold uppercase text-[11px] tracking-widest hover:text-[#ff0022] hover:bg-white/10 transition-all py-2.5 px-3 rounded-xl block">
                        Items Destacados
                    </a>
                    <a href="/seguridad-garantia" onclick={() => isMenuOpen = false} class="text-white font-bold uppercase text-[11px] tracking-widest hover:text-[#ff0022] hover:bg-white/10 transition-all py-2.5 px-3 rounded-xl block">
                        Seguridad y Garantía
                    </a>
                    <a href="/metodos-de-pago" onclick={() => isMenuOpen = false} class="text-white font-bold uppercase text-[11px] tracking-widest hover:text-[#ff0022] hover:bg-white/10 transition-all py-2.5 px-3 rounded-xl block">
                        Métodos de Pago
                    </a>
                    <a href="/albion-online" onclick={() => isMenuOpen = false} class="text-white font-bold uppercase text-[11px] tracking-widest hover:text-[#ff0022] hover:bg-white/10 transition-all py-2.5 px-3 rounded-xl block">
                        Albion Online
                    </a>
                    <a href="/vista-previa" onclick={() => isMenuOpen = false} class="text-white font-bold uppercase text-[11px] tracking-widest hover:text-[#ff0022] hover:bg-white/10 transition-all py-2.5 px-3 rounded-xl block">
                        Metin2.es
                    </a>
                    
                    <div class="pt-2 mt-1 border-t border-white/10 flex flex-col gap-2">
                        <a href="/login" onclick={() => isMenuOpen = false} class="w-full text-center block py-3 text-[11px] font-black text-white border border-white/20 hover:border-[#ff0022] uppercase tracking-widest transition-all bg-black/60 rounded-xl active:scale-95">
                            Mi Cuenta / Login
                        </a>
                    </div>
                </div>
            {/if}
        </header>

        <!-- ESPACIADO REDUCIDO: Cambiado a pt-14 sm:pt-16 para que pegue el contenido arriba de forma adecuada -->
        <main class="min-h-[70vh] overflow-x-hidden pt-14 sm:pt-16 px-0">
            {@render children()}
        </main>
    </div>

    <!-- Footer Estilo Rockstar -->
    <footer class="bg-[#0a0a0a] text-white border-t-2 border-[#ff0022] mt-12 sm:mt-20 relative overflow-hidden">
        
        <div class="bg-[#0f0f0f] border-b border-white/10 py-6 px-4 sm:px-6">
            <div class="max-w-7xl mx-auto flex flex-col items-center justify-center sm:justify-between gap-5 text-center sm:flex-row sm:text-left">
                <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                    <div class="border border-white/20 w-12 h-12 overflow-hidden flex-shrink-0 flex items-center justify-center bg-black rounded-lg">
                        <img 
                            class="w-full h-full object-cover transform scale-125 [image-rendering:-webkit-optimize-contrast]" 
                            src="/logofondox.png" 
                            alt="Logo Footer"
                            style="image-rendering: high-quality;"
                        />
                    </div>
                    <div>
                        <span class="text-base font-black tracking-widest uppercase text-white block">
                            EB<span class="text-[#ff0022]">GAMING</span>
                        </span>
                        <p class="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-neutral-400">Plataforma de comercio digital</p>
                    </div>
                </div>

                <div class="w-full sm:w-auto flex justify-center">
                    <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noreferrer" 
                       class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-black uppercase tracking-widest text-white bg-[#ff0022] hover:bg-[#d9001d] transition-all active:scale-95 shadow-md rounded-full">
                        <Icon height="16" icon="ic:baseline-whatsapp" width="16" />
                        <span>Soporte por WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                <div class="space-y-3">
                    <h5 class="text-xs font-black uppercase tracking-widest text-white">Tienda</h5>
                    <ul class="space-y-2 text-xs font-bold uppercase tracking-wider text-neutral-300">
                        <li><a href="/catalogo" class="hover:text-[#ff0022] transition-colors py-1 block">Catálogo General</a></li>
                        <li><a href="/items" class="hover:text-[#ff0022] transition-colors py-1 block">Items Destacados</a></li>
                        <li><a href="/metodos-de-pago" class="hover:text-[#ff0022] transition-colors py-1 block">Métodos de Pago</a></li>
                    </ul>
                </div>

                <div class="space-y-3">
                    <h5 class="text-xs font-black uppercase tracking-widest text-white">Universos</h5>
                    <ul class="space-y-2 text-xs font-bold uppercase tracking-wider text-neutral-300">
                        <li><a href="/vista-previa" class="hover:text-[#ff0022] transition-colors py-1 block">Metin2.es</a></li>
                        <li><a href="/albion-online" class="hover:text-[#ff0022] transition-colors py-1 block">Albion Online</a></li>
                        <li><a href="/catalogo" class="hover:text-[#ff0022] transition-colors py-1 block">Metin2 Guabina</a></li>
                    </ul>
                </div>

                <div class="space-y-3">
                    <h5 class="text-xs font-black uppercase tracking-widest text-white">Soporte y Ayuda</h5>
                    <ul class="space-y-2 text-xs font-bold uppercase tracking-wider text-neutral-300">
                        <li><a href="/seguridad-garantia" class="hover:text-[#ff0022] transition-colors py-1 block">Seguridad y Garantía</a></li>
                        <li><a href="/login" class="hover:text-[#ff0022] transition-colors py-1 block">Mi Cuenta / Login</a></li>
                    </ul>
                </div>

                <div class="space-y-3 col-span-2 md:col-span-1">
                    <h5 class="text-xs font-black uppercase tracking-widest text-white">Estado del servicio</h5>
                    <p class="text-[11px] font-bold uppercase text-neutral-400 leading-relaxed pt-1">
                        Transacciones blindadas y entregas directas seguras.
                    </p>
                </div>
            </div>

            <div class="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                <p class="text-[11px] font-bold uppercase tracking-wider text-neutral-400 leading-relaxed">
                    © {new Date().getFullYear()} EBGAMING SHOP. Todos los derechos reservados.
                </p>
                <div class="flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-white flex-wrap justify-center">
                    <a href="/seguridad-garantia" class="hover:text-[#ff0022] transition-colors py-1">Privacidad y Términos</a>
                    <a href="/metodos-de-pago" class="hover:text-[#ff0022] transition-colors py-1">Políticas de Compra</a>
                </div>
            </div>
        </div>
    </footer>
</div>