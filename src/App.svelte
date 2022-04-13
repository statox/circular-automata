<script lang="ts">
import Controls from './components/Controls.svelte';
import Simulation from './components/Simulation.svelte';

let simulation1;
let simulation2;

const appData: AppData = {
    ruleNumber: 90,
    W: 50,
    H: 50,
    firstLine: new Array(50).fill(false)
}
appData.firstLine[Math.floor(appData.W/2)] = true;
</script>

<main>
    <h1>Circular automata</h1>
    <Simulation type='square' data={appData} bind:this={simulation1} />
    <Simulation type='cirle' data={appData} bind:this={simulation2} />
    <Controls data={appData} on:updateData={() => {simulation1.dataUpdated();simulation2.dataUpdated()}} />
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
