<script lang="ts">
import logo from '$lib/assets/images/packngo_logo1.png'
import halo from '$lib/assets/images/halo.png'
import dog from '$lib/assets/images/chieng.png'
</script>

<div class="grid grid-cols-[1fr_1.4fr] relative h-full overflow-hidden">
    <div class="pt-32 pl-20">
        <h1 class="leading-[6rem]"><span class="block text-pkng-orange">Moving home</span>has never been easier</h1>
        <p class="leading-6 py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium ad adipisci alias at aut autem consequatur dicta dignissimos est fugiat hic itaque nobis, odit repudiandae sunt ullam. Odit, ullam!</p>
        <a class="button primary-button" href="/register">Begin</a>
    </div>
    <div class="relative">
        <img src="{halo}" alt="Halo" class="absolute max-w-[70rem] -top-4 left-0"/>
        <img src="{dog}" alt="Dog" class="absolute max-w-[45rem] top-44 left-32"/>
        <img src="{logo}" alt="Logo" class="absolute max-w-md top-[38rem] left-[21rem] rotate-1 opacity-80"/>
    </div>
</div>