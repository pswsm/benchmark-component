<script lang="ts">
import { Footer, FooterBrand, Card, FooterCopyright } from "flowbite-svelte";
import { Banner, Navbar, Table, Contact, SocialButtons } from "$lib";

// Component props
export let pageTitle: string;
export let pageDescription: string;
export let apiUrls: {headerEndpoint: string, dataEndpoint: string};
export let navObjs: {text: string, link: string}[];
export let tableTitle: string = 'Leaderboard';
export let tableSubtitle: string | null = null;
export let footerProps: { images?: Array<{alt: string, src: string, href?: string, target?: string}>, texts?: string[] } = {};
export let navColorScheme: { textColor?: "black" | "white", backgroundColor: "red" | "white" | "gray" | "white" | "blue", backgroundHardness?: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 } = { textColor: "white", backgroundColor: "red", backgroundHardness: 700 };
export let contact: string;
export let backgroundColor: "white" | "black" | "neutral";
export let spinnerColor: "red" | "white" | "gray" | "white" | "blue" = 'red';

// let modelsData: Promise<any> = fetch(apiUrl);
// let tableHeaders: Promise<{tasks: object[]}>;
// let tableHeaders: Promise<{ tasks: { _id: { "$oid": string }[], description: string, name: string }[] }> = fetch(apiUrls.headerEndpoint).then( (res) => res.json() ).catch( (err) => err );
// let tableContent: Promise<{ results: {model: string, score: number, submitted_by: string, URL: string, task1: number, task2: number, task3: number, task4: number}[] }> = fetch(apiUrls.dataEndpoint).then((res) => res.json());
</script>
<header>
<Navbar {...navColorScheme} navObjs={navObjs} pageTitle={pageTitle} />
</header>
<Banner imgSrc={"https://club.aina.bsc.es/images/AINA_header.png"} bgcolor={"#404040"} />
<main class="w-screen mx-auto z-20 text-black dark:text-white p-8" class:bg-neutral-700="{backgroundColor === 'neutral'}">
<Card id="table-card" class="mx-auto rounded-none bg-black border-none my-4" size="xl" color="none">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ tableTitle }</h5>
	{#if tableSubtitle}
		<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight"></p>
	{/if}
	<Table2 headerUrl={apiUrls.headerEndpoint} contentUrl={apiUrls.dataEndpoint} />
</Card>
<Card id="about-card" class="mx-auto rounded-none bg-black border-none my-4" size="xl" color="none">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About { pageTitle }</h5>
	<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{ pageDescription }</p>
</Card>
</main>
<Footer class="w-full h-[5%] dark:bg-gray-900 rounded-none" footerType="logo">
	<div class="sm:flex sm:items-center sm:justify-end h-full">
	{#if Object.hasOwn(footerProps, 'images')}
		{#each footerProps.images as image}
			<FooterBrand href={image.href} src={image.src} alt={image.alt} imgClass="h-12 mr-6" />
		{/each}
	{/if}
	</div>
</Footer>
