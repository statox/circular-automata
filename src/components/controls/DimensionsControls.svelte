<script lang="ts">
    import {automatonSettingsStore} from '../../stores';

    const MAX_W = 600;
    const MAX_H = 600;

    // When updating a dimension make sure the data remains consistent
    const updateData = () => {
        /*
         * let cnt=0;
         * while (data.W < data.firstLine.length) {
         *     if (cnt%2) {
         *         data.firstLine.pop();
         *     } else {
         *         data.firstLine.shift(false);
         *     }
         *     cnt++;
         * }
         * while (data.W > data.firstLine.length) {
         *     if (cnt%2) {
         *         data.firstLine.push(false);
         *     } else {
         *         data.firstLine.unshift(false);
         *     }
         *     cnt++;
         * }
         */
    }
</script>

<main>
    <div class="center controlSectionDiv">
        <h3>Dimensions controls</h3>
        <div>
            <span>Line width: {$automatonSettingsStore.W}</span>
            <input type=range bind:value={$automatonSettingsStore.W} on:change={updateData} min=0 max={MAX_W}>
        </div>
        <div>
            <span>Number of lines: {$automatonSettingsStore.H}</span>
            <input type=range bind:value={$automatonSettingsStore.H} on:change={updateData} min=0 max={MAX_H}>
        </div>
    </div>
</main>

<style src="./Controls.css"></style>
