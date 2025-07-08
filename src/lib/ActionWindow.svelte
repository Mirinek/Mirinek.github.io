<script lang="ts">
	import ActionBar from './ActionBar.svelte';
	export let title = '';
	export let id = '';
	export let articles = [];
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
			let bar = e.target.closest('article')?.querySelector('.action-bar');
			if (bar) {
				bar.id = 'active-window';
			}
		}
	}
</script>

<article
	class="action-window hidden"
	style="left: {left}px; top: {top}px;"
	on:mousedown={updateActiveWindow}
	{id}
>
	<ActionBar on:mousedown={onMouseDown}>{title}</ActionBar>
	<div class="content">
		{#each articles as article}
			<section>
				<h2>{article.title}</h2>
				<p>{@html article.text}</p>
			</section>
		{/each}
	</div>
</article>
<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />
