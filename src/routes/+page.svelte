<script lang="ts">
    import { onMount } from "svelte";
    import { computePosition } from "@floating-ui/dom";

    onMount(() => {
        const button = document.getElementById("button") as HTMLButtonElement;
        const tooltip = document.getElementById("tooltip") as HTMLDivElement;

        console.log(button);

        computePosition(button, tooltip).then(({x, y}) => {
            Object.assign(tooltip.style, {
                left: `${x}px`,
                top: `${y}px`,
            });
        });
    });
</script>

<header>
    <div class="header-text">
        <h1>Obama</h1>
        <h4>(dot <a href="https://nekoweb.org">nekoweb</a>)</h4>
    </div>
    <img class="selfie" src="/assets/images/selfie.png" alt="my face">
</header>

<main>
    <p>Hello America. The is the <span class="tooltip-text" title="(depending on who you ask)">OFFICIAL</span> site of the 42nd president of the United States Barack Hussein Obama II.</p>
    <button id="button" aria-describedby="tooltip"> My button </button>
    <div id="tooltip" role="tooltip">My tooltip</div>
</main>