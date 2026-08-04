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

<!-- Hero Section -->
<section class="relative min-h-[60vh] flex flex-col items-center justify-center py-24 overflow-hidden bg-[#05070d]">
    <img src="/metin2.png" alt="Fondo Metin2" class="absolute inset-0 w-full h-full object-cover opacity-10 mask-image-bottom" />
    <div class="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/60 to-transparent"></div>

    <div class="relative z-10 max-w-3xl px-6 text-center space-y-8">
        <h1 class="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            <span class="bg-clip-text text-transparent bg-gradient-to-b from-[#fdfdfd] via-[#a3a3a3] to-[#525252] border-b-2 border-blue-900 pb-2">
                METIN2
            </span>
            <span class="inline-block animate-shimmer bg-[linear-gradient(90deg,#60a5fa,#2563eb,#ca8a04,#2563eb,#60a5fa)] bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
                .ES
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
        
        <div class="inline-block px-6 py-2 bg-gradient-to-r from-yellow-600/10 to-transparent border-l-4 border-yellow-600">
            <h2 class="text-xl sm:text-2xl font-bold italic text-yellow-500 uppercase tracking-widest drop-shadow-md">
                ¡WON DISPONIBLE PARA TU ASCENSO!
            </h2>
        </div>

        <p class="text-blue-200/60 text-sm sm:text-lg font-bold uppercase max-w-xl mx-auto">
            Optimiza tu progreso. Obtén <span class="text-white font-bold italic">Wons</span> con entrega inmediata y asegura tu equipo legendario.
        </p>

        <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noopener noreferrer" class="block w-full max-w-sm mx-auto">
            <button type="button" class="w-full relative group overflow-hidden bg-white/5 border border-amber-800/30 text-white font-black uppercase tracking-[0.2em] py-5 sm:py-6 rounded-xl transition-all duration-500 hover:border-amber-400/80 shadow-lg shadow-black/30 cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"></div>
                <span class="relative z-10 text-white group-hover:text-black transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] text-sm sm:text-base">
                    Equípate como un Dios
                </span>
            </button>
        </a>
    </div>
</section>

<!-- Server Selection & Cart Section -->
<section class="py-20 bg-[#05070d] border-y border-blue-900/40 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent"></div>

    <div class="max-w-5xl mx-auto px-6">
        <div class="flex items-center gap-6 mb-12">
            <h3 class="text-blue-200/60 font-bold text-xs sm:text-sm tracking-[0.3em] uppercase">Selecciona tu servidor y añade al carrito</h3>
            <div class="h-[1px] flex-1 bg-gradient-to-r from-yellow-600/50 to-transparent"></div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {#each servidores as servidor}
                <button 
                    onclick={() => addToCart(servidor)}
                    class="group relative p-4 bg-gradient-to-b from-[#0a0f1d] to-[#05070d] border border-blue-900/50 hover:border-yellow-600/50 transition-all duration-300 text-center rounded-lg shadow-lg hover:shadow-yellow-900/10 cursor-pointer flex flex-col justify-between"
                >
                    <div class="absolute inset-0 bg-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    
                    <span class="relative z-10 block text-white font-black tracking-widest text-xs uppercase group-hover:text-yellow-400 transition-colors">
                        {servidor}
                    </span>
                    
                    <div class="relative z-10 mt-3 flex flex-col items-center gap-2">
                        <div class="flex justify-center gap-1">
                            <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                        </div>
                        <span class="text-[9px] font-bold text-yellow-500/80 group-hover:text-yellow-400 uppercase tracking-wider bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
                            + Añadir Won
                        </span>
                    </div>
                </button>
            {/each}
        </div>

        <div class="mt-16 flex justify-center items-center gap-4">
            <span class="text-[10px] text-blue-200/40 uppercase tracking-[0.2em]">Estado de Stock:</span>
            <div class="flex gap-1.5">
                {#each [1, 2, 3] as _}
                    <div class="h-1 w-8 bg-emerald-600/30 rounded-full overflow-hidden">
                        <div class="h-full w-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    </div>
                {/each}
            </div>
            <span class="text-[10px] font-black text-emerald-500 uppercase tracking-widest ml-2">Optimal</span>
        </div>
    </div>

    <!-- Botón Flotante del Carrito -->
    <button 
        onclick={() => isCartOpen = !isCartOpen}
        class="fixed bottom-6 right-6 z-50 bg-yellow-500 hover:bg-yellow-400 text-black font-black p-4 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.5)] flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
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
        <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end transition-opacity">
            <div class="w-full sm:max-w-md bg-[#0a0f1d] border-l border-blue-900/50 h-full p-4 sm:p-6 flex flex-col justify-between shadow-2xl">
                <div class="overflow-y-auto pr-1 flex-1">
                    <div class="flex items-center justify-between pb-4 border-b border-blue-900/50">
                        <h3 class="text-xl sm:text-2xl font-black uppercase text-white tracking-wider flex items-center gap-2">
                            <span class="text-yellow-500">🛒</span> Tu Carrito
                        </h3>
                        <button onclick={() => isCartOpen = false} class="text-blue-200/50 hover:text-white text-xl font-bold p-2 cursor-pointer">
                            ✕
                        </button>
                    </div>

                    <div class="mt-4 sm:mt-6 space-y-3">
                        {#if cart.length === 0}
                            <p class="text-blue-200/50 text-center py-12 uppercase tracking-widest text-xs sm:text-sm">Tu carrito está vacío</p>
                        {:else}
                            {#each cart as item, index}
                                <div class="bg-black/40 border border-blue-900/30 p-3 rounded-lg space-y-3">
                                    <div class="flex items-center justify-between gap-2">
                                        <div class="flex-1 pr-1">
                                            <h4 class="text-white text-xs font-bold uppercase">{item.titulo}</h4>
                                            <p class="text-yellow-400 text-[10px] sm:text-xs font-semibold mt-1 uppercase tracking-wider">Consultar</p>
                                        </div>
                                        <div class="flex items-center gap-1.5 sm:gap-2">
                                            <button onclick={() => updateQuantity(index, -1)} class="w-7 h-7 bg-blue-900/40 text-white rounded font-bold hover:bg-blue-800 flex items-center justify-center cursor-pointer">-</button>
                                            <span class="text-xs sm:text-sm font-bold text-white w-5 text-center">{item.cantidad}</span>
                                            <button onclick={() => updateQuantity(index, 1)} class="w-7 h-7 bg-blue-900/40 text-white rounded font-bold hover:bg-blue-800 flex items-center justify-center cursor-pointer">+</button>
                                        </div>
                                    </div>
                                    
                                    <!-- Selector interactivo y de escritura libre para Wons -->
                                    <div class="pt-2 border-t border-blue-900/30 flex items-center justify-between">
                                        <span class="text-[10px] sm:text-xs text-blue-200/70 uppercase font-bold tracking-wider">¿Cuántos Wons?</span>
                                        <div class="flex items-center gap-1.5">
                                            <button onclick={() => updateWons(index, -1)} class="w-6 h-6 bg-yellow-600/30 text-yellow-400 rounded text-xs font-bold hover:bg-yellow-600/50 flex items-center justify-center cursor-pointer">-</button>
                                            <input 
                                                type="number" 
                                                min="1"
                                                value={item.wonsDeseados}
                                                oninput={(e) => handleWonInput(index, e)}
                                                class="w-14 bg-black/60 border border-blue-900/50 text-yellow-400 font-bold text-xs text-center py-1 rounded focus:outline-none focus:border-yellow-500"
                                            />
                                            <button onclick={() => updateWons(index, 1)} class="w-6 h-6 bg-yellow-600/30 text-yellow-400 rounded text-xs font-bold hover:bg-yellow-600/50 flex items-center justify-center cursor-pointer">+</button>
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        {/if}
                    </div>

                    {#if cart.length > 0}
                        <div class="mt-6 pt-4 border-t border-blue-900/50">
                            <label class="block text-blue-200/70 uppercase tracking-widest text-[11px] sm:text-xs font-bold mb-2">Selecciona método de pago:</label>
                            <div class="space-y-2 max-h-40 sm:max-h-48 overflow-y-auto pr-1">
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

                <div class="pt-4 sm:pt-6 border-t border-blue-900/50 mt-2">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-blue-200/70 uppercase tracking-widest text-xs font-bold">Precio total:</span>
                        <span class="text-base sm:text-lg font-black text-yellow-400 uppercase tracking-wider">Consultar</span>
                    </div>
                    <button 
                        onclick={checkout}
                        disabled={cart.length === 0}
                        class="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed text-black font-black uppercase tracking-widest py-3.5 sm:py-4 rounded-xl shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                    >
                        <span>💬</span> Consultar Pedido (WhatsApp)
                    </button>
                </div>
            </div>
        </div>
    {/if}
</section>