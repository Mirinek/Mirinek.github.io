<script lang="ts">
	function reboot() {
		if (!confirm('Are you sure you want to reset the system?')) {
			return;
		}
		window.location.reload();
	}
	function exit() {
		if (!confirm('Are you sure you want to exit?')) {
			return;
		}
		window.history.back();
	}
	function openGtihub() {
		window.open('https://github.com/Mirinek/Mirinek.github.io', '_blank');
	}
</script>

<div id="sys-menu" class="hidden">
	<button on:click={openGtihub}>i</button>
	<button on:click={reboot}>↻</button>
	<button on:click={exit}>x</button>
	<p>©&nbsp;{new Date().getFullYear()} Miroslav Nožička</p>
</div>
