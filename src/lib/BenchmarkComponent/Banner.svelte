<script lang="ts">
	export let imgSrc: string;
	export let bgcolor: string;
	export let text: string | null = null;

	let xWidth: number;

	$: divHeight = (xWidth > 750) ? xWidth * 0.15 : xWidth * 0.20;
</script>
<svelte:window bind:outerWidth={xWidth}/>

{#if imgSrc}
	<div style:min-height='{divHeight}px' style:background-image='linear-gradient(to bottom, rgba(34, 34, 34, 0) 50%, {bgcolor}), url("{imgSrc}")' style:background-repeat="no-repeat" style:background-size="auto, cover"></div>
{:else}
	<div class="text-center flex justify-center items-center" style:background-color='{bgcolor}' style:min-height='{divHeight}px'><h1 class='text-[7vw] capitalize'>{ text }</h1></div>
{/if}
