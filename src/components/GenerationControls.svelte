<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let data: AppData;

    let settings = {
        W: false,
        H: true,
        rule: true,
        firstLine: true
    };

    const MAX_W = 600;
    const MAX_H = 600;

    const generateRandom = () => {
        if (settings.W) {
            data.W = Math.floor(Math.random() * MAX_W);;
        }
        if (settings.H) {
            data.H = Math.floor(Math.random() * MAX_H);
        }
        if (settings.rule) {
            data.ruleNumber = Math.floor(Math.random() * 256);
        }
        if (settings.firstLine || settings.W) {
            data.firstLine = [];
            for (let _=0; _<data.W; _++) {
                data.firstLine.push(Math.random() > 0.7);
            }
        }
        dispatch('updateData')
    }
</script>

<main>
    <div class="center controlSectionDiv">
        <h3>Generation controls</h3>
        <div>
            <p>Select the parameters you want to change randomly</p>
        </div>
        <div>
            <span>Line width <input type="checkbox" bind:checked={settings.W} id="toggleLineWidth"></span>
            <span>Automata height <input type="checkbox" bind:checked={settings.H} id="toggleHeight"></span>
            <span>Rule <input type="checkbox" bind:checked={settings.rule} id="toggleRule"></span>
            <span>First line <input type="checkbox" bind:checked={settings.firstLine} id="toggleFirstLine"></span>
        </div>
        <div>
            <button on:click={generateRandom}>Generate a new random configuration</button>
        </div>
    </div>
</main>

<style src="./Controls.css"></style>

