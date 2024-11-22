<script lang="ts">
	import halo from '$lib/assets/images/halo.png';
</script>

<div class="relative flex h-full justify-center overflow-hidden">
	<div class="glass-card z-[2] mx-0 my-auto flex w-[70%] flex-col items-center p-8">
		<h1 class="font-title">Register</h1>
		<form class="flex w-[55%] flex-col">
			<div class="my-4 flex flex-col">
				<label for="" class="mb-2">First Name</label>
				<input
					type="text"
					class="h-12 rounded-2xl border-none bg-white/25 px-4 focus:outline-none"
				/>
			</div>
			<div class="my-4 flex flex-col">
				<label for="" class="mb-2">Last Name</label>
				<input
					type="text"
					class="h-12 rounded-2xl border-none bg-white/25 px-4 focus:outline-none"
				/>
			</div>
			<div class="my-4 flex flex-col">
				<label for="" class="mb-2">Email</label>
				<input
					type="email"
					class="h-12 rounded-2xl border-none bg-white/25 px-4 focus:outline-none"
				/>
			</div>
			<div class="my-4 flex flex-col">
				<label for="" class="mb-2">Password</label>
				<input
					type="password"
					class="h-12 rounded-2xl border-none bg-white/25 px-4 focus:outline-none"
				/>
			</div>
			<div class="my-4 flex flex-col">
				<label for="" class="mb-2">Confirm Password</label>
				<input
					type="password"
					class="h-12 rounded-2xl border-none bg-white/25 px-4 focus:outline-none"
				/>
			</div>
			<div class="flex w-full justify-between">
				<button type="submit" class="button primary-button">Register</button>
				<a href="/login" class="button secondary-button">Already have account</a>
			</div>
		</form>
	</div>
	<img src={halo} alt="halo" class="right-halo" />
</div>
