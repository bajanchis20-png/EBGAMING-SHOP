<section class="min-h-screen flex items-center justify-center bg-[#f5f5f7] p-6 font-sans relative overflow-hidden">
    <!-- Patrón de puntos sutil característico -->
    <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#e60012_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

    <div class="w-full max-w-md relative">
        <div class="relative bg-white border-4 border-neutral-900 p-8 sm:p-10 rounded-2xl shadow-[6px_6px_0px_0px_#171717]">
            <div class="text-center mb-8">
                <div class="inline-block px-3 py-1 mb-3 rounded-lg bg-red-50 border-2 border-neutral-900 text-red-600 font-black tracking-widest text-[10px] uppercase shadow-[2px_2px_0px_#171717]">
                    Panel Restringido
                </div>
                <h2 class="text-3xl font-black text-neutral-900 uppercase tracking-tighter mb-2">
                    Acceso de <span class="text-red-600">Admin</span>
                </h2>
                <p class="text-neutral-500 text-xs font-bold uppercase tracking-[0.15em]">Control total del sistema</p>
            </div>

            <form class="space-y-5" onsubmit={(e) => e.preventDefault()}>
                <div class="space-y-1.5">
                    <label class="text-[10px] uppercase font-black text-neutral-700 tracking-wider pl-1">Usuario / ID</label>
                    <input 
                        type="text" 
                        placeholder="Ingresa tu ID"
                        class="w-full bg-neutral-50 border-2 border-neutral-900 rounded-xl p-3 text-neutral-900 placeholder-neutral-400 font-medium focus:border-red-600 focus:bg-white outline-none transition-all shadow-[2px_2px_0px_#171717] text-sm"
                    />
                </div>

                <div class="space-y-1.5">
                    <label class="text-[10px] uppercase font-black text-neutral-700 tracking-wider pl-1">Contraseña</label>
                    <input 
                        type="password" 
                        placeholder="••••••••"
                        class="w-full bg-neutral-50 border-2 border-neutral-900 rounded-xl p-3 text-neutral-900 placeholder-neutral-400 font-medium focus:border-red-600 focus:bg-white outline-none transition-all shadow-[2px_2px_0px_#171717] text-sm"
                    />
                </div>

                <div class="text-right">
                    <a href="#" class="text-[10px] text-neutral-500 hover:text-red-600 uppercase tracking-wider transition-colors font-black">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>

                <button type="submit" class="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-widest transition-all rounded-xl border-2 border-neutral-900 shadow-[4px_4px_0px_0px_#171717] cursor-pointer active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#171717] text-xs sm:text-sm">
                    Iniciar Sesión
                </button>
            </form>

            <div class="mt-8 pt-6 border-t-2 border-neutral-200 text-center">
                <p class="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                    ¿No tienes una cuenta? 
                    <a href="#" class="text-red-600 hover:text-neutral-900 transition-colors font-black ml-1">Regístrate</a>
                </p>
            </div>
        </div>
    </div>
</section>