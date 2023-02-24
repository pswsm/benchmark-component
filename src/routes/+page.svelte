<script lang="ts">
  import Benchmark from "$lib/BenchmarkComponent/Benchmark.svelte";
	let benchmarkData = {
		title: 'Example Benchmark',
		pageDescription: 'A description for our benchmark example.',
		navObjs: [{text: 'some nav elem', link: '#'}, {text: 'another nav elem', link: '#'}],
		footerProps: {images: [
									{src: "https://club.aina.bsc.es/images/generalitat-red-white.png", alt: "Generalitat de Catalunya", href: "https://gencat.cat"},
									{src: "https://club.aina.bsc.es/images/BSC-white-small.png", alt: "Barcelona Supercomputing Center", href: "https://bsc.es"}
									]},
		}
</script>
<div class="dark">
	<Benchmark {...benchmarkData} apiUrls={{headerEndpoint: "https://run.mocky.io/v3/b00d16ac-ea56-4128-9999-9151088041c0", dataEndpoint: "https://run.mocky.io/v3/83910796-181a-45ed-a008-1a99ec3544d5"}}  />
</div>
