import type {Line, Rules} from '../types/automaton.types';

function generateRulesObject(inputRule: number): Rules {
    const ruleAsString = inputRule.toString(2).padStart(8, '0');

    const rules: Rules = {};
    for (let i = 0; i < 8; i++) {
        const k = i.toString(2).padStart(3, '0');
        rules[k] = ruleAsString[ruleAsString.length - 1 - i] === '1';
    }
    return rules;
}

function nextGeneration(prev: Line, rules: Rules): Line {
    let n: Line = [];

    for (let i = 0; i < prev.length; i++) {
        const currentCell = prev[i];
        const prevCell = prev[i - 1 < 0 ? prev.length - i - 1 : i - 1];
        const nextCell = prev[(i + 1) % prev.length];
        const state = [prevCell, currentCell, nextCell].map((c) => (c ? '1' : '0')).join('');
        n.push(rules[state]);
    }

    return n;
}

export {generateRulesObject, nextGeneration};
