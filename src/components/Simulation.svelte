<script lang="ts">
    import P5 from 'p5';
    import {generateAutomaton} from '../services/automaton-services.ts';
    import {drawAutomatonAsSquare,drawAutomatonAsCircle,drawAutomatonInfo} from '../services/drawing-services';
    export let data: AppData;
    let A;

    export const dataUpdated = () => {
        A = generateAutomaton(data.ruleNumber, data.W, data.H);
    }

    const sketch = (p5: P5) => {
        const H = 700;
        const W = 700;

        p5.setup = () => {
            const canvas = p5.createCanvas(H, W);
            canvas.parent('canvasDiv');

            A = generateAutomaton(data.ruleNumber, data.W, 50);
        };

        // The sketch draw method
        p5.draw = () => {
            p5.background(120, 200, 120);
            if (data.type === 'square') {
                drawAutomatonAsSquare(p5, A);
            } else {
                drawAutomatonAsCircle(p5, A);
            }

            drawAutomatonInfo(p5, A);
        };
    };

    new P5(sketch);
</script>

<main>
    <div id="canvasDiv"></div>
</main>
