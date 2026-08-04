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

<div class="bg-[#f4f4f6] text-neutral-900">

    <!-- HERO: Video Fullscreen -->
    <section class="relative min-h-screen w-full flex items-center justify-center overflow-hidden border-b border-neutral-300">
        <!-- Se incrementó la visibilidad del video -->
        <video src="video2.mp4" autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover opacity-95"></video>
        <!-- Gradiente más sutil para no tapar el video -->
        <div class="absolute inset-0 bg-gradient-to-b from-[#f4f4f6]/40 via-[#f4f4f6]/20 to-[#f4f4f6]/60"></div>
        
        <main class="relative z-10 text-center px-6 animate-fade-in-up">
            <h1 class="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-neutral-900">
                Poder <span class="text-red-600">TOTAL</span><br/>
                <span class="italic text-neutral-900">
                    en tus pagos
                </span>
            </h1>
        </main>
    </section>

    <!-- MÉTODOS DE PAGO (Se quitó el mt-[-50px] y se añadió padding superior para separarlo bien) -->
    <section class="max-w-4xl mx-auto py-20 px-6 relative z-20">
        <div class="text-center mb-16">
            <h3 class="text-red-600 font-black tracking-[0.5em] uppercase text-xs mb-4">Cobertura Global</h3>
            <h2 class="text-neutral-900 font-black text-3xl md:text-4xl uppercase">Métodos de Pago</h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            {#each [{name: 'Paypal', icon: 'logos:paypal'}, {name: 'Western Union', icon: 'simple-icons:westernunion', dark: true}, {name: 'Ria', img: '/ria.webp'}, {name: 'Binance', icon: 'token-branded:binance'}] as method}
                <div class="group flex flex-col items-center gap-4 cursor-pointer">
                    <div class="relative p-6 rounded-3xl bg-white border border-neutral-300 group-hover:border-red-600 transition-all duration-300 shadow-xl">
                        {#if method.icon} <Icon icon={method.icon} class="w-10 h-10 {method.dark ? 'text-neutral-900' : ''}" />
                        {:else} <img src={method.img} alt={method.name} class="w-10 h-10 object-contain" /> {/if}
                    </div>
                    <span class="text-neutral-600 font-bold text-[10px] uppercase tracking-[0.2em]">{method.name}</span>
                </div>
            {/each}
        </div>
    </section>

    <!-- SELECCIÓN PAÍS -->
    <section class="py-24 bg-[#f4f4f6] border-t border-neutral-300">
        <div class="max-w-4xl mx-auto px-6 text-center">
            <div class="flex flex-col items-center mb-24 text-center">
                <h3 class="text-5xl md:text-6xl font-black text-neutral-900 uppercase tracking-tighter leading-[0.9]">
                    <span class="block">Selecciona tu país</span>
                    <span class="block text-red-600 italic">Entrega Inmediata</span>
                </h3>
                <p class="text-neutral-600 font-bold tracking-wide text-sm md:text-lg max-w-xl mx-auto mt-8 uppercase leading-relaxed">
                    Contamos con cuentas bancarias locales en tu país para agilizar tus operaciones y brindarte mayor comodidad.
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                {#each paises as pais}
                    <button on:click={() => contactarPais(pais.nombre)} class="flex items-center gap-4 p-4 bg-white border border-neutral-300 rounded-2xl hover:border-red-600 transition-all shadow-md cursor-pointer text-left">
                        <Icon icon={pais.flag} class="w-10 h-10 flex-shrink-0" />
                        <span class="text-neutral-900 font-black text-[12px] uppercase tracking-wider">{pais.nombre}</span>
                    </button>
                {/each}
            </div>
        </div>
    </section>
</div>

<style>
    @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
</style>