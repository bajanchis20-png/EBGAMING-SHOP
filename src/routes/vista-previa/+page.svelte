<script>
    import Icon from "@iconify/svelte";

    let cart = $state([]);
    let isCartOpen = $state(false);
    let selectedPayment = $state("");

    const whatsappNumber = "584149430559"; 
    const servidores = ["IBERIA", "TEUTONIA", "TIGERHOST", "AZRAEL", "RUBY", "EUROPA"];
    
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

    function addToCart(servidor) {
        const titulo = `METIN2 WON - ${servidor}`;
        const existingItem = cart.find(item => item.titulo === titulo);
        
        if (existingItem) {
            existingItem.cantidad += 1;
        } else {
            cart.push({ titulo, servidor, cantidad: 1, wonsDeseados: 1 });
        }
    }

    function updateQuantity(index, delta) {
        cart[index].cantidad += delta;
        if (cart[index].cantidad <= 0) {
            cart.splice(index, 1);
        }
    }

    function updateWons(index, delta) {
        cart[index].wonsDeseados = Math.max(1, cart[index].wonsDeseados + delta);
    }

    function handleWonInput(index, event) {
        const value = parseInt(event.target.value);
        cart[index].wonsDeseados = isNaN(value) || value < 1 ? 1 : value;
    }

    let totalItems = $derived(cart.reduce((sum, item) => sum + item.cantidad, 0));

    function checkout() {
        if (cart.length === 0) return;
        
        let message = "¡Hola! Me gustaría consultar por los siguientes Wons de Metin2:%0A%0A";
        cart.forEach(item => {
            message += `- ${item.cantidad}x *${item.titulo}* (${item.wonsDeseados} Wons c/u) (Consultar)%0A`;
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

<!-- Hero Section Estilo Nintendo con video calidad.mp4 -->
<section class="relative min-h-[60vh] flex flex-col items-center justify-center py-24 px-4 overflow-hidden bg-[#f5f5f7] border-b-4 border-neutral-900 font-sans">
    <!-- Patrón de puntos sutil característico -->
    <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#e60012_1px,transparent_1px)] [background-size:16px_16px] z-10 pointer-events-none"></div>

    <video src="calidad.mp4" autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover opacity-95 mix-blend-multiply"></video>
    <div class="absolute inset-0 bg-gradient-to-t from-[#f5f5f7] via-[#f5f5f7]/60 to-transparent z-0"></div>

    <div class="relative z-20 max-w-3xl px-6 text-center space-y-8">
        
        <div class="inline-block px-4 py-1.5 rounded-xl bg-white border-2 border-neutral-900 text-red-600 font-black tracking-[0.15em] uppercase shadow-[3px_3px_0px_#171717] transform -rotate-1">
            <span class="text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2">
                <span>⚡</span>
                <span>¡WON DISPONIBLE PARA TU ASCENSO!</span>
            </span>
        </div>

        <h1 class="text-5xl sm:text-7xl md:text-8xl font-black text-neutral-900 tracking-tighter">
            <span class="border-b-4 border-neutral-900 pb-2 inline-block">
                METIN2
            </span>
            <span class="inline-block text-red-600 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)]">
                .ES
            </span>
        </h1>

        <p class="text-neutral-700 text-sm sm:text-lg font-bold uppercase max-w-xl mx-auto">
            Optimiza tu progreso. Obtén <span class="text-neutral-900 font-black italic">Wons</span> con entrega inmediata y asegura tu equipo legendario.
        </p>

        <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noopener noreferrer" class="block w-full max-w-sm mx-auto">
            <button type="button" class="w-full relative group overflow-hidden bg-red-600 border-4 border-neutral-900 text-white font-black uppercase tracking-[0.2em] py-4 sm:py-5 rounded-2xl transition-all duration-300 hover:bg-red-500 shadow-[6px_6px_0px_0px_#171717] cursor-pointer active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_#171717]">
                <span class="relative z-10 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)] text-xs sm:text-sm">
                    Equípate como un Dios
                </span>
            </button>
        </a>
    </div>
</section>

<!-- Server Selection & Cart Section Estilo Nintendo Reordenado -->
<section class="py-20 bg-[#f5f5f7] border-b-4 border-neutral-900 relative overflow-hidden">
    <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#e60012_1px,transparent_1px)] [background-size:16px_16px]"></div>

    <div class="max-w-5xl mx-auto px-6 relative z-10">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <h3 class="text-neutral-900 font-black text-xs sm:text-sm tracking-[0.15em] uppercase text-center sm:text-left">Selecciona tu servidor y añade al carrito</h3>
            <div class="hidden sm:block h-1 flex-1 bg-neutral-900 ml-6"></div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {#each servidores as servidor}
                <button 
                    onclick={() => addToCart(servidor)}
                    class="group relative p-4 bg-white border-4 border-neutral-900 hover:border-red-600 transition-all duration-300 text-center rounded-2xl shadow-[6px_6px_0px_0px_#171717] cursor-pointer flex flex-col justify-between hover:-translate-y-1"
                >
                    <span class="relative z-10 block text-neutral-900 font-black tracking-widest text-xs uppercase group-hover:text-red-600 transition-colors">
                        {servidor}
                    </span>
                    
                    <div class="relative z-10 mt-4 flex flex-col items-center gap-2">
                        <div class="flex justify-center gap-1">
                            <div class="w-2 h-2 rounded-full bg-emerald-500 border border-neutral-900"></div>
                        </div>
                        <span class="text-[9px] font-black text-neutral-700 group-hover:text-red-600 uppercase tracking-wider bg-neutral-100 group-hover:bg-red-50 px-2.5 py-1 rounded-lg border-2 border-neutral-900 transition-colors">
                            + Añadir Won
                        </span>
                    </div>
                </button>
            {/each}
        </div>

        <div class="mt-16 flex justify-center items-center gap-3">
            <span class="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-black">Estado de Stock:</span>
            <div class="flex gap-1.5">
                {#each [1, 2, 3] as _}
                    <div class="h-2 w-8 bg-emerald-500 border border-neutral-900 rounded-md"></div>
                {/each}
            </div>
            <span class="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-2">Optimal</span>
        </div>
    </div>

    <!-- Botón Flotante del Carrito Estilo Nintendo -->
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

                    <div class="mt-4 sm:mt-6 space-y-4">
                        {#if cart.length === 0}
                            <p class="text-neutral-400 text-center py-12 uppercase tracking-widest text-xs sm:text-sm font-bold">Tu carrito está vacío</p>
                        {:else}
                            {#each cart as item, index}
                                <div class="bg-neutral-50 border-2 border-neutral-900 p-3 rounded-xl space-y-3 shadow-[3px_3px_0px_0px_#171717]">
                                    <div class="flex items-center justify-between gap-2">
                                        <div class="flex-1 pr-1">
                                            <h4 class="text-neutral-900 text-xs font-black uppercase">{item.titulo}</h4>
                                            <p class="text-red-600 text-[10px] sm:text-xs font-black mt-1 uppercase tracking-wider">Consultar</p>
                                        </div>
                                        <div class="flex items-center gap-1.5 bg-white border-2 border-neutral-900 rounded-lg p-0.5">
                                            <button onclick={() => updateQuantity(index, -1)} class="w-6 h-6 bg-neutral-100 text-neutral-900 rounded font-black hover:bg-neutral-200 flex items-center justify-center cursor-pointer">-</button>
                                            <span class="text-xs font-black text-neutral-900 w-5 text-center">{item.cantidad}</span>
                                            <button onclick={() => updateQuantity(index, 1)} class="w-6 h-6 bg-neutral-100 text-neutral-900 rounded font-black hover:bg-neutral-200 flex items-center justify-center cursor-pointer">+</button>
                                        </div>
                                    </div>
                                    
                                    <!-- Selector interactivo de Wons -->
                                    <div class="pt-2 border-t-2 border-neutral-200 flex items-center justify-between">
                                        <span class="text-[10px] sm:text-xs text-neutral-600 uppercase font-black tracking-wider">¿Cuántos Wons?</span>
                                        <div class="flex items-center gap-1">
                                            <button onclick={() => updateWons(index, -1)} class="w-6 h-6 bg-neutral-200 text-neutral-900 rounded font-black hover:bg-neutral-300 flex items-center justify-center cursor-pointer text-xs">-</button>
                                            <input 
                                                type="number" 
                                                min="1"
                                                value={item.wonsDeseados}
                                                oninput={(e) => handleWonInput(index, e)}
                                                class="w-14 bg-white border-2 border-neutral-900 text-neutral-900 font-black text-xs text-center py-1 rounded-lg focus:outline-none focus:border-red-600 shadow-[2px_2px_0px_#171717]"
                                            />
                                            <button onclick={() => updateWons(index, 1)} class="w-6 h-6 bg-neutral-200 text-neutral-900 rounded font-black hover:bg-neutral-300 flex items-center justify-center cursor-pointer text-xs">+</button>
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        {/if}
                    </div>

                    {#if cart.length > 0}
                        <div class="mt-6 pt-4 border-t-2 border-neutral-200">
                            <label class="block text-neutral-700 uppercase tracking-widest text-[11px] sm:text-xs font-black mb-2">Selecciona método de pago:</label>
                            <div class="space-y-2 max-h-40 sm:max-h-48 overflow-y-auto pr-1">
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

                <div class="pt-4 sm:pt-6 border-t-2 border-neutral-200 mt-4">
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