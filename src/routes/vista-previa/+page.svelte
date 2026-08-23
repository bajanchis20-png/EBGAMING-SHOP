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

    function removeItem(index) {
        cart.splice(index, 1);
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

<!-- Hero Section Estilo Gaming Oscuro (Mobile First Extremo) -->
<section class="relative min-h-[55vh] sm:min-h-[60vh] flex flex-col items-center justify-center py-14 sm:py-24 px-3 sm:px-6 overflow-hidden bg-[#0d0d0f] border-b border-white/10 font-sans">
    <!-- Patrón de puntos sutil característico -->
    <div class="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#e60012_1px,transparent_1px)] [background-size:16px_16px] z-10 pointer-events-none"></div>

    <video src="fondovideo4.mp4" autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"></video>
    <div class="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f]/60 to-transparent z-0"></div>

    <div class="relative z-20 max-w-3xl w-full px-2 sm:px-6 text-center space-y-5 sm:space-y-8">
        <h1 class="text-3xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter leading-[1.1]">
            <span class="border-b border-white/20 pb-1 sm:pb-2 inline-block">
                METIN2<span class="font-fantasy font-black uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-950 via-red-600 to-rose-400 blood-pulse-flicker relative pb-3 cursor-default inline-block mx-2">
                    .ES
                    <span class="blood-drop drop-1"></span>
                    <span class="blood-drop drop-2"></span>
                    <span class="blood-drop drop-3"></span>
                    <span class="blood-drop drop-4"></span>
                </span>
            </span>

        </h1>
        
        <p class="text-neutral-400 text-xs sm:text-lg font-bold uppercase max-w-xl mx-auto leading-relaxed px-1">
            Optimiza tu progreso. Obtén <span class="text-white font-black italic">Wons</span> con entrega inmediata y asegura tu equipo legendario.
        </p>

        <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,estoy interesado en un articulo de tu tienda" target="_blank" rel="noopener noreferrer" class="block w-full max-w-sm mx-auto">
            <button type="button" class="w-full relative group overflow-hidden bg-[#e60012] border border-white/10 text-white font-black uppercase tracking-[0.2em] py-3.5 sm:py-5 rounded-2xl transition-all duration-300 hover:bg-[#cc0010] active:scale-95 shadow-[0_0_15px_rgba(230,0,18,0.3)] cursor-pointer">
                <span class="relative z-10 text-white text-xs sm:text-sm">
                    Equípate como un Dios
                </span>
            </button>
        </a>
    </div>
</section>

<!-- Server Selection & Cart Section Estilo Gaming Oscuro -->
<section class="py-12 sm:py-20 bg-[#0d0d0f] border-b border-white/10 relative overflow-hidden">
    <div class="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#e60012_1px,transparent_1px)] [background-size:16px_16px]"></div>

    <div class="max-w-5xl mx-auto px-3 sm:px-6 relative z-10">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 sm:mb-12">
            <h3 class="text-white font-black text-[11px] sm:text-sm tracking-[0.15em] uppercase text-center sm:text-left">Selecciona tu servidor y añade al carrito</h3>
            <div class="hidden sm:block h-[1px] flex-1 bg-white/10 ml-6"></div>
        </div>

        <!-- Grid optimizado: 2 columnas en móviles pequeños para evitar desbordes -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {#each servidores as servidor}
                <button 
                    onclick={() => addToCart(servidor)}
                    class="group relative p-3.5 sm:p-4 bg-[#121216] border border-white/10 hover:border-[#e60012] transition-all duration-300 text-center rounded-2xl shadow-xl cursor-pointer flex flex-col justify-between active:scale-95 hover:-translate-y-1"
                >
                    <span class="relative z-10 block text-white font-black tracking-widest text-[11px] sm:text-xs uppercase group-hover:text-[#e60012] transition-colors truncate">
                        {servidor}
                    </span>
                    
                    <div class="relative z-10 mt-3 sm:mt-4 flex flex-col items-center gap-1.5 sm:gap-2">
                        <div class="flex justify-center gap-1">
                            <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 border border-white/10"></div>
                        </div>
                        <span class="text-[9px] font-black text-neutral-400 group-hover:text-[#e60012] uppercase tracking-wider bg-[#17171c] group-hover:bg-[#e60012]/10 px-2.5 py-1 rounded-lg border border-white/10 transition-colors w-full">
                            + Añadir Won
                        </span>
                    </div>
                </button>
            {/each}
        </div>

        <div class="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-center">
            <span class="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-black">Estado de Stock:</span>
            <div class="flex gap-1.5">
                {#each [1, 2, 3] as _}
                    <div class="h-2 w-6 sm:w-8 bg-emerald-500 border border-white/10 rounded-md"></div>
                {/each}
            </div>
            <span class="text-[10px] font-black text-emerald-400 uppercase tracking-widest ml-1">Optimal</span>
        </div>
    </div>

    <!-- Botón Flotante del Carrito (Ergonómico para pulgar en móviles) -->
    <button 
        onclick={() => isCartOpen = !isCartOpen}
        class="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 bg-[#e60012] hover:bg-[#cc0010] text-white font-black p-3.5 sm:p-4 rounded-full shadow-[0_0_20px_rgba(230,0,18,0.5)] flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
        aria-label="Abrir Carrito"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {#if totalItems > 0}
            <span class="absolute -top-1.5 -right-1.5 bg-[#0d0d0f] text-white text-[11px] sm:text-xs w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-bold border-2 border-white/10 shadow-md">
                {totalItems}
            </span>
        {/if}
    </button>

    <!-- Panel Deslizante del Carrito (Drawer Mobile Full-Screen o Drawer Completo) -->
    {#if isCartOpen}
        <div class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end transition-opacity">
            <div class="w-full sm:max-w-md bg-[#121216] border-l border-white/10 h-full p-4 sm:p-6 flex flex-col justify-between shadow-2xl">
                <div class="overflow-y-auto pr-1 flex-1">
                    <div class="flex items-center justify-between pb-4 border-b border-white/10">
                        <h3 class="text-lg sm:text-2xl font-black uppercase text-white tracking-wider flex items-center gap-2">
                            <span class="text-[#e60012]">🛒</span> Tu Carrito
                        </h3>
                        <button onclick={() => isCartOpen = false} class="text-neutral-400 hover:text-white text-xl font-bold p-2 cursor-pointer">
                            ✕
                        </button>
                    </div>

                    <div class="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                        {#if cart.length === 0}
                            <p class="text-neutral-500 text-center py-12 uppercase tracking-widest text-xs font-bold">Tu carrito está vacío</p>
                        {:else}
                            {#each cart as item, index}
                                <div class="bg-[#17171c] border border-white/10 p-3 sm:p-3.5 rounded-2xl space-y-3 shadow-sm">
                                    <div class="flex items-center justify-between gap-2">
                                        <div class="flex-1 pr-1 min-w-0">
                                            <h4 class="text-white text-[11px] sm:text-xs font-black uppercase truncate">{item.titulo}</h4>
                                            <p class="text-[#e60012] text-[10px] sm:text-xs font-bold mt-0.5 uppercase tracking-wider">Consultar</p>
                                        </div>
                                        <div class="flex items-center gap-2 flex-shrink-0">
                                            <div class="flex items-center gap-1 bg-[#121216] border border-white/10 rounded-xl p-0.5">
                                                <button onclick={() => updateQuantity(index, -1)} class="w-6 h-6 bg-[#121216] text-white rounded-lg font-bold hover:bg-white/5 flex items-center justify-center cursor-pointer text-xs">-</button>
                                                <span class="text-xs font-black text-white w-4 text-center">{item.cantidad}</span>
                                                <button onclick={() => updateQuantity(index, 1)} class="w-6 h-6 bg-[#121216] text-white rounded-lg font-bold hover:bg-white/5 flex items-center justify-center cursor-pointer text-xs">+</button>
                                            </div>
                                            <button onclick={() => removeItem(index)} class="text-neutral-400 hover:text-[#e60012] font-bold px-1.5 py-1 text-sm transition-colors cursor-pointer" title="Eliminar producto">
                                                ✕
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <!-- Selector interactivo de Wons -->
                                    <div class="pt-2 border-t border-white/10 flex items-center justify-between">
                                        <span class="text-[10px] sm:text-xs text-neutral-400 uppercase font-bold tracking-wider">¿Cuántos Wons?</span>
                                        <div class="flex items-center gap-1">
                                            <button onclick={() => updateWons(index, -1)} class="w-6 h-6 bg-[#121216] border border-white/10 text-white rounded-lg font-bold hover:bg-white/5 flex items-center justify-center cursor-pointer text-xs">-</button>
                                            <input 
                                                type="number" 
                                                min="1"
                                                value={item.wonsDeseados}
                                                oninput={(e) => handleWonInput(index, e)}
                                                class="w-14 bg-[#121216] border border-white/10 text-white font-bold text-xs text-center py-1 rounded-lg focus:outline-none focus:border-[#e60012]"
                                            />
                                            <button onclick={() => updateWons(index, 1)} class="w-6 h-6 bg-[#121216] border border-white/10 text-white rounded-lg font-bold hover:bg-white/5 flex items-center justify-center cursor-pointer text-xs">+</button>
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        {/if}
                    </div>

                    {#if cart.length > 0}
                        <div class="mt-6 pt-4 border-t border-white/10">
                            <label class="block text-neutral-300 uppercase tracking-widest text-[11px] sm:text-xs font-bold mb-2">Selecciona método de pago:</label>
                            <div class="space-y-2 max-h-40 sm:max-h-48 overflow-y-auto pr-1">
                                {#each paymentMethods as method}
                                    <button
                                        type="button"
                                        onclick={() => selectedPayment = method.id}
                                        class={`w-full flex items-center gap-3 px-3 py-2.5 sm:py-3 rounded-2xl border text-xs font-bold transition-all text-left cursor-pointer ${selectedPayment === method.id ? 'bg-[#e60012]/10 border-[#e60012] text-[#e60012] shadow-sm' : 'bg-[#17171c] border-white/10 text-neutral-300 hover:border-white/20'}`}
                                    >
                                        <Icon icon={method.icon} class="w-5 h-5 flex-shrink-0" />
                                        <span class="truncate uppercase">{method.name}</span>
                                    </button>
                                {/each}
                            </div>
                        </div>
                    {/if}
                </div>

                <div class="pt-4 border-t border-white/10 mt-2">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-neutral-400 uppercase tracking-widest text-xs font-bold">Precio total:</span>
                        <span class="text-sm sm:text-lg font-black text-[#e60012] uppercase tracking-wider">Consultar</span>
                    </div>
                    <button 
                        onclick={checkout}
                        disabled={cart.length === 0}
                        class="w-full bg-[#e60012] hover:bg-[#cc0010] disabled:opacity-50 disabled:cursor-not-allowed text-white font-black uppercase tracking-widest py-3.5 sm:py-4 rounded-2xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer active:scale-95"
                    >
                        <span>💬</span> Consultar Pedido (WhatsApp)
                    </button>
                </div>
            </div>
        </div>
    {/if}
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap');

    .font-fantasy {
        font-family: 'Cinzel Decorative', serif;
    }

    /* Animación de titileo y pulso en rojo sangre gamer */
    @keyframes bloodFlicker {
        0%, 100% {
            filter: drop-shadow(0 0 8px rgba(220, 38, 38, 0.6)) drop-shadow(0 0 20px rgba(153, 27, 27, 0.4));
            opacity: 1;
        }
        50% {
            filter: drop-shadow(0 0 18px rgba(255, 75, 75, 0.95)) drop-shadow(0 0 35px rgba(220, 38, 38, 0.7));
            opacity: 0.88;
        }
        70% {
            filter: drop-shadow(0 0 5px rgba(185, 28, 28, 0.5));
            opacity: 1;
        }
    }

    .blood-pulse-flicker {
        background-size: 200% auto;
        animation: bloodFlicker 2.5s infinite ease-in-out;
        transition: 0.4s ease-in-out;
    }

    .blood-pulse-flicker:hover {
        background-position: right center;
        filter: drop-shadow(0 0 25px rgba(255, 50, 50, 1)) drop-shadow(0 0 50px rgba(220, 38, 38, 0.9));
        opacity: 1;
    }

    /* Gotas de sangre con origen pegado al ras de las letras */
    .blood-drop {
        position: absolute;
        bottom: 2px;
        width: 4px;
        height: 20px;
        background: linear-gradient(
            to bottom, 
            rgba(255, 100, 100, 0.95) 0%, 
            rgba(190, 15, 15, 0.95) 30%, 
            rgba(90, 5, 5, 1) 75%, 
            rgba(35, 0, 0, 1) 100%
        );
        border-radius: 50% 50% 50% 50% / 20% 20% 80% 80%;
        opacity: 0;
        pointer-events: none;
        box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.65), 0 0 8px rgba(239, 68, 68, 0.85);
        transform-origin: top center;
        z-index: 25 !important;
    }

    @keyframes realFluidDripFlush {
        0% {
            transform: translateY(0) scaleY(0.02) scaleX(0.6);
            opacity: 0;
        }
        12% {
            opacity: 1;
            transform: translateY(2px) scaleY(0.4) scaleX(1.1);
        }
        30% {
            transform: translateY(11px) scaleY(2.3) scaleX(0.4);
        }
        50% {
            transform: translateY(24px) scaleY(1.2) scaleX(0.9);
            opacity: 0.98;
        }
        80% {
            transform: translateY(46px) scaleY(0.9) scaleX(1);
            opacity: 0.8;
        }
        100% {
            transform: translateY(58px) scaleY(0.15) scaleX(0.4);
            opacity: 0;
        }
    }

    .drop-1 {
        left: 18%;
        animation: realFluidDripFlush 3.2s infinite cubic-bezier(0.25, 1, 0.5, 1);
        animation-delay: 0.2s;
    }

    .drop-2 {
        left: 42%;
        animation: realFluidDripFlush 2.6s infinite cubic-bezier(0.25, 1, 0.5, 1);
        animation-delay: 1.1s;
    }

    .drop-3 {
        left: 65%;
        animation: realFluidDripFlush 3.8s infinite cubic-bezier(0.25, 1, 0.5, 1);
        animation-delay: 0.6s;
    }

    .drop-4 {
        left: 85%;
        animation: realFluidDripFlush 2.9s infinite cubic-bezier(0.25, 1, 0.5, 1);
        animation-delay: 1.8s;
    }
</style>