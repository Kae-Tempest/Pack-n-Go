<script>
	import iconPlus from '$lib/assets/icons/icon-plus.svg?raw';
	import iconHome from '$lib/assets/icons/icon-home.svg?raw';
</script>

<div class="mx-12 my-4">
	<div class="flex items-center justify-between">
		<h1>Box's list</h1>
		<div class="flex">
			<div class="button primary-button flex items-center gap-1">
				Add Box {@html iconPlus}
			</div>
			<div class="button secondary-button flex items-center gap-1">Add Room {@html iconHome}</div>
		</div>
	</div>
	<div class="inline-flex gap-8">
		<!-- List of boxes -->
	</div>
</div>
