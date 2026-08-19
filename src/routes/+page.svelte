<script>
    import Icon from "@iconify/svelte";

    let nombre = $state("");
    let pedido = $state("");

    function enviarPedido(event) {
        event.preventDefault();
        if (!nombre || !pedido) return;
        window.open(`https://api.whatsapp.com/send/?phone=584149430559&text=Hola,%20soy%20${encodeURIComponent(nombre)}%20y%20quiero%20pedir:%20${encodeURIComponent(pedido)}`);
    }
</script>

<!-- Hero Section Extremo & Responsive -->
<section class="relative w-full min-h-[90vh] bg-[#0a0a0c] pt-12 md:pt-16 lg:pt-20 pb-16 overflow-hidden flex flex-col justify-between border-b border-white/10">
    
    <!-- Video de fondo perfectamente adaptado y sin cortes -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video autoplay loop muted playsinline class="w-full h-full object-cover opacity-25 scale-105 filter contrast-125">
            <source src="/fondonuevo1.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/80 via-transparent to-[#0a0a0c]"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-transparent to-[#0a0a0c]"></div>
    </div>

    <!-- Contenido Principal del Hero -->
    <div class="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 xl:grid-cols-12 items-center gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8 my-auto">
        
        <!-- Bloque de Texto Izquierda -->
        <div class="space-y-6 text-center xl:text-left xl:col-span-6 flex flex-col items-center xl:items-start">
            
            <h1 class="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white uppercase tracking-tighter leading-[1.05] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
                Equípate como un 
                <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ff1a2e] via-rose-400 to-[#ff1a2e] italic drop-shadow-[0_0_40px_rgba(230,0,18,0.7)]">
                    Dios del Reino
                </span>
            </h1>
            
            <p class="text-neutral-300 font-bold tracking-wider uppercase text-xs sm:text-sm leading-relaxed max-w-xl drop-shadow-md">
                Domina cada rincón con items de élite. Seguridad absoluta, transacciones blindadas y entrega inmediata en Metin2 Guabina, Metin2.es & Albion Online.
            </p>

            <!-- Botones de Acción Rápida -->
            <div class="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3.5 pt-2 w-full sm:w-auto">
                <a href="/catalogo" class="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-[#e60012] hover:bg-[#cc0010] text-white font-black uppercase text-xs tracking-widest rounded-2xl transition-all text-center active:scale-95 shadow-[0_0_20px_rgba(230,0,18,0.4)]">
                    Ver Catálogo
                </a>
                <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,%20estoy%20interesado%20en%20recibir%20asesoría%20sobre%20tus%20artículos" target="_blank" rel="noreferrer" class="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-[#141419]/90 hover:bg-white/10 text-neutral-200 border border-white/10 font-black uppercase text-xs tracking-widest rounded-2xl transition-all text-center active:scale-95 backdrop-blur-md">
                    Consultar Asesoría
                </a>
                <a href="https://www.facebook.com/share/p/1BJFKDdHai/" target="_blank" rel="noreferrer" class="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-[#141419]/90 hover:bg-white/10 text-neutral-200 border border-white/10 font-black uppercase text-xs tracking-widest rounded-2xl transition-all text-center active:scale-95 backdrop-blur-md">
                    Ver Referencias
                </a>
            </div>
        </div>

        <!-- Contenedor de las Tres Tarjetas -->
        <div class="w-full xl:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 xl:pt-0">
            
            <!-- Tarjeta 1: Guabina -->
            <div class="relative w-full bg-[#121216]/95 backdrop-blur-xl p-4 rounded-[2rem] card-guabina flex flex-col justify-between shadow-2xl">
                <div class="absolute -top-3.5 right-4 bg-gradient-to-r from-neutral-900 to-neutral-800 border border-white/30 text-white text-[9px] font-black uppercase px-3 py-1 rounded-full shadow-lg z-20">
                    GUABINA 🔥
                </div>
                <div class="space-y-3 pt-2">
                    <div class="w-full h-28 sm:h-32 rounded-2xl overflow-hidden bg-neutral-950 border border-[#e60012]/50 relative flex items-center justify-center">
                        <video autoplay loop muted playsinline class="w-full h-full object-cover opacity-90">
                            <source src="/video3.mp4" type="video/mp4" />
                        </video>
                        <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
                    </div>
                    <div>
                        <h3 class="text-white font-black text-xs uppercase tracking-wider">PACK GUABINA</h3>
                        <p class="text-[9px] text-neutral-400 font-bold uppercase mt-0.5 tracking-wide">ENTREGA INMEDIATA</p>
                    </div>
                </div>
                <div class="pt-4 mt-3 flex items-center justify-between border-t border-white/10">
                    <span class="text-[10px] text-[#e60012] font-black uppercase tracking-widest">STOCK</span>
                    <a href="/catalogo" class="relative px-4 py-2 bg-gradient-to-b from-neutral-700 to-neutral-900 hover:from-neutral-600 text-white border border-white/40 text-[10px] font-black uppercase tracking-wider rounded-full transition-all shadow-md active:scale-95">
                        COMPRAR →
                    </a>
                </div>
            </div>

            <!-- Tarjeta 2: Metin2.es -->
            <div class="relative w-full bg-[#121216]/95 backdrop-blur-xl p-4 rounded-[2rem] card-metin flex flex-col justify-between shadow-2xl">
                <div class="absolute -top-3.5 right-4 bg-gradient-to-r from-neutral-900 to-neutral-800 border border-white/30 text-white text-[9px] font-black uppercase px-3 py-1 rounded-full shadow-lg z-20">
                    METIN2.ES ⚔️
                </div>
                <div class="space-y-3 pt-2">
                    <div class="w-full h-28 sm:h-32 rounded-2xl overflow-hidden bg-neutral-950 border border-white/30 relative flex items-center justify-center">
                        <video autoplay loop muted playsinline class="w-full h-full object-cover opacity-90">
                            <source src="/fondovideo4.mp4" type="video/mp4" />
                        </video>
                        <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
                    </div>
                    <div>
                        <h3 class="text-white font-black text-xs uppercase tracking-wider">PACK METIN2.ES</h3>
                        <p class="text-[9px] text-neutral-400 font-bold uppercase mt-0.5 tracking-wide">OFICIAL Y SEGURO</p>
                    </div>
                </div>
                <div class="pt-4 mt-3 flex items-center justify-between border-t border-white/10">
                    <span class="text-[10px] text-[#e60012] font-black uppercase tracking-widest">STOCK</span>
                    <a href="/vista-previa" class="relative px-4 py-2 bg-gradient-to-b from-neutral-700 to-neutral-900 hover:from-neutral-600 text-white border border-white/40 text-[10px] font-black uppercase tracking-wider rounded-full transition-all shadow-md active:scale-95">
                        COMPRAR →
                    </a>
                </div>
            </div>

            <!-- Tarjeta 3: Albion Online -->
            <div class="relative w-full bg-[#121216]/95 backdrop-blur-xl p-4 rounded-[2rem] card-albion flex flex-col justify-between shadow-2xl">
                <div class="absolute -top-3.5 right-4 bg-gradient-to-r from-neutral-900 to-neutral-800 border border-white/30 text-white text-[9px] font-black uppercase px-3 py-1 rounded-full shadow-lg z-20">
                    ALBION 🛡️
                </div>
                <div class="space-y-3 pt-2">
                    <div class="w-full h-28 sm:h-32 rounded-2xl overflow-hidden bg-neutral-950 border border-blue-500/50 relative flex items-center justify-center">
                        <video autoplay loop muted playsinline class="w-full h-full object-cover opacity-90">
                            <source src="/video5.mp4" type="video/mp4" />
                        </video>
                        <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
                    </div>
                    <div>
                        <h3 class="text-white font-black text-xs uppercase tracking-wider">PACK ALBION</h3>
                        <p class="text-[9px] text-neutral-400 font-bold uppercase mt-0.5 tracking-wide">PLATA & ITEMS</p>
                    </div>
                </div>
                <div class="pt-4 mt-3 flex items-center justify-between border-t border-white/10">
                    <span class="text-[10px] text-[#e60012] font-black uppercase tracking-widest">STOCK</span>
                    <a href="/albion-online" class="relative px-4 py-2 bg-gradient-to-b from-neutral-700 to-neutral-900 hover:from-neutral-600 text-white border border-white/40 text-[10px] font-black uppercase tracking-wider rounded-full transition-all shadow-md active:scale-95">
                        COMPRAR →
                    </a>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- SECCIÓN DE FORMULARIO DE PEDIDO EXPRÉS -->
<section class="py-16 md:py-20 bg-[#070709] relative overflow-hidden border-b border-white/10">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] bg-[#e60012]/10 blur-[120px] sm:blur-[150px] pointer-events-none rounded-full"></div>
    
    <div class="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="text-center mb-10 space-y-3">
            <h3 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
                Haz tu pedido <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#e60012] via-rose-500 to-[#e60012] italic">Exprés</span>
            </h3>
            <p class="text-neutral-400 text-xs sm:text-sm font-bold uppercase tracking-wider max-w-lg mx-auto">
                Completa los datos de tu personaje y recibe atención prioritaria inmediata vía WhatsApp.
            </p>
        </div>

        <form onsubmit={enviarPedido} class="relative bg-gradient-to-b from-[#121217] to-[#0a0a0e] p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl space-y-6">
            <div class="space-y-2">
                <label class="flex items-center gap-2 text-neutral-300 text-xs font-black uppercase tracking-widest">
                    <span class="w-2 h-2 rounded-full bg-[#e60012]"></span>
                    Tu Nombre / Personaje
                </label>
                <input bind:value={nombre} placeholder="Ej: Carlos Silva (Guabina / Albion)" required 
                       class="w-full bg-[#070709] border border-white/10 focus:border-[#e60012] px-4 sm:px-5 py-3.5 sm:py-4 text-white rounded-2xl placeholder:text-neutral-600 focus:ring-2 focus:ring-[#e60012]/30 outline-none transition-all text-sm font-bold shadow-inner" />
            </div>

            <div class="space-y-2">
                <label class="flex items-center gap-2 text-neutral-300 text-xs font-black uppercase tracking-widest">
                    <span class="w-2 h-2 rounded-full bg-[#e60012]"></span>
                    Detalles del Pedido / Items
                </label>
                <textarea bind:value={pedido} placeholder="Describe los items, cantidad o paquete que necesitas cotizar..." required 
                          class="w-full bg-[#070709] border border-white/10 focus:border-[#e60012] px-4 sm:px-5 py-3.5 sm:py-4 text-white rounded-2xl placeholder:text-neutral-600 h-32 focus:ring-2 focus:ring-[#e60012]/30 outline-none transition-all text-sm font-bold resize-none shadow-inner"></textarea>
            </div>
            
            <button type="submit" class="w-full group/btn relative overflow-hidden rounded-2xl p-[2px] active:scale-95 transition-all cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-r from-[#e60012] via-rose-500 to-[#e60012] rounded-2xl blur-sm opacity-80"></div>
                <div class="relative px-6 py-4 bg-[#e60012] group-hover/btn:bg-[#cc0010] text-white font-black uppercase text-xs sm:text-sm tracking-widest rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-lg">
                    <Icon icon="ic:baseline-whatsapp" class="w-6 h-6 text-white" />
                    <span>Realizar Pedido por WhatsApp</span>
                </div>
            </button>

            <div class="flex items-center justify-center gap-2 pt-2 text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
                <svg class="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clip-rule="evenodd"/></svg>
                <span>Transacción 100% Segura y Verificada</span>
            </div>
        </form>
    </div>
</section>

<!-- Sección de Comunidades -->
<section class="py-16 md:py-20 bg-[#0a0a0c] relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="text-center mb-10 md:mb-12">
            <h3 class="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                Únete a la <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">Comunidad</span>
            </h3>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {#each 
                [
                    { title: "Metin2 Guabina", sub: "7.000 Usuarios", link: "https://www.facebook.com/groups/126085554213066" },
                    { title: "Albion Online", sub: "22.000 Usuarios", link: "https://www.facebook.com/groups/ALBI0NONLINE" },
                    { title: "EBGAMING SHOP", sub: "Página Oficial", link: "https://www.facebook.com/Metin2Guabinaventaseb" }
                ] as item
            }
                <a href={item.link} target="_blank" rel="noreferrer" 
                   class="group relative flex flex-col items-center text-center p-6 sm:p-8 bg-gradient-to-b from-[#121217] to-[#0a0a0e] border border-white/5 hover:border-[#e60012]/60 transition-all duration-300 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl active:scale-95">
                    
                    <div class="relative w-16 h-16 rounded-2xl bg-[#17171f] border border-white/10 flex items-center justify-center mb-6 text-neutral-300 group-hover:text-white group-hover:bg-[#e60012] group-hover:border-[#e60012] transition-all duration-300 shadow-inner">
                        <Icon class="w-8 h-8 transition-transform duration-300 group-hover:scale-110" icon="devicon:facebook"/>
                    </div>

                    <h4 class="text-white font-extrabold text-base uppercase tracking-wider mb-2 group-hover:text-[#e60012] transition-colors">
                        {item.title}
                    </h4>
                    
                    <div class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/5 group-hover:border-[#e60012]/30 transition-colors">
                        <p class="text-neutral-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-neutral-300">
                            {item.sub}
                        </p>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>

<!-- Estilos CSS -->
<style>
  .card-guabina {
    border: 2px solid #e60012;
    box-shadow: 0 0 45px rgba(230, 0, 18, 0.4);
  }

  .card-metin {
    border: 2px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 45px rgba(255, 255, 255, 0.1);
  }

  .card-albion {
    border: 2px solid #3b82f6;
    box-shadow: 0 0 45px rgba(59, 130, 246, 0.4);
  }
</style>>