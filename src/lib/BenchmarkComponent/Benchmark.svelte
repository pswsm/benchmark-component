<script lang="ts">
import { onDestroy, onMount } from 'svelte';
import { Footer, FooterBrand, Card, FooterCopyright } from "flowbite-svelte";
import { Banner, Navbar, Table, Contact, SocialButtons, BenchmarkFooter } from "$lib";
import { benchmarkConfig } from "$lib/stores";

let config;
export let configProps;

onMount(() => {
	benchmarkConfig.set(configProps)
	console.log(config)

})


const unsubscribe = benchmarkConfig.subscribe((value) => {
	config = value;
});



// console.log(config);
onDestroy(unsubscribe);
	
// let innerHeigth;

//! Component props
/// The page title
export let pageTitle: string;

//TODO
export let bannerData;
// -----------
/// The page description
export let pageDescription: string;

/// The api urls to pass to the table component
export let apiUrls: {headerEndpoint: string, dataEndpoint: string};

/// A list with the navbar elements
export let navObjs: {text: string, link: string}[];

/// The table title, which defaults to 'Leaderboard'
export let tableTitle: string = 'Leaderboard';

/// The table subtitile (optional)
export let tableSubtitle: string | null = null;

/// The images or texts of the footer
export let footerProps: { images: {alt: string, src: string, href?: string, target?: string}[] } | null = null;

/// The navbar colorscheme
export let navColorScheme: { textColor?: "black" | "white", backgroundColor: "red" | "white" | "gray" | "white" | "blue", backgroundHardness?: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 } =
	{
		textColor: "white",
		backgroundColor: "red",
		backgroundHardness: 700
	};

/// The contact mail
export let contact: string;

/// The background color
export let backgroundColor: "white" | "black" | "neutral";

// The font color
export let fontColor: "white" | "black" = "white";

/// The color of the spinner component. Defaults to red
export const spinnerColor: "red" | "white" | "gray" | "white" | "blue" = 'red';

/// The name of the repo (for the star in github button on SocialButtons component)
export let repoName: string;

/// The styles
export let style;
</script>
<header>
	<Navbar {...navColorScheme} navObjs={navObjs} pageTitle={pageTitle} sticky={true}/>
</header>
<Banner imgSrc={"https://club.aina.bsc.es/images/AINA_header.png"} bgcolor={"#404040"} text={"Sample Title"} subtitle={"Sample subtitle"} />
<main class="mx-auto z-20 text-{fontColor} p-8 h-full h-screen" class:bg-neutral-700="{backgroundColor === 'neutral'}">
	<Card id="table-card" class="overflow-x-auto mx-auto rounded-none bg-black border-none my-4" size="xl" color="none">
		<h5 class="mb-2 text-2xl font-bold tracking-tight">{ tableTitle }</h5>
		{#if tableSubtitle}
			<p class="font-normal leading-tight">{ tableSubtitle }</p>
		{/if}
		<Table headerUrl={apiUrls.headerEndpoint} contentUrl={apiUrls.dataEndpoint} />
	</Card>
	<Contact {pageDescription} {pageTitle} contactMail={contact} />
	<Card class="mx-auto rounded-none bg-black border-none my-4" size="xl" color="none">
		<SocialButtons {repoName} {...style} />
	</Card>
</main>
<BenchmarkFooter {footerProps} />
<style>
:global(body){
	min-height: 100%;
}
</style>
