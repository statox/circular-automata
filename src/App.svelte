<script lang="ts">
import {viewStore} from './stores';
import Controls from './components/controls/Controls.svelte';
import GenerationControls from './components/controls/GenerationControls.svelte';
import Simulation from './components/Simulation.svelte';
import SimulationP5Webgl from './components/SimulationP5Webgl.svelte';
</script>

<main>
    <h1>Circular automata</h1>
    <GenerationControls />
    {#if $viewStore['square'] }
        <Simulation type='square' />
    {/if}
    {#if $viewStore['circle'] }
        <Simulation type='circle' />
    {/if}
    {#if $viewStore['circle_inv'] }
        <Simulation type='circle_inv' />
    {/if}
    {#if $viewStore['p5_webgl'] }
        <SimulationP5Webgl />
    {/if}
    <Controls />
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
