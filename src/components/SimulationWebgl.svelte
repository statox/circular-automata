<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import {automatonStore, colorStore} from '../stores';
    import P5 from 'p5';
    let p5Instance: P5;

    const sketch = (p5: P5) => {
        const H = 700;
        const W = 700;

        let shader;

        // TODO find a way to execute that only on automaton update
        const makeTexture = () => {
            const {background, fill, firstLineFill} = $colorStore;
            const backgroundColor = p5.color(background.H, background.S, background.B);
            const fillColor = p5.color(fill.H, fill.S, fill.B);
            const firstLineFillColor = p5.color(firstLineFill.H, firstLineFill.S, firstLineFill.B);

            // The texture based on the automaton grid
            const texture = p5.createImage($automatonStore.W, $automatonStore.H);
            texture.loadPixels();

            for (let i = 0; i < $automatonStore.W; i++) {
                for (let j = 0; j < $automatonStore.H; j++) {
                    const alive = $automatonStore.cells[j][i];
                    let color = backgroundColor;
                    if (alive) {
                        if (j===0) {
                            color = firstLineFillColor;
                        } else {
                            color = fillColor
                        }
                    }
                    texture.set(i, $automatonStore.H-1-j, color);
                }
            }
            texture.updatePixels();
            return texture;
        }

        p5.preload = () => {
            shader = p5.loadShader('./shaders/grid.vert', './shaders/grid.frag');
        };

        p5.setup = () => {
            const canvas = p5.createCanvas(H, W, p5.WEBGL);
            canvas.parent('canvasDivWebGL');
            p5.colorMode(p5.HSB, 360, 100, 100, 1);

        };

        // The sketch draw method
        p5.draw = () => {
            p5.shader(shader);
            shader.setUniform('u_resolution', [p5.width, p5.height]);
            const texture = makeTexture();
            shader.setUniform('u_texture', texture);
            p5.rect(0, 0, p5.width, p5.height);
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
    <div id={"canvasDivWebGL"}></div>
</main>

