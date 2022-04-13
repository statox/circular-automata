<script lang="ts">
    import RuleControls from './RuleControls.svelte';
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let data: AppData;

    const MAX_W = 600;
    const MAX_H = 600;

    let randomChanges = false;
    let randomChangesTimer;

    const toggleViewType = () => {
        data.type = data.type === 'square' ? 'circle' : 'square';
        dispatch('updateData')
    }

    const toggleRandomChanges = () => {
        if (randomChanges) {
            clearInterval(randomChangesTimer);
        } else {
            randomChangesTimer = setInterval(() => {
                data.W = Math.floor(Math.random() * MAX_W);
                data.H = Math.floor(Math.random() * MAX_H);
                data.ruleNumber = Math.floor(Math.random() * 256);
                dispatch('updateData')
            }, 3000);
        }
        randomChanges = !randomChanges;
    }

    const dataUpdatedInSubComponent = () => {
        data = data;
        dispatch('updateData')
    }
</script>

<main>
    <h2>Controls</h2>
    <RuleControls data={data} on:updateData={dataUpdatedInSubComponent} />
    <div>
        <span>
            <button on:click={toggleRandomChanges}>Toggle random changes</button>
            <label for="enabledRandomBox">Enabled</label>
            <input type="radio" id="enabledRandomBox" checked={randomChanges}>
        </span>
    </div>
    <div>
        <span>Line width: {data.W}</span>
        <input type=range bind:value={data.W} on:change={() => dispatch('updateData')} min=0 max={MAX_W}>
    </div>
    <div>
        <span>Number of lines: {data.H}</span>
        <input type=range bind:value={data.H} on:change={() => dispatch('updateData')} min=0 max={MAX_H}>
    </div>
</main>
