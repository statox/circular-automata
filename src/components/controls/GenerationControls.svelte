<script lang="ts">
    import {automatonDimensionsStore, generationSettingsStore, automatonStore} from '../../stores';
    import {getRandomAutomaton} from '../../services/generation-services';

    const timers = {
        automaticRandomGenerationTimer: null,
        animationTimer: null
    }

    const MAX_W = 600;
    const MAX_H = 600;

    const generateRandom = () => {
        const newAutomaton = getRandomAutomaton({currentAutomaton: $automatonStore.A, generationSettings: $generationSettingsStore});
        $automatonDimensionsStore.W = newAutomaton.W;
        $automatonDimensionsStore.H = newAutomaton.H;
        $automatonStore.A = newAutomaton;
/*
 *         if (settings.W) {
 *             data.W = Math.floor(Math.random() * MAX_W);;
 *         }
 *         if (settings.H) {
 *             data.H = Math.floor(Math.random() * MAX_H);
 *         }
 *         if (settings.rule) {
 *             data.ruleNumber = Math.floor(Math.random() * 256);
 *         }
 *         if (settings.firstLine || settings.W) {
 *             data.firstLine = [];
 *             let atLeastOne = false;
 *             for (let _=0; _<data.W; _++) {
 *                 const v = Math.random() < settings.firstLineDensity/100
 *                 if (v) atLeastOne=true;
 *                 data.firstLine.push(v);
 *             }
 *             if (!atLeastOne) {
 *                 data.firstLine[Math.floor(data.firstLine.length/2)] = true;
 *             }
 *         }
 * 
 *         // Regenerate a new automaton if one of its configuration changed
 *         // No need to do it for color changes
 *         if (settings.W || settings.H || settings.rule || settings.firstLine) {
 *             dispatch('updateData')
 *         }
 * 
 *         if (settings.color) {
 *             $colorStore.background.H = Math.random() * 360;
 *             $colorStore.fill.H = ($colorStore.background.H + 360/3) % 360;
 *             $colorStore.firstLineFill.H = ($colorStore.background.H - 360/3) % 360;
 * 
 *             $colorStore.background.S = 40 + Math.floor(Math.random() * 60);
 *             $colorStore.fill.S = 40 + Math.floor(Math.random() * 60);
 *             $colorStore.firstLineFill.S = 40 + Math.floor(Math.random() * 60);
 *         }
 * 
 */
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
        console.log('settings updated');
        console.log($generationSettingsStore);
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
                    <td><button style="width: 100%" class:enabled={$generationSettingsStore.W} on:click ={() => toggleSetting('W')}>Line width</button></td>
                    <td><button style="width: 100%" class:enabled={$generationSettingsStore.H} on:click ={() => toggleSetting('H')}>Automata height</button></td>
                    <!--
                    <td><button style="width: 100%" class:enabled={settings.rule}       on:click ={() => toggleSetting('rule')}>Rule</button></td>
                    <td><button style="width: 100%" class:enabled={settings.firstLine}  on:click ={() => toggleSetting('firstLine')}>First line</button></td>
                    <td><button style="width: 100%" class:enabled={settings.color}      on:click ={() => toggleSetting('color')}>Color</button></td>
                    -->
                </tr>
            </table>
        </div>
        <!--
        <div>
            <p>Density of the first line (between 0 and 100: The ratio of alive cells)</p>
            <span>Density <input type="number" bind:value={settings.firstLineDensity} id="inputDensity" min=0 max=100></span>
        </div>
        <div>
            <p>Interval (in ms) between two random generations</p>
            <span>Interval <input type="number" bind:value={settings.interval} id="inputInterval" on:change={updateInterval} min=1 max=10000></span>
        </div>
        <div>
            <button id="newGenerationBtn" on:click={generateRandom}>Generate a new random configuration</button>
            <button on:click={toggleAutomaticGeneration}>{settings.automaticRandomGeneration ? 'Stop' : 'Start'} automatic random generations</button>
        </div>
        -->
        <div>
            <button id="newGenerationBtn" on:click={generateRandom}>Generate a new random configuration</button>
            <button on:click={() => toggleSetting('enableAutomaticGeneration')}>{$generationSettingsStore.enableAutomaticGeneration ? 'Stop' : 'Start'} automatic random generations</button>
        </div>
    </div>
</main>

<style src="./Controls.css"></style>
