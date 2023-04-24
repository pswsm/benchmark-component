<script lang="ts">
    import { linkColor, hoverColor } from "$lib/stores.js";
    export let href: string;
    let colour = $linkColor;
    export let target: string = '_self';
    const handleMouseOver = () => colour = `${$hoverColor}`;
    const handleMouseOut = () => colour = `${$linkColor}`;

</script>
<a style:color={colour} target={ target } on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} href={href}><slot/></a>