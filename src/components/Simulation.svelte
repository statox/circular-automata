<script lang="ts">
    import P5 from 'p5';
    import {generateAutomaton} from '../services/automaton-services.ts';
    import {drawAutomatonAsCircle,drawAutomatonInfo} from '../services/drawing-services';
    export let data;

    const sketch = (p5: P5) => {
        const H = 700;
        const W = 700;
        let A;
        let R;

        p5.setup = () => {
            const canvas = p5.createCanvas(500, 500);
            canvas.parent('canvasDiv');

            A = generateAutomaton(46, Math.floor(Math.random() * 100), Math.floor(Math.random() * 500));
            setInterval(() => {
                A = generateAutomaton(
                    Math.floor(Math.random() * 255),
                    Math.floor(Math.random() * 100),
                    Math.floor(Math.random() * 500)
                );
            }, 3000);
        };

        // The sketch draw method
        p5.draw = () => {
            p5.background(120, 200, 120);
            // drawAutomatonAsSquare(p5, A);
            drawAutomatonAsCircle(p5, A);

            drawAutomatonInfo(p5, A);
        };
    };

    new P5(sketch);
</script>

<main>
    <div id="canvasDiv"></div>
</main>
