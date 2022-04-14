<script lang="ts">
    import {automatonDimensionsStore} from '../../stores';
    import {AUTOMATON_MAX_DIMENSIONS} from '../../defaults';

    const {W: MAX_W, H: MAX_H} = AUTOMATON_MAX_DIMENSIONS;
</script>

<main>
    <div class="center controlSectionDiv">
        <h3>Dimensions controls</h3>
        <div>
            <span>Line width: {$automatonDimensionsStore.W}</span>
            <input type=range bind:value={$automatonDimensionsStore.W} min=0 max={MAX_W}>
        </div>
        <div>
            <span>Number of lines: {$automatonDimensionsStore.H}</span>
            <input type=range bind:value={$automatonDimensionsStore.H} min=0 max={MAX_H}>
        </div>
    </div>
</main>

<style src="./Controls.css"></style>
