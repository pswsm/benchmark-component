<script lang="ts">
import { Card } from "flowbite-svelte";
import Link from "./Link.svelte";

export let pageTitle: string;
export let pageDescription: string;
export let contactMail: string;
</script>
<Card id="about-card" class="mx-auto rounded-none bg-black border-none my-4" size="xl" color="none">
	<h5 class="mb-2 text-2xl font-bold tracking-tight">About { pageTitle }</h5>
	<p class="font-normal leading-tight">{ pageDescription }</p>
	<p class="font-normal leading-tight">Contact us at <Link href={`mailto:${contactMail}`}>{contactMail}</Link></p>
</Card>
<style>
</style>

