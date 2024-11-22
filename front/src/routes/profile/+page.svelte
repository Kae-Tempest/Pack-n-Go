<script lang="ts">
	import halo from '$lib/assets/images/halo.png';
	import logo from '$lib/assets/images/packngo_logo1.png';
</script>

<div class="relative flex h-full overflow-hidden text-white">
	<div class="flex w-3/5 flex-col justify-between gap-8 p-10">
		<h1>Profil</h1>
		<p>First Name: <span></span></p>
		<p>Last Name: <span></span></p>
		<p>Email address: <span></span></p>
		<button class="button secondary-button max-w-fit">Update my infos</button>
		<button class="button secondary-button max-w-fit">Update my password</button>
		<div class="flex justify-end gap-4">
			<button class="button secondary-button max-w-fit">Log Out</button>
			<button class="button primary-button max-w-fit bg-white text-dark-blue hover:text-white"
				>Delete my account</button
			>
		</div>
	</div>
	<div class="z-[2] content-center">
		<img src={logo} alt="logo pack'n go" class="w-full" />
	</div>
	<img src={halo} alt="halo" class="right-halo" />
</div>
