import type {Automaton} from '../types/automaton.types';
import type {GenerationSettingsStore, ColorStore} from '../types/stores.types';
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

    if (generationSettings.rule) {
        ruleNumber = Math.floor(Math.random() * 256);
    }

    if (generationSettings.firstLine || W !== firstLine.length) {
        firstLine = [];
        let atLeastOne = false;
        for (let i = 0; i < W; i++) {
            const alive = Math.random() < generationSettings.firstLineDensity / 100;
            firstLine.push(alive);
            if (alive) {
                atLeastOne = true;
            }
        }
        if (!atLeastOne) {
            firstLine[Math.floor(firstLine.length / 2)] = true;
        }
    }

    return generateAutomaton({ruleNumber, W, H, firstLine});
}

function getRandomColors(): ColorStore {
    const background = {H: 0, S: 0, B: 0};
    const fill = {H: 0, S: 0, B: 0};
    const firstLineFill = {H: 0, S: 0, B: 0};

    background.H = Math.random() * 360;
    fill.H = (background.H + 360 / 3) % 360;
    firstLineFill.H = (background.H - 360 / 3) % 360;

    background.S = 40 + Math.floor(Math.random() * 60);
    fill.S = 40 + Math.floor(Math.random() * 60);
    firstLineFill.S = 40 + Math.floor(Math.random() * 60);

    background.B = 40;
    fill.B = 40;
    firstLineFill.B = 40;

    return {background, fill, firstLineFill};
}

export {getRandomAutomaton, getRandomColors};
