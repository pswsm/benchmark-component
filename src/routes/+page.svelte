<script lang="ts">
    import Benchmark from "$lib/BenchmarkComponent/Benchmark.svelte";
	let benchmarkData = {
		title: 'Example Benchmark',
		apiUrl: '',
		pageDescription: 'A description for our benchmark example.',
		navObjs: [{text: 'some nav elem', link: '#'}, {text: 'another nav elem', link: '#'}]
	}

</script>
<Benchmark {...benchmarkData} />
