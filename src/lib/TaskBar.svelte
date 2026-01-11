<script lang="ts">
	import { _, locale } from 'svelte-i18n'; // <-- This is required!

	const { apps = [] } = $props<{ apps?: {}[] }>();
	let currentTime = $state(
		new Date().toLocaleTimeString(['cs'], { hour: '2-digit', minute: '2-digit' })
	);

	function toggleSysMenu() {
		const sysMenu = document.getElementById('sys-menu');
		if (sysMenu) {
			sysMenu.classList.toggle('hidden');
		}
	}
	function swapLanguage() {
		const langButton = document.getElementById('lang');
		if (langButton) {
			langButton.textContent = langButton.textContent === 'CS' ? 'EN' : 'CS';
		}
		if (locale) {
			locale.set($locale === 'cs' ? 'en' : 'cs');
		}
	}

	function openWindow(event: MouseEvent) {
		let windowId = event.target?.id;
		let targetWindow = document.getElementById(windowId.replace('minimized-', ''));
		if (targetWindow) {
			targetWindow.classList.remove('hidden');
			targetWindow.classList.remove('closed-window');
			targetWindow.classList.remove('minimized-window');
			targetWindow.style.animation = '';
		}
		let minimizedButton = document.getElementById(windowId);
		if (minimizedButton) {
			minimizedButton.classList.remove('hidden');
			minimizedButton.classList.remove('minimized-button-closed');
		}
	}

	setInterval(() => {
		currentTime = new Date().toLocaleTimeString(['cs'], { hour: '2-digit', minute: '2-digit' });
	}, 1000);
</script>

<footer>
	<button id="start" onclick={toggleSysMenu}><img src="images/start_icon.png" alt="" style="margin-right: 0.25rem;">Start</button>
	<div class="minimized-apps">
		{#each apps as app}
			<button class={"minimized-button " + (app.id === 'readme' ? '' : 'hidden')} id={'minimized-' + app.id} onclick={openWindow}
				>{app.ico} {$_(`${app.id}.title`)}</button
			>
		{/each}
	</div>

	<div>
		<button id="lang" onclick={swapLanguage}>CS</button>
		|
		{currentTime}
	</div>
</footer>
