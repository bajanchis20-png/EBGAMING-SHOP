<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
    import Icon from "@iconify/svelte";
    import { db } from "$lib/firebase"; 
    import { collection, addDoc } from "firebase/firestore"; 

    let nombre = "";
    let pedido = "";

    function enviarPedido() {
        if (!nombre || !pedido) return;
        window.open(`https://api.whatsapp.com/send/?phone=584149430559&text=Hola,%20soy%20${encodeURIComponent(nombre)}%20y%20quiero%20pedir:%20${encodeURIComponent(pedido)}`);
    }
</script>

<!-- Hero Section (Estilo Nintendo Moderno - Blanco y Rojo) -->
<section class="relative w-full bg-[#f4f4f6] py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden border-b border-neutral-300">
    <!-- Fondo sutil con toque geométrico limpio -->
    <div class="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <video autoplay loop muted playsinline class="w-full h-full object-cover grayscale contrast-125">
            <source src="/videonewfinal2.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-t from-[#f4f4f6] via-[#f4f4f6]/80 to-transparent"></div>
    </div>

    <!-- Contenido Principal Estilo Tienda Digital -->
    <div class="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
        <div class="space-y-5 sm:space-y-6 max-w-2xl text-center lg:text-left w-full">
            <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 uppercase tracking-tight leading-[1.1] sm:leading-[1.05]">
                Equípate como un 
                <span class="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-700 italic">
                    Dios del Reino
                </span>
            </h1>
            
            <p class="text-neutral-600 font-bold tracking-wider uppercase text-xs sm:text-sm leading-relaxed max-w-xl mx-auto lg:mx-0">
                Domina cada rincón con items de élite. Seguridad absoluta, transacciones blindadas y entrega inmediata en Metin2 Guabina, Metin2.es & Albion Online.
            </p>

            <!-- Botones de Acción Rápida optimizados para móviles -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4 w-full">
                <a href="/catalogo" class="w-full sm:w-auto px-6 sm:px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase text-xs tracking-widest rounded-2xl shadow-lg transition-all text-center">
                    Ver Catálogo
                </a>
                <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,%20estoy%20interesado%20en%20recibir%20asesoría%20sobre%20tus%20artículos" target="_blank" rel="noreferrer" class="w-full sm:w-auto px-6 sm:px-8 py-4 bg-white hover:bg-neutral-100 text-neutral-900 border-2 border-neutral-300 font-black uppercase text-xs tracking-widest rounded-2xl transition-all text-center">
                    Consultar Asesoría
                </a>
            </div>
        </div>

        <!-- Contenedor de las Tres Tarjetas Interactivas / Banners Destacados -->
        <div class="w-full max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <!-- Tarjeta 1: Pack Guabina -->
            <div class="w-full bg-white/90 backdrop-blur-md p-4 rounded-3xl border border-neutral-200 shadow-2xl relative group">
                <div class="absolute -top-3 right-3 bg-red-600 text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md">
                    Guabina 🔥
                </div>
                <div class="space-y-3">
                    <div class="w-full h-24 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 relative flex items-center justify-center">
                        <video autoplay loop muted playsinline class="w-full h-full object-cover opacity-90">
                            <source src="/video3.mp4" type="video/mp4" />
                        </video>
                        <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                    </div>
                    <div>
                        <h3 class="text-neutral-900 font-black text-xs uppercase tracking-wider">Pack Metin2 Guabina</h3>
                        <p class="text-[10px] text-neutral-500 font-bold uppercase mt-0.5">Entrega inmediata</p>
                    </div>
                    <div class="pt-2 flex items-center justify-between border-t border-neutral-200">
                        <span class="text-[9px] text-red-600 font-black uppercase tracking-widest">Stock</span>
                        <a href="/catalogo" class="text-[10px] text-neutral-900 font-black underline uppercase hover:text-red-600 transition-colors py-1">
                            Comprar →
                        </a>
                    </div>
                </div>
            </div>

            <!-- Tarjeta 2: Pack Metin2.es -->
            <div class="w-full bg-white/90 backdrop-blur-md p-4 rounded-3xl border border-neutral-200 shadow-2xl relative group">
                <div class="absolute -top-3 right-3 bg-rose-600 text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md">
                    Metin2.es ⚔️
                </div>
                <div class="space-y-3">
                    <div class="w-full h-24 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 relative flex items-center justify-center">
                        <video autoplay loop muted playsinline class="w-full h-full object-cover opacity-90">
                            <source src="/calidad.mp4" type="video/mp4" />
                        </video>
                        <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                    </div>
                    <div>
                        <h3 class="text-neutral-900 font-black text-xs uppercase tracking-wider">Pack Metin2.es</h3>
                        <p class="text-[10px] text-neutral-500 font-bold uppercase mt-0.5">Oficial y seguro</p>
                    </div>
                    <div class="pt-2 flex items-center justify-between border-t border-neutral-200">
                        <span class="text-[9px] text-red-600 font-black uppercase tracking-widest">Stock</span>
                        <a href="/vista-previa" class="text-[10px] text-neutral-900 font-black underline uppercase hover:text-red-600 transition-colors py-1">
                            Comprar →
                        </a>
                    </div>
                </div>
            </div>

            <!-- Tarjeta 3: Pack Albion Online -->
            <div class="w-full bg-white/90 backdrop-blur-md p-4 rounded-3xl border border-neutral-200 shadow-2xl relative group">
                <div class="absolute -top-3 right-3 bg-neutral-900 text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md">
                    Albion 🛡️
                </div>
                <div class="space-y-3">
                    <div class="w-full h-24 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 relative flex items-center justify-center">
                        <video autoplay loop muted playsinline class="w-full h-full object-cover opacity-90">
                            <source src="/video5.mp4" type="video/mp4" />
                        </video>
                        <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                    </div>
                    <div>
                        <h3 class="text-neutral-900 font-black text-xs uppercase tracking-wider">Pack Albion</h3>
                        <p class="text-[10px] text-neutral-500 font-bold uppercase mt-0.5">Plata & Items</p>
                    </div>
                    <div class="pt-2 flex items-center justify-between border-t border-neutral-200">
                        <span class="text-[9px] text-red-600 font-black uppercase tracking-widest">Stock</span>
                        <a href="/albion-online" class="text-[10px] text-neutral-900 font-black underline uppercase hover:text-red-600 transition-colors py-1">
                            Comprar →
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- Sección de Formulario de Pedido (Estilo Eshop Tarjetas Limpias) -->
<section class="py-16 sm:py-24 bg-white relative overflow-hidden">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-10 sm:mb-16">
            <h3 class="text-2xl sm:text-3xl md:text-5xl font-black text-neutral-900 uppercase tracking-tight">
                Haz tu pedido <span class="text-red-600 italic">Exprés</span>
            </h3>
        </div>

        <form on:submit|preventDefault={enviarPedido} class="bg-[#f9f9fb] p-6 sm:p-8 md:p-12 rounded-3xl border border-neutral-200 shadow-2xl space-y-5 sm:space-y-6">
            <div>
                <label class="block text-neutral-700 text-xs font-bold uppercase tracking-wider mb-2">Tu Nombre / Personaje</label>
                <input bind:value={nombre} placeholder="Ej: Carlos Silva" required 
                       class="w-full bg-white border border-neutral-300 p-3.5 sm:p-4 text-neutral-900 rounded-2xl placeholder:text-neutral-400 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all text-sm font-bold" />
            </div>

            <div>
                <label class="block text-neutral-700 text-xs font-bold uppercase tracking-wider mb-2">Detalles del Pedido</label>
                <textarea bind:value={pedido} placeholder="Describe los items que necesitas (Guabina, .es o Albion...)" required 
                      class="w-full bg-white border border-neutral-300 p-3.5 sm:p-4 text-neutral-900 rounded-2xl placeholder:text-neutral-400 h-32 sm:h-36 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all text-sm font-bold resize-none"></textarea>
            </div>
            
            <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase text-xs sm:text-sm tracking-widest py-4 rounded-2xl shadow-lg transition-all transform active:scale-[0.99] cursor-pointer">
                🛒 Realizar Pedido por WhatsApp
            </button>
        </form>
    </div>
</section>

<!-- Sección de Comunidades / Grupos (Estilo Cuadrículas E-shop) -->
<section class="py-16 sm:py-20 bg-[#f4f4f6] relative border-t border-neutral-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12 sm:mb-16">
            <h2 class="text-red-600 text-xs font-black uppercase tracking-[0.4em] mb-3">Redes y Soporte</h2>
            <h3 class="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 uppercase tracking-tight">Únete a la Comunidad</h3>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {#each 
                [
                    { title: "Metin2 Guabina", sub: "7.000 Usuarios", link: "https://www.facebook.com/groups/126085554213066" },
                    { title: "Albion Online", sub: "22.000 Usuarios", link: "https://www.facebook.com/groups/ALBI0NONLINE" },
                    { title: "EBGAMING SHOP", sub: "Página Oficial", link: "https://www.facebook.com/Metin2Guabinaventaseb" }
                ] as item
            }
                <a href={item.link} target="_blank" rel="noreferrer" 
                   class="group relative flex flex-col items-center text-center p-6 sm:p-8 bg-white border border-neutral-200 hover:border-red-600 transition-all duration-300 rounded-3xl shadow-xl hover:-translate-y-1">
                    
                    <div class="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-4 sm:mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <Icon icon="devicon:facebook" class="w-7 h-7" />
                    </div>

                    <h4 class="text-neutral-900 font-black text-base uppercase tracking-wider mb-1 group-hover:text-red-600 transition-colors">
                        {item.title}
                    </h4>
                    <p class="text-neutral-500 text-[11px] font-bold uppercase tracking-widest">
                        {item.sub}
                    </p>
                </a>
            {/each}
        </div>
    </div>
</section>
