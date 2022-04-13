<script lang="ts">
    import RuleControls from './RuleControls.svelte';
    import DimensionsControls from './DimensionsControls.svelte';
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
    <DimensionsControls data={data} on:updateData={dataUpdatedInSubComponent} />
    <div>
        <span>
            <button on:click={toggleRandomChanges}>{randomChanges ? 'Stop' : 'Start'} random changes</button>
        </span>
    </div>
</main>
