<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let data: AppData;

    let automaticRandomGeneration = false;
    let automaticRandomGenerationTimer;

    let settings = {
        W: false,
        H: false,
        rule: false,
        firstLine: true,
        interval: 3000,
        color: false,
        firstLineDensity: 50 // A percentage (0-100) of living cells on first line
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
            let atLeastOne = false;
            for (let _=0; _<data.W; _++) {
                const v = Math.random() < settings.firstLineDensity/100
                if (v) atLeastOne=true;
                data.firstLine.push(v);
            }
            if (!atLeastOne) {
                data.firstLine[Math.floor(Math.random()*data.firstLine.length-1)] = true;
            }
        }
        if (settings.color) {
            data.colors.background.H = Math.floor(Math.random() * 360);
            data.colors.fill.H = (data.colors.background.H + 360/3) % 360;
            data.colors.firstLineFill.H = (data.colors.background.H - 360/3) % 360;

            data.colors.background.S = Math.floor(Math.random() * 100);
            data.colors.fill.S = Math.floor(Math.random() * 100);
            data.colors.firstLineFill.S = Math.floor(Math.random() * 100);
        }
        dispatch('updateData')
    }

    const toggleAutomaticGeneration = () => {
        if (automaticRandomGeneration) {
            clearInterval(automaticRandomGenerationTimer);
        } else {
            generateRandom();
            automaticRandomGenerationTimer = setInterval(generateRandom, settings.interval);
        }
        automaticRandomGeneration = !automaticRandomGeneration;
        document.getElementById("newGenerationBtn").style.visibility = automaticRandomGeneration ? "hidden" : "visible";
    }

    const updateInterval = () => {
        if (automaticRandomGeneration) {
            clearInterval(automaticRandomGenerationTimer);
            automaticRandomGenerationTimer = setInterval(generateRandom, settings.interval);
        }
    }
</script>

<main>
    <div class="center controlSectionDiv">
        <h3>Generation controls</h3>
        <div>
            <p>Parameters to change randomly</p>
            <span>Line width <input type="checkbox" bind:checked={settings.W} id="toggleLineWidth"></span>
            <span>Automata height <input type="checkbox" bind:checked={settings.H} id="toggleHeight"></span>
            <span>Rule <input type="checkbox" bind:checked={settings.rule} id="toggleRule"></span>
            <span>First line <input type="checkbox" bind:checked={settings.firstLine} id="toggleFirstLine"></span>
            <span>Color <input type="checkbox" bind:checked={settings.color} id="toggleColor"></span>
        </div>
        <div>
            <p>Density of the first line (between 0 and 100: The ratio of alive cells)</p>
            <span>Density <input type="number" bind:value={settings.firstLineDensity} id="inputDensity" min=0 max=100></span>
        </div>
        <div>
            <p>Interval (in ms) between two random generations</p>
            <span>Interval <input type="number" bind:value={settings.interval} id="inputInterval" on:change={updateInterval} min=1 max=10000></span>
        </div>
        <div>
            <button id="animateGenerationBtn" on:click={() => data.animate = !data.animate}>{data.animate ? 'Stop the animation' : 'Animate the automaton'}</button>
            <button id="newGenerationBtn" on:click={generateRandom}>Generate a new random configuration</button>
            <button on:click={toggleAutomaticGeneration}>{automaticRandomGeneration ? 'Stop' : 'Start'} automatic random generations</button>
        </div>
    </div>
</main>

<style src="./Controls.css"></style>
