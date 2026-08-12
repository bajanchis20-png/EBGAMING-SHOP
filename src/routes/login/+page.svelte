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
                    Acceso de <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#e60012] via-rose-500 to-[#e60012]">Admin</span>
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