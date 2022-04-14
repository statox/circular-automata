<script lang="ts">
    import { onDestroy } from 'svelte'
    import RuleDescriptor from './RuleDescriptor.svelte';
    import {rule} from '../../stores';

    export const computeRuleToBinaryArray = (r) => {
        return [...r.toString(2).padStart(8, '0')].map(c => c === '1')
    };

    const updateBit = (i, bit) => {
        const ruleNumberBin = computeRuleToBinaryArray($rule);
        ruleNumberBin[i] = !ruleNumberBin[i];
        const binString = '0b' + ruleNumberBin.map(c => c ? '1' : '0').join('');
        const dec = Number(binString);
        $rule = dec;
    }

</script>

<main>
    <div class="center controlSectionDiv">
        <h3>Rule controls</h3>
        <span>Rule: <input type="number" bind:value={$rule} min=0 max=256></span>
        <table id="ruleDigitsTable" class="center">
            <tr>
                {#each computeRuleToBinaryArray($rule) as bit, i}
                <th on:click={() => updateBit(i, bit)}>{bit ? '1' : '0'}</th>
                {/each}
            </tr>
            <tr>
                {#each computeRuleToBinaryArray($rule) as bit, i}
                <th on:click={() => updateBit(i, bit)}>
                    <input type="radio" id="toggleBit{i}" checked={bit}>
                </th>
                {/each}
            </tr>
        </table>
        <br/>
        <RuleDescriptor rule={computeRuleToBinaryArray($rule)}/>
    </div>
</main>

<style src="./Controls.css"></style>
