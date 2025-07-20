<script lang="ts">
	import ActionBar from './ActionBar.svelte';
	export let title = '';
	export let id = '';
	export let articles = [{ title: '', text: '', image: '' }];
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
	class={"action-window hidden" + (id === 'readme' ? 'active-window' : '')}
	style:left="{left}px"
	style:top="{top}px"
	on:mousedown={updateActiveWindow}
	{id}
	tabindex="0"
>
	<ActionBar on:mousedown={onMouseDown}>{title}</ActionBar>
	<article class="content">
		{#each articles as article}
			<section>
				<h2>{article.title}</h2>
				{#if article.image}
					<img src={article.image} alt={article.title} width="25%" />
				{/if}
				<p>{@html article.text}</p>
			</section>
		{/each}
	</article>
</dialog>
<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />
