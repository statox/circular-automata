<script lang="ts">
    export let rule: boolean[];
</script>

<main>
    <div>
        <h3>Rule descriptor</h3>
        <table id="descriptorTable">
            <tr>
                <td>Parent configuration</td>
                {#each rule as bit, i}
                <td>{(7-i).toString(2).padStart(3, '0')}</td>
                {/each}
            </tr>
            <tr>
                <td>Children state</td>
                {#each rule as bit, i}
                <td><input type="radio" id="toggleBit{i}" checked={bit}></td>
                {/each}
            </tr>
        </table>
    </div>
</main>

<style>
#descriptorTable {
    margin: none;
    width: 100%;
    border: 3px solid #566256;
}
</style>
