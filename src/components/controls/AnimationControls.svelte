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
        <details open>
            <summary>
                <h3>Animation controls</h3>
            </summary>
            <table class="full-width">
                <tr>
                    <td>
                        <button class='width-90' id="animateGenerationBtn" on:click={toggleAnimation}>{$animationStore.play ? 'Stop the animation' : 'Animate the automaton'}</button>
                    </td>
                    <td>
                        <span>
                            FPS: {$animationStore.fps}
                            <br/>
                            <input class='width-90' type=range bind:value={$animationStore.fps} min=1 max=60>
                        </span>
                    </td>
                </tr>
            </table>
        </details>
    </div>
</main>
