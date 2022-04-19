<script lang="ts">
function main() {
    const canvas: HTMLCanvasElement = document.querySelector("#glCanvas");
    // Initialize the GL context
    const gl = canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.5, 0.5, 0.5, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;
</script>

<main>
    <h2>Vanilla webgl</h2>
    <canvas id="glCanvas" width="640" height="480"></canvas>
</main>
