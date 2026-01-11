<script lang="ts">
	export let src: string = '';
	export let alt: string = '';
	export let title: string = '';
	export let windowId: string = '';

	function spawnWindow() {
		let targetWindow = document.getElementById(windowId);
		if (targetWindow) {
			targetWindow.classList.remove('hidden');
			targetWindow.classList.remove('closed-window');
			targetWindow.classList.remove('minimized-window');
			targetWindow.style.animation = '';

		}
		
		let minimizedButton = document.getElementById('minimized-' + windowId);
		if (minimizedButton) {
			minimizedButton.classList.remove('hidden');
			minimizedButton.classList.remove('minimized-button-closed');
			
		}
	}
</script>

<div
	class="icon-element"
	role="button"
	tabindex="0"
	on:dblclick={spawnWindow}
	on:touchend={spawnWindow}
>
	<img class="icon-image" {src} {alt} />
	<h3>{title}</h3>
</div>
