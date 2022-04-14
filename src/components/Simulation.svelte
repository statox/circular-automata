<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import P5 from 'p5';
    import {animationStore, colorStore, automatonStore} from '../stores';
    import {animationStep} from '../services/automaton-services';
    import {drawAutomatonAsSquare,drawAutomatonAsCircle,drawAutomatonInfo, drawAutomatonAsCircleInversed} from '../services/drawing-services';
    import type {SimulationType} from '../types/simulation.types';
    export let type: SimulationType;
    let p5Instance;

    const sketch = (p5: P5) => {
        const H = 700;
        const W = 700;

        p5.setup = () => {
            const canvas = p5.createCanvas(H, W);
            canvas.parent('canvasDiv'+type);
            p5.colorMode(p5.HSB, 360, 100, 100, 1);
        };

        // The sketch draw method
        p5.draw = () => {
            const {background, fill, firstLineFill} = $colorStore;
            const backgroundColor = p5.color(background.H, background.S, background.B);
            const fillColor = p5.color(fill.H, fill.S, fill.B);
            const firstLineFillColor = p5.color(firstLineFill.H, firstLineFill.S, firstLineFill.B);

            p5.background(backgroundColor);
            if (type === 'square') {
                drawAutomatonAsSquare(p5, $automatonStore.A, {fillColor, firstLineFillColor});
            } else if (type === 'circle') {
                drawAutomatonAsCircle(p5, $automatonStore.A, {fillColor, firstLineFillColor});
            } else if (type === 'circle_inv') {
                drawAutomatonAsCircleInversed(p5, $automatonStore.A, {fillColor, firstLineFillColor})
            }

            p5.frameRate($animationStore.fps);
        };
    };

    onMount(() => {
        p5Instance = new P5(sketch);
    });

    onDestroy(() => {
        p5Instance.remove()
        p5Instance = null;
    });
</script>

<main>
    <div id={"canvasDiv"+type}></div>
</main>
