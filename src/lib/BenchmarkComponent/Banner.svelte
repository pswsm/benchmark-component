<script lang="ts">
	export let imgSrc: string;
	export let bgcolor: string;
	export let text: string | null = null;
	export let minHeight: string = "300px"
</script>
{#if text}
	<div class="text-center flex justify-center items-center" style:background-color='{bgcolor}' style:min-height='{minHeight}'><h1 class='text-[7vw] capitalize'>{ text }</h1></div>
{:else}
	<div style:min-height='{minHeight}' style:background-image='linear-gradient(to bottom, rgba(34, 34, 34, 0), {bgcolor}), url("{imgSrc}")' style:background-repeat="no-repeat" style:background-size="auto, cover"></div>
{/if}
