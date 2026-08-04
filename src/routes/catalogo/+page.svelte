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
        { titulo: "SET DEL CAOS PERFECTO DOP", img: "/setcaos.jpg", descripcion: "El poder definitivo 60 media, para 215+. No pierdas la oportunidad de ser el top del servidor en PVM + GUÍA DE PVM" },
        { titulo: "SET DE ENERGIA PERFECTO DOP", img: "/setenergia.jpg", descripcion: "Domina el PVM y genera Won masivamente desde nivel 75 hasta 215 con este equipamiento optimizado + GUÍA DE PVM" },
        { titulo: "WON AL MEJOR PRECIO DEL MERCADO", img: "/won.jpg", descripcion: "Entrega inmediata en tu servidor preferido, ofrecemos won en todos los sever, Guabina, Iberia &+" },
        { titulo: "PERSONAJE EQUIPADO LV 85", img: "/lv85.jpeg", descripcion: "Eleva tu diversión a otro nivel, Sura, guerrero, ninja o chaman, tu decides. 4 set perfectos lv85, 4 armas piedras +6, 4 armaduras y 70.000 WON" },
        { titulo: "PERSONAJE EQUIPADO LV 215", img: "/personaje.jpg", descripcion: "Haz una sola inversion y obten todo lo que necesitas para ser el mejor, Sura, guerrero, ninja o chaman, tu decides. 10 equipos, perfectos armas y armaduras" },
        { titulo: "PERSONAJE EQUIPADO LV 235", img: "/235lv235.jpeg", descripcion: "Sura, guerrero, ninja o chaman, tu decides. 4 Set's perfectos pvp, con armas & armaduras +9 o +10, cinto de guerra, libro potenciacion, guantes del caos" },
        { titulo: "SET'S PERFECTOS PVP", img: "/pvpset.jpeg", descripcion: "Set perfecto EUFORIA desde lv85 a 160, set perfecto ELEMENTAL desde lv235+. No pierdas la oportunidad" },
        { titulo: "GUANTES+9", img: "/guante.jpg", descripcion: "El poder que necesitas, te ofrecemos el guante que elijas." },
        { titulo: "CINTOS+9", img: "/cinto.jpg", descripcion: "Cinto de guerra para PVP, cinto de vida para PVM, y todos los que ocupes dentro del juego" },
        { titulo: "ARMAS & ARMADURAS+10", img: "/masdiez.jpeg", descripcion: "Domina el juego en su totalidad con el poder maximo" },
        { titulo: "MONTURAS GOLD", img: "/monturas2.jpeg", descripcion: "Velocidad y bonus exclusivos para tu personaje" },
        { titulo: "ATUENDOS", img: "/elatuendo.jpg", descripcion: "Haz que tu personaje sea único. Selecciona tu estilo y solicita tu diseño personalizado hoy mismo" },
        { titulo: "NARUTO & AKATSUKI", img: "/naruto.jpg", descripcion: "Todos amamos naruto, y mucho mas en nuestro juego favorito. Domina el PVM con el atuendo NARUTO, y el PVP con el AKATSUKI" },
        { titulo: "ESTOLAS", img: "/estolas2.png", descripcion: "Incrementa tu ataque con las mejores estolas, en PVM O PVP" },
        { titulo: "EFECTOS", img: "/efectos.png", descripcion: "Lleva el estilo contigo, convierte tu personaje esteticamente a tu gusto, efectos disponibles para armas & armaduras" },
        { titulo: "MASCOTAS", img: "/mascotas.png", descripcion: "Potencia tu poder, tenemos para ti mascotas PVM & PVP" },
        { titulo: "SUBE DE NIVEL CON UN CLICK", img: "/livro.jpg", descripcion: "Con el Aprendizaje 215, sube de nivel a Lv215 con un click, con el Libro de potenciación sube a Lv235 con un click" }
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

<section class="text-neutral-900 px-4 sm:px-6 py-12 sm:py-16 bg-[#f4f4f6] border-b border-neutral-300 relative overflow-x-hidden">
<div class="max-w-7xl mx-auto mb-8 pl-2 sm:pl-6 py-2">
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 mb-2">
        Vista del Catálogo
    </h2>
 
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-4">
        <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3 text-neutral-500 uppercase tracking-[0.15em] text-[10px] sm:text-xs font-bold flex-wrap">
                <span>Metin2 Guabina</span>
                <span class="w-6 sm:w-8 h-[1px] bg-neutral-300"></span>
                <span>Equipamiento de Elite</span>
            </div>

            <div class="inline-block px-3 sm:px-4 py-1.5 rounded-2xl bg-white border border-neutral-200 text-red-600 font-black tracking-[0.15em] uppercase shadow-md w-fit">
                <span class="flex items-center gap-2 text-xs sm:text-sm">
                    <span class="text-red-600">⚡</span>
                    <span>ENTREGA INMEDIATA</span>
                </span>
            </div>
        </div>

        <div class="w-full md:w-80">
            <div class="relative">
                <input 
                    type="text" 
                    bind:value={searchQuery}
                    placeholder="Buscar equipamiento, won, sets..." 
                    class="w-full bg-white border border-neutral-300 rounded-2xl px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all font-bold shadow-sm"
                />
            </div>
        </div>
    </div>
</div>
<div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {#if filteredProducts.length === 0}
          <div class="col-span-full text-center py-16">
              <p class="text-neutral-500 uppercase tracking-widest text-xs sm:text-sm px-4 font-bold">No se encontraron productos para "{searchQuery}"</p>
          </div>
      {:else}
          {#each filteredProducts as product}
              <Nuevatarjeta 
                titulo={product.titulo} 
                img={product.img} 
                descripcion={product.descripcion} 
                onAddToCart={() => addToCart(product.titulo)} 
              />
          {/each}
      {/if}

  </div>

  <!-- Botón Flotante del Carrito -->
  <button 
      onclick={() => isCartOpen = !isCartOpen}
      class="fixed bottom-5 right-5 z-50 bg-red-600 hover:bg-red-700 text-white font-black p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
      aria-label="Abrir Carrito"
  >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      {#if totalItems > 0}
          <span class="absolute -top-1.5 -right-1.5 bg-neutral-900 text-white text-xs w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-bold border-2 border-white shadow-md">
              {totalItems}
          </span>
      {/if}
  </button>

  <!-- Panel Deslizante del Carrito (Drawer) -->
  {#if isCartOpen}
      <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end transition-opacity">
          <div class="w-full sm:max-w-md bg-white border-l border-neutral-200 h-full p-4 sm:p-6 flex flex-col justify-between shadow-2xl">
              <div class="overflow-y-auto pr-1 flex-1">
                  <div class="flex items-center justify-between pb-4 border-b border-neutral-200">
                      <h3 class="text-xl sm:text-2xl font-black uppercase text-neutral-900 tracking-wider flex items-center gap-2">
                          <span class="text-red-600">🛒</span> Tu Carrito
                      </h3>
                      <button onclick={() => isCartOpen = false} class="text-neutral-400 hover:text-neutral-900 text-xl font-bold p-2 cursor-pointer">
                          ✕
                      </button>
                  </div>

                  <div class="mt-4 sm:mt-6 space-y-3">
                      {#if cart.length === 0}
                          <p class="text-neutral-500 text-center py-12 uppercase tracking-widest text-xs sm:text-sm font-bold">Tu carrito está vacío</p>
                      {:else}
                          {#each cart as item, index}
                              <div class="flex items-center justify-between bg-[#f9f9fb] border border-neutral-200 p-3.5 rounded-2xl gap-2 shadow-sm">
                                  <div class="flex-1 pr-1">
                                      <h4 class="text-neutral-900 text-xs font-black uppercase">{item.titulo}</h4>
                                      <p class="text-red-600 text-[10px] sm:text-xs font-bold mt-1 uppercase tracking-wider">Consultar</p>
                                  </div>
                                  <div class="flex items-center gap-1.5 sm:gap-2">
                                      <button onclick={() => updateQuantity(index, -1)} class="w-7 h-7 bg-white border border-neutral-300 text-neutral-900 rounded-xl font-bold hover:bg-neutral-100 flex items-center justify-center cursor-pointer">-</button>
                                      <span class="text-xs sm:text-sm font-black text-neutral-900 w-5 text-center">{item.cantidad}</span>
                                      <button onclick={() => updateQuantity(index, 1)} class="w-7 h-7 bg-white border border-neutral-300 text-neutral-900 rounded-xl font-bold hover:bg-neutral-100 flex items-center justify-center cursor-pointer">+</button>
                                  </div>
                              </div>
                          {/each}
                      {/if}
                  </div>

                  {#if cart.length > 0}
                      <div class="mt-6 pt-4 border-t border-neutral-200">
                          <label class="block text-neutral-700 uppercase tracking-widest text-[11px] sm:text-xs font-bold mb-2">Selecciona método de pago:</label>
                          <div class="space-y-2 max-h-40 sm:max-h-48 overflow-y-auto pr-1">
                              {#each paymentMethods as method}
                                  <button
                                      type="button"
                                      onclick={() => selectedPayment = method.id}
                                      class={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl border text-xs font-bold transition-all text-left cursor-pointer ${selectedPayment === method.id ? 'bg-red-50 border-red-600 text-red-600 shadow-sm' : 'bg-[#f9f9fb] border-neutral-200 text-neutral-700 hover:border-neutral-300'}`}
                                  >
                                      <Icon icon={method.icon} class="w-5 h-5 flex-shrink-0" />
                                      <span class="truncate uppercase">{method.name}</span>
                                  </button>
                              {/each}
                          </div>
                      </div>
                  {/if}
              </div>

              <div class="pt-4 sm:pt-6 border-t border-neutral-200 mt-2">
                  <div class="flex justify-between items-center mb-4">
                      <span class="text-neutral-500 uppercase tracking-widest text-xs font-bold">Precio total:</span>
                      <span class="text-base sm:text-lg font-black text-red-600 uppercase tracking-wider">Consultar</span>
                  </div>
                  <button 
                      onclick={checkout}
                      disabled={cart.length === 0}
                      class="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black uppercase tracking-widest py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                  >
                      <span>💬</span> Consultar Pedido (WhatsApp)
                  </button>
              </div>
          </div>
      </div>
  {/if}
</section>

<!-- Sección FAQ (Estilo Nintendo Moderno - Blanco, Gris y Rojo) -->
<section class="py-16 sm:py-24 px-4 sm:px-6 bg-[#f4f4f6] border-t border-neutral-300 relative">
    <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12 sm:mb-16">
            <h2 class="text-red-600 text-xs font-black uppercase tracking-[0.4em] mb-3">Resolución de Dudas</h2>
            <h3 class="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900">
                Preguntas <span class="text-red-600 italic">Frecuentes</span>
            </h3>
        </div>

        <div class="space-y-6 sm:space-y-8">
            {#each [
                { q: "¿Los items vienen dopados?", a: "Absolutamente. Cada pieza es optimizada al máximo nivel, incluyendo piedras de alta calidad y bonus perfectos para asegurar tu dominio en el campo de batalla." },
                { q: "¿Cómo puedo generar won?", a: "Al adquirir uno de nuestros sets PvM, recibirás acceso exclusivo a nuestra guía estratégica personalizada según tu nivel, diseñada para maximizar tu capacidad de farmeo." },
                { q: "¿Qué métodos de pago aceptan?", a: "Disponemos de una infraestructura de pago global segura. Consulta nuestra sección dedicada para ver el catálogo completo de transferencias y monederos digitales disponibles en tu región." }
            ] as item}
                <div class="group relative bg-white/90 backdrop-blur-md border border-neutral-200 rounded-3xl p-6 sm:p-8 hover:border-red-600 transition-all duration-300 shadow-xl">
                    <h3 class="text-base sm:text-xl font-black text-neutral-900 uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                        <span class="text-red-600 text-xl sm:text-2xl font-black">/</span> {item.q}
                    </h3>
                    
                    <p class="text-neutral-600 text-xs sm:text-sm leading-relaxed font-bold pl-4 sm:pl-6 border-l-2 border-red-600 mb-5 sm:mb-6 uppercase">
                        {item.a}
                    </p>

                    <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,%20estoy%20interesado%20en%20recibir%20asesoría%20sobre%20tus%20artículos" target="_blank" rel="noreferrer" class="inline-block w-full sm:w-auto text-center bg-neutral-900 hover:bg-red-600 text-white font-black uppercase text-xs md:text-sm tracking-widest py-3 px-6 rounded-2xl transition-colors duration-300 shadow-md">
                        Consultar Asesoría
                    </a>
                </div>
            {/each}
        </div>
    </div>
</section>