<script lang="ts">
	import instagramLogo from '$lib/assets/images/instagram_logo.png';
	import githubLogo from '$lib/assets/images/github_logo.png';
	import halo from '$lib/assets/images/halo.png';

	const email = 'contact@packngo.com';
	const tel = '05 15 25 35 45';
</script>

<div class="relative flex h-full justify-center overflow-hidden">
	<div
		class="glass-card z-[2] mx-0 my-auto flex h-1/2 w-1/2 flex-col items-center justify-between p-8"
	>
		<h1 class="m-16 font-title text-[4rem] text-white">Contact</h1>
		<div>
			<div>
				<p class="p-1">{email}</p>
				<p class="p-1 text-center">{tel}</p>
			</div>
			<div class="text-center">
				<a href="https://www.instagram.com/" class="inline-block p-2">
					<img src={instagramLogo} alt="instagram Logo" class="h-12 w-12" />
				</a>
				<a
					href="https://github.com/O-clock-Freki/projet-02-appli-de-gestion-de-demenagement"
					class="inline-block p-2"
				>
					<img src={githubLogo} alt="Github Logo" class="h-12 w-12" />
				</a>
			</div>
		</div>
	</div>
	<img src={halo} alt="Halo" class="right-halo" />
</div>
