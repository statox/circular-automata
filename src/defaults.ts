import type {
    AnimationStore,
    AutomatonDimensionsStore,
    ColorStore,
    GenerationControlsStore,
    GenerationSettingsStore
} from './types/stores.types';

const defaultAnimationStore: AnimationStore = {
    play: true,
    fps: 30
};

const defaultAutomatonDimensionsStore: AutomatonDimensionsStore = {
    W: 50,
    H: 50
};

const defaultColorStore: ColorStore = {
    background: {H: 307, S: 87, B: 36},
    fill: {H: 157, S: 88, B: 36},
    firstLineFill: {H: 37, S: 88, B: 36}
};

const defaultRule = 22;

const defaultDenerationControlsStore: GenerationControlsStore = {
    lastReset: 0,
    enableAutomaticGeneration: false,
    interval: 1000
};

const defaultGenerationSettingsStore: GenerationSettingsStore = {
    W: false,
    H: false,
    rule: true,
    firstLine: true,
    color: true,
    firstLineDensity: 50
};

export {
    defaultAnimationStore,
    defaultAutomatonDimensionsStore,
    defaultColorStore,
    defaultDenerationControlsStore,
    defaultGenerationSettingsStore,
    defaultRule
};
