<script lang="ts">
    import HomeIcon from "phosphor-svelte/lib/HouseIcon";
    import MusicIcon from "phosphor-svelte/lib/MusicNoteIcon";
    import ImageIcon from "phosphor-svelte/lib/ImageIcon";
    import CommentIcon from "phosphor-svelte/lib/ChatCenteredDotsIcon";
    import HeartIcon from "phosphor-svelte/lib/HeartIcon";
</script>

<nav>
    <a href="/"><HomeIcon size="30px" weight="fill" color="#261f11" />Home</a>
    <a href="/"><MusicIcon size="30px" weight="fill" color="#261f11" />Music</a>
    <a href="/"><ImageIcon size="30px" weight="fill" color="#261f11" />Pictures</a>
    <a href="/"><CommentIcon size="30px" weight="fill" color="#261f11" />Comments</a>
    <a href="/"><HeartIcon size="30px" weight="fill" color="#261f11" />Follow</a>
</nav>