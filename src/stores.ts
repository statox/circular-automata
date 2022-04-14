import {writable} from 'svelte/store';
import type {AnimationStore} from './types/stores.types';

const animationStore = writable({
    play: true,
    fps: 20
} as AnimationStore);

const colorStore = writable({
    background: {H: 307, S: 87, B: 36},
    fill: {H: 157, S: 88, B: 36},
    firstLineFill: {H: 37, S: 88, B: 36}
});

export {animationStore, colorStore};
