<script lang="ts">
    import RuleDescriptor from './RuleDescriptor.svelte';
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    let ruleDescriptor;

    export let data: AppData;
    let ruleNumberBin;

    export const computeRuleToBinaryArray = () => {
        ruleNumberBin = [...data.ruleNumber.toString(2).padStart(8, '0')].map(c => c === '1')
    };
    computeRuleToBinaryArray();

    const updateBit = (i, bit) => {
        ruleNumberBin[i] = !ruleNumberBin[i];
        const binString = '0b' + ruleNumberBin.map(c => c ? '1' : '0').join('');
        const dec = Number(binString);
        data.ruleNumber = dec;
        computeRuleToBinaryArray();
        dispatch('updateData')
    }
</script>

<main>
    <div class="center controlSectionDiv">
        <h3>Rule controls</h3>
        <span>Rule: <input type="number" bind:value={data.ruleNumber} on:change={() => {computeRuleToBinaryArray(); dispatch('updateData')}} min=0 max=256></span>
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
        <RuleDescriptor rule={ruleNumberBin} bind:this={ruleDescriptor} />
    </div>
</main>

<style src="./Controls.css"></style>
