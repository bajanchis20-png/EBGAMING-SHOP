<script>
  // Datos del catálogo
  const monturas = [
    { bg: "bg-[url('/cangrejo.webp')]" },
    { bg: "bg-[url('/dragon2.webp')]" },
    { bg: "bg-[url('/araña.webp')]" },
    { bg: "bg-[url('/tiburon.png')]" }
  ];
  
  const armas = [
    { bg: "bg-[url('/akatsuki3.png')]" },
    { bg: "bg-[url('/newnaru.png')]" },
    { bg: "bg-[url('/atuendin.png')]" },
    { bg: "bg-[url('/paarca2.png')]" }
  ];
  
  const armaduras = [
    { bg: "bg-[url('/+101.png')]" },
    { bg: "bg-[url('/+102.png')]" },
    { bg: "bg-[url('/+103.png')]" },
    { bg: "bg-[url('/+104.png')]" }
  ];

  // NUEVO ARRAY para evitar repetición
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
    { titulo: "SKINS", data: skins, fondo: "/itemfondo4.jpg" } // Aquí ahora apunta al nuevo array
  ];
</script>

<div class="bg-[#030303] text-white py-20 ">
  {#each secciones as seccion}
    <section class="relative  px-6 py-12" >
      <img src={seccion.fondo} alt="" class=" absolute top-0 left-0  w-full h-full object-cover opacity-20">
      <div class="mb-10 flex items-center gap-6 max-w-7xl mx-auto">
        <h2 class="text-6xl font-black uppercase italic tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          {seccion.titulo}
        </h2>
        <div class="h-px flex-grow bg-gradient-to-r from-amber-500/60 to-transparent"></div>
      </div>

      <div class="flex w-full h-[55vh] gap-3 max-w-7xl mx-auto">
        {#each seccion.data as cat}
          <div class="relative flex-1 group cursor-pointer overflow-hidden rounded-xl border border-white/5 transition-all duration-[600ms] ease-[cubic-bezier(0.2,1,0.2,1)] hover:flex-[3.5] hover:border-amber-500/30">
            
            <div class="absolute inset-4 {cat.bg} bg-center bg-no-repeat bg-contain transition-all duration-[1200ms] 
                        brightness-[0.9] grayscale-[20%] group-hover:grayscale-0 group-hover:brightness-[1.15] 
                        scale-100 group-hover:scale-105">
            </div>
            
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]"></div>
            
            <div class="absolute inset-0 border-[3px] border-transparent group-hover:border-amber-500/20 rounded-xl transition-colors duration-500"></div>
            
            <div class="absolute -inset-full h-full w-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 rotate-[30deg] translate-x-[-50%] group-hover:translate-x-[50%] transition-all duration-1000"></div>

            <div class="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
          </div>
        {/each}
      </div>
    </section>
  {/each}
</div>