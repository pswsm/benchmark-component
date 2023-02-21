<script lang="ts">
export let title: string;
export let pageDescription: string;
export let apiUrl: string;
export let navObjs: {text: string, link: string}[];

// let modelsData: Promise<any> = fetch(apiUrl);

</script>
<header class="dark">
	<nav class="bg-red-600 px-2 sm:px-4 py-2.5 dark:bg-red-600">
		<div class="container flex flex-wrap items-center justify-between mx-auto">
			<a href="/" class="flex items-center"><b>{ title }</b></a>
			<button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
		  		<span class="sr-only">Open menu</span>
				<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
			</button>
			<div class="hidden w-full md:block md:w-auto" id="navbar-default">
		  		<ul class="flex flex-col p-4 mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:text-xl md:bg-inherit dark:bg-inherit md:dark:bg-inherit">
		  			{#each navObjs as navElem}
					<li>
			  			<a href="{navElem.link}" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">{ navElem.text }</a>
					</li>
		  			{/each}
		  		</ul>
			</div>
	  	</div>
	</nav>
</header>
<main>
<div id="table-zone"></div>
<div id="page-data"><p>{ pageDescription }</p></div>
</main>
<footer></footer>
