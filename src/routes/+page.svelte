<script lang="ts">
  import Benchmark from "$lib/BenchmarkComponent/Benchmark.svelte";
	let benchmarkData = {
		apiUrls: {
			headerEndpoint: "https://run.mocky.io/v3/ee68590a-2fcc-470e-8159-26893bbca3c2",
			dataEndpoint: "https://run.mocky.io/v3/30ba7a4e-92c5-4f9a-8c4f-c94897e3ea42"
		},
		style: {linkColor: "#ffce2d", linkHoverColor: "red"},
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
