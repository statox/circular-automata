<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import P5 from 'p5';
    let p5Instance: P5;

    const sketch = (p5: P5) => {
        const H = 700;
        const W = 700;

        let shader;

        p5.preload = () => {
            shader = p5.loadShader('./shaders/basic.vert', './shaders/basic.frag');
        };

        p5.setup = () => {
            const canvas = p5.createCanvas(H, W, p5.WEBGL);
            canvas.parent('canvasDivWebGL');
            p5.colorMode(p5.HSB, 360, 100, 100, 1);

        };

        // The sketch draw method
        p5.draw = () => {
            p5.background(307, 87, 36);
            p5.fill(157, 87, 36)
            p5.rect(-50, -50, 100, 100);

            p5.shader(shader);
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

