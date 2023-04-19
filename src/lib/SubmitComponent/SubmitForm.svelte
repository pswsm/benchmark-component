<script lang="ts">
import { Banner, Navbar } from "$lib";
import { Card, Input, Label } from "flowbite-svelte";
export let formFields: { fieldName: string, fieldType: "text" | "password" | "number", mandatory: boolean, placeholder: string }[] = [];
export let formTitle: string = "Submit Form";
export let formSubtitle: string = "Form subtitle";
export let fontColor: string = "white";
export let backgroundColor: string = "neutral";
</script>
<header>
	<Navbar navObjs={[]} pageTitle={"CLUB"}/>
</header>
<Banner imgSrc={"https://club.aina.bsc.es/images/AINA_header.png"} bgcolor={"#404040"} text={"Sample Title"} subtitle={"Sample subtitle"} />
<main class="mx-auto z-20 text-{fontColor} p-8 h-full h-screen" class:bg-neutral-700="{backgroundColor === 'neutral'}">
<Card id="form-card" class="overflow-x-auto mx-auto rounded-none bg-black border-none my-4" size="xl" color="none">
<form method="post">
{#each formFields as formField}
	<div>
		<Label>{ formField.fieldName }</Label>
		<Input></Input>
	</div>
{:else}
	<div>
		<p>Form not available at the moment</p>
	</div>
{/each}
</form>
</Card>
</main>

