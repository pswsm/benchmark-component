<script>
    import { Datasets } from "$lib";
	let datasetsData = {
		datasetsUrl: "https://run.mocky.io/v3/a96c7dd9-bf02-4e4b-be1b-c78971ea7af0",
		pageTitle: 'Benchmark',
		navObjs: [{text: 'Home', link: '/'}, {text: 'Datasets', link: '/datasets'}],
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
