<script>
    import Icon from "@iconify/svelte";

    const numeroWhatsApp = "584149430559";
    function contactarPais(nombre) {
        const mensaje = `Hola, soy de ${nombre} y estoy interesado en...`;
        const url = `https://api.whatsapp.com/send/?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    }

    const paises = [
        { nombre: "ESPAÑA", flag: "circle-flags:es" }, { nombre: "ESTADOS UNIDOS", flag: "circle-flags:us" },
        { nombre: "UNIÓN EUROPEA", flag: "circle-flags:eu" }, { nombre: "MÉXICO", flag: "circle-flags:mx" },
        { nombre: "ARGENTINA", flag: "circle-flags:ar" }, { nombre: "BRASIL", flag: "circle-flags:br" },
        { nombre: "BOLIVIA", flag: "circle-flags:bo" }, { nombre: "CHILE", flag: "circle-flags:cl" },
        { nombre: "COLOMBIA", flag: "circle-flags:co" }, { nombre: "COSTA RICA", flag: "circle-flags:cr" },
        { nombre: "ECUADOR", flag: "circle-flags:ec" }, { nombre: "EL SALVADOR", flag: "circle-flags:sv" },
        { nombre: "GUATEMALA", flag: "circle-flags:gt" }, { nombre: "HONDURAS", flag: "circle-flags:hn" },
        { nombre: "NICARAGUA", flag: "circle-flags:ni" }, { nombre: "PANAMÁ", flag: "circle-flags:pa" },
        { nombre: "PARAGUAY", flag: "circle-flags:py" }, { nombre: "PERÚ", flag: "circle-flags:pe" },
        { nombre: "PUERTO RICO", flag: "circle-flags:pr" }, { nombre: "REP. DOMINICANA", flag: "circle-flags:do" },
        { nombre: "URUGUAY", flag: "circle-flags:uy" }, { nombre: "VENEZUELA", flag: "circle-flags:ve" }
    ];
</script>

<div class="bg-[#0d0d0f] text-white">

    <!-- HERO: Video Fullscreen -->
    <section class="relative min-h-[60vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden border-b border-white/10">
        <!-- Se incrementó la visibilidad del video -->
        <video src="video2.mp4" autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover opacity-60"></video>
        <!-- Gradiente más sutil para no tapar el video -->
        <div class="absolute inset-0 bg-gradient-to-b from-[#0d0d0f]/60 via-[#0d0d0f]/40 to-[#0d0d0f]/80"></div>
        
        <main class="relative z-10 text-center px-4 sm:px-6 animate-fade-in-up">
            <h1 class="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.95] tracking-tighter text-white">
                Poder 
                <span class="font-fantasy font-black uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-950 via-red-600 to-rose-400 blood-pulse-flicker relative pb-3 cursor-default inline-block mx-2">
                    TOTAL
                    <span class="blood-drop drop-1"></span>
                    <span class="blood-drop drop-2"></span>
                    <span class="blood-drop drop-3"></span>
                    <span class="blood-drop drop-4"></span>
                </span><br/>
                <span class="italic text-neutral-400">
                    en tus pagos
                </span>
            </h1>
        </main>
    </section>

    <!-- MÉTODOS DE PAGO -->
    <section class="max-w-4xl mx-auto py-12 sm:py-20 px-4 sm:px-6 relative z-20">
        <div class="text-center mb-10 sm:mb-16">
            <h3 class="text-[#e60012] font-black tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-2 sm:mb-4">Cobertura Global</h3>
            <h2 class="text-white font-black text-2xl sm:text-4xl uppercase">Métodos de Pago</h2>
        </div>
        <!-- Grid mobile first: 2 columnas adaptadas para pantallas muy pequeñas -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {#each [{name: 'Paypal', icon: 'logos:paypal'}, {name: 'Western Union', icon: 'simple-icons:westernunion', dark: false}, {name: 'Ria', img: '/ria.webp'}, {name: 'Binance', icon: 'token-branded:binance'}] as method}
                <div class="group flex flex-col items-center gap-3 sm:gap-4 cursor-pointer">
                    <div class="relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#121216] border border-white/10 group-hover:border-[#e60012] transition-all duration-300 shadow-xl">
                        {#if method.icon} <Icon icon={method.icon} class="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        {:else} <img src={method.img} alt={method.name} class="w-8 h-8 sm:w-10 sm:h-10 object-contain filter brightness-90" /> {/if}
                    </div>
                    <span class="text-neutral-400 font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center">{method.name}</span>
                </div>
            {/each}
        </div>
    </section>

    <!-- SELECCIÓN PAÍS -->
    <section class="py-16 sm:py-24 bg-[#121216] border-t border-white/10">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div class="flex flex-col items-center mb-12 sm:mb-24 text-center">
                <h3 class="text-3xl xs:text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter leading-[0.95]">
                    <span class="block">Selecciona tu país</span>
                    <span class="block mt-2 sm:mt-3 font-fantasy font-black uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-950 via-red-600 to-rose-400 blood-pulse-flicker relative pb-3 cursor-default inline-block">
                        Entrega Inmediata
                        <span class="blood-drop drop-1"></span>
                        <span class="blood-drop drop-2"></span>
                        <span class="blood-drop drop-3"></span>
                        <span class="blood-drop drop-4"></span>
                    </span>
                </h3>
                <p class="text-neutral-400 font-bold tracking-wide text-xs sm:text-lg max-w-xl mx-auto mt-6 sm:mt-8 uppercase leading-relaxed">
                    Contamos con cuentas bancarias locales en tu país para agilizar tus operaciones y brindarte mayor comodidad.
                </p>
            </div>

            <!-- Grid mobile first optimizado: 2 columnas en móvil estricto para que los nombres no se corten -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {#each paises as pais}
                    <button onclick={() => contactarPais(pais.nombre)} class="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#17171c] border border-white/10 rounded-xl sm:rounded-2xl hover:border-[#e60012] transition-all shadow-md cursor-pointer text-left group active:scale-95">
                        <Icon icon={pais.flag} class="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
                        <span class="text-white font-black text-[11px] sm:text-[12px] uppercase tracking-wider group-hover:text-[#e60012] transition-colors truncate">{pais.nombre}</span>
                    </button>
                {/each}
            </div>
        </div>
    </section>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap');

    .font-fantasy {
        font-family: 'Cinzel Decorative', serif;
    }

    @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }

    /* Animación de titileo y pulso en rojo sangre gamer */
    @keyframes bloodFlicker {
        0%, 100% {
            filter: drop-shadow(0 0 8px rgba(220, 38, 38, 0.6)) drop-shadow(0 0 20px rgba(153, 27, 27, 0.4));
            opacity: 1;
        }
        50% {
            filter: drop-shadow(0 0 18px rgba(255, 75, 75, 0.95)) drop-shadow(0 0 35px rgba(220, 38, 38, 0.7));
            opacity: 0.88;
        }
        70% {
            filter: drop-shadow(0 0 5px rgba(185, 28, 28, 0.5));
            opacity: 1;
        }
    }

    .blood-pulse-flicker {
        background-size: 200% auto;
        animation: bloodFlicker 2.5s infinite ease-in-out;
        transition: 0.4s ease-in-out;
    }

    .blood-pulse-flicker:hover {
        background-position: right center;
        filter: drop-shadow(0 0 25px rgba(255, 50, 50, 1)) drop-shadow(0 0 50px rgba(220, 38, 38, 0.9));
        opacity: 1;
    }

    /* Gotas de sangre con origen pegado al ras de las letras */
    .blood-drop {
        position: absolute;
        bottom: 2px;
        width: 4px;
        height: 20px;
        background: linear-gradient(
            to bottom, 
            rgba(255, 100, 100, 0.95) 0%, 
            rgba(190, 15, 15, 0.95) 30%, 
            rgba(90, 5, 5, 1) 75%, 
            rgba(35, 0, 0, 1) 100%
        );
        border-radius: 50% 50% 50% 50% / 20% 20% 80% 80%;
        opacity: 0;
        pointer-events: none;
        box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.65), 0 0 8px rgba(239, 68, 68, 0.85);
        transform-origin: top center;
        z-index: 25 !important;
    }

    @keyframes realFluidDripFlush {
        0% {
            transform: translateY(0) scaleY(0.02) scaleX(0.6);
            opacity: 0;
        }
        12% {
            opacity: 1;
            transform: translateY(2px) scaleY(0.4) scaleX(1.1);
        }
        30% {
            transform: translateY(11px) scaleY(2.3) scaleX(0.4);
        }
        50% {
            transform: translateY(24px) scaleY(1.2) scaleX(0.9);
            opacity: 0.98;
        }
        80% {
            transform: translateY(46px) scaleY(0.9) scaleX(1);
            opacity: 0.8;
        }
        100% {
            transform: translateY(58px) scaleY(0.15) scaleX(0.4);
            opacity: 0;
        }
    }

    .drop-1 {
        left: 18%;
        animation: realFluidDripFlush 3.2s infinite cubic-bezier(0.25, 1, 0.5, 1);
        animation-delay: 0.2s;
    }

    .drop-2 {
        left: 42%;
        animation: realFluidDripFlush 2.6s infinite cubic-bezier(0.25, 1, 0.5, 1);
        animation-delay: 1.1s;
    }

    .drop-3 {
        left: 65%;
        animation: realFluidDripFlush 3.8s infinite cubic-bezier(0.25, 1, 0.5, 1);
        animation-delay: 0.6s;
    }

    .drop-4 {
        left: 85%;
        animation: realFluidDripFlush 2.9s infinite cubic-bezier(0.25, 1, 0.5, 1);
        animation-delay: 1.8s;
    }
</style>