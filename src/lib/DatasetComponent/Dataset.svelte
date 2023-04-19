<script lang="ts">
    import Link from "$lib/BenchmarkComponent/Link.svelte";

export let title: string;
export let description: string;
export let link: string;
</script>
<div class="my-6">
	<hr>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-white"><Link href="{link}">{ title }</Link></h5>
	<p class="font-normal text-white leading-tight">{ description }</p>
</div>
