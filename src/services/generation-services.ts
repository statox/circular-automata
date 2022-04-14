import type {Automaton} from '../types/automaton.types';
import type {GenerationSettingsStore} from '../types/stores.types';
import {generateAutomaton} from './automaton-services';

const MAX_W = 600;
const MAX_H = 600;

function getRandomAutomaton(params: {currentAutomaton: Automaton; generationSettings: GenerationSettingsStore}) {
    const {currentAutomaton, generationSettings} = params;
    let W = currentAutomaton.W;
    let H = currentAutomaton.H;
    let firstLine = [...currentAutomaton.cells[0]];
    let ruleNumber = currentAutomaton.ruleNumber;

    if (generationSettings.W) {
        W = Math.floor(Math.random() * MAX_W);
        firstLine = null; // Force regenerate the first line
    }
    if (generationSettings.H) {
        H = Math.floor(Math.random() * MAX_H);
    }

    return generateAutomaton({ruleNumber, W, H, firstLine});
}

export {getRandomAutomaton};
