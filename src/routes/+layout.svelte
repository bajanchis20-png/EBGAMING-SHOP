<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

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
		<button>whatsaap</button>
	</div>


</nav>



{@render children()}
