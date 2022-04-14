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
        <table style="width: 100%">
            <tr>
                <td>
                    <button id="animateGenerationBtn" on:click={toggleAnimation}>{$animationStore.play ? 'Stop the animation' : 'Animate the automaton'}</button>
                </td>
                <td>
                    <span>
                        FPS: {$animationStore.fps}
                        <br/>
                        <input style="width: 90%" type=range bind:value={$animationStore.fps} min=0 max=60>
                    </span>
                </td>
            </tr>
        </table>
    </div>
</main>
