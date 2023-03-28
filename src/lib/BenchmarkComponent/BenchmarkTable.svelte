<script lang="ts">
import { Spinner } from 'flowbite-svelte';
import { onMount } from "svelte";
import { DataHandler } from "@vincjo/datatables";
import type { Readable } from 'svelte/store';
import { Th } from '$lib';

export let headerUrl: string;
export let contentUrl: string;
export let spinnerColor: "red" | "white" | "gray" | "white" | "blue" = 'red';

let ptData: {model: string, score: number, submitted_by: string, url: string, task1: number, task2: number, task3: number, task4: number}[];
let rawHeaders: {_id: {$oid: string}, name: string, description: string}[] = [];
const staticHeaders: {modelName: string, headerName: string}[] = [{modelName: 'rank', headerName: 'Rank'}, {modelName: 'model', headerName: 'Model'}, {modelName: 'score', headerName: 'Score'}, {modelName: 'submitted_by', headerName: 'Submitted by'}, {modelName: 'URL', headerName: 'URL'}];

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
{#if handler}
<table>
	<thead>
		<tr>
		{#each staticHeaders as sHeader}
			<Th {handler} orderBy={sHeader.modelName}>{sHeader.headerName}</Th>
		{/each}
		{#each rawHeaders as header}
			<Th {handler} orderBy={header.name} link={"#"}>{header.name}</Th>
		{:else}
			<Spinner size={"8"} color={spinnerColor}/>
		{/each}
		</tr>
	</thead>
	<tbody>
	{#each $rows as row, idx}
		<tr>
			<td class="text-center">{idx + 1}</td>
			{#each Object.keys(row) as rowKey}
				<td class="text-center">{row[rowKey]}</td>
			{/each}
		</tr>
	{:else}
		<Spinner size={"8"} color={spinnerColor}/>
	{/each}
	</tbody>
</table>
{:else}
	<div class="text-center">
		<Spinner size={"8"} color={spinnerColor}/>
	</div>
{/if}
<style>
</style>
