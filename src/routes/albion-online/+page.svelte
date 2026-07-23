<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";

    let cart = $state([]);
    let isCartOpen = $state(false);

    const whatsappNumber = "584149430559"; 

    const albionProducts = [
        { titulo: "ALBION ONLINE", img: "/albion.jpeg", descripcion: "Silver & Cuentas en Albion Online" }
    ];

    function addToCart(titulo) {
        const existingItem = cart.find(item => item.titulo === titulo);
        
        if (existingItem) {
            existingItem.cantidad += 1;
        } else {
            cart.push({ titulo, cantidad: 1 });
        }
    }

    function updateQuantity(index, delta) {
        cart[index].cantidad += delta;
        if (cart[index].cantidad <= 0) {
            cart.splice(index, 1);
        }
    }

    function removeItem(index) {
        cart.splice(index, 1);
    }

    let totalItems = $derived(cart.reduce((sum, item) => sum + item.cantidad, 0));

    function checkout() {
        if (cart.length === 0) return;
        
        let message = "¡Hola! Me gustaría consultar por los siguientes productos de Albion Online:%0A%0A";
        cart.forEach(item => {
            message += `- ${item.cantidad}x *${item.titulo}* (Consultar)%0A`;
        });
        message += `%0A*Estado: Consultar precio*`;
        
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        
        cart = [];
        isCartOpen = false;
    }
</script>

<section class="relative min-h-[75vh] flex items-center bg-[#05070d] overflow-hidden border-b border-blue-900/30 py-20">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(30,58,138,0.2)_0%,_transparent_50%)]"></div>

    <div class="max-w-7xl mx-auto w-full px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center z-10">
        <div class="space-y-8">
            <h1 class="text-5xl md:text-8xl font-black text-white uppercase tracking-[-0.04em] leading-[0.9]">
                Albion <br/>
                <span class="inline-block animate-shimmer bg-[linear-gradient(90deg,theme(colors.blue.400),theme(colors.blue.600),theme(colors.yellow.600),theme(colors.blue.600),theme(colors.blue.400))] bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(37,99,235,0.3)]">
                    Online
                </span>
            </h1>

            <style>
                @keyframes shimmer {
                    0% { background-position: 100% 50%; }
                    100% { background-position: -100% 50%; }
                }
                .animate-shimmer { 
                    animation: shimmer 4s linear infinite; 
                }
            </style>
            
            <p class="text-blue-200/60 text-base font-bold leading-relaxed max-w-md border-l border-blue-900 pl-6 uppercase">
                Abastecimiento directo, mercado de alta gama y protección total contra baneos. Tu acceso premium al reino empieza aquí.
            </p>
        </div>

        <div class="relative group">
            <div class="absolute -inset-0.5 bg-gradient-to-br from-blue-600/30 to-yellow-900/30 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-700"></div>
            
            <div class="relative bg-[#0a0f1d] p-1.5 rounded-2xl border border-blue-900/50 shadow-2xl">
                <div class="relative rounded-[14px] overflow-hidden aspect-video">
                    <video src="video5.mp4" autoplay loop muted playsinline class="w-full h-full object-cover"></video>
                    <div class="absolute inset-0 bg-gradient-to-tr from-[#05070d]/60 to-transparent"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="max-w-7xl mx-auto py-24 px-4 md:px-8 relative">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
        
        <div class="flex justify-center items-center">
            <div class="relative group w-fit">
                <div class="absolute -inset-1 bg-gradient-to-br from-blue-700/20 to-yellow-700/20 rounded-3xl blur-xl group-hover:opacity-100 transition duration-700"></div>
                <div class="relative bg-[#0a0f1d] p-1 rounded-3xl border border-blue-900/50">
                    <Nuevatarjeta 
                        titulo="ALBION ONLINE" 
                        img="/albion.jpeg" 
                        descripcion="Silver & Cuentas en Albion Online" 
                        onAddToCart={() => addToCart("ALBION ONLINE")}
                    />
                </div>
            </div>
        </div>

        <div class="space-y-10">
            <h3 class="text-3xl md:text-4xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                <span class="w-2 h-10 bg-yellow-600 rounded-full flex-shrink-0"></span>
                Protocolo<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-500"> de Seguridad</span>
            </h3>
            <p class="text-blue-200/60 leading-relaxed font-bold border-l-2 border-yellow-600/50 pl-6 uppercase">
                Tu cuenta principal nunca entra en contacto con trade sospechoso. Implementamos una <span class="text-yellow-500">capa de transferencia aislada</span> para camuflar el origen de los recursos. Para garantizar tu seguridad, implementamos un sistema de transferencia única, te proporcionamos acceso total a una <span class="text-yellow-500">cuenta con la que podrás hacer una única transferencia</span> a través del gremio. Este procedimiento asegura total discreción, y recuerda qué tu seguridad es la nuestra.
            </p>
        </div>
    </div>

    <!-- Botón Flotante del Carrito -->
    <button 
        onclick={() => isCartOpen = !isCartOpen}
        class="fixed bottom-6 right-6 z-50 bg-yellow-500 hover:bg-yellow-400 text-black font-black p-4 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.5)] flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Abrir Carrito"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {#if totalItems > 0}
            <span class="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold border-2 border-[#0a0f1d]">
                {totalItems}
            </span>
        {/if}
    </button>

    <!-- Panel Deslizante del Carrito (Drawer) -->
    {#if isCartOpen}
        <div class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end transition-opacity">
            <div class="w-full max-w-md bg-[#0a0f1d] border-l border-blue-900/50 h-full p-6 flex flex-col justify-between shadow-2xl">
                <div>
                    <div class="flex items-center justify-between pb-4 border-b border-blue-900/50">
                        <h3 class="text-2xl font-black uppercase text-white tracking-wider flex items-center gap-2">
                            <span class="text-yellow-500">🛒</span> Tu Carrito
                        </h3>
                        <button onclick={() => isCartOpen = false} class="text-blue-200/50 hover:text-white text-xl font-bold">
                            ✕
                        </button>
                    </div>

                    <div class="mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                        {#if cart.length === 0}
                            <p class="text-blue-200/50 text-center py-12 uppercase tracking-widest text-sm">Tu carrito está vacío</p>
                        {:else}
                            {#each cart as item, index}
                                <div class="flex items-center justify-between bg-black/40 border border-blue-900/30 p-3 rounded-lg relative group/item">
                                    <div class="flex-1 pr-2">
                                        <h4 class="text-white text-xs font-bold uppercase">{item.titulo}</h4>
                                        <p class="text-yellow-400 text-xs font-semibold mt-1 uppercase tracking-wider">Consultar</p>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <div class="flex items-center gap-2">
                                            <button onclick={() => updateQuantity(index, -1)} class="w-7 h-7 bg-blue-900/40 text-white rounded font-bold hover:bg-blue-800">-</button>
                                            <span class="text-sm font-bold text-white w-5 text-center">{item.cantidad}</span>
                                            <button onclick={() => updateQuantity(index, 1)} class="w-7 h-7 bg-blue-900/40 text-white rounded font-bold hover:bg-blue-800">+</button>
                                        </div>
                                        <button onclick={() => removeItem(index)} class="text-red-400 hover:text-red-300 font-bold px-2 py-1 text-sm transition-colors" title="Eliminar producto">
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            {/each}
                        {/if}
                    </div>
                </div>

                <div class="pt-6 border-t border-blue-900/50">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-blue-200/70 uppercase tracking-widest text-xs font-bold">Precio total:</span>
                        <span class="text-lg font-black text-yellow-400 uppercase tracking-wider">Consultar</span>
                    </div>
                    <button 
                        onclick={checkout}
                        disabled={cart.length === 0}
                        class="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed text-black font-black uppercase tracking-widest py-4 rounded-xl shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all flex items-center justify-center gap-2"
                    >
                        <span>💬</span> Consultar Pedido (WhatsApp)
                    </button>
                </div>
            </div>
        </div>
    {/if}
</section>