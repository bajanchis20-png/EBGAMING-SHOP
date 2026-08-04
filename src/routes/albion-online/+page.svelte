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

<!-- Hero Section (Estilo Nintendo Switch) -->
<section class="relative min-h-[70vh] md:min-h-[75vh] flex items-center bg-[#f5f5f7] overflow-hidden border-b-4 border-red-600 py-12 md:py-20 font-sans">
    <!-- Patrón de puntos sutil característico -->
    <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#e60012_1px,transparent_1px)] [background-size:16px_16px]"></div>

    <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center z-10">
        <div class="space-y-6 md:space-y-8 text-center lg:text-left">
            <div class="inline-block bg-red-600 text-white font-black text-xs uppercase tracking-[0.3em] px-4 py-1.5 rounded-full shadow-[0_4px_0_#99000a] transform -rotate-1">
                Edición Coleccionista
            </div>
            
            <h1 class="text-5xl sm:text-7xl md:text-8xl font-black text-neutral-900 uppercase tracking-[-0.03em] leading-[0.9]">
                Albion <br/>
                <span class="text-red-600 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)]">
                    Online
                </span>
            </h1>
            
            <p class="text-neutral-600 text-sm sm:text-base font-bold leading-relaxed max-w-md mx-auto lg:mx-0 border-l-4 border-red-600 pl-4 uppercase">
                Abastecimiento directo, mercado de alta gama y protección total contra baneos. Tu acceso premium al reino empieza aquí.
            </p>
        </div>

        <div class="relative group w-full max-w-lg mx-auto lg:max-w-none">
            <div class="absolute -inset-2 bg-gradient-to-r from-red-600 to-neutral-900 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-700"></div>
            
            <div class="relative bg-white p-3 rounded-[2rem] border-4 border-neutral-900 shadow-[8px_8px_0px_0px_#171717]">
                <div class="relative rounded-2xl overflow-hidden aspect-video bg-neutral-900 border-2 border-neutral-900">
                    <video src="video5.mp4" autoplay loop muted playsinline class="w-full h-full object-cover"></video>
                    <div class="absolute inset-0 bg-gradient-to-tr from-neutral-950/40 to-transparent"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Content & Protocol Section (Estilo Nintendo Switch) -->
<section class="max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative bg-[#f5f5f7]">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <div class="flex justify-center items-center order-2 lg:order-1">
            <div class="relative group w-full max-w-sm sm:max-w-md flex justify-center">
                <div class="absolute -inset-2 bg-red-600/20 rounded-[2.5rem] blur-lg group-hover:opacity-100 transition duration-700"></div>
                <div class="relative bg-white p-3 rounded-[2rem] border-4 border-neutral-900 shadow-[8px_8px_0px_0px_#171717] w-full flex justify-center">
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
            <h3 class="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 uppercase tracking-tight flex items-center justify-center lg:justify-start gap-3">
                <span class="w-3 h-8 sm:h-10 bg-red-600 rounded-full flex-shrink-0 shadow-[2px_2px_0px_#171717]"></span>
                Protocolo<span class="text-red-600"> de Seguridad</span>
            </h3>
            <p class="text-neutral-700 text-sm sm:text-base leading-relaxed font-bold border-l-4 border-neutral-900 pl-4 uppercase shadow-sm">
                Tu cuenta principal nunca entra en contacto con trade sospechoso. Implementamos una <span class="text-red-600 font-black">capa de transferencia aislada</span> para camuflar el origen de los recursos. Para garantizar tu seguridad, implementamos un sistema de transferencia única, te proporcionamos acceso total a una <span class="text-red-600 font-black">cuenta con la que podrás hacer una única transferencia</span> a través del gremio. Este procedimiento asegura total discreción, y recuerda qué tu seguridad es la nuestra.
            </p>
        </div>
    </div>

    <!-- Botón Flotante del Carrito (Estilo Nintendo Switch / Joy-Con) -->
    <button 
        onclick={() => isCartOpen = !isCartOpen}
        class="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-500 text-white font-black p-4 rounded-full shadow-[4px_4px_0px_0px_#171717] flex items-center justify-center transition-transform hover:scale-110 cursor-pointer border-3 border-neutral-900"
        aria-label="Abrir Carrito"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {#if totalItems > 0}
            <span class="absolute -top-2 -right-2 bg-neutral-900 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-black border-2 border-white shadow">
                {totalItems}
            </span>
        {/if}
    </button>

    <!-- Panel Deslizante del Carrito (Drawer Estilo Nintendo) -->
    {#if isCartOpen}
        <div class="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm flex justify-end transition-opacity">
            <div class="w-full max-w-md bg-white border-l-4 border-neutral-900 h-full p-4 sm:p-6 flex flex-col justify-between shadow-2xl">
                <div class="overflow-y-auto pr-1 flex-1">
                    <div class="flex items-center justify-between pb-4 border-b-2 border-neutral-200">
                        <h3 class="text-xl sm:text-2xl font-black uppercase text-neutral-900 tracking-wider flex items-center gap-2">
                            <span class="bg-red-600 text-white p-1 rounded-lg text-sm shadow-[2px_2px_0px_#171717]">🛒</span> Tu Carrito
                        </h3>
                        <button onclick={() => isCartOpen = false} class="text-neutral-500 hover:text-neutral-900 text-xl font-black p-1 cursor-pointer bg-neutral-100 hover:bg-red-600 hover:text-white rounded-lg transition-colors px-2.5">
                            ✕
                        </button>
                    </div>

                    <div class="mt-6 space-y-4">
                        {#if cart.length === 0}
                            <p class="text-neutral-400 text-center py-12 uppercase tracking-widest text-xs sm:text-sm font-bold">Tu carrito está vacío</p>
                        {:else}
                            {#each cart as item, index}
                                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-neutral-50 border-2 border-neutral-900 p-3 rounded-xl relative shadow-[3px_3px_0px_0px_#171717]">
                                    <div class="flex-1 w-full sm:w-auto">
                                        <h4 class="text-neutral-900 text-xs font-black uppercase">{item.titulo}</h4>
                                        <p class="text-red-600 text-xs font-bold mt-1 uppercase tracking-wider">Consultar</p>
                                    </div>
                                    <div class="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3">
                                        <div class="flex items-center gap-1.5 bg-white border-2 border-neutral-900 rounded-lg p-0.5">
                                            <button onclick={() => updateQuantity(index, -1)} class="w-6 h-6 bg-neutral-100 text-neutral-900 rounded font-black hover:bg-neutral-200 flex items-center justify-center cursor-pointer">-</button>
                                            <span class="text-xs font-black text-neutral-900 w-5 text-center">{item.cantidad}</span>
                                            <button onclick={() => updateQuantity(index, 1)} class="w-6 h-6 bg-neutral-100 text-neutral-900 rounded font-black hover:bg-neutral-200 flex items-center justify-center cursor-pointer">+</button>
                                        </div>
                                        <button onclick={() => removeItem(index)} class="text-red-600 hover:text-red-800 font-black px-2 py-1 text-sm transition-colors cursor-pointer" title="Eliminar producto">
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            {/each}
                        {/if}
                    </div>

                    {#if cart.length > 0}
                        <div class="mt-6 pt-4 border-t-2 border-neutral-200">
                            <label class="block text-neutral-700 uppercase tracking-widest text-[11px] sm:text-xs font-black mb-2">Selecciona método de pago:</label>
                            <div class="space-y-2 max-h-44 sm:max-h-52 overflow-y-auto pr-1">
                                {#each paymentMethods as method}
                                    <button
                                        type="button"
                                        onclick={() => selectedPayment = method.id}
                                        class={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border-2 text-xs font-bold transition-all text-left cursor-pointer ${selectedPayment === method.id ? 'bg-red-50 border-red-600 text-red-700 shadow-[2px_2px_0px_#e60012]' : 'bg-white border-neutral-300 text-neutral-800 hover:border-neutral-900'}`}
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

                <div class="pt-6 border-t-2 border-neutral-200 mt-4">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-neutral-500 uppercase tracking-widest text-xs font-black">Precio total:</span>
                        <span class="text-base sm:text-lg font-black text-red-600 uppercase tracking-wider">Consultar</span>
                    </div>
                    <button 
                        onclick={checkout}
                        disabled={cart.length === 0}
                        class="w-full bg-red-600 hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black uppercase tracking-widest text-xs sm:text-sm py-3.5 sm:py-4 rounded-xl border-2 border-neutral-900 shadow-[4px_4px_0px_0px_#171717] transition-all flex items-center justify-center gap-2 cursor-pointer active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#171717]"
                    >
                        <span>💬</span> Consultar Pedido (WhatsApp)
                    </button>
                </div>
            </div>
        </div>
    {/if}
</section>