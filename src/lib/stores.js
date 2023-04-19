import { readable, writable } from "svelte/store";

export let linkColor = readable("#ffce2d");
export let hoverColor = readable("red");

export let navColorSchemeLoad = writable();
export let navColorScheme = readable(navColorSchemeLoad);

export let benchmarkConfig = writable({});
