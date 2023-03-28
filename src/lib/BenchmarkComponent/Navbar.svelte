<script lang="ts">
    import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from "flowbite-svelte";
	export let textColor: 'black' | 'white' = 'black';
	export let backgroundColor: "red" | "white" | "gray" | "white" | "blue" = 'red';
	export let backgroundHardness = 600;
	export let pageTitle: string;
	export let navObjs: { link: string, text: string }[];
</script>
<Navbar let:hidden let:toggle class="text-{textColor} px-2 sm:px-4 py-2.5 w-full bg-{backgroundColor}-{backgroundHardness} dark:bg-{backgroundColor}-{backgroundHardness}" color="none">
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      { pageTitle }
    </span>
  </NavBrand>
  <NavHamburger on:click={ toggle } />
  <NavUl {hidden}>
		{#each navObjs as navElem}
		<NavLi href="{navElem.link}" active={true}>{navElem.text}</NavLi>
		{/each}
	</NavUl>
</Navbar>
