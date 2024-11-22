<script lang="ts">
    import '../app.css';
    import logo from '$lib/assets/images/packngo_logo1_reduit.png'
    import loginIcon from '$lib/assets/icons/icon-connexion.svg?raw'

    let {children} = $props();
</script>

<header class="bg-sea-green py-12 h-20 flex justify-between items-center z-10 sticky top-0">
    <a href="/">
        <img class="max-h-16" src="{logo}" alt="">
    </a>
    <nav class="flex items-center gap-12">
        <a class="header-link" href="/about">About</a>
        <a class="header-link" href="/contact">Contact</a>
        <a class="header-link" href="/box">Boxes</a>
        <a class="header-link" href="/profile">Profile</a>
        <a class="header-link-svg" href="/login">
            {@html loginIcon}
        </a>
    </nav>
</header>
{@render children()}