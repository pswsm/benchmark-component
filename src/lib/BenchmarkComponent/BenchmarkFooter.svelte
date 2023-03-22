<script lang="ts">
import { Footer, FooterBrand, FooterCopyright } from "flowbite-svelte";
    import { onMount } from "svelte";

export let footerProps: { images: {alt: string, src: string, href?: string, target?: string}[] } | null = null;
export let imageJustify: 'start' | 'center' | 'end' = 'end';

let flexClass: string;

onMount(() => {
	flexClass = `justify-${imageJustify}`;
})
</script>
<Footer class="w-full h-[5%] dark:bg-gray-900 rounded-none" footerType="logo">
	<div class="sm:flex sm:items-center h-full {flexClass}">
	{#if footerProps}
		{#each footerProps.images as image}
			<FooterBrand href={image.href} src={image.src} alt={image.alt} imgClass="h-12 mr-6" />
		{/each}
	{:else}
		<FooterCopyright href="/" by="Barcelona Supercomputing Center" year={2023} class="py-5"/>
	{/if}
	</div>
</Footer>

