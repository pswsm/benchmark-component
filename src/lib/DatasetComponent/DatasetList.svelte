<script lang="ts">
import { onMount } from "svelte";
import { Card } from "flowbite-svelte";
import { Dataset, Banner, BenchmarkFooter, Navbar } from "$lib";

//! Component props
/// The page title
export let pageTitle: string;

/// A list with the navbar elements
export let navObjs: {text: string, link: string}[];

/// The images or texts of the footer
export let footerProps: { images: {alt: string, src: string, href?: string, target?: string}[] } | null = null;

/// The navbar colorscheme
export let navColorScheme: { textColor?: "black" | "white", backgroundColor: "red" | "white" | "gray" | "white" | "blue", backgroundHardness?: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 } =
	{
		textColor: "white",
		backgroundColor: "red",
		backgroundHardness: 700
	};

/// The background color
export let backgroundColor: "white" | "black" | "neutral";

/// The color of the spinner component. Defaults to red
export const spinnerColor: "red" | "white" | "gray" | "white" | "blue" = 'red';
export let datasetsUrl: string;
export let dataStatementBody: string;

let datasets: {title: string, link: string, description: string}[] = [];

onMount(async () => {
	let datasetRes = await fetch(datasetsUrl);
	datasets = await datasetRes.json().catch(() => []);
})
</script>
<header>
	<Navbar {...navColorScheme} navObjs={navObjs} pageTitle={pageTitle} />
</header>
<Banner imgSrc={"https://club.aina.bsc.es/images/AINA_header.png"} bgcolor={"#404040"} />
<main class="w-screen mx-auto z-20 text-black dark:text-white p-8 h-full" class:bg-neutral-700={backgroundColor === 'neutral'} class:bg-white={backgroundColor === 'white'} class:bg-black={backgroundColor === 'black'}>
<Card class="overflow-x-auto mx-auto rounded-none bg-black border-none my-4" size="xl" color="none">
	<h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Datasets</h4>
	<hr>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Data Statement</h5>
	<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{ dataStatementBody }</p>
	{#each [...datasets] as dataset}
		<Dataset datasetTitle={dataset.title} datasetBody={dataset.description}/>
	{:else}
		<p>No datasets available</p>
	{/each}
</Card>
</main>
<BenchmarkFooter {footerProps} />
