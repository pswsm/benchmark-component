<script>
    import { Datasets } from "$lib";
	let datasetsData = {
		datasetsUrl: "https://run.mocky.io/v3/ee68590a-2fcc-470e-8159-26893bbca3c2",
		pageTitle: 'Benchmark',
		navObjs: [{text: 'some nav elem', link: '#'}, {text: 'another nav elem', link: '#'}],
		footerProps: {
			images: [
				{src: "https://club.aina.bsc.es/images/generalitat-red-white.png", alt: "Generalitat de Catalunya", href: "https://gencat.cat"},
				{src: "https://club.aina.bsc.es/images/BSC-white-small.png", alt: "Barcelona Supercomputing Center", href: "https://bsc.es"}
			]
		},
		backgroundColor: 'neutral',
		dataStatementBody: 'Data statement body'
	}
</script>
<div class="dark">
	<Datasets {...datasetsData} />
</div>
