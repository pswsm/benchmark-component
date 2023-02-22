<script lang="ts">
import { onMount } from "svelte";
import { Footer, FooterBrand, Card } from "flowbite-svelte";

// Component props
export let title: string;
export let pageDescription: string;
export let apiUrl: string;
export let navObjs: {text: string, link: string}[];
export let tableTitle: string = 'Leaderboard'
export let footerProps: { images?: Array<{alt: string, src: string, href?: string, target?: string}>, texts?: string[] } = {};

// let modelsData: Promise<any> = fetch(apiUrl);

onMount(() => {
	console.log('apiUrl:', apiUrl);
});

</script>
<header>
	<nav class="bg-red-700 px-2 sm:px-4 py-2.5 text-white">
		<div class="container flex flex-wrap items-center justify-between mx-auto">
			<a href="/" class="flex items-center"><b>{ title }</b></a>
			<button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
		  		<span class="sr-only">Open menu</span>
				<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
			</button>
			<div class="hidden w-full md:block md:w-auto" id="navbar-default">
		  		<ul class="flex flex-col p-4 mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:text-l md:bg-inherit dark:bg-inherit md:dark:bg-inherit">
		  			{#each navObjs as navElem}
					<li>
			  			<a href="{navElem.link}" class="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">{ navElem.text }</a>
					</li>
		  			{/each}
		  		</ul>
			</div>
	  	</div>
	</nav>
</header>
<main class="w-screen mx-auto z-20 dark:bg-neutral-700 text-black dark:text-white py-8">
<Card id="table-card" class="mx-auto rounded-none bg-black border-none my-4" size="xl" color="none">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ tableTitle }</h5>
	<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Placeholder</p>
</Card>
<Card id="about-card" class="mx-auto rounded-none bg-black border-none my-4" size="xl" color="none">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About { title }</h5>
	<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{ pageDescription }</p>
</Card>
<div class="w-1/2 mx-auto text-inherit " id="table-zone"></div>
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
