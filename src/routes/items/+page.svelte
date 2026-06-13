<script>
  const monturas = [
    { bg: "bg-[url('/cangrejo.webp')]" },
    { bg: "bg-[url('/dragon2.webp')]" },
    { bg: "bg-[url('/araña.webp')]" },
    { bg: "bg-[url('/tiburon.png')]" }
  ];
  
  const armas = [
    { bg: "bg-[url('/akatsuki3.png')]" },
    { bg: "bg-[url('/eli.png')]" },
    { bg: "bg-[url('/atuendin.png')]" },
    { bg: "bg-[url('/paarca2.png')]" }
  ];
  
  const armaduras = [
    { bg: "bg-[url('/+101.png')]" },
    { bg: "bg-[url('/+102.png')]" },
    { bg: "bg-[url('/+103.png')]" },
    { bg: "bg-[url('/+104.png')]" }
  ];

  const skins = [
    { bg: "bg-[url('/espadita.png')]" },
    { bg: "bg-[url('/skins2.png')]" },
    { bg: "bg-[url('/skins3.png')]" },
    { bg: "bg-[url('/skins4.png')]" }
  ];

  const secciones = [
    { titulo: "Monturas", data: monturas, fondo: "/itemfondo2.png" },
    { titulo: "Atuendos", data: armas, fondo: "/itemfondo.png" },
    { titulo: "ARMAS Y ARMADURAS +10", data: armaduras, fondo: "/itemfondo3.png" },
    { titulo: "SKINS", data: skins, fondo: "/itemfondo4.jpg" }
  ];
</script>

<div class="bg-[#0a0f1d] text-white py-24 space-y-24">
  {#each secciones as seccion}
    <section class="relative px-6 py-4">
      <img src={seccion.fondo} alt="" class="absolute inset-0 w-full h-full object-cover opacity-5">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1d]/80 to-[#0a0f1d]"></div>
      
      <div class="mb-12 flex items-center gap-8 max-w-7xl mx-auto relative z-10">
        <h2 class="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-white drop-shadow-[0_0_10px_rgba(202,138,4,0.3)]">
          {seccion.titulo}
        </h2>
        <div class="h-px flex-grow bg-gradient-to-r from-blue-900 via-yellow-600 to-transparent"></div>
      </div>

      <div class="flex w-full h-[50vh] gap-4 max-w-7xl mx-auto relative z-10">
        {#each seccion.data as cat}
          <div class="relative flex-1 group cursor-pointer overflow-hidden rounded-lg border border-blue-900/40 transition-all duration-[700ms] ease-out hover:flex-[4] hover:border-yellow-600/50 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            
            <div class="absolute inset-4 {cat.bg} bg-center bg-no-repeat bg-contain transition-all duration-[1000ms] brightness-75 grayscale group-hover:grayscale-0 group-hover:brightness-110 scale-95 group-hover:scale-100"></div>
            
            <div class="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div class="absolute inset-0 border-2 border-transparent group-hover:border-yellow-600/30 rounded-lg transition-colors duration-500"></div>
            
            <div class="absolute -inset-full h-full w-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 rotate-[30deg] translate-x-[-50%] group-hover:translate-x-[50%] transition-all duration-[1500ms]"></div>

            <div class="absolute bottom-4 left-4 w-12 h-1 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        {/each}
      </div>
    </section>
  {/each}
</div>