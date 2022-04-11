<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let data: AppData;

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
                data.W = Math.floor(Math.random() * 200);
                data.H = Math.floor(Math.random() * 200);
                data.ruleNumber = Math.floor(Math.random() * 256);
                dispatch('updateData')
            }, 3000);
        }
        randomChanges = !randomChanges;
    }

    toggleRandomChanges();
</script>

<main>
    <div>
        <span>
            <button on:click={toggleRandomChanges}>Toggle random changes</button>
            <label for="enabledRandomBox">Enabled</label>
            <input type="radio" id="enabledRandomBox" checked={randomChanges}>
        </span>
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
