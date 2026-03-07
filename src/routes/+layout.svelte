<script lang="ts">
	import favicon from '/assets/obama.ico';
	import "../css/styles.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
