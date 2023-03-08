<script lang="ts">
    import { Img } from "flowbite-svelte";

	export let imgSrc: string;
	export let bgcolor: string;
	export let text: string | null = null;
	export let minHeight: string = "300px"
</script>
{#if text}
	<div class="min-h-[{minHeight}] text-center flex justify-center items-center" style:background-color='{bgcolor}'><h1 class='text-[7vw] capitalize'>{ text }</h1></div>
{:else}
	<div class="min-h-[{minHeight}]" style:background-image='linear-gradient(to bottom, rgba(34, 34, 34, 0), {bgcolor}), url("{imgSrc}")' style:background-repeat="no-repeat" style:background-size="auto, cover"></div>
{/if}
