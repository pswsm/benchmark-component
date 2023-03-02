<script lang="ts">
import { onMount } from "svelte";
import { Footer, FooterBrand, Card, Navbar, NavBrand, NavHamburger, NavLi, NavUl, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Spinner } from "flowbite-svelte";

// Component props
export let title: string;
export let pageDescription: string;
export let apiUrls: {headerEndpoint: string, dataEndpoint: string};
export let navObjs: {text: string, link: string}[];
export let tableTitle: string = 'Leaderboard';
export let footerProps: { images?: Array<{alt: string, src: string, href?: string, target?: string}>, texts?: string[] } = {};
export let colorScheme: { textColor?: "black" | "white", color: "red" | "white" | "gray" | "white" | "blue", hardness?: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 } = { textColor: "white", color: "red", hardness: 700 };

// let modelsData: Promise<any> = fetch(apiUrl);
// let tableHeaders: Promise<{tasks: object[]}>;
let tableHeaders: Promise<any> = fetch(apiUrls.headerEndpoint).then( (res) => res.json() ).catch( (err) => err );
let tableContent: Promise<{model: string, score: number, submitted_by: string, URL: string, task1: number, task2: number, task3: number, task4: number}[]> = fetch(apiUrls.dataEndpoint).then((res) => res.json());

onMount(() => {
	console.log('apiUrls:', apiUrls);
	// tableHeaders = fetch(apiUrls.headerEndpoint).then((res) => res.json()).then((data) => {console.log(typeof data); return data});
	// tableHeaders = fetch(apiUrls.headerEndpoint).then((res) => res.json()).then((data) =>  [...data.tasks] );
	// tableHeaders = fetch(apiUrls.headerEndpoint).then((res) => res.json()).then((data) =>  [...data.tasks]);
	tableContent
});

</script>
<header>
<Navbar let:hidden let:toggle class="text-{colorScheme.textColor} px-2 sm:px-4 py-2.5 w-full bg-{colorScheme.color}-{colorScheme.hardness} dark:bg-{colorScheme.color}-{colorScheme.hardness}" color="none">
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      { title }
    </span>
  </NavBrand>
  <NavHamburger on:click={ toggle } />
  <NavUl {hidden}>
		{#each navObjs as navElem}
		<NavLi href="{navElem.link}" active={true}>{navElem.text}</NavLi>
		{/each}
	</NavUl>
</Navbar>
</header>
<main class="w-screen mx-auto z-20 dark:bg-neutral-700 text-black dark:text-white py-8">
<Card id="table-card" class="mx-auto rounded-none bg-black border-none my-4" size="xl" color="none">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ tableTitle }</h5>
	<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Placeholder</p>
	<Table>
	{#await tableHeaders}
		<Spinner />
	{:then headers}
		<TableHead>
		{ headers.tableHeaders }
		</TableHead>
	{:catch error}
		<pre>{error.message}</pre>
	{/await}
	</Table>
</Card>
<Card id="about-card" class="mx-auto rounded-none bg-black border-none my-4" size="xl" color="none">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About { title }</h5>
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
