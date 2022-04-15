precision highp float;

uniform vec2 u_resolution;
uniform sampler2D u_texture;

// grab texcoords from vert shader
varying vec2 vTexCoord;

void main() {
    // Normalize the position between 0 and 1
    vec2 st = gl_FragCoord.xy/u_resolution.xy; 
    // Get the texture coordinate from the vertex shader
    vec2 uv = vTexCoord;
    // Get the color at the texture coordinate
    vec4 c = texture2D(u_texture, uv);
    // Reuse the same color
    gl_FragColor = c;
}
