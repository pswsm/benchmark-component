<script lang="ts">
  import { onMount } from "svelte";
	import { DataHandler, Th } from '@vincjo/datatables';

  export let apiUrls: { headerEndpoint: string, dataEndpoint: string };
  export let spinnerColor: "red" | "white" | "gray" | "white" | "blue" = 'red';

	let handler: DataHandler;
	let rows: any;

  let columns: { tasks: { _id: { "$oid": string }[], description: string, name: string }[] };
  let data: {model: string, score: number, submitted_by: string, URL: string, task1: number, task2: number, task3: number, task4: number}[];

  onMount( async () => {
    const colsRes: Response = await fetch(apiUrls.headerEndpoint);
    const dataRes: Response = await fetch(apiUrls.dataEndpoint);
	columns = await colsRes.json();
	handler = new DataHandler(await dataRes.json(), { rowsPerPage: 25 })
	rows = handler.getRows();
  })
</script>
<table>
	<thead>
		<tr>
			<Th {handler}>Rank</Th>
			<Th {handler}>Model</Th>
			<Th {handler}>Submitted by</Th>
			<Th {handler}>URL</Th>
			{#each [...columns.tasks] as header}
			<Th {handler}><a class="text-yellow-300 hover:text-red-600">{ header.name }</a></Th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each $rows as row}
			{ console.log('row:', row) }
		{/each}
	</tbody>
</table>
<style>
.material-symbols-outlined {
	font-variation-settings:
		'FILL' 0,
		'wght' 500,
		'GRAD' 200,
		'opsz' 48
}
</style>
