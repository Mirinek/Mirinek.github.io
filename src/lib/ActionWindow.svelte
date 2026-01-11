<script lang="ts">
	import ActionBar from './ActionBar.svelte';
	export let title = '';
	export let id = '';
	export let icon = '';
	export let articles = [{ title: '', text: '', image: '', link: '' }];
	let left = 0;
	let top = 0;
	let moving = false;

	function onMouseDown() {
		moving = true;
	}

	function onMouseMove(e: MouseEvent) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
	}

	function onMouseUp() {
		moving = false;
	}

	function updateActiveWindow(e: MouseEvent) {
		let activeWindow = document.getElementById('active-window');
		if (activeWindow) {
			activeWindow.id = '';
		}
		if (e.target instanceof HTMLElement) {
			let bar = e.target.closest('dialog')?.querySelector('.action-bar');
			if (bar) {
				bar.id = 'active-window';
			}
		}
	}
</script>

<dialog
	class={'action-window window hidden' + (id === 'readme' ? 'active-window' : '')}
	style:left="{left}px"
	style:top="{top}px"
	on:mousedown={updateActiveWindow}
	{id}
	tabindex="0"
>
	<ActionBar on:mousedown={onMouseDown}><img width="16px" src="{icon}" alt="{title}"> {title}</ActionBar>
	<article class="content">
		{#each articles as article}
				<section style={article.title ? 'height: fit-content;' : ''}>
				{#if article.title}
					<h2>{@html article.link ? "<a href=\"" + article.link + "\" target=\"_blank\">" + article.title + "</a>" : article.title}</h2>
				{/if}
				{#if article.image}
					<a href="{article.link}" target="_blank"><img src={article.image} alt={article.title} width="25%" /></a>
				{/if}
				<p>{@html article.text}</p>
			</section>
		{/each}
	</article>
</dialog>
<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />
