<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import {generateAutomaton, animationStep} from '../../services/automaton-services';
    const dispatch = createEventDispatcher()

    export let data: AppData;

    const toggleAnimation = () => {
        data.animate = !data.animate;
    }
</script>

<main>
    <div class="center controlSectionDiv">
        <h3>Animation controls</h3>
        <div>
            <button id="animateGenerationBtn" on:click={toggleAnimation}>{data.animate ? 'Stop the animation' : 'Animate the automaton'}</button>

            <span>FPS: {data.fps}</span>
            <input type=range bind:value={data.fps} min=0 max=60>
        </div>
    </div>
</main>

<style src="./Controls.css"></style>

