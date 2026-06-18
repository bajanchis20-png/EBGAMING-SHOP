<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
    import Icon from "@iconify/svelte";
    import { db } from "$lib/firebase"; 
    import { collection, addDoc } from "firebase/firestore"; 

    let nombre = "";
    let pedido = "";
    // let contacto = "";

    function enviarPedido() {
        if (!nombre || !pedido) return;

        window.open(`https://api.whatsapp.com/send/?phone=584149430559&text=Hola, soy ${nombre} ${pedido}`)
        // try {
        //     await addDoc(collection(db, "pedidos"), {
        //         nombre: nombre,
        //         pedido: pedido,
        //         contacto: contacto,
        //         fecha: new Date()
        //     });
        //     alert("¡Pedido recibido con éxito!");
        //     nombre = ""; pedido = ""; contacto = "";
        // } catch (e) {
        //     console.error("Error al enviar: ", e);
        // }
    }
</script>

<section class="relative w-full bg-[#030303] py-20 px-6 overflow-hidden">
    <!-- Video de fondo -->
    <div class="absolute inset-0 z-0">
        <video autoplay loop muted playsinline class="w-full h-full object-cover">
            <source src="/videonewfinal2.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-[#030303]/40"></div>
    </div>

    <!-- Contenido -->
    <div class="relative z-10 max-w-7xl mx-auto flex flex-col items-start justify-center min-h-[50vh]">
        <div class="space-y-8 max-w-3xl">
            <h1 class="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                Equípate como un 
                <span class="block mt-4 text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-amber-600 drop-shadow-[0_0_30px_rgba(245,158,11,0.4)] italic">
                    Dios
                </span>
            </h1>
            
            <p class="text-neutral-400 font-medium tracking-[0.15em] uppercase text-xs md:text-base leading-relaxed  pl-4 md:pl-6">
                Domina cada rincón del reino con items de élite. Seguridad absoluta, transacciones blindadas y entrega inmediata en Metin2 Guabina, Metin2.es & Albion online.
            </p>

            <!-- Grid de botones -->
            <div class="grid grid-cols-2 md:flex md:flex-wrap gap-3 pt-4 w-full">
    
                <a href="/catalogo" class="col-span-1 px-4 text-center relative group overflow-hidden bg-white/5 border border-amber-800/30 text-white font-black uppercase text-[10px] md:text-xs tracking-widest py-3 rounded-lg transition-all duration-500 hover:border-amber-400/80 shadow-lg">
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <span class="relative z-10 text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Catálogo</span>
                </a>

                <a href="/items" class="col-span-1 px-4 text-center relative group overflow-hidden bg-white/5 border border-amber-800/30 text-white font-black uppercase text-[10px] md:text-xs tracking-widest py-3 rounded-lg transition-all duration-500 hover:border-amber-400/80 shadow-lg">
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <span class="relative z-10 text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Items</span>
                </a>

                <a href="/seguridad-garantia" class="col-span-1 px-4 text-center relative group overflow-hidden bg-white/5 border border-amber-800/30 text-white font-black uppercase text-[10px] md:text-xs tracking-widest py-3 rounded-lg transition-all duration-500 hover:border-amber-400/80 shadow-lg">
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <span class="relative z-10 text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Referencias</span>
                </a>

                <a href="/metodos-de-pago" target="_blank" rel="noreferrer" class="col-span-1 px-4 text-center relative group overflow-hidden bg-white/5 border border-amber-800/30 text-white font-black uppercase text-[10px] md:text-xs tracking-widest py-3 rounded-lg transition-all duration-500 hover:border-amber-400/80 shadow-lg">
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <span class="relative z-10 text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Pagos</span>
                </a>

                <a href="/albion-online" class="col-span-1 px-4 text-center relative group overflow-hidden bg-white/5 border border-amber-800/30 text-white font-black uppercase text-[10px] md:text-xs tracking-widest py-3 rounded-lg transition-all duration-500 hover:border-amber-400/80 shadow-lg">
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <span class="relative z-10 text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Albion</span>
                </a>

                <a href="/vista-previa" class="col-span-1 px-4 text-center relative group overflow-hidden bg-white/5 border border-amber-800/30 text-white font-black uppercase text-[10px] md:text-xs tracking-widest py-3 rounded-lg transition-all duration-500 hover:border-amber-400/80 shadow-lg">
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <span class="relative z-10 text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Metin2.es</span>
                </a>

                <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola, EBGAMING SHOP, tengo unas dudas sobre..." target="_blank" rel="noreferrer" class="col-span-2 px-4 text-center relative group overflow-hidden bg-white/5 border border-amber-800/30 text-white font-black uppercase text-[10px] md:text-xs tracking-widest py-3 rounded-lg transition-all duration-500 hover:border-amber-400/80 shadow-lg">
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <span class="relative z-10 text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Soporte 24/7</span>
                </a>
            </div>
        </div>
    </div>
</section>
<section class="py-32 bg-[#030303] border-t border-white/5 relative overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-30">
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/40 rounded-full blur-[160px]"></div>
        <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-900/30 rounded-full blur-[160px]"></div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-8">
        <div class="flex flex-col items-center mb-24 text-center">
            <h2 class="text-white text-xs md:text-sm font-black uppercase tracking-[0.5em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-amber-200 mb-6 flex items-center gap-3">
                
            </h2>
            <h3 class="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <span class="block">Haz tu pedido</span>
                <span class="block text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-amber-500 italic drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]">Domina el juego</span>
            </h3>
        </div>

        <form on:submit|preventDefault={enviarPedido} class="bg-[#050505] p-10 md:p-12 rounded-3xl border border-white/5 shadow-[0_20px_100px_rgba(0,0,0,0.5)] relative">
            
            <div class="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            <div class="grid grid-cols-1 gap-6 mb-6">
                <input bind:value={nombre} placeholder="Tu Nombre" required 
                       class="bg-black/80 border border-blue-900/30 p-5 text-white rounded-xl placeholder:text-neutral-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-300 shadow-inner" />
                
                <!-- <input bind:value={contacto} placeholder="WhatsApp (con codigo de area)" required 
                       class="bg-black/80 border border-blue-900/30 p-5 text-white rounded-xl placeholder:text-neutral-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-300 shadow-inner" /> -->
            </div>

            <textarea bind:value={pedido} placeholder="Describe los items que necesitas (Guabina, .es o Albion.)" required 
                      class="w-full bg-black/80 border border-blue-900/30 p-5 text-white rounded-xl placeholder:text-neutral-600 h-40 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-300 shadow-inner mb-8"></textarea>
            
            <button type="submit" class="w-full relative group overflow-hidden bg-white/5 border border-amber-800/30 text-white font-black uppercase text-sm tracking-widest py-6 rounded-xl transition-all duration-500 hover:border-amber-400/80 shadow-lg shadow-black/30">
                
                <div class="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"></div>
                
                <span class="relative z-10 text-white group-hover:text-black transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                    Realizar pedido
                </span>
            </button>
        </form>
    </div>
</section>

<section class="py-24 bg-[#05070d] relative border-b border-blue-900/40">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>

    <div class="max-w-6xl mx-auto px-8">
        <div class="flex flex-col items-center mb-20 text-center">
            <h2 class="text-blue-600/80 text-xs font-black uppercase tracking-[0.4em] mb-4">Grupos más activos</h2>
            <h3 class="text-4xl md:text-5xl font-black text-white uppercase tracking-tight drop-shadow-sm">Únete a la Comunidad</h3>
         
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {#each 
                [
                    { title: "Metin2 Guabina", sub: "7.000 Usuarios", link: "https://www.facebook.com/groups/126085554213066" },
                    { title: "Albion Online", sub: "22.000 Usuarios", link: "https://www.facebook.com/groups/ALBI0NONLINE" },
                    { title: "EBGAMING SHOP", sub: "Pagina Oficial", link: "https://www.facebook.com/Metin2Guabinaventaseb" }
                ] as item
            }
                <a href={item.link} target="_blank" rel="noreferrer" 
                   class="group relative flex flex-col items-center py-12 px-6 bg-gradient-to-br from-[#0a0f1d] to-[#05070d] border border-blue-900/30 hover:border-yellow-600/50 transition-all duration-500 hover:-translate-y-2 rounded-xl shadow-lg hover:shadow-yellow-900/10">
                    
                    <div class="absolute inset-0 bg-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                    <div class="relative z-10 mb-6 text-blue-900 group-hover:text-yellow-600 transition-all duration-500">
                        <Icon icon="devicon:facebook" class="w-12 h-12" />
                    </div>

                    <h4 class="relative z-10 text-white font-black text-lg uppercase tracking-widest mb-2 group-hover:text-yellow-400 transition-colors">
                        {item.title}
                    </h4>
                    <p class="relative z-10 text-blue-200/40 text-[10px] uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">
                        {item.sub}
                    </p>
                </a>
            {/each}
        </div>
    </div>
</section>
