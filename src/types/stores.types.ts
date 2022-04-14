import type {Automaton} from './automaton.types';
import type {Color} from './data.types';

type AnimationStore = {
    play: boolean;
    fps: number;
};

type ColorStore = {
    background: Color;
    fill: Color;
    firstLineFill: Color;
};

type AutomatonStore = {
    A: Automaton;
};

type AutomatonDimensionsStore = {
    W: number;
    H: number;
};

export type {AnimationStore, AutomatonStore, AutomatonDimensionsStore};
