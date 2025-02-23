<script lang="ts">
	let { children } = $props();
</script>

<header>
	<nav>
		<a href="#contact"
			>Kontakt</a
		><a href="#projects">Projekty</a><a href="#experience">Zkušenosti</a><a href="#certs">Certifikace</a><a href="#tech">Technologie</a>
	</nav>
</header>
<main>{@render children()}</main>
<footer>&copy; {new Date().getFullYear()} Miroslav Nožička</footer>
