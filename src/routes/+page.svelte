<script lang="ts">
  import Benchmark from "$lib/BenchmarkComponent/Benchmark.svelte";
	let benchmarkData = {
		pageTitle: 'Benchmark',
		pageDescription: 'A description for our benchmark.',
		navObjs: [{text: 'some nav elem', link: '#'}, {text: 'another nav elem', link: '#'}],
		footerProps: {
			images: [
				{src: "https://club.aina.bsc.es/images/generalitat-red-white.png", alt: "Generalitat de Catalunya", href: "https://gencat.cat"},
				{src: "https://club.aina.bsc.es/images/BSC-white-small.png", alt: "Barcelona Supercomputing Center", href: "https://bsc.es"}
			]
		},
		contact: 'aina@bsc.es',
		backgroundColor: 'neutral'
	}
	let apiUrls = {
		headerEndpoint: "https://run.mocky.io/v3/ee68590a-2fcc-470e-8159-26893bbca3c2",
		dataEndpoint: "https://run.mocky.io/v3/83910796-181a-45ed-a008-1a99ec3544d5"
	}
</script>
<div class="dark">
	<Benchmark {...benchmarkData} apiUrls={apiUrls}  />
</div>
