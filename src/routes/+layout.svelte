<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import "../css/styles.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/assets/obama.ico">
</svelte:head>

<Navbar />

{@render children()}
