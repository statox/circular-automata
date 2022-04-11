import type {Automaton, Line, Rules} from '../types/automaton.types';
import {generateRulesObject, nextGeneration} from './rules-services';

function generateAutomaton(ruleNumber: number, W: number, H: number): Automaton {
    const cells: Line[] = [];
    const rules = generateRulesObject(ruleNumber);

    for (let _ = 0; _ < 1; _++) {
        const s = [];
        for (let __ = 0; __ < W; __++) {
            s.push(false);
        }
        cells.push(s);
    }
    cells[0][Math.floor(W / 2)] = true;

    for (let _ = 0; _ < H; _++) {
        generateNewLine(cells, rules);
    }
    return {cells, rules, ruleNumber, W, H};
}

function generateNewLine(A: Line[], rules: Rules) {
    const newLine = nextGeneration(A[A.length - 1], rules);
    A.push(newLine);
}

function turnIntoPyramidAutomata(A: Line[]) {
    const M = Math.floor(A[0].length / 2);
    for (let y = 0; y < A.length; y++) {
        for (let x = 0; x < Math.min(y, A[0].length); x++) {
            A[y][M + x] = true;
            A[y][M - x] = true;
        }
    }
}

export {generateAutomaton};
