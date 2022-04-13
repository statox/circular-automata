<script lang="ts">
    import P5 from 'p5';
    import {generateAutomaton} from '../services/automaton-services.ts';
    import {drawAutomatonAsSquare,drawAutomatonAsCircle,drawAutomatonInfo} from '../services/drawing-services';
    export let data: AppData;
    export let type: 'square'|'circle';
    let A;
    let p5Instance;

    export const dataUpdated = () => {
        A = generateAutomaton(data.ruleNumber, data.W, data.H, data.firstLine);
        p5Instance.loop();
    }

    const sketch = (p5: P5) => {
        const H = 700;
        const W = 700;

        p5.setup = () => {
            const canvas = p5.createCanvas(H, W);
            canvas.parent('canvasDiv');

            A = generateAutomaton(data.ruleNumber, data.W, data.H, data.firstLine);
        };

        // The sketch draw method
        p5.draw = () => {
            p5.background(120, 120, 200);
            if (type === 'square') {
                drawAutomatonAsSquare(p5, A);
            } else {
                drawAutomatonAsCircle(p5, A);
            }

            /* drawAutomatonInfo(p5, A); */
            p5.noLoop();
        };
    };

    p5Instance = new P5(sketch);
</script>

<main>
    <div id="canvasDiv"></div>
</main>
