<script>
    import Icon from "@iconify/svelte";
    import Nuevatarjeta from "$lib/components/Nuevatarjeta.svelte";

    let cart = $state([]);
    let isCartOpen = $state(false);
    let searchQuery = $state("");
    let selectedPayment = $state("");
    let selectedCategory = $state("todos");

    const whatsappNumber = "584149430559"; 

    const categories = [
        { id: "todos", name: "Todos" },
        { id: "sets", name: "Sets & Equipos" },
        { id: "personajes", name: "Personajes" },
        { id: "moneda", name: "Moneda (Won)" },
        { id: "guantes_cintos", name: "Guantes y Cintos +9" },
        { id: "armas_armaduras", name: "+10 Armas & Armaduras" },
        { id: "items", name: "Accesorios & Armas" },
        { id: "custom", name: "Estética & Extras" }
    ];

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
        { titulo: "SET DEL CAOS PERFECTO DOP", img: "/setcaos.jpg", descripcion: "El poder definitivo 60 media, para 215+. No pierdas la oportunidad de ser el top del servidor en PVM + GUÍA DE PVM", category: "sets" },
        { titulo: "SET DE ENERGIA PERFECTO DOP", img: "/setenergia.jpg", descripcion: "Domina el PVM y genera Won masivamente desde nivel 75 hasta 215 con este equipamiento optimizado + GUÍA DE PVM", category: "sets" },
        { titulo: "WON AL MEJOR PRECIO DEL MERCADO", img: "/won.jpg", descripcion: "Entrega inmediata en tu servidor preferido, ofrecemos won en todos los sever, Guabina, Iberia &+", category: "moneda" },
        { titulo: "PERSONAJE EQUIPADO LV 85", img: "/lv85.jpeg", descripcion: "Eleva tu diversión a otro nivel, Sura, guerrero, ninja o chaman, tu decides. 4 set perfectos lv85, 4 armas piedras +6, 4 armaduras y 70.000 WON", category: "personajes" },
        { titulo: "PERSONAJE EQUIPADO LV 215", img: "/personaje.jpg", descripcion: "Haz una sola inversion y obten todo lo que necesitas para ser el mejor, Sura, guerrero, ninja o chaman, tu decides. 10 equipos, perfectos armas y armaduras", category: "personajes" },
        { titulo: "PERSONAJE EQUIPADO LV 235", img: "/235lv235.jpeg", descripcion: "Sura, guerrero, ninja o chaman, tu decides. 4 Set's perfectos pvp, con armas & armaduras +9 o +10, cinto de guerra, libro potenciacion, guantes del caos", category: "personajes" },
        { titulo: "SET'S PERFECTOS PVP", img: "/pvpset.jpeg", descripcion: "Set perfecto EUFORIA desde lv85 a 160, set perfecto ELEMENTAL desde lv235+. No pierdas la oportunidad", category: "sets" },
        { titulo: "GUANTES+9", img: "/guante.jpg", descripcion: "El poder que necesitas, te ofrecemos el guante que elijas.", category: "guantes_cintos" },
        { titulo: "CINTOS+9", img: "/cinto.jpg", descripcion: "Cinto de guerra para PVP, cinto de vida para PVM, y todos los que ocupes dentro del juego", category: "guantes_cintos" },
        { titulo: "ARMAS & ARMADURAS+10", img: "/masdiez.jpeg", descripcion: "Domina el juego en su totalidad con el poder maximo", category: "armas_armaduras" },
        { titulo: "MONTURAS GOLD", img: "/monturas2.jpeg", descripcion: "Velocidad y bonus exclusivos para tu personaje", category: "custom" },
        { titulo: "ATUENDOS", img: "/elatuendo.jpg", descripcion: "Haz que tu personaje sea único. Selecciona tu estilo y solicita tu diseño personalizado hoy mismo", category: "custom" },
        { titulo: "NARUTO & AKATSUKI", img: "/naruto.jpg", descripcion: "Todos amamos naruto, y mucho mas en nuestro juego favorito. Domina el PVM con el atuendo NARUTO, y el PVP con el AKATSUKI", category: "custom" },
        { titulo: "ESTOLAS", img: "/estolas2.png", descripcion: "Incrementa tu ataque con las mejores estolas, en PVM O PVP", category: "items" },
        { titulo: "EFECTOS", img: "/efectos.png", descripcion: "Lleva el estilo contigo, convierte tu personaje esteticamente a tu gusto, efectos disponibles para armas & armaduras", category: "custom" },
        { titulo: "MASCOTAS", img: "/mascotas.png", descripcion: "Potencia tu poder, tenemos para ti mascotas PVM & PVP", category: "custom" },
        { titulo: "SUBE DE NIVEL CON UN CLICK", img: "/livro.jpg", descripcion: "Con el Aprendizaje 215, sube de nivel a Lv215 con un click, con el Libro de potenciación sube a Lv235 con un click", category: "items" }
    ];

    let filteredProducts = $derived(
        products.filter(product => {
            const matchesSearch = product.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                product.descripcion.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "todos" || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        })
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

<section class="text-white px-3 sm:px-6 py-6 sm:py-12 bg-[#0d0d0f] border-b border-white/10 relative overflow-x-hidden">
<div class="max-w-7xl mx-auto mb-4 px-1 sm:px-6 py-1">
    
    <!-- Título ultra responsivo con escala fluida y degradado plateado -->
    <h1 class="text-3xl min-[400px]:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-2">
        <span class="font-gaming font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#9ca3af] via-[#ffffff] to-[#4b5563] drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] relative inline-block">
            Vista del Catálogo
        </span>
    </h1>

    <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 mt-3">
        <div class="flex flex-col gap-1.5">
            <div class="flex items-center gap-2 text-neutral-400 uppercase tracking-[0.15em] text-[9px] sm:text-xs font-bold flex-wrap">
                <span>Metin2 Guabina</span>
                <span class="w-4 sm:w-8 h-[1px] bg-white/20"></span>
                <span>Equipamiento de Elite</span>
            </div>
        </div>

        <div class="w-full md:w-72">
            <div class="relative">
                <input 
                    type="text" 
                    bind:value={searchQuery}
                    placeholder="Buscar equipamiento, won..." 
                    class="w-full bg-[#121216] border border-white/10 hover:border-white/30 focus:border-white/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all font-bold shadow-sm backdrop-blur-sm"
                />
            </div>
        </div>
    </div>

    <!-- Categorías ultra responsive y fluidas -->
    <div class="mt-4 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2">
        {#each categories as category}
            <button
                type="button"
                onclick={() => selectedCategory = category.id}
                class={`px-3 py-2.5 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wider text-center transition-all duration-300 cursor-pointer border truncate backdrop-blur-sm ${selectedCategory === category.id ? 'bg-white/10 text-white border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'bg-white/5 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'}`}
            >
                {category.name}
            </button>
        {/each}
    </div>
</div>

<!-- Cuadrícula con espaciado equilibrado, altura uniforme y contenedor de proporción perfecta -->
<div class="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
     
     {#if filteredProducts.length === 0}
         <div class="col-span-full text-center py-16">
             <p class="text-neutral-500 uppercase tracking-widest text-xs sm:text-sm px-4 font-bold">No se encontraron productos para "{searchQuery}"</p>
         </div>
     {:else}
         {#each filteredProducts as product}
             <div class="h-full flex flex-col [&>div]:h-full [&>div]:flex [&>div]:flex-col">
                 <Nuevatarjeta 
                    titulo={product.titulo} 
                    img={product.img} 
                    descripcion={product.descripcion} 
                    buttonText="COMPRAR AHORA"
                    onAddToCart={() => addToCart(product.titulo)} 
                 />
             </div>
         {/each}
     {/if}

</div>

  <!-- Botón Flotante del Carrito -->
  <button 
      onclick={() => isCartOpen = !isCartOpen}
      class="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 bg-white/10 hover:bg-white/20 text-white font-black p-3.5 sm:p-4 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
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

  <!-- Panel Deslizante del Carrito (Drawer) - Escalado compacto móvil -->
  {#if isCartOpen}
      <div class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end transition-opacity">
          <div class="w-full sm:max-w-md bg-[#121216] border-l border-white/10 h-full p-4 sm:p-6 flex flex-col justify-between shadow-2xl">
              <div class="overflow-y-auto pr-1 flex-1">
                  <div class="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10">
                      <h3 class="text-xl sm:text-2xl font-black uppercase text-white tracking-wider flex items-center gap-2">
                          <span class="text-white/80">🛒</span> Tu Carrito
                      </h3>
                      <button onclick={() => isCartOpen = false} class="text-neutral-400 hover:text-white text-xl font-bold p-2 cursor-pointer">
                          ✕
                      </button>
                  </div>

                  <div class="mt-4 sm:mt-5 space-y-3">
                      {#if cart.length === 0}
                          <p class="text-neutral-500 text-center py-12 uppercase tracking-widest text-xs sm:text-sm font-bold">Tu carrito está vacío</p>
                      {:else}
                          {#each cart as item, index}
                              <div class="flex items-center justify-between bg-[#17171c] border border-white/10 p-3.5 rounded-2xl gap-2 shadow-sm">
                                  <div class="flex-1 pr-1">
                                      <h4 class="text-white text-xs font-black uppercase">{item.titulo}</h4>
                                      <p class="text-neutral-400 text-[10px] sm:text-xs font-bold mt-1 uppercase tracking-wider">Consultar</p>
                                  </div>
                                  <div class="flex items-center gap-1.5 sm:gap-2">
                                      <button onclick={() => updateQuantity(index, -1)} class="w-7 h-7 bg-white/5 border border-white/10 hover:border-white/30 text-white rounded-xl font-bold hover:bg-white/10 flex items-center justify-center cursor-pointer text-xs backdrop-blur-sm">-</button>
                                      <span class="text-xs sm:text-sm font-black text-white w-5 text-center">{item.cantidad}</span>
                                      <button onclick={() => updateQuantity(index, 1)} class="w-7 h-7 bg-white/5 border border-white/10 hover:border-white/30 text-white rounded-xl font-bold hover:bg-white/10 flex items-center justify-center cursor-pointer text-xs backdrop-blur-sm">+</button>
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
                                      class={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl border text-xs font-bold transition-all text-left cursor-pointer backdrop-blur-sm ${selectedPayment === method.id ? 'bg-white/10 border-white/30 text-white shadow-sm' : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/30 hover:bg-white/10'}`}
                                  >
                                      <Icon icon={method.icon} class="w-5 h-5 flex-shrink-0" />
                                      <span class="truncate uppercase">{method.name}</span>
                                  </button>
                              {/each}
                          </div>
                      </div>
                  {/if}
              </div>

              <div class="pt-4 sm:pt-6 border-t border-white/10 mt-2">
                  <div class="flex justify-between items-center mb-4">
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

<!-- Sección FAQ (Versión Compacta y Móvil Optimizada) -->
<section class="py-10 sm:py-20 px-4 sm:px-6 bg-[#121216] border-t border-white/10 relative">
    <div class="max-w-3xl mx-auto">
        <div class="text-center mb-10 sm:mb-14">
            <h2 class="text-neutral-400 text-xs font-black uppercase tracking-[0.3em] mb-2">Resolución de Dudas</h2>
            <h3 class="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
                Preguntas <span class="text-neutral-400 italic">Frecuentes</span>
            </h3>
        </div>

        <div class="space-y-4 sm:space-y-6">
            {#each [
                { q: "¿Los items vienen dopados?", a: "Absolutamente. Cada pieza es optimizada al máximo nivel, incluyendo piedras de alta calidad y bonus perfectos para asegurar tu dominio en el campo de batalla." },
                { q: "¿Cómo puedo generar won?", a: "Al adquirir uno de nuestros sets PvM, recibirás acceso exclusivo a nuestra guía estratégica personalizada según tu nivel, diseñada para maximizar tu capacidad de farmeo." },
                { q: "¿Qué métodos de pago aceptan?", a: "Disponemos de una infraestructura de pago global segura. Consulta nuestra sección dedicada para ver el catálogo completo de transferencias y monederos digitales disponibles en tu región." }
            ] as item}
                <div class="group relative bg-[#17171c] backdrop-blur-md border border-white/10 rounded-3xl p-5 sm:p-7 hover:border-white/30 transition-all duration-300 shadow-xl">
                    <h3 class="text-sm sm:text-lg font-black text-white uppercase tracking-wider mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
                        <span class="text-neutral-400 text-lg sm:text-xl font-black">/</span> {item.q}
                    </h3>
                    
                    <p class="text-neutral-400 text-xs sm:text-sm leading-relaxed font-bold pl-3 sm:pl-5 border-l-2 border-white/20 mb-4 sm:mb-5 uppercase">
                        {item.a}
                    </p>

                    <a href="https://api.whatsapp.com/send/?phone=584149430559&text=Hola,%20estoy%20interesado%20en%20recibir%20asesoría%20sobre%20tus%20artículos" target="_blank" rel="noreferrer" class="inline-block w-full sm:w-auto text-center bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 font-black uppercase text-xs md:text-sm tracking-widest py-3 px-6 rounded-2xl transition-all duration-300 shadow-md backdrop-blur-sm active:scale-[0.98]">
                        Consultar Asesoría
                    </a>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800;900&display=swap');

  .font-gaming {
    font-family: 'Orbitron', sans-serif;
  }
</style>