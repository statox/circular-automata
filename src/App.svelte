<script lang="ts">
import Controls from './components/controls/Controls.svelte';
import GenerationControls from './components/controls/GenerationControls.svelte';
import Simulation from './components/Simulation.svelte';
</script>

<main>
    <h1>Circular automata</h1>
    <GenerationControls />
    <Simulation type='square' />
    <Simulation type='circle' />
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
