<script lang="ts">
  import Benchmark from "$lib/BenchmarkComponent/Benchmark.svelte";
	let benchmarkData = {
		apiUrls: {
			headerEndpoint: "https://run.mocky.io/v3/ee68590a-2fcc-470e-8159-26893bbca3c2",
			dataEndpoint: "https://run.mocky.io/v3/d6b60096-ef97-4324-bb76-79189e557e95"
		},
		pageTitle: 'Benchmark',
		pageDescription: 'A description for our benchmark.',
		tableSubtitle: 'The table subtitle',
		navObjs: [{text: 'Home', link: '/'}, {text: 'Datasets', link: '/datasets'}],
		footerProps: {
			images: [
				{src: "https://club.aina.bsc.es/images/generalitat-red-white.png", alt: "Generalitat de Catalunya", href: "https://gencat.cat"},
				{src: "https://club.aina.bsc.es/images/BSC-white-small.png", alt: "Barcelona Supercomputing Center", href: "https://bsc.es"}
			]
		},
		contact: 'aina@bsc.es',
		backgroundColor: 'neutral',
		repoName: 'projecte-aina/catalan-language-understanding-benchmark'
	}
</script>
<div class="dark">
	<Benchmark {...benchmarkData} />
</div>
