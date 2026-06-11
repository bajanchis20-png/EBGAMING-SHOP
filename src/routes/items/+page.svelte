<script>
  // 1. Definimos los arrays separados para cada categoría
  const monturas = [
    { bg: "bg-[url('/montura3.png')]" },
    { bg: "bg-[url('/montura2.png')]" },
    { bg: "bg-[url('/montura1.png')]" },
    { bg: "bg-[url('/montura4.png')]" }
  ];

  const atuendos = [
    { bg: "bg-[url('akatsuki.png')]" },
    { bg: "bg-[url('/naruto.png')]" },
    { bg: "bg-[url('/ultima.png')]" },
    { bg: "bg-[url('/laparca2.png')]" }
  ];

  const guantes = [
    { bg: "bg-[url('/')]" },
    { bg: "bg-[url('/')]" },
    { bg: "bg-[url('/')]" },
    { bg: "bg-[url('/')]" }
  ];

  const armas = [
    { bg: "bg-[url('/arma1.png')]" }, // Cambia estos nombres a tus archivos reales
    { bg: "bg-[url('/arma2.png')]" },
    { bg: "bg-[url('/arma3.png')]" },
    { bg: "bg-[url('/arma4.png')]" }
  ];

  // 2. Asignamos cada array a su sección correspondiente
  const secciones = [
    { titulo: "Monturas", data: monturas },
    { titulo: "Atuendos", data: atuendos },
    { titulo: "Guantes", data: guantes },
    { titulo: "Armas", data: armas }
  ];
</script>

<div class="bg-black text-white py-20 px-6 space-y-24">
  {#each secciones as seccion}
    <section class="max-w-7xl mx-auto">
      <div class="mb-10 border-b border-white/10 pb-6">
        <h2 class="text-5xl font-black uppercase italic tracking-tight text-white/90">
          {seccion.titulo}
        </h2>
      </div>

      <div class="flex w-full h-[50vh] gap-3 overflow-hidden rounded-2xl">
        {#each seccion.data as cat}
          <div class="relative flex-1 group cursor-pointer overflow-hidden rounded-xl border border-white/5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:flex-[2.5]">
            
            <div class="absolute inset-0 {cat.bg} bg-center bg-no-repeat bg-cover 
                        transition-all duration-700 ease-out 
                        grayscale-[50%] brightness-[0.7] 
                        group-hover:grayscale-0 group-hover:brightness-[1.1] 
                        group-hover:scale-110">
            </div>
            
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-700 group-hover:opacity-40"></div>
            
            <div class="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/40 transition-all duration-500"></div>
            
            <div class="absolute inset-0 shadow-[inset_0_0_50px_rgba(251,191,36,0)] group-hover:shadow-[inset_0_0_50px_rgba(251,191,36,0.15)] transition-shadow duration-700"></div>
          </div>
        {/each}
      </div>
    </section>
  {/each}
</div>