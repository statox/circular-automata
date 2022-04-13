<script lang="ts">
    import P5 from 'p5';
    import {generateAutomaton, animationStep} from '../services/automaton-services.ts';
    import {drawAutomatonAsSquare,drawAutomatonAsCircle,drawAutomatonInfo} from '../services/drawing-services';
    export let data: AppData;
    export let type: 'square'|'circle';
    let p5Instance;

    export const dataUpdated = () => {
        data.automaton = generateAutomaton(data);
    }

    const sketch = (p5: P5) => {
        const H = 700;
        const W = 700;

        p5.setup = () => {
            const canvas = p5.createCanvas(H, W);
            canvas.parent('canvasDiv');
            p5.colorMode(p5.HSB, 360, 100, 100, 1);
        };

        // The sketch draw method
        p5.draw = () => {
            const {background, fill, firstLineFill} = data.colors;
            const A = data.automaton;
            const backgroundColor = p5.color(background.H, background.S, background.B);
            const fillColor = p5.color(fill.H, fill.S, fill.B);
            const firstLineFillColor = p5.color(firstLineFill.H, firstLineFill.S, firstLineFill.B);

            p5.background(backgroundColor);
            if (type === 'square') {
                drawAutomatonAsSquare(p5, A, {fillColor, firstLineFillColor});
            } else {
                drawAutomatonAsCircle(p5, A, {fillColor, firstLineFillColor});
            }

            /* drawAutomatonInfo(p5, A); */
            if (data.animate) {
                animationStep(data.automaton);
            }

            if (data.fps) {
                p5.frameRate(data.fps);
            }
        };
    };

    p5Instance = new P5(sketch);
</script>

<main>
    <div id="canvasDiv"></div>
</main>
