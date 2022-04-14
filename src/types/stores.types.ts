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

type AutomatonSettingsStore = {
    W: number;
    H: number;
};

export type {AnimationStore, AutomatonStore, AutomatonSettingsStore};
