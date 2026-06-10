<script>
    // --- Lógica de Carruseles ---
    
    // Sección 1: Monturas
    let img1 = ["/montura1.png", "/montura2.png", "/montura3.png", "/montura4.png"];
    let idx1 = 0;
    
    // Sección 2: Pets
    let img2 = ["/atuendo1.png", "/atuendo2.png", "/atuendo3.png", "/atuendo4.png"];
    let idx2 = 0;
    
    // Sección 3: Armas
    let img3 = ["/", "/", "/", "/"];
    let idx3 = 0;
    
    // Sección 4: Armaduras
    let img4 = ["/", "/", "/", "/"];
    let idx4 = 0;
</script>

<section class="flex items-center justify-center py-24 relative overflow-hidden border-b border-white/5">
    <img src="/itemfondo.png" alt="" class="absolute inset-0 w-full h-full object-cover opacity-20 -z-10" />
    <div class="max-w-6xl w-full px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div class="w-full md:w-1/2 flex flex-col items-center gap-6">
            <div class="w-full aspect-square max-w-sm bg-neutral-900/50 border border-white/10 rounded-3xl p-4 flex items-center justify-center">
                {#key idx1}<img src={img1[idx1]} alt="Item" class="w-full h-full object-contain transition-all" />{/key}
            </div>
            <button on:click={() => idx1 = (idx1 + 1) % img1.length} class="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-[0.2em] hover:border-yellow-500 transition-all">Ver más ({idx1 + 1}/4)</button>
        </div>
        <div class="max-w-lg text-right"><h1 class="text-5xl font-extrabold text-white uppercase tracking-[0.2em]">Monturas <span class="block text-yellow-500 italic"></span></h1></div>
    </div>
</section>

<section class="flex items-center justify-center py-24 relative overflow-hidden border-b border-white/5">
    <img src="/itemfondo2.png" alt="" class="absolute inset-0 w-full h-full object-cover opacity-20 -z-10" />
    <div class="max-w-6xl w-full px-6 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        <div class="w-full md:w-1/2 flex flex-col items-center gap-6">
            <div class="w-full aspect-square max-w-sm bg-neutral-900/50 border border-white/10 rounded-3xl p-4 flex items-center justify-center">
                {#key idx2}<img src={img2[idx2]} alt="Item" class="w-full h-full object-contain transition-all" />{/key}
            </div>
            <button on:click={() => idx2 = (idx2 + 1) % img2.length} class="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-[0.2em] hover:border-blue-500 transition-all">Ver más ({idx2 + 1}/4)</button>
        </div>
        <div class="max-w-lg text-left"><h1 class="text-5xl font-extrabold text-white uppercase tracking-[0.2em]">ATUENDOS <span class="block text-blue-500 italic"></span></h1></div>
    </div>
</section>

<section class="flex items-center justify-center py-24 relative overflow-hidden border-b border-white/5">
    <img src="/itemfondo3.png" alt="" class="absolute inset-0 w-full h-full object-cover opacity-20 -z-10" />
    <div class="max-w-6xl w-full px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div class="w-full md:w-1/2 flex flex-col items-center gap-6">
            <div class="w-full aspect-square max-w-sm bg-neutral-900/50 border border-white/10 rounded-3xl p-4 flex items-center justify-center">
                {#key idx3}<img src={img3[idx3]} alt="Item" class="w-full h-full object-contain transition-all" />{/key}
            </div>
            <button on:click={() => idx3 = (idx3 + 1) % img3.length} class="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-[0.2em] hover:border-red-500 transition-all">Ver más ({idx3 + 1}/4)</button>
        </div>
        <div class="max-w-lg text-right"><h1 class="text-5xl font-extrabold text-white uppercase tracking-[0.2em]">Armas <span class="block text-red-500 italic">Mythic</span></h1></div>
    </div>
</section>

<section class="flex items-center justify-center py-24 relative overflow-hidden">
    <img src="/itemfondo4.jpg" alt="" class="absolute inset-0 w-full h-full object-cover opacity-20 -z-10" />
    <div class="max-w-6xl w-full px-6 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        <div class="w-full md:w-1/2 flex flex-col items-center gap-6">
            <div class="w-full aspect-square max-w-sm bg-neutral-900/50 border border-white/10 rounded-3xl p-4 flex items-center justify-center">
                {#key idx4}<img src={img4[idx4]} alt="Item" class="w-full h-full object-contain transition-all" />{/key}
            </div>
            <button on:click={() => idx4 = (idx4 + 1) % img4.length} class="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-[0.2em] hover:border-purple-500 transition-all">Ver más ({idx4 + 1}/4)</button>
        </div>
        <div class="max-w-lg text-left"><h1 class="text-5xl font-extrabold text-white uppercase tracking-[0.2em]">Armaduras <span class="block text-purple-500 italic">Epic</span></h1></div>
    </div>
</section>

