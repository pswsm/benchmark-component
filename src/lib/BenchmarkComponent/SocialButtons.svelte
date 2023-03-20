<script lang="ts">
export let repoName: string; // pswsm/some-repo
</script>
<svelte:head>
	<!-- Place this tag in your head or just before your close body tag. -->
	<script async defer src="https://buttons.github.io/buttons.js"></script>
</svelte:head>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/{repoName}" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" aria-label="Star {repoName} on GitHub">Star</a>
