<script lang="ts">
	const { apps = [] } = $props<{ apps?: string[] }>();
	let currentTime = $state(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
	function swapLanguage() {
		const langButton = document.getElementById('lang');
		if (langButton) {
			langButton.textContent = langButton.textContent === 'CS' ? 'EN' : 'CS';
		}
	}

	setInterval(() => {
		currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	}, 1000);
</script>

<footer>
	<button id="start">🪟Start</button>
			|

	{#each apps as app}
		<button class="app-button" >{app}</button>
	{/each}

	<div class="time">
		<button id="lang" onclick={swapLanguage}>CS</button>
		|
		{currentTime}
	</div>
</footer>
