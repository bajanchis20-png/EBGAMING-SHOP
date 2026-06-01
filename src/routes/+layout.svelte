<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Icon from "@iconify/svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="flex justify-between items center px-12 py-4 bg-red-950 shadow-2xl shadow-rose-950">
	<div class="text-lg font-semibold flex gap-5 text-white">
		<a href="/">
			<img class="rounded-full" src="/logofondox.png" alt="" width={70} />
		</a>
		<a href="/catalogo">catalogo</a>
		<a href="/seguridad-garantia">seguridad</a>
		<a href="/metodos-de-pago">metodos de pago</a>
	</div>

	<div class="flex gap-5">
		<button
			class="flex text-lg font-semibold text-white border-2 border-red-300 px-6 py-1.5 gap-1.5"
		>
			Login
		</button>
		<button
			class="flex text-lg font-semibold text-white border-2 border-red-300 px-6 py-1.5 bg-red-300 gap-1.5"
		>
			WhatsApp
			<Icon icon="logos:whatsapp-icon" width={24} height={24} />
		</button>
	</div>
</nav>

{@render children()}
<footer>
	<div>
		<img src="" alt="" />
		<p>EBGAMING SHOP</p>
	</div>
	<Icon icon="logos:whatsapp-icon" width={24} height={24} />
</footer>
