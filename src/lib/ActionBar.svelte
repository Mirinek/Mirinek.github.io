<script lang="ts">
	function minimize(event: MouseEvent) {
		let rootElem = event.target?.closest('article');
		if (!rootElem) {
			return;
		}
		// if the window is already minimized, we play the reverse animation
		rootElem.classList.toggle('minimized-window');
		if (rootElem.classList.contains('minimized-window')) {
			rootElem.style.animation = 'minimize 0.25s 1 normal forwards';
		} else {
			rootElem.style.animation = 'minimize 0.25s 1 normal backwards';
		}
		let minimizedButton = document.getElementById('minimized-' + event.target?.closest('article')?.id);
		if (minimizedButton) {
			minimizedButton.classList.add('minimized-button-closed');
		}

	}

	function maximize(event: MouseEvent) {
		event.target?.closest('article')?.classList.toggle('maximized');
	}

	function close(event: MouseEvent) {
        event.target?.closest('article')?.classList.toggle('closed-window');
		let minimizedButton = document.getElementById('minimized-' + event.target?.closest('article')?.id);
		if (minimizedButton) {
			minimizedButton.classList.add('hidden');
		}
	}

</script>

<section class="action-bar" id="" on:mousedown>
	<h2 class="window-title"><slot /></h2>
	<div class="actions">
		<button class="sqr" on:click={minimize}>_</button>
		<button class="sqr" on:click={maximize}>⛶</button>
		<button class="sqr" on:click={close}>⨯</button>
	</div>
</section>
