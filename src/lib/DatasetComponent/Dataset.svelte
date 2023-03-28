<script lang="ts">
export let title: string;
export let description: string;
export let link: string;
</script>
<div class="my-6">
	<hr>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-white"><a href="{link}">{ title }</a></h5>
	<p class="font-normal text-white leading-tight">{ description }</p>
</div>
<style>
a {
	color: #ffce2d;
}
a:hover {
	color: red;
}
</style>
