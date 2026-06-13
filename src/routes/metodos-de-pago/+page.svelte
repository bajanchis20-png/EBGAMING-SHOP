<script>
  import Icon from "@iconify/svelte";
  const paises = [
    { nombre: "COLOMBIA", flag: "circle-flags:co", metodos: ["Nequi", "Daviplata", "Bancolombia"] },
    { nombre: "PERU", flag: "circle-flags:pe", metodos: ["BCP", "Yape"] },
    { nombre: "MEXICO", flag: "circle-flags:mx", metodos: ["OXXO", "BBVA"] },
    { nombre: "ARGENTINA", flag: "circle-flags:ar", metodos: ["Mercado Pago", "Prex"] },
    { nombre: "R. DOMINICANA", flag: "circle-flags:do", metodos: ["Banreservas", "Y+"] },
    { nombre: "URUGUAY", flag: "circle-flags:uy", metodos: ["BBVA", "Prex"] },
    { nombre: "EEUU", flag: "circle-flags:us", metodos: ["Zelle"] },
    { nombre: "ECUADOR", flag: "circle-flags:ec", metodos: ["Pichincha"] },
    { nombre: "ESPAÑA", flag: "circle-flags:es", metodos: ["Bizum", "BBVA"] },
    { nombre: "BRASIL", flag: "circle-flags:br", metodos: ["Pix"] },
    { nombre: "CHILE", flag: "circle-flags:cl", metodos: ["Banco Estado"] }
  ];
</script>

<div class="relative min-h-screen overflow-hidden bg-[#05070d]">
  <video src="video2.mp4" autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover opacity-30"></video>
  <div class="absolute inset-0 bg-gradient-to-b from-[#0a0f1d]/60 via-[#05070d]/80 to-[#05070d]"></div>

  <main class="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-32">
    <section class="text-center space-y-8 mb-24">
      <h1 class="text-4xl md:text-7xl font-extrabold text-white tracking-tighter uppercase space-y-2">
        <div>Poder <span class="text-blue-500">Total</span></div>
        <div class="block mt-4 font-black italic text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 drop-shadow-[0_0_15px_rgba(202,138,4,0.3)]">
          en tus pagos
        </div>
      </h1>
      <p class="text-blue-200/60 font-bold tracking-[0.3em] uppercase text-sm">
        Equípate con lo mejor sin esperas. Obtén tus items en tiempo récord.
      </p>
    </section>

    <section class="bg-[#05070d] backdrop-blur-md border border-white rounded-3xl p-8 md:p-12 shadow-2xl">
      <div class="text-center mb-10">
        <h3 class="text-yellow-600 font-bold tracking-[0.3em] uppercase text-sm mb-2">Cobertura Global</h3>
        <p class="text-white font-extrabold text-3xl md:text-4xl">Métodos de Pago</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        {#each [{name: 'Paypal', icon: 'logos:paypal'}, {name: 'Western Union', icon: 'simple-icons:westernunion', white: true}, {name: 'Ria', img: '/ria.webp'}, {name: 'Binance', icon: 'token-branded:binance'}] as method}
          <div class="group flex flex-col items-center gap-4 p-4 rounded-2xl transition-all hover:bg-blue-900/20 cursor-pointer border border-transparent hover:border-blue-900/50">
            <div class="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#05070d] group-hover:scale-110 transition-transform shadow-inner border border-blue-900/30">
              {#if method.icon}
                <Icon icon={method.icon} class="w-8 h-8 {method.white ? 'text-white' : ''}" />
              {:else}
                <img src={method.img} alt={method.name} class="w-8 h-8 object-contain" />
              {/if}
            </div>
            <span class="text-blue-200 font-semibold text-sm tracking-wide">{method.name}</span>
          </div>
        {/each}
      </div>
    </section>
  </main>
</div>

<section class="py-24 bg-[#05070d] border-t border-blue-900/50 relative">
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each paises as pais}
        <div class="group relative p-5 bg-[#000104]  transition-all duration-300 hover:border-yellow-600/30 hover:bg-[#121828]">
          <div class="absolute inset-0 bg-gradient-to-tr from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
          
          <div class="relative flex items-center gap-3 mb-4">
            <Icon icon={pais.flag} width={28} height={28} class="shadow-[0_0_10px_rgba(255,255,255,0.05)]" />
            <h4 class="text-white font-black uppercase tracking-wider text-[13px]">{pais.nombre}</h4>
          </div>
          
          <div class="relative space-y-1.5">
            {#each pais.metodos as metodo}
              <div class="flex items-center gap-2.5 text-[11px] text-blue-200/50 group-hover:text-blue-200 transition-colors">
                <Icon icon="ic:round-check-circle" width={12} class="text-yellow-600/60 group-hover:text-yellow-500 transition-colors" />
                <span class="tracking-wide">{metodo}</span>
              </div>
            {/each}
          </div>

          <div class="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-700 to-yellow-500 transition-all duration-500 group-hover:w-full"></div>
        </div>
      {/each}
    </div>
  </div>
</section>