<script>
    import Icon from "@iconify/svelte";
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";

    let cart = $state([]);
    let isCartOpen = $state(false);
    let searchQuery = $state("");
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

    const products = [
        { titulo: "SET DEL CAOS PERFECTO DOP", img: "/setcaos.jpg", descripcion: "El poder definitivo 60 media, para 215+.No pierdas la oportunidad de ser el top del servidor en PVM + GUÍA DE PVM" },
        { titulo: "SET DE ENERGIA PERFECTO DOP", img: "/setenergia.jpg", descripcion: "Domina el PVM y genera Won masivamente desde nivel 75 hasta 215 con este equipamiento optimizado + GUÍA DE PVM" },
        { titulo: "WON AL MEJOR PRECIO DEL MERCADO", img: "/won.jpg", descripcion: "Entrega inmediata en tu servidor preferido, ofrecemos won en todos los sever, Guabina, Iberia &+" },
        { titulo: "PERSONAJE EQUIPADO LV 85", img: "/lv85.jpeg", descripcion: "Eleva tu diversión a otro nivel, Sura, guerrero , ninja o chaman, tu decides. 4 set perfectos lv85, 4 armas piedras +6, 4 armaduras y 70.000 WON" },
        { titulo: "PERSONAJE EQUIPADO LV 215", img: "/personaje.jpg", descripcion: "Haz una sola inversion y obten todo lo que necesitas para ser el mejor,Sura, guerrero , ninja o chaman, tu decides. 10 equipos,perfectos armas, y armaduras" },
        { titulo: "PERSONAJE EQUIPADO LV 235", img: "/235lv235.jpeg", descripcion: "Sura, guerrero , ninja o chaman, tu decides. 4 Set's perfectos pvp, con armas & armaduras +9 o +10, cinto de guerra, libro potenciacion, guantes del caos" },
        { titulo: "SET'S PERFECTOS PVP", img: "/pvpset.jpeg", descripcion: "Set perfecto EUFORIA desde lv85 a 160, set perfecto ELEMENTAL desde lv235+.No piedras la oportunidad y se el" },
        { titulo: "GUANTES+9", img: "/guante.jpg", descripcion: "El poder que necesitas, te ofrecemos el guante que elijas." },
        { titulo: "CINTOS+9", img: "/cinto.jpg", descripcion: "Cinto de guerra para PVP, cinto de vida para PVM,y todos los que ocupes dentro del juego" },
        { titulo: "ARMAS & ARMADURAS+10", img: "/masdiez.jpeg", descripcion: "Domina el juego en su totalidad con el poder maximo" },
        { titulo: "MONTURAS GOLD", img: "/monturas2.jpeg", descripcion: "Velocidad y bonus exclusivos para tu personaje" },
        { titulo: "ATUENDOS", img: "/elatuendo.jpg", descripcion: "Haz que tu personaje sea único. Selecciona tu estilo y solicita tu diseño personalizado hoy mismo" },
        { titulo: "NARUTO & AKATSUKI", img: "/naruto.jpg", descripcion: "Todos amamos naruto, y mucho mas en nuestro juego favorito. Domina el PVM con el atuendo NARUTO, y el PVP con el AKATSUKI" },
        { titulo: "ESTOLAS", img: "/estolas2.png", descripcion: "Incrementa tu ataque con las mejores estolas,en PVM O PVP" },
        { titulo: "EFECTOS", img: "/efectos.png", descripcion: "Lleva el estilo contigo, convierte tu personaje esteticamente a tu gusto, efectos disponibles para armas&armaduras. elige el que desees y lo haremos realidad" },
        { titulo: "MASCOTAS", img: "/mascotas.png", descripcion: "Potencia tu poder, tenemos para ti mascotas PVM & PVP" },
        { titulo: "SUBE DE NIVEL CON UN CLICK", img: "/livro.jpg", descripcion: "Con el Aprendizaje 215, sube de nivel a Lv215 con un click, con el Libro de potenciacición sube a Lv235 con un click" },
       
    ];

    let filteredProducts = $derived(
        products.filter(product => 
            product.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.descripcion.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

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
        
        let message = "¡Hola! Me gustaría consultar por los siguientes productos en Metin2 Guabina:%0A%0A";
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

<section class="text-white p-8 bg-[#0a0f1d] relative">
<div class="max-w-7xl mx-auto mb-12 pl-6 py-2">
    <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
        Vista del Catálogo
    </h2>
 
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-4">
        <div class="flex flex-col gap-3">
            <div class="flex items-center gap-4 text-blue-200/50 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold">
                <span>Metin2 Guabina</span>
                <span class="w-8 h-[1px] bg-blue-900"></span>
                <span>Equipamiento de Elite</span>
            </div>

<div class="inline-block px-4 py-1 rounded bg-gradient-to-r from-amber-950/80 via-zinc-900 to-amber-950/80 border border-yellow-500/60 text-yellow-300 font-extrabold font-sans tracking-[0.2em] uppercase shadow-[0_0_25px_rgba(234,179,8,0.4)] animate-pulse">
    <span class="flex items-center gap-2">
        <span class="text-yellow-400 text-lg drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]">⚡</span>
        <span class="bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-100 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(253,224,71,0.7)]">
            ENTREGA INMEDIATA
        </span>
    </span>
</div>
        </div>

        <div class="w-full md:w-80">
            <div class="relative">
                <input 
                    type="text" 
                    bind:value={searchQuery}
                    placeholder="Buscar equipamiento, won, sets..." 
                    class="w-full bg-[#121828] border border-blue-900/50 rounded-xl px-4 py-3 text-sm text-white placeholder-blue-200/40 focus:outline-none focus:border-yellow-600/50 transition-colors"
                />
            </div>
        </div>
    </div>
</div>

<style>
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.02); }
  }
  .animate-pulse-glow { 
    animation: pulse-glow 2s ease-in-out infinite;
  }
</style>

  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {#if filteredProducts.length === 0}
          <div class="col-span-full text-center py-16">
              <p class="text-blue-200/50 uppercase tracking-widest text-sm">No se encontraron productos para "{searchQuery}"</p>
          </div>
      {:else}
          {#each filteredProducts as product}
              <div class="flex flex-col bg-gradient-to-br from-[#0a0f1d] to-[#121828] border border-blue-900/50 rounded-xl overflow-hidden group justify-between">
                  <div class="flex-1">
                      <Nuevatarjeta titulo={product.titulo} img={product.img} descripcion={product.descripcion} onAddToCart={() => addToCart(product.titulo)} />
                  </div>
              </div>
          {/each}
      {/if}

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
              <div class="overflow-y-auto pr-2 flex-1">
                  <div class="flex items-center justify-between pb-4 border-b border-blue-900/50">
                      <h3 class="text-2xl font-black uppercase text-white tracking-wider flex items-center gap-2">
                          <span class="text-yellow-500">🛒</span> Tu Carrito
                      </h3>
                      <button onclick={() => isCartOpen = false} class="text-blue-200/50 hover:text-white text-xl font-bold">
                          ✕
                      </button>
                  </div>

                  <div class="mt-6 space-y-4">
                      {#if cart.length === 0}
                          <p class="text-blue-200/50 text-center py-12 uppercase tracking-widest text-sm">Tu carrito está vacío</p>
                      {:else}
                          {#each cart as item, index}
                              <div class="flex items-center justify-between bg-black/40 border border-blue-900/30 p-3 rounded-lg">
                                  <div class="flex-1 pr-2">
                                      <h4 class="text-white text-xs font-bold uppercase">{item.titulo}</h4>
                                      <p class="text-yellow-400 text-xs font-semibold mt-1 uppercase tracking-wider">Consultar</p>
                                  </div>
                                  <div class="flex items-center gap-2">
                                      <button onclick={() => updateQuantity(index, -1)} class="w-7 h-7 bg-blue-900/40 text-white rounded font-bold hover:bg-blue-800">-</button>
                                      <span class="text-sm font-bold text-white w-5 text-center">{item.cantidad}</span>
                                      <button onclick={() => updateQuantity(index, 1)} class="w-7 h-7 bg-blue-900/40 text-white rounded font-bold hover:bg-blue-800">+</button>
                                  </div>
                              </div>
                          {/each}
                      {/if}
                  </div>

                  {#if cart.length > 0}
                      <div class="mt-6 pt-4 border-t border-blue-900/50">
                          <label for="payment-method-select" class="block text-blue-200/70 uppercase tracking-widest text-xs font-bold mb-2">Selecciona método de pago:</label>
                          <div class="space-y-2 max-h-48 overflow-y-auto pr-1">
                              {#each paymentMethods as method}
                                  <button
                                      type="button"
                                      onclick={() => selectedPayment = method.id}
                                      class={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border text-xs font-medium transition-all text-left ${selectedPayment === method.id ? 'bg-yellow-500/10 border-yellow-500 text-yellow-400' : 'bg-[#121828] border-blue-900/50 text-white hover:border-blue-700'}`}
                                  >
                                      <Icon icon={method.icon} class="w-5 h-5 flex-shrink-0" />
                                      <span class="truncate">{method.name}</span>
                                  </button>
                              {/each}
                          </div>
                      </div>
                  {/if}
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

<section class="py-24 px-6 bg-[#05070d] border-t border-blue-900/50">
    <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-black text-center mb-16 uppercase tracking-tighter text-white drop-shadow-[0_0_10px_rgba(234,179,8,0.2)]">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800">
                Preguntas 
            </span>
            <span class="text-white">Frecuentes</span>
        </h2>

        <div class="space-y-8">
            {#each [
                { q: "¿Los items vienen dopados?", a: "Absolutamente. Cada pieza es optimizada al máximo nivel, incluyendo piedras de alta calidad y bonus perfectos para asegurar tu dominio en el campo de batalla." },
                { q: "¿Cómo puedo generar won?", a: "Al adquirir uno de nuestros sets PvM, recibirás acceso exclusivo a nuestra guía estratégica personalizada según tu nivel, diseñada para maximizar tu capacidad de farmeo." },
                { q: "¿Qué métodos de pago aceptan?", a: "Disponemos de una infraestructura de pago global segura. Consulta nuestra sección dedicada para ver el catálogo completo de transferencias y monederos digitales disponibles en tu región." }
            ] as item}
                <div class="group relative bg-gradient-to-br from-[#0a0f1d] to-[#121828] border border-blue-900/50 rounded-xl p-8 hover:border-yellow-600/50 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                    <div class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-yellow-600/50"></div>
                    
                    <h3 class="text-xl font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-3">
                        <span class="text-yellow-600 text-2xl font-black">/</span> {item.q}
                    </h3>
                    <p class="text-blue-200/70 leading-relaxed font-light pl-6 border-l-2 border-blue-600/30 mb-6">
                        {item.a}
                    </p>
                    <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,%20estoy%20interesado%20en%20recibir%20asesoría%20sobre%20tus%20artículos" target="_blank" rel="noreferrer" class="inline-block px-6 text-center relative group/btn overflow-hidden bg-white/5 border border-amber-800/30 text-white font-black uppercase text-xs md:text-sm tracking-widest py-3 rounded-xl transition-all duration-500 hover:border-amber-400/80 shadow-lg">
                        <div class="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700"></div>
                        <span class="relative z-10 text-white group-hover/btn:text-black transition-colors duration-300 whitespace-nowrap">Consultar asesoría</span>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</section>