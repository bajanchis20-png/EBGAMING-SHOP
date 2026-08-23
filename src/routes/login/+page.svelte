<section class="min-h-screen flex items-center justify-center bg-[#0d0d0f] p-6 font-sans relative overflow-hidden">
    <!-- Patrón de puntos sutil característico -->
    <div class="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#e60012_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

    <div class="w-full max-w-md relative">
        <div class="relative bg-[#121216] border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-xl">
            <div class="text-center mb-8">
                <div class="inline-block px-3 py-1 mb-3 rounded-xl bg-[#e60012]/10 border border-[#e60012]/20 text-[#e60012] font-black tracking-widest text-[10px] uppercase shadow-md">
                    Panel Restringido
                </div>
                <h2 class="text-3xl font-black text-white uppercase tracking-tighter mb-2">
                    Acceso de <span class="font-fantasy font-black uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-950 via-red-600 to-rose-400 blood-pulse-flicker relative pb-3 cursor-default inline-block mx-2">
                        ADMIN
                        <span class="blood-drop drop-1"></span>
                        <span class="blood-drop drop-2"></span>
                        <span class="blood-drop drop-3"></span>
                        <span class="blood-drop drop-4"></span>
                    </span>
                </h2>
                <p class="text-neutral-500 text-xs font-bold uppercase tracking-[0.15em]">Control total del sistema</p>
            </div>

            <form class="space-y-5" onsubmit={(e) => e.preventDefault()}>
                <div class="space-y-1.5">
                    <label class="text-[10px] uppercase font-black text-neutral-300 tracking-wider pl-1">Usuario / ID</label>
                    <input 
                        type="text" 
                        placeholder="Ingresa tu ID"
                        class="w-full bg-[#17171c] border border-white/10 rounded-2xl p-3.5 text-white placeholder-neutral-500 font-medium focus:border-[#e60012] focus:bg-[#121216] outline-none transition-all shadow-sm text-sm"
                    />
                </div>

                <div class="space-y-1.5">
                    <label class="text-[10px] uppercase font-black text-neutral-300 tracking-wider pl-1">Contraseña</label>
                    <input 
                        type="password" 
                        placeholder="••••••••"
                        class="w-full bg-[#17171c] border border-white/10 rounded-2xl p-3.5 text-white placeholder-neutral-500 font-medium focus:border-[#e60012] focus:bg-[#121216] outline-none transition-all shadow-sm text-sm"
                    />
                </div>

                <div class="text-right">
                    <a href="#" class="text-[10px] text-neutral-400 hover:text-[#e60012] uppercase tracking-wider transition-colors font-black">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>

                <button type="submit" class="w-full py-4 bg-[#e60012] hover:bg-[#cc0010] text-white font-black uppercase tracking-widest transition-all rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(230,0,18,0.4)] cursor-pointer active:scale-[0.99] text-xs sm:text-sm">
                    Iniciar Sesión
                </button>
            </form>

            <div class="mt-8 pt-6 border-t border-white/10 text-center">
                <p class="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                    ¿No tienes una cuenta? 
                    <a href="#" class="text-[#e60012] hover:text-white transition-colors font-black ml-1">Regístrate</a>
                </p>
            </div>
        </div>
    </div>
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