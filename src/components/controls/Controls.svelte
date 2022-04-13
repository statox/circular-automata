<script lang="ts">
    import RuleControls from './RuleControls.svelte';
    import DimensionsControls from './DimensionsControls.svelte';
    import GenerationControls from './GenerationControls.svelte';
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let data: AppData;

    let ruleControls;
    const dataUpdatedInSubComponent = () => {
        data = data;
        ruleControls?.computeRuleToBinaryArray();
        dispatch('updateData')
    }
</script>

<main>
    <h2>Controls</h2>
    <RuleControls data={data} bind:this={ruleControls} on:updateData={dataUpdatedInSubComponent} />
    <DimensionsControls data={data} on:updateData={dataUpdatedInSubComponent} />
    <GenerationControls data={data} on:updateData={dataUpdatedInSubComponent} />
</main>
