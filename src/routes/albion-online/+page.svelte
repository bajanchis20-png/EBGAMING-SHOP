<script>
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";
    import Icon from "@iconify/svelte";

    let cart = $state([]);
    let isCartOpen = $state(false);
    let selectedPayment = $state("");

    const whatsappNumber = "584149430559"; 

    const paymentMethods = [
        { id: "colombia", name: "Colombia (Nequi)", icon: "circle-flags:co" },
        { id: "eeuu", name: "EE.UU. (Zelle)", icon: "circle-flags:us" },
        { id: "ecuador", name: "Ecuador (Pichincha)", icon: "circle-flags:ec" },
        { id: "espana", name: "España (Bizum)", icon: "circle-flags:es" },
        { id: "brasil", name: "Brasil (Pix)", icon: "circle-flags:br" },
        { id: "chile", name: "Chile (Banco Estado)", icon: "circle-flags:cl" },
        { id: "peru", name: "Perú (BCP)", icon: "circle-flags:pe" },
        { id: "mexico", name: "México (Bancomer)", icon: "circle-flags:mx" },
        { id: "argentina", name: "Argentina (Mercado Pago)", icon: "circle-flags:ar" },
        { id: "rd", name: "Rep. Dom. (Banreservas)", icon: "circle-flags:do" },
        { id: "uruguay", name: "Uruguay (Prex)", icon: "circle-flags:uy" },
        { id: "binance", name: "Binance", icon: "cryptocurrency:bnb" },
        { id: "paypal", name: "PayPal", icon: "logos:paypal" },
        { id: "zinli", name: "Zinli", icon: "solar:card-bold-duotone" }
    ];

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
        
        if (selectedPayment) {
            const method = paymentMethods.find(m => m.id === selectedPayment);
            if (method) {
                message += `%0A*Método de pago seleccionado:* ${method.name}%0A`;
            }
        }
        
        message += `%0A*Estado: Consultar precio*`;
        
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        
        cart = [];
        selectedPayment = "";
        isCartOpen = false;
    }
</script>

<!-- Hero Section -->
<section class="relative min-h-[70vh] md:min-h-[75vh] flex items-center bg-[#05070d] overflow-hidden border-b border-blue-900/30 py-12 md:py-20">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(30,58,138,0.2)_0%,_transparent_50%)]"></div>

    <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center z-10">
        <div class="space-y-6 md:space-y-8 text-center lg:text-left">
            <h1 class="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-[-0.04em] leading-[0.95]">
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
            
            <p class="text-blue-200/70 text-sm sm:text-base font-bold leading-relaxed max-w-md mx-auto lg:mx-0 border-l-0 lg:border-l border-blue-900 pl-0 lg:pl-6 uppercase">
                Abastecimiento directo, mercado de alta gama y protección total contra baneos. Tu acceso premium al reino empieza aquí.
            </p>
        </div>

        <div class="relative group w-full max-w-lg mx-auto lg:max-w-none">
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

<!-- Content & Protocol Section -->
<section class="max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <div class="flex justify-center items-center order-2 lg:order-1">
            <div class="relative group w-full max-w-sm sm:max-w-md flex justify-center">
                <div class="absolute -inset-1 bg-gradient-to-br from-blue-700/20 to-yellow-700/20 rounded-3xl blur-xl group-hover:opacity-100 transition duration-700"></div>
                <div class="relative bg-[#0a0f1d] p-1 rounded-3xl border border-blue-900/50 w-full flex justify-center">
                    <Nuevatarjeta 
                        titulo="ALBION ONLINE" 
                        img="/albion.jpeg" 
                        descripcion="Silver & Cuentas en Albion Online" 
                        onAddToCart={() => addToCart("ALBION ONLINE")}
                    />
                </div>
            </div>
        </div>

        <div class="space-y-6 md:space-y-10 order-1 lg:order-2 text-center lg:text-left">
            <h3 class="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight flex items-center justify-center lg:justify-start gap-3">
                <span class="w-2 h-8 sm:h-10 bg-yellow-600 rounded-full flex-shrink-0"></span>
                Protocolo<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-500"> de Seguridad</span>
            </h3>
            <p class="text-blue-200/70 text-sm sm:text-base leading-relaxed font-bold border-l-0 lg:border-l-2 border-yellow-600/50 pl-0 lg:pl-6 uppercase">
                Tu cuenta principal nunca entra en contacto con trade sospechoso. Implementamos una <span class="text-yellow-500">capa de transferencia aislada</span> para camuflar el origen de los recursos. Para garantizar tu seguridad, implementamos un sistema de transferencia única, te proporcionamos acceso total a una <span class="text-yellow-500">cuenta con la que podrás hacer una única transferencia</span> a través del gremio. Este procedimiento asegura total discreción, y recuerda qué tu seguridad es la nuestra.
            </p>
        </div>
    </div>

    <!-- Botón Flotante del Carrito -->
    <button 
        onclick={() => isCartOpen = !isCartOpen}
        class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-yellow-500 hover:bg-yellow-400 text-black font-black p-3.5 sm:p-4 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.5)] flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
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
            <div class="w-full max-w-md bg-[#0a0f1d] border-l border-blue-900/50 h-full p-4 sm:p-6 flex flex-col justify-between shadow-2xl">
                <div class="overflow-y-auto pr-1 flex-1">
                    <div class="flex items-center justify-between pb-4 border-b border-blue-900/50">
                        <h3 class="text-xl sm:text-2xl font-black uppercase text-white tracking-wider flex items-center gap-2">
                            <span class="text-yellow-500">🛒</span> Tu Carrito
                        </h3>
                        <button onclick={() => isCartOpen = false} class="text-blue-200/50 hover:text-white text-xl font-bold p-1 cursor-pointer">
                            ✕
                        </button>
                    </div>

                    <div class="mt-6 space-y-4">
                        {#if cart.length === 0}
                            <p class="text-blue-200/50 text-center py-12 uppercase tracking-widest text-xs sm:text-sm">Tu carrito está vacío</p>
                        {:else}
                            {#each cart as item, index}
                                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-black/40 border border-blue-900/30 p-3 rounded-lg relative group/item">
                                    <div class="flex-1 w-full sm:w-auto">
                                        <h4 class="text-white text-xs font-bold uppercase">{item.titulo}</h4>
                                        <p class="text-yellow-400 text-xs font-semibold mt-1 uppercase tracking-wider">Consultar</p>
                                    </div>
                                    <div class="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3">
                                        <div class="flex items-center gap-2">
                                            <button onclick={() => updateQuantity(index, -1)} class="w-7 h-7 bg-blue-900/40 text-white rounded font-bold hover:bg-blue-800 flex items-center justify-center cursor-pointer">-</button>
                                            <span class="text-sm font-bold text-white w-5 text-center">{item.cantidad}</span>
                                            <button onclick={() => updateQuantity(index, 1)} class="w-7 h-7 bg-blue-900/40 text-white rounded font-bold hover:bg-blue-800 flex items-center justify-center cursor-pointer">+</button>
                                        </div>
                                        <button onclick={() => removeItem(index)} class="text-red-400 hover:text-red-300 font-bold px-2 py-1 text-sm transition-colors cursor-pointer" title="Eliminar producto">
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            {/each}
                        {/if}
                    </div>

                    {#if cart.length > 0}
                        <div class="mt-6 pt-4 border-t border-blue-900/50">
                            <label class="block text-blue-200/70 uppercase tracking-widest text-[11px] sm:text-xs font-bold mb-2">Selecciona método de pago:</label>
                            <div class="space-y-2 max-h-44 sm:max-h-52 overflow-y-auto pr-1">
                                {#each paymentMethods as method}
                                    <button
                                        type="button"
                                        onclick={() => selectedPayment = method.id}
                                        class={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border text-xs font-medium transition-all text-left cursor-pointer ${selectedPayment === method.id ? 'bg-yellow-500/10 border-yellow-500 text-yellow-400' : 'bg-[#121828] border-blue-900/50 text-white hover:border-blue-700'}`}
                                    >
                                        <span class="inline-flex items-center justify-center w-5 h-5 overflow-hidden rounded-full flex-shrink-0 bg-transparent">
                                            <Icon icon={method.icon} class="w-full h-full object-cover" />
                                        </span>
                                        <span class="truncate">{method.name}</span>
                                    </button>
                                {/each}
                            </div>
                        </div>
                    {/if}
                </div>

                <div class="pt-6 border-t border-blue-900/50 mt-4">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-blue-200/70 uppercase tracking-widest text-xs font-bold">Precio total:</span>
                        <span class="text-base sm:text-lg font-black text-yellow-400 uppercase tracking-wider">Consultar</span>
                    </div>
                    <button 
                        onclick={checkout}
                        disabled={cart.length === 0}
                        class="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed text-black font-black uppercase tracking-widest text-xs sm:text-sm py-3.5 sm:py-4 rounded-xl shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <span>💬</span> Consultar Pedido (WhatsApp)
                    </button>
                </div>
            </div>
        </div>
    {/if}
</section>