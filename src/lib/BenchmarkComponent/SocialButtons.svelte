<script lang="ts">
export let repoName: string; // pswsm/some-repo
export let linkColor;
export let linkHoverColor;
</script>
<svelte:head>
	<!-- Place this tag in your head or just before your close body tag. -->
	<script src="https://buttons.github.io/buttons.js"></script>
</svelte:head>
<div class="felx items-center justify left">
<!-- Place this tag where you want the button to render. -->
<a class="github-button"  style:color={linkColor} href="https://github.com/{repoName}" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" aria-label="Star {repoName} on GitHub">Star</a>
<span><a href="https://twitter.com/share" class="twitter-share-button" data-url="https://www.projecteaina.cat/" data-text="Catalan Language Understanding Benchmark" data-via="projecte_aina" data-size="large" data-hashtags="CLUB" target="_blank" rel="noreferrer">Tweet</a></span>
</div>
<style>
a:hover {
	color: red;
}
</style>
