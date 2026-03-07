<script lang="ts">
    import HomeIcon from "phosphor-svelte/lib/HouseIcon";
    import MusicIcon from "phosphor-svelte/lib/MusicNoteIcon";
    import ImageIcon from "phosphor-svelte/lib/ImageIcon";
    import HeartIcon from "phosphor-svelte/lib/HeartIcon";
</script>


<nav>
    <a href="/"><HomeIcon size="30px" weight="fill" color="#261f11" /></a>
    <a href="/"><MusicIcon size="30px" weight="fill" color="#261f11" /></a>
    <a href="/"><ImageIcon size="30px" weight="fill" color="#261f11" /></a>
    <a href="/"><HeartIcon size="30px" weight="fill" color="#261f11" /></a>
</nav>

<header>
    <div class="header-text">
        <h1>Obama</h1>
        <h4>(dot <a href="https://nekoweb.org">nekoweb</a>)</h4>
    </div>
    <img class="selfie" src="/assets/images/selfie.png" alt="my face">
</header>

<main>
    <p>Hello America. The is the <span class="tooltip" title="(depending on who you ask)">OFFICIAL</span> site of the 42nd president of the United States Barack Hussein Obama II.</p>
</main>