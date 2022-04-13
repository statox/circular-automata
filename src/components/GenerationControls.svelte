<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let data: AppData;

    const MAX_W = 600;
    const MAX_H = 600;

    const generateRandom = () => {
        data.W = Math.floor(Math.random() * MAX_W);;
        data.H = Math.floor(Math.random() * MAX_H);
        data.ruleNumber = Math.floor(Math.random() * 256);
        data.firstLine = [];
        for (let _=0; _<data.W; _++) {
            data.firstLine.push(Math.random() > 0.7);
        }
        dispatch('updateData')
    }
</script>

<main>
    <div class="center controlSectionDiv">
        <h3>Generation controls</h3>
        <div>
            <span>
                <button on:click={generateRandom}>Generate a new random configuration</button>
            </span>
        </div>
    </div>
</main>

<style src="./Controls.css"></style>

