<script lang="ts">
import { Footer, FooterBrand, Card, Navbar, NavBrand, NavHamburger, NavLi, NavUl, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Spinner } from "flowbite-svelte";
import { Banner } from "$lib";

// Component props
export let pageTitle: string;
export let pageDescription: string;
export let apiUrls: {headerEndpoint: string, dataEndpoint: string};
export let navObjs: {text: string, link: string}[];
export let tableTitle: string = 'Leaderboard';
export let tableSubtitle: string | null = null;
export let footerProps: { images?: Array<{alt: string, src: string, href?: string, target?: string}>, texts?: string[] } = {};
export let colorScheme: { textColor?: "black" | "white", color: "red" | "white" | "gray" | "white" | "blue", hardness?: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, background: "white" | "black" | "neutral" } = { textColor: "white", color: "red", hardness: 700, background: "neutral" };

// let modelsData: Promise<any> = fetch(apiUrl);
// let tableHeaders: Promise<{tasks: object[]}>;
let tableHeaders: Promise<{ tasks: { _id: { "$oid": string }[], description: string, name: string }[] }> = fetch(apiUrls.headerEndpoint).then( (res) => res.json() ).catch( (err) => err );
let tableContent: Promise<{ results: {model: string, score: number, submitted_by: string, URL: string, task1: number, task2: number, task3: number, task4: number}[] }> = fetch(apiUrls.dataEndpoint).then((res) => res.json());

let bg_class = 'bg-' + ((colorScheme.background === 'neutral') ? 'neutral-700' : colorScheme.background);

</script>
<header>
<Navbar let:hidden let:toggle class="text-{colorScheme.textColor} px-2 sm:px-4 py-2.5 w-full bg-{colorScheme.color}-{colorScheme.hardness} dark:bg-{colorScheme.color}-{colorScheme.hardness}" color="none">
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      { pageTitle }
    </span>
  </NavBrand>
  <NavHamburger on:click={ toggle } />
  <NavUl {hidden}>
  		<NavLi href="/home" active={true}>Home</NavLi>
		{#each navObjs as navElem}
		<NavLi href="{navElem.link}" active={true}>{navElem.text}</NavLi>
		{/each}
	</NavUl>
</Navbar>
</header>
<Banner imgSrc={"https://club.aina.bsc.es/images/AINA_header.png"} bgcolor={"#404040"} />
<main class="{bg_class} w-screen mx-auto z-20 dark:{bg_class} text-black dark:text-white p-8">
<Card id="table-card" class="mx-auto rounded-none bg-black border-none my-4" size="xl" color="none">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ tableTitle }</h5>
	{#if tableSubtitle}
		<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight"></p>
	{/if}
	<Table>
	{#await tableHeaders}
		<div class="text-center">
			<Spinner size={"8"} color={ colorScheme.color } />
		</div>
	{:then headers}
		<TableHead>
			<TableHeadCell>Rank</TableHeadCell>
			<TableHeadCell>Model</TableHeadCell>
			<TableHeadCell>Submitted by</TableHeadCell>
			<TableHeadCell>URL</TableHeadCell>
			<TableHeadCell>Score</TableHeadCell>
			{#each [...headers.tasks] as header}
				<TableHeadCell>{ header.name }</TableHeadCell>
			{/each}
		</TableHead>
	{:catch error}
		<pre>{error.message}</pre>
	{/await}
	{#await tableContent}
		<div class="text-center">
			<Spinner size={"8"} color={ colorScheme.color } />
		</div>
	{:then content}
		<TableBody>
		</TableBody>
	{/await}
	</Table>
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
