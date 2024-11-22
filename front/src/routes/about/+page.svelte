<script lang="ts">
	import logo from '$lib/assets/images/packngo_logo1.png';
	import halo from '$lib/assets/images/halo.png';
	import dog from '$lib/assets/images/chieng.png';
</script>

<div class="relative grid h-full grid-cols-[1fr_1.4fr] overflow-hidden">
	<div class="pl-20 pt-32">
		<h1 class="leading-[6rem]">
			<span class="block text-pkng-orange">Moving home</span>has never been easier
		</h1>
		<p class="py-4 leading-6">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium ad adipisci
			alias at aut autem consequatur dicta dignissimos est fugiat hic itaque nobis, odit repudiandae
			sunt ullam. Odit, ullam!
		</p>
		<a class="button primary-button" href="/register">Begin</a>
	</div>
	<div class="relative">
		<img src={halo} alt="Halo" class="absolute -top-4 left-0 max-w-[70rem]" />
		<img src={dog} alt="Dog" class="absolute left-32 top-44 max-w-[45rem]" />
		<img
			src={logo}
			alt="Logo"
			class="absolute left-[21rem] top-[38rem] max-w-md rotate-1 opacity-80"
		/>
	</div>
</div>
