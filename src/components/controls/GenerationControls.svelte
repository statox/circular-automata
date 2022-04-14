<script lang="ts">
    import {automatonDimensionsStore, generationControlsStore, generationSettingsStore, automatonStore, colorStore, rule} from '../../stores';
    import {updateAppWithRandomAutomaton} from '../../services/generation-services';

    const generateRandom = () => {
        $generationControlsStore.lastReset = $generationControlsStore.lastReset+1;
        updateAppWithRandomAutomaton();
    }

    const toggleSetting = (setting) => {
        $generationSettingsStore[setting] = !$generationSettingsStore[setting]
    }
</script>

<main>
    <div class="center controlSectionDiv">
        <details open>
            <summary>
                <h3>Generation controls</h3>
            </summary>
            <div>
                <p>Parameters to change randomly</p>
                <table class="full-width">
                    <tr>
                        <td><button class="width-90" class:enabled={$generationSettingsStore.W}         on:click ={() => toggleSetting('W')}>Line width</button></td>
                        <td><button class="width-90" class:enabled={$generationSettingsStore.H}         on:click ={() => toggleSetting('H')}>Automata height</button></td>
                        <td><button class="width-90" class:enabled={$generationSettingsStore.rule}      on:click ={() => toggleSetting('rule')}>Rule</button></td>
                        <td><button class="width-90" class:enabled={$generationSettingsStore.firstLine} on:click ={() => toggleSetting('firstLine')}>First line</button></td>
                        <td><button class="width-90" class:enabled={$generationSettingsStore.color}     on:click ={() => toggleSetting('color')}>Color</button></td>
                    </tr>
                </table>
            </div>
            <div>
                <table class="full-width">
                    <tr>
                        <td><p>Density of the first line (between 0 and 100: The ratio of alive cells)</p></td>
                        <td><p>Interval (in ms) between two random generations</p></td>
                    </tr>
                    <tr>
                        <td><span>Density <input type="number" bind:value={$generationSettingsStore.firstLineDensity} id="inputDensity" min=0 max=100></span></td>
                        <td><span>Interval <input type="number" bind:value={$generationControlsStore.interval} id="inputInterval" min=1 max=100></span></td>
                    </tr>
                </table>
            </div>
            <div>
            </div>
            <div>
                <table class="full-width">
                    <tr>
                        <td><button class="width-90" id="newGenerationBtn" on:click={generateRandom}>Generate a new random configuration</button></td>
                        <td>
                            <button class="width-90" on:click={() => $generationControlsStore.enableAutomaticGeneration = !$generationControlsStore.enableAutomaticGeneration}>
                                {$generationControlsStore.enableAutomaticGeneration ? 'Stop' : 'Start'} automatic random generations
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </details>
    </div>
</main>
