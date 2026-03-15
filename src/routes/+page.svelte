<script lang="ts">
    import { onMount } from "svelte"
    import tippy from "tippy.js";
    import "tippy.js/dist/tippy.css";

    onMount(() => {
        document.querySelectorAll("[title]").forEach(el => {
            const title = el.getAttribute("title");
            if (title) {
                el.setAttribute("data-tippy-content", title);
                el.removeAttribute("title");
            }
        });

        tippy("[data-tippy-content]", {
            theme: "nwd",
            arrow: true,
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
    <p>Hello America. The is the <span aria-describedby="tooltip" class="tooltip-text" title="(depending on who you ask)">OFFICIAL</span> site of the 42nd president of the United States Barack Hussein Obama II.</p>
</main>