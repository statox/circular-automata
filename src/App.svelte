<script lang="ts">
import Controls from './components/controls/Controls.svelte';
import GenerationControls from './components/controls/GenerationControls.svelte';
import Simulation from './components/Simulation.svelte';
import {generateAutomaton} from './services/automaton-services';

let simulation1;
let simulation2;

const appData: AppData = {
    ruleNumber: 90,
    W: 50,
    H: 50,
    firstLine: new Array(50).fill(false),
    colors: {
        background: {H: 307, S: 87, B: 36},
        fill:  {H: 157, S: 88, B: 36},
        firstLineFill:  {H: 37, S: 88, B: 36}
    },
    animate: true,
    fps: 10,
    automaton: null
}

appData.firstLine[Math.floor(appData.W/2)] = true;
appData.automaton = generateAutomaton(appData.ruleNumber, appData.W, appData.H, appData.firstLine);

// Once a sub component update the data, update the simulations
const postDataUpdate = () => {
    appData = appData;
    simulation1.dataUpdated();
    simulation2.dataUpdated()
}
</script>

<main>
    <h1>Circular automata</h1>
    <GenerationControls data={appData} on:updateData={postDataUpdate} />
    <Simulation type='square' data={appData} bind:this={simulation1} />
    <Simulation type='cirle' data={appData} bind:this={simulation2} />
    <Controls data={appData} on:updateData={postDataUpdate} />
</main>

<style>
main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
}

h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
}

@media (min-width: 640px) {
    main {
        max-width: none;
    }
}
</style>
