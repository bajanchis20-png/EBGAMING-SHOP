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

<div class="bg-[#020408] text-white">

  <!-- HERO: Video Fullscreen -->
  <section class="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
    <video src="video2.mp4" autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover opacity-40"></video>
    <div class="absolute inset-0 bg-gradient-to-b from-[#020408]/60 via-[#020408]/40 to-[#020408]"></div>
    
    <main class="relative z-10 text-center px-6 animate-fade-in-up">
      <h1 class="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
        Poder <span class="text-transparent bg-clip-text animate-shimmer bg-[linear-gradient(90deg,#60a5fa,#2563eb,#ca8a04,#2563eb,#60a5fa)] bg-[length:200%_100%]">TOTAL</span><br/>
        <span class="italic text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 drop-shadow-[0_0_20px_rgba(202,138,4,0.4)]">
          en tus pagos
        </span>
      </h1>
    </main>
  </section>

  <!-- MÉTODOS DE PAGO -->
  <section class="max-w-4xl mx-auto py-10 px-6 mt-[-50px] relative z-20">
    <div class="text-center mb-16 animate-pulse-glow">
      <h3 class="text-blue-400 font-black tracking-[0.5em] uppercase text-xs mb-4">Cobertura Global</h3>
      <h2 class="text-white font-black text-3xl md:text-4xl uppercase">Métodos de Pago</h2>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      {#each [{name: 'Paypal', icon: 'logos:paypal'}, {name: 'Western Union', icon: 'simple-icons:westernunion', white: true}, {name: 'Ria', img: '/ria.webp'}, {name: 'Binance', icon: 'token-branded:binance'}] as method}
        <div class="group flex flex-col items-center gap-4 cursor-pointer">
          <div class="relative p-6 rounded-2xl bg-[#151921] border border-white/10 group-hover:border-blue-500/30 transition-all duration-500">
            {#if method.icon} <Icon icon={method.icon} class="w-10 h-10 {method.white ? 'text-white' : ''}" />
            {:else} <img src={method.img} alt={method.name} class="w-10 h-10 object-contain" /> {/if}
          </div>
          <span class="text-neutral-400 font-semibold text-[10px] uppercase tracking-[0.2em]">{method.name}</span>
        </div>
      {/each}
    </div>
  </section>

  <!-- SELECCIÓN PAÍS -->
  <section class="py-24 bg-[#05070d] border-t border-white/5">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div class="flex flex-col items-center mb-24 text-center">
        <h3 class="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <span class="block">Seleciona tú país</span>
          <span class="block text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-amber-500 italic drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]">Entrega Inmediata</span>
        </h3>
        <p class="text-neutral-400 font-bold tracking-wide text-sm md:text-lg max-w-xl mx-auto mt-8 uppercase leading-relaxed">
          Contamos con cuentas bancarias locales en tu país para agilizar tus operaciones y brindarte mayor comodidad.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        {#each paises as pais}
          <button on:click={() => contactarPais(pais.nombre)} class="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl hover:bg-white/[0.06] transition-all">
            <Icon icon={pais.flag} class="w-10 h-10" />
            <span class="text-neutral-300 font-bold text-[12px] uppercase">{pais.nombre}</span>
          </button>
        {/each}
      </div>
    </div>
  </section>
</div>

<style>
  @keyframes shimmer { 0% { background-position: 100% 50%; } 100% { background-position: -100% 50%; } }
  .animate-shimmer { animation: shimmer 4s linear infinite; }
  
  @keyframes pulse-glow { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.02); } }
  .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
  
  @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
</style>