<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let data: AppData;

    const MAX_W = 600;
    const MAX_H = 600;
</script>

<main>
    <div id="automataControlDiv" class="center">
        <h3>Automata controls</h3>
        <div>
            <span>Line width: {data.W}</span>
            <input type=range bind:value={data.W} on:change={() => dispatch('updateData')} min=0 max={MAX_W}>
        </div>
        <div>
            <span>Number of lines: {data.H}</span>
            <input type=range bind:value={data.H} on:change={() => dispatch('updateData')} min=0 max={MAX_H}>
        </div>
    </div>
</main>

<style>
.center {
    margin: auto;
    width: 50%;
}

#automataControlDiv {
    border: 3px solid #7878c8;
    padding: 10px;
    margin-bottom: 10px;
}

#ruleDigitsTable {
    border: 3px solid #566256;
}
</style>

