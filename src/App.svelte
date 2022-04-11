<script lang="ts">
import Controls from './components/Controls.svelte';
import Simulation from './components/Simulation.svelte';

let simulation;

const appData: AppData = {
    ruleNumber: 46,
    W: 51,
    H: 51,
    type: 'square'
}
</script>

<main>
    <h1>Circular automata</h1>
    <Simulation data={appData} bind:this={simulation} />
    <Controls data={appData} on:updateData={simulation.dataUpdated} />
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
