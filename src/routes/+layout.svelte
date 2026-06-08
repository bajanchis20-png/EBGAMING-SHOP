<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Icon from "@iconify/svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav
	class="flex justify-between items-center px-12 py-4 bg-black border-b-2 border-orange-600 shadow-[0_0_20px_rgba(255,85,0,0.3)]"
>
	<div class="flex gap-5 text-white font-semibold uppercase items-center">
		<a href="/">
			<img class="rounded-full w-24" src="/logofondox.png" alt=""/>
		</a>
<a href="/items">items y +</a>
		<a href="/seguridad-garantia">seguridad</a>
		<a href="/metodos-de-pago">metodos de pago</a>
		<a href="/albion-online">Albion Online</a>
		<a href="/vista-previa">Metin2.es</a>
	</div>

	<div class="flex gap-5 ">
		<button
			class="flex items-center text-lg font-semibold text-red-100 border-2 border-red-100 px-6 py-1.5 gap-1.5
           transition-all duration-300 ease-in-out uppercase
           hover:bg-red-100 hover:text-black hover:border-red-100"
		>
			Login
		</button>
		<button
			class="flex items-center gap-2 px-6 py-2 text-lg font-semibold uppercase text-white bg-green-600 border border-green-600 transition-all duration-300 hover:bg-green-700 hover:border-green-500 hover:shadow-lg hover:shadow-green-900/20"
		>
			WhatsApp
			<Icon icon="ic:baseline-whatsapp" width={24} height={24} />
		</button>
	</div>
</nav>

{@render children()}
<footer class="footer">
	<div class="flex-1 text-center p-25">
		<img class="rounded-full m-auto" src="/logofondox.png" width="74" />
		<p
			class="font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-yellow-600 via-yellow-400 to-yellow-200 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)] uppercase tracking-wider"
		>
			EBGAMING SHOP
		</p>
	</div>
</footer>
