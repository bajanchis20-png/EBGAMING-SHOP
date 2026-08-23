<section class="min-h-screen flex items-center justify-center bg-[#0d0d0f] p-4 sm:p-6 font-sans relative overflow-hidden">
    <!-- Patrón de puntos sutil característico -->
    <div class="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

    <div class="w-full max-w-md relative z-10">
        <div class="relative bg-[#121216] border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-xl">
            <div class="text-center mb-6 sm:mb-8">
                <div class="inline-block px-3.5 py-1 mb-3 rounded-xl bg-white/5 border border-white/10 text-neutral-300 font-black tracking-widest text-[10px] uppercase shadow-sm backdrop-blur-sm">
                    Panel Restringido
                </div>
                <h2 class="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter mb-2">
                    Acceso de <span class="font-gaming font-black uppercase tracking-wider leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-[#e60012] via-[#ff4500] to-[#ffcc00] drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] relative inline-block mx-1">
                        ADMIN
                    </span>
                </h2>
                <p class="text-neutral-500 text-xs font-bold uppercase tracking-[0.15em]">Control total del sistema</p>
            </div>

            <form class="space-y-4 sm:space-y-5" onsubmit={(e) => e.preventDefault()}>
                <div class="space-y-1.5">
                    <label class="text-[10px] uppercase font-black text-neutral-300 tracking-wider pl-1">Usuario / ID</label>
                    <input 
                        type="text" 
                        placeholder="Ingresa tu ID"
                        class="w-full bg-[#17171c] border border-white/10 rounded-2xl p-3.5 text-white placeholder-neutral-500 font-medium focus:border-white/30 focus:bg-[#121216] outline-none transition-all shadow-sm text-sm"
                    />
                </div>

                <div class="space-y-1.5">
                    <label class="text-[10px] uppercase font-black text-neutral-300 tracking-wider pl-1">Contraseña</label>
                    <input 
                        type="password" 
                        placeholder="••••••••"
                        class="w-full bg-[#17171c] border border-white/10 rounded-2xl p-3.5 text-white placeholder-neutral-500 font-medium focus:border-white/30 focus:bg-[#121216] outline-none transition-all shadow-sm text-sm"
                    />
                </div>

                <div class="text-right">
                    <a href="#" class="text-[10px] text-neutral-400 hover:text-white uppercase tracking-wider transition-colors font-black">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>

                <button type="submit" class="w-full py-3.5 sm:py-4 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest transition-all rounded-2xl border border-white/10 hover:border-white/30 shadow-lg backdrop-blur-sm cursor-pointer active:scale-[0.99] text-xs sm:text-sm">
                    Iniciar Sesión
                </button>
            </form>

            <div class="mt-6 sm:mt-8 pt-6 border-t border-white/10 text-center">
                <p class="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                    ¿No tienes una cuenta? 
                    <a href="#" class="text-white hover:text-neutral-300 transition-colors font-black ml-1">Regístrate</a>
                </p>
            </div>
        </div>
    </div>
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800;900&display=swap');

    .font-gaming {
        font-family: 'Orbitron', sans-serif;
    }
</style>