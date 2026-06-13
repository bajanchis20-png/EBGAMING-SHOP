<script>
    let { titulo, img, descripcion } = $props();
    import Icon from "@iconify/svelte";
</script>

<div class="relative w-full bg-[#0a0f1d] border border-blue-900/40 p-0.5 overflow-hidden group transition-all duration-500 hover:border-yellow-600/50">
    
    <div class="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div class="relative flex flex-col md:flex-row bg-[#080b16]">
        
        <div class="relative w-full md:w-80 h-64 md:h-auto flex-shrink-0 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-[#080b16] via-transparent to-transparent z-10"></div>
            <img 
                src={img} 
                alt={titulo} 
                class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-600 z-20"></div>
        </div>

        <div class="flex-1 p-8 relative flex flex-col justify-between">
            
            <div class="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-black/40 border border-yellow-600/30">
                <span class="w-2 h-2 bg-yellow-500 animate-pulse shadow-[0_0_8px_#eab308]"></span>
                <span class="text-[9px] font-black uppercase tracking-[0.2em] text-yellow-500">En stock</span>
            </div>

            <div class="space-y-4 pt-4">
                <h2 class="text-4xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 uppercase tracking-tighter drop-shadow-lg">
                    {titulo}
                </h2>
                <p class="text-blue-200/50 text-sm leading-relaxed max-w-md font-medium border-l-2 border-blue-900/50 pl-4">
                    {descripcion}
                </p>
            </div>

            <div class="mt-8">
                <a href={"https://api.whatsapp.com/send/?phone=584149430559&text=Hola, estoy interesado en obtener " + titulo} target="_blank" rel="noreferrer">
                    <button class="relative w-full md:w-auto px-10 py-4 bg-[#0a0f1d] border border-yellow-600/50 text-white font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 overflow-hidden group transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(202,138,4,0.3)] hover:scale-[1.02] active:scale-[0.98]">
                        
                        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        
                        <span class="relative z-10 flex items-center gap-3 text-yellow-500 group-hover:text-white transition-colors duration-300">
                            <Icon icon="ic:baseline-whatsapp" width={20} />
                            Obtener Item
                        </span>
                    </button>
                </a>
            </div>
        </div>
    </div>
</div>

<style>
    @keyframes shimmer {
        100% { transform: translateX(100%); }
    }
</style>