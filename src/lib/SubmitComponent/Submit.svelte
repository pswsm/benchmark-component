<script>
import { Banner, BenchmarkFooter, Navbar } from "$lib";
import { Card } from "flowbite-svelte";
</script>
<header>
	<Navbar {...navColorScheme} navObjs={navObjs} pageTitle={pageTitle} sticky={true}/>
</header>
<Banner imgSrc={"https://club.aina.bsc.es/images/AINA_header.png"} bgcolor={"#404040"} text={"Sample Title"} subtitle={"Sample subtitle"} />
<main class="mx-auto z-20 text-{fontColor} p-8 h-full" class:bg-neutral-700="{backgroundColor === 'neutral'}">
</main>
<BenchmarkFooter {footerProps} />
