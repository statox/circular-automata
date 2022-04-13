<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let data: AppData;


    const updateStuff = () => {
        dispatch('updateData')
    }
</script>

<main>
    <div class="center controlSectionDiv">
        <h3>Rule controls</h3>
        <span>Rule: {data.ruleNumber}</span>
        <table id="ruleDigitsTable" class="center">
            <tr>
                {#each ruleNumberBin as bit, i}
                <th on:click={() => updateBit(i, bit)}>{bit ? '1' : '0'}</th>
                {/each}
            </tr>
            <tr>
                {#each ruleNumberBin as bit, i}
                <th on:click={() => updateBit(i, bit)}>
                    <input type="radio" id="toggleBit{i}" checked={bit}>
                </th>
                {/each}
            </tr>
        </table>

        <br/>
    </div>
</main>

<style src="./Controls.css"></style>

