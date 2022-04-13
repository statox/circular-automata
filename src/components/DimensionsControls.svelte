<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let data: AppData;

    const MAX_W = 600;
    const MAX_H = 600;

    // When updating a dimension make sure the data remains consistent
    const updateData = () => {
        let cnt=0;
        while (data.W < data.firstLine.length) {
            if (cnt%2) {
                data.firstLine.pop();
            } else {
                data.firstLine.shift(false);
            }
            cnt++;
        }
        while (data.W > data.firstLine.length) {
            if (cnt%2) {
                data.firstLine.push(false);
            } else {
                data.firstLine.unshift(false);
            }
            cnt++;
        }
        dispatch('updateData');
    }
</script>

<main>
    <div class="center controlSectionDiv">
        <h3>Dimensions controls</h3>
        <div>
            <span>Line width: {data.W}</span>
            <input type=range bind:value={data.W} on:change={updateData} min=0 max={MAX_W}>
        </div>
        <div>
            <span>Number of lines: {data.H}</span>
            <input type=range bind:value={data.H} on:change={updateData} min=0 max={MAX_H}>
        </div>
    </div>
</main>

<style src="./Controls.css"></style>
