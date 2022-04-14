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

type GenerationSettingsStore = {
    W: boolean;
    H: boolean;
    rule: boolean;
    firstLine: boolean;
    color: boolean;
    firstLineDensity: number; // Percentage of alive cells in new first lines (0-100)
};

type GenerationControlsStore = {
    enableAutomaticGeneration: boolean;
};

export type {
    AnimationStore,
    AutomatonStore,
    AutomatonDimensionsStore,
    ColorStore,
    GenerationSettingsStore,
    GenerationControlsStore
};
