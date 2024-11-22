<script lang="ts">
	import iconFragile from '$lib/assets/icons/icon-fragile.svg?raw';
	let { box } = $props();
</script>

<div class="glass-card relative w-[25rem] p-8">
	<h5>Box n°</h5>
	<p>Size:</p>
	<p></p>
	<div class="ml-auto mt-2">
		<div class="button secondary-button">Infos</div>
		<div class="button secondary-button">Edit</div>
	</div>
	{#if box.is_fragile}
		<div class="abosule right-8 top-8 h-8 w-8 text-pkng-orange">
			{@html iconFragile}
		</div>
	{/if}
</div>
