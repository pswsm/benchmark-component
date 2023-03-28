<script lang="ts">
	export let imgSrc: string;
	export let bgcolor: string;
	export let text: string | null = null;
	export let subtitle: string | null = null;
	export let color: 'white' | 'black' = 'black';

	let xWidth: number;

	$: divHeight = (xWidth > 750) ? xWidth * 0.15 : xWidth * 0.20;
</script>
<svelte:window bind:outerWidth={xWidth}/>

{#if imgSrc}
	<div style:min-height='{divHeight}px' style:background-image='linear-gradient(to bottom, rgba(34, 34, 34, 0) 50%, {bgcolor}), url("{imgSrc}")' style:background-repeat="no-repeat" style:background-size="auto, cover"></div>
{:else}
	<div class="text-center py-6" style:background-color='{bgcolor}' style:color='{color}'>
		<h1 class='text-[5vw] capitalize align-middle inline'>{ text }</h1>
		<p class="sub">{ subtitle }</p>
	</div>
{/if}
