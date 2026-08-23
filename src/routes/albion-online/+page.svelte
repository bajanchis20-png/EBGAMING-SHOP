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
<section class="relative min-h-[60vh] sm:min-h-[70vh] flex items-center bg-[#0d0d0f] overflow-hidden border-b border-white/10 py-10 sm:py-16 font-sans">
    <div class="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

    <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center z-10">
        <div class="space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 class="text-3xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tight leading-[0.95]">
                Albion <br/>
                <span class="font-gaming font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#e60012] via-[#ff4500] to-[#ffcc00] drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] relative inline-block mt-1 sm:mt-3">
                    Online
                </span>
            </h1>
            
            <p class="text-neutral-400 text-xs sm:text-sm font-bold leading-relaxed max-w-md mx-auto lg:mx-0 border-l-[3px] border-white/30 pl-3 uppercase">
                Abastecimiento directo, mercado de alta gama y protección total contra baneos. Tu acceso premium al reino empieza aquí.
            </p>
        </div>

        <div class="relative group w-full max-w-md sm:max-w-lg mx-auto lg:max-w-none">
            <div class="absolute -inset-2 bg-gradient-to-r from-white/20 to-neutral-900 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-700"></div>
            
            <div class="relative bg-[#121216] p-2.5 sm:p-3 rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-video bg-neutral-900 border border-white/10">
                    <video src="video5.mp4" autoplay loop muted playsinline class="w-full h-full object-cover opacity-90"></video>
                    <div class="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Content & Protocol Section -->
<section class="max-w-7xl mx-auto py-12 sm:py-20 md:py-24 px-4 sm:px-6 relative bg-[#0d0d0f] overflow-hidden">
    <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        <div class="flex justify-center items-center order-2 lg:order-1 w-full">
            <div class="relative group w-full max-w-sm sm:max-w-md flex justify-center">
                <div class="absolute -inset-2 bg-white/5 rounded-[2rem] blur-lg group-hover:opacity-100 transition duration-700"></div>
                <div class="relative bg-[#121216] p-3 sm:p-4 rounded-[1.75rem] sm:rounded-[2rem] border border-white/10 shadow-2xl w-full flex justify-center">
                    <Nuevatarjeta 
                        titulo="ALBION ONLINE" 
                        img="/albion.jpeg" 
                        descripcion="Silver & Cuentas en Albion Online" 
                        buttonText="COMPRAR AHORA"
                        onAddToCart={() => addToCart("ALBION ONLINE")}
                    />
                </div>
            </div>
        </div>

        <div class="space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <h3 class="text-xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight flex items-center justify-center lg:justify-start gap-2.5">
                <span class="w-2.5 h-7 sm:h-10 bg-white/80 rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.2)]"></span>
                Protocolo<span class="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-white to-neutral-400"> de Seguridad</span>
            </h3>
            <p class="text-neutral-400 text-xs sm:text-sm leading-relaxed font-bold border-l-[3px] border-white/30 pl-3 uppercase shadow-sm">
                Tu cuenta principal nunca entra en contacto con trade sospechoso. Implementamos una <span class="text-white font-black">capa de transferencia aislada</span> para camuflar el origen de los recursos. Para garantizar tu seguridad, implementamos un sistema de transferencia única, te proporcionamos acceso total a una <span class="text-white font-black">cuenta con la que podrás hacer una única transferencia</span> a través del gremio. Este procedimiento asegura total discreción, y recuerda que tu seguridad es la nuestra.
            </p>
        </div>
    </div>

    <!-- Botón Flotante del Carrito -->
    <button 
        onclick={() => isCartOpen = !isCartOpen}
        class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-white/10 hover:bg-white/20 text-white font-black p-3.5 sm:p-4 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
        aria-label="Abrir Carrito"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {#if totalItems > 0}
            <span class="absolute -top-1.5 -right-1.5 bg-[#0d0d0f] text-white text-[10px] sm:text-xs w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-bold border-2 border-white/20 shadow-md">
                {totalItems}
            </span>
        {/if}
    </button>

    <!-- Panel Deslizante del Carrito (Drawer) -->
    {#if isCartOpen}
        <div class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end transition-opacity">
            <div class="w-full sm:max-w-md bg-[#121216] border-l border-white/10 h-full max-h-screen p-4 sm:p-6 flex flex-col justify-between shadow-2xl overflow-hidden">
                <div class="flex-1 overflow-y-auto pr-1">
                    <div class="flex items-center justify-between pb-3.5 border-b border-white/10 sticky top-0 bg-[#121216] z-10">
                        <h3 class="text-lg sm:text-2xl font-black uppercase text-white tracking-wider flex items-center gap-2">
                            <span class="text-white/80">🛒</span> Tu Carrito
                        </h3>
                        <button onclick={() => isCartOpen = false} class="bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 backdrop-blur-sm rounded-xl text-lg font-bold p-1.5 cursor-pointer transition-all">
                            ✕
                        </button>
                    </div>

                    <div class="mt-4 space-y-3">
                        {#if cart.length === 0}
                            <p class="text-neutral-500 text-center py-12 uppercase tracking-widest text-xs font-bold">Tu carrito está vacío</p>
                        {:else}
                            {#each cart as item, index}
                                <div class="flex items-center justify-between bg-[#17171c] border border-white/10 p-3 rounded-2xl gap-2 shadow-sm">
                                    <div class="flex-1 min-w-0 pr-1">
                                        <h4 class="text-white text-xs font-black uppercase truncate">{item.titulo}</h4>
                                        <p class="text-neutral-400 text-[10px] font-bold mt-0.5 uppercase tracking-wider">Consultar</p>
                                    </div>
                                    <div class="flex items-center gap-1.5 flex-shrink-0">
                                        <button onclick={() => updateQuantity(index, -1)} class="w-7 h-7 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 flex items-center justify-center cursor-pointer text-xs active:scale-95">-</button>
                                        <span class="text-xs sm:text-sm font-black text-white w-5 text-center">{item.cantidad}</span>
                                        <button onclick={() => updateQuantity(index, 1)} class="w-7 h-7 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 flex items-center justify-center cursor-pointer text-xs active:scale-95">+</button>
                                    </div>
                                </div>
                            {/each}
                        {/if}
                    </div>

                    {#if cart.length > 0}
                        <div class="mt-6 pt-4 border-t border-white/10">
                            <label class="block text-neutral-300 uppercase tracking-widest text-xs font-bold mb-2">Selecciona método de pago:</label>
                            <div class="space-y-2 max-h-36 sm:max-h-48 overflow-y-auto pr-1">
                                {#each paymentMethods as method}
                                    <button
                                        type="button"
                                        onclick={() => selectedPayment = method.id}
                                        class={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl border text-xs font-bold transition-all text-left cursor-pointer active:scale-95 backdrop-blur-sm ${selectedPayment === method.id ? 'bg-white/10 border-white/30 text-white shadow-sm' : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/30 hover:bg-white/10'}`}
                                    >
                                        <Icon icon={method.icon} class="w-5 h-5 flex-shrink-0" />
                                        <span class="truncate uppercase">{method.name}</span>
                                    </button>
                                {/each}
                            </div>
                        </div>
                    {/if}
                </div>

                <div class="pt-4 border-t border-white/10 mt-2 bg-[#121216]">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-neutral-400 uppercase tracking-widest text-xs font-bold">Precio total:</span>
                        <span class="text-base sm:text-lg font-black text-white uppercase tracking-wider">Consultar</span>
                    </div>
                    <button 
                        onclick={checkout}
                        disabled={cart.length === 0}
                        class="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed font-black uppercase tracking-widest py-3.5 sm:py-4 rounded-2xl shadow-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer active:scale-[0.98]"
                    >
                        <span>💬</span> Consultar Pedido (WhatsApp)
                    </button>
                </div>
            </div>
        </div>
    {/if}
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800;900&display=swap');

    .font-gaming {
        font-family: 'Orbitron', sans-serif;
    }
</style>