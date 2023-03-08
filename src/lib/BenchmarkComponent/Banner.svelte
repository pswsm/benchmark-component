<script lang="ts">
    import { Img } from "flowbite-svelte";

	export let imgSrc: string;
	export let bgcolor: string;
	export let text: string | null = null;
</script>
{#if text}
	<div style="background-color: { bgcolor };" class="text-center"><p class="h2">{ text }</p></div>
{:else}
	<div style="background-image: linear-gradient(to botttom, rgba(1, 1, 1, 0) 50%, { bgcolor }), url({ imgSrc }); background-repeat: no-repeat, no-repeat; background-size: auto, cover;">
		<div class="container"></div>
	</div>
{/if}
