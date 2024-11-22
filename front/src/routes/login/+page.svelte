<script lang="ts">
	import halo from '$lib/assets/images/halo.png';
</script>

<div class="relative flex h-full justify-center overflow-hidden">
	<div class="glass-card z-[2] mx-0 my-auto flex w-[70%] flex-col items-center p-8">
		<h1 class="font-title text-[4rem]">Login</h1>
		<form class="flex w-[55%] flex-col">
			<div class="my-4 flex flex-col">
				<label for="email" class="mb-2">Email</label>
				<input
					id="email"
					type="email"
					class="h-12 rounded-2xl border-none bg-white/25 px-4 focus:outline-none"
				/>
			</div>
			<div class="my-4 flex flex-col">
				<label for="password" class="mb-2">Password</label>
				<input
					id="password"
					type="password"
					class="h-12 rounded-2xl border-none bg-white/25 px-4 focus:outline-none"
				/>
			</div>
			<div class="flex w-full justify-between">
				<button type="submit" class="button primary-button"> Log In </button>
				<a href="/register" class="button secondary-button"> No Account </a>
			</div>
		</form>
	</div>
	<img src={halo} alt="Halo" class="right-halo" />
</div>
