<script lang="ts">
    import {automatonDimensionsStore, generationSettingsStore, automatonStore, colorStore, rule} from '../../stores';
    import {getRandomAutomaton,getRandomColors} from '../../services/generation-services';

    const timers = {
        automaticRandomGenerationTimer: null,
    }

    const generateRandom = () => {
        const newAutomaton = getRandomAutomaton({currentAutomaton: $automatonStore.A, generationSettings: $generationSettingsStore});
        $automatonDimensionsStore.W = newAutomaton.W;
        $automatonDimensionsStore.H = newAutomaton.H;
        $rule = newAutomaton.ruleNumber;
        $automatonStore.A = newAutomaton;

        if ($generationSettingsStore.color) {
            $colorStore = getRandomColors();
        }
    }

    const toggleAutomaticGeneration = () => {
        /*
         * if (settings.automaticRandomGeneration) {
         *     clearInterval(timers.automaticRandomGenerationTimer);
         * } else {
         *     generateRandom();
         *     timers.automaticRandomGenerationTimer = setInterval(generateRandom, settings.interval);
         * }
         * settings.automaticRandomGeneration = !settings.automaticRandomGeneration;
         * document.getElementById("newGenerationBtn")?.style.visibility = settings.automaticRandomGeneration ? "hidden" : "visible";
         */
    }
    toggleAutomaticGeneration();

    const toggleSetting = (setting) => {
        $generationSettingsStore[setting] = !$generationSettingsStore[setting]
    }

    const updateInterval = () => {
        /*
         * if (settings.automaticRandomGeneration) {
         *     clearInterval(timers.automaticRandomGenerationTimer);
         *     timers.automaticRandomGenerationTimer = setInterval(generateRandom, settings.interval);
         * }
         */
    }
</script>

<main>
    <div class="center controlSectionDiv">
        <h3>Generation controls</h3>
        <div>
            <p>Parameters to change randomly</p>
            <table style="width: 100%">
                <tr>
                    <td><button style="width: 100%" class:enabled={$generationSettingsStore.W}         on:click ={() => toggleSetting('W')}>Line width</button></td>
                    <td><button style="width: 100%" class:enabled={$generationSettingsStore.H}         on:click ={() => toggleSetting('H')}>Automata height</button></td>
                    <td><button style="width: 100%" class:enabled={$generationSettingsStore.rule}      on:click ={() => toggleSetting('rule')}>Rule</button></td>
                    <td><button style="width: 100%" class:enabled={$generationSettingsStore.firstLine} on:click ={() => toggleSetting('firstLine')}>First line</button></td>
                    <td><button style="width: 100%" class:enabled={$generationSettingsStore.color}     on:click ={() => toggleSetting('color')}>Color</button></td>
                </tr>
            </table>
        </div>
        <div>
            <p>Density of the first line (between 0 and 100: The ratio of alive cells)</p>
            <span>Density <input type="number" bind:value={$generationSettingsStore.firstLineDensity} id="inputDensity" min=0 max=100></span>
        </div>
        <!--
        <div>
            <p>Interval (in ms) between two random generations</p>
            <span>Interval <input type="number" bind:value={settings.interval} id="inputInterval" on:change={updateInterval} min=1 max=10000></span>
        </div>
        -->
        <div>
            <button id="newGenerationBtn" on:click={generateRandom}>Generate a new random configuration</button>
            <button on:click={() => toggleSetting('enableAutomaticGeneration')}>{$generationSettingsStore.enableAutomaticGeneration ? 'Stop' : 'Start'} automatic random generations</button>
        </div>
    </div>
</main>

<style src="./Controls.css"></style>
