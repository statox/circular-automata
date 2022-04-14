import {writable} from 'svelte/store';
import type {Automaton} from './types/automaton.types';
import type {AnimationStore, AutomatonStore} from './types/stores.types';

const animationStore = writable({
    play: true,
    fps: 20
} as AnimationStore);

const colorStore = writable({
    background: {H: 307, S: 87, B: 36},
    fill: {H: 157, S: 88, B: 36},
    firstLineFill: {H: 37, S: 88, B: 36}
});

const rule = writable(110);
const automatonStore = writable({
    A: null as Automaton
} as AutomatonStore);

export {animationStore, colorStore, rule, automatonStore};
