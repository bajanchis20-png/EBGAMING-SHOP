<section class="min-h-screen flex items-center justify-center bg-[#05070d] p-6">
    <div class="w-full max-w-md relative group">
        <div class="absolute -inset-0.5 bg-gradient-to-tr from-blue-900 via-yellow-700 to-black rounded-3xl opacity-20 blur-lg transition duration-700"></div>
        
        <div class="relative bg-[#0a0f1d] border border-blue-900/50 p-10 rounded-3xl shadow-2xl">
            <div class="text-center mb-10">
                <h2 class="text-3xl font-black text-white uppercase tracking-tighter mb-2">
                    Acceso de <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-600">Administrador</span>
                </h2>
                <p class="text-blue-200/40 text-xs font-bold uppercase tracking-[0.2em]">Bienvenido al panel de control</p>
            </div>

            <form class="space-y-6" on:submit|preventDefault>
                <div class="space-y-2">
                    <label class="text-[10px] uppercase font-bold text-blue-200/40 tracking-widest pl-1">Usuario / ID</label>
                    <input 
                        type="text" 
                        placeholder="Ingresa tu ID"
                        class="w-full bg-[#05070d] border border-blue-900/50 rounded-xl p-4 text-white placeholder-blue-900 focus:border-yellow-600/50 outline-none transition-all"
                    />
                </div>

                <div class="space-y-2">
                    <label class="text-[10px] uppercase font-bold text-blue-200/40 tracking-widest pl-1">Contraseña</label>
                    <input 
                        type="password" 
                        placeholder="••••••••"
                        class="w-full bg-[#05070d] border border-blue-900/50 rounded-xl p-4 text-white placeholder-blue-900 focus:border-yellow-600/50 outline-none transition-all"
                    />
                </div>

                <div class="text-right">
                    <a href="#" class="text-[10px] text-blue-200/40 hover:text-yellow-600 uppercase tracking-widest transition-colors font-bold">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>

                <button class="w-full py-4 bg-gradient-to-r from-blue-900 to-yellow-700 hover:from-blue-800 hover:to-yellow-600 text-white font-black uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(202,138,4,0.2)] rounded-xl">
                    Iniciar Sesión
                </button>
            </form>

            <div class="mt-8 pt-6 border-t border-blue-900/50 text-center">
                <p class="text-[10px] text-blue-200/40 uppercase tracking-widest">
                    ¿No tienes una cuenta? 
                    <a href="#" class="text-yellow-600 hover:text-white transition-colors font-bold ml-1">Regístrate</a>
                </p>
            </div>
        </div>
        
        <div class="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blue-600/50"></div>
        <div class="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-yellow-600/50"></div>
    </div>
</section>