<script>
    // Estos son los datos que el componente recibirá desde la página principal
    export let title = "";
    export let colorClass = "text-yellow-500"; // Clase de color para el título
    export let borderHover = "hover:border-yellow-500"; // Clase para el hover del botón
    export let images = []; // Array de rutas de imágenes
    export let reverse = false; // Booleano para invertir el orden (opcional)

    let idx = 0;

    function siguiente() {
        // Lógica simple: si llega al final, vuelve a 0
        idx = (idx + 1) % images.length;
    }
</script>

<section class="py-24 px-6 border-b border-white/5 bg-[#050505]">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-{reverse ? 'row-reverse' : 'row'} items-center justify-between gap-16">
        
        <div class="w-full md:w-1/2 flex flex-col items-center gap-6">
            <div class="w-full max-w-sm aspect-square bg-[#0a0a0c] border border-white/10 rounded-3xl p-6 flex items-center justify-center shadow-2xl">
                {#key idx}
                    <img src={images[idx]} alt={title} class="w-full h-full object-contain animate-in fade-in duration-500" />
                {/key}
            </div>
            
            <button 
                on:click={siguiente} 
                class="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-[0.2em] transition-all hover:bg-white/10 {borderHover}"
            >
                Siguiente ({idx + 1} / {images.length})
            </button>
        </div>

        <div class="w-full md:w-1/2 {reverse ? 'text-left' : 'text-right'}">
            <h1 class="text-6xl font-black text-white uppercase tracking-tighter">
                {title}
                <span class="block {colorClass} italic mt-2">Collection</span>
            </h1>
        </div>
    </div>
</section>