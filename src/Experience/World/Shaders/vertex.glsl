varying vec2 vUv;
varying vec3 vPosition;
varying vec2 vScreenSpace;

void main(){
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    vScreenSpace = gl_Position.xy/gl_Position.w;
}