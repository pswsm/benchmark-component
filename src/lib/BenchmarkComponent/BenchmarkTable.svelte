<script lang="ts">
import { Spinner } from 'flowbite-svelte';
import { onMount } from "svelte";
import { DataHandler, Th } from "@vincjo/datatables";
import type { Readable } from 'svelte/store';

export let headerUrl: string;
export let contentUrl: string;
export let spinnerColor: "red" | "white" | "gray" | "white" | "blue" = 'red';

let ptData: {model: string, score: number, submitted_by: string, url: string, task1: number, task2: number, task3: number, task4: number}[];
let rawHeaders: {_id: {$oid: string}, name: string, description: string}[];
const staticHeaders: string[] = ['rank', 'model', 'score', 'submitted_by', 'URL']

let handler: DataHandler;
let rows: Readable<any[]>;

onMount( async () => {
	let table: Response = await fetch(contentUrl);
	let headers: Response = await fetch(headerUrl);
	ptData = await table.json().then(data => data.results);
	rawHeaders = await headers.json().then(tasks => tasks.tasks);
	handler = new DataHandler(ptData, { rowsPerPage: 10 });
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
