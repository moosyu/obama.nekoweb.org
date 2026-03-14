<script lang="ts">
	import favicon from '/assets/obama.ico';
	import Navbar from '$lib/components/Navbar.svelte';
	import "../css/styles.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

{@render children()}
