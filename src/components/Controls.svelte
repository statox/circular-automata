<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let data: AppData;

    const toggleViewType = () => {
        data.type = data.type === 'square' ? 'circle' : 'square';
        dispatch('updateData')
    }
</script>

<main>
    <div>
        <button on:click={toggleViewType}>Toggle view</button>
        <span>{data.type}</span>
    </div>
    <div>
        <span>Rule: {data.ruleNumber}</span>
        <input type=number bind:value={data.ruleNumber} on:change={() => dispatch('updateData')} min=0 max=256>
    </div>
    <div>
        <span>Line width: {data.W}</span>
        <input type=range bind:value={data.W} on:change={() => dispatch('updateData')} min=0 max=300>
    </div>
    <div>
        <span>Number of lines: {data.H}</span>
        <input type=range bind:value={data.H} on:change={() => dispatch('updateData')} min=0 max=300>
    </div>
</main>
