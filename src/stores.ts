import {writable} from 'svelte/store';
import {
    defaultAnimationStore,
    defaultAutomatonDimensionsStore,
    defaultColorStore,
    defaultDenerationControlsStore,
    defaultGenerationSettingsStore,
    defaultRule,
    defaultViewStore
} from './defaults';
import type {Automaton} from './types/automaton.types';
import type {
    AnimationStore,
    AutomatonDimensionsStore,
    AutomatonStore,
    ColorStore,
    GenerationControlsStore,
    GenerationSettingsStore
} from './types/stores.types';

const animationStore = writable(defaultAnimationStore);
const automatonDimensionsStore = writable(defaultAutomatonDimensionsStore);
const colorStore = writable(defaultColorStore);
const generationControlsStore = writable(defaultDenerationControlsStore);
const generationSettingsStore = writable(defaultGenerationSettingsStore);
const rule = writable(defaultRule);
const viewStore = writable(defaultViewStore);

const automatonStore = writable({
    A: null as Automaton
} as AutomatonStore);

export {
    animationStore,
    colorStore,
    rule,
    automatonStore,
    automatonDimensionsStore,
    generationSettingsStore,
    generationControlsStore,
    viewStore
};
