<script lang="ts">
    import { styles } from "$lib/styles.js";
    import { linkColor, hoverColor } from "$lib/stores.js";
    export let contact: string;
    let colour = $linkColor;
    const handleMouseOver = () => colour = `${$linkColor}`;
    const handleMouseOut = () => colour = `${$hoverColor}`;

</script>
    <a style:color={colour} on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} use:styles={{ colour}} href="mailto:{contact}">{contact}</a>
<style>

</style>