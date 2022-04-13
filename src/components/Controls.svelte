<script lang="ts">
    import RuleControls from './RuleControls.svelte';
    import DimensionsControls from './DimensionsControls.svelte';
    import GenerationControls from './GenerationControls.svelte';
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let data: AppData;

    const dataUpdatedInSubComponent = () => {
        data = data;
        dispatch('updateData')
    }
</script>

<main>
    <h2>Controls</h2>
    <RuleControls data={data} on:updateData={dataUpdatedInSubComponent} />
    <DimensionsControls data={data} on:updateData={dataUpdatedInSubComponent} />
    <GenerationControls data={data} on:updateData={dataUpdatedInSubComponent} />
</main>
