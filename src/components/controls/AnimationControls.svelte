<script lang="ts">
    import {animationStore} from '../../stores';

    const toggleAnimation = () => {
        $animationStore = {
            ...$animationStore,
            play: !$animationStore.play
        };
    }
</script>

<main>
    <div class="center controlSectionDiv">
        <h3>Animation controls</h3>
        <div>
            <button id="animateGenerationBtn" on:click={toggleAnimation}>{$animationStore.play ? 'Stop the animation' : 'Animate the automaton'}</button>

            <span>FPS: {$animationStore.fps}</span>
            <input type=range bind:value={$animationStore.fps} min=0 max=60>
        </div>
    </div>
</main>

<style src="./Controls.css"></style>

