<script>
    import { waitLocale } from 'svelte-i18n';
</script>

{#await waitLocale()}
    <!-- You can show a loading indicator here -->
{:then}
    <slot />
{/await}