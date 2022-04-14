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
        <h3>Generation controls</h3>
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
            <p>Density of the first line (between 0 and 100: The ratio of alive cells)</p>
            <span>Density <input type="number" bind:value={$generationSettingsStore.firstLineDensity} id="inputDensity" min=0 max=100></span>
        </div>
        <div>
            <p>Interval (in ms) between two random generations</p>
            <span>Interval <input type="number" bind:value={$generationControlsStore.interval} id="inputInterval" min=1 max=100></span>
        </div>
        <div>
            <button id="newGenerationBtn" on:click={generateRandom}>Generate a new random configuration</button>
            <button on:click={() => $generationControlsStore.enableAutomaticGeneration = !$generationControlsStore.enableAutomaticGeneration}>
                {$generationControlsStore.enableAutomaticGeneration ? 'Stop' : 'Start'} automatic random generations
            </button>
        </div>
    </div>
</main>
