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

const animationStore = writable(defaultAnimationStore);
const automatonDimensionsStore = writable(defaultAutomatonDimensionsStore);
const automatonStore = writable(null as Automaton);
const colorStore = writable(defaultColorStore);
const generationControlsStore = writable(defaultDenerationControlsStore);
const generationSettingsStore = writable(defaultGenerationSettingsStore);
const rule = writable(defaultRule);
const viewStore = writable(defaultViewStore);

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
