<script lang="ts">
import { Card } from "flowbite-svelte";

export let pageTitle: string;
export let pageDescription: string;
export let contactMail: string;
</script>
<Card id="about-card" class="mx-auto rounded-none bg-black border-none my-4" size="xl" color="none">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About { pageTitle }</h5>
	<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{ pageDescription }</p>
	<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Contact us at <span class="no-underline text-gray-200 hover:text-white"><a href="mailto:{contactMail}">{contactMail}</a></span></p>
</Card>

