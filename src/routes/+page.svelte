<script lang="ts">
    import Benchmark from "$lib/BenchmarkComponent/Benchmark.svelte";
	let benchmarkData = {
		title: 'Example Benchmark',
		apiUrl: '',
		pageDescription: 'A description for our benchmark example.',
		navObjs: [{text: 'some nav elem', link: '#'}, {text: 'another nav elem', link: '#'}],
		footerProps: {images: [{src: "https://club.aina.bsc.es/images/generalitat-red-white.png", alt: "Generalitat de Catalunya", href: "https://gencat.cat"}, {src: "https://club.aina.bsc.es/images/BSC-white-small.png", alt: "Barcelona Supercomputing Center", href: "https://bsc.es"}]}
	}

</script>
<div class="dark">
	<Benchmark {...benchmarkData} />
</div>
