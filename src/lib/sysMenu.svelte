<script lang="ts">
	function reboot() {
        if (!confirm("Are you sure you want to reset the system?")) {
            return;
        }
		window.location.reload();
	}
	function exit() {
        if (!confirm("Are you sure you want to exit?")) {
            return;
        }
  		window.history.back();
	}
</script>

<div id="sys-menu" class="hidden">
	<button on:click={reboot}>Reset</button>
	<button on:click={exit}>Exit</button>
</div>
