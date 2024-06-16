<script lang="ts">
	import NavbarBasic from '$lib/NavbarBasic.svelte';
	import SectionHero from '$lib/components/sections/SectionHero.svelte';
	import SectionHome from '$lib/components/sections/SectionHome.svelte';
</script>

<svelte:head>
	<title>Adopta un compañero de vida.</title>
</svelte:head>

<NavbarBasic />
<SectionHome />
<SectionHero
	title="Adopta un compañero de vida."
	description="Busca a tu amigo que esta buscando un nuevo hogar."
/>
