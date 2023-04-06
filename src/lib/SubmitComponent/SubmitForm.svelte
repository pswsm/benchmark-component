<script lang="ts">
import { Card, Input, Label } from "flowbite-svelte";
export let formFields: { fieldName: string, fieldType: "text" | "password" | "number", mandatory: boolean, placeholder: string }[];
export let formTitle: string = "Submit Form";
export let formSubtitle: string = "Form subtitle";
</script>
<Card id="form-card" class="overflow-x-auto mx-auto rounded-none bg-black border-none my-4" size="xl" color="none">
<form method="post">
{#each formFields as formField}
	<div>
		<Label>{ formField.fieldName }</Label>
		<Input></Input>
	</div>
{/each}
</form>
</Card>

