<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
import Icon from "@iconify/svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav>
	<div>
		<a href="/catalogo">catalogo</a>
		<a href="/seguridad-garantia">seguridad</a>
		<a href="/metodos-de-pago">metodos de pago</a>
	</div>

	<div>
		<button>login</button>
		<button>
			whatsaap
			<Icon icon="logos:whatsapp-icon"/>
		</button>
	</div>
</nav>

{@render children()}
<footer>
	<div>
		<img src="" alt="" />
		<p>EBGAMING SHOP</p>
	</div>
</footer>
