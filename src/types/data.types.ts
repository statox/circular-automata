import type {Automaton} from './automaton.types';

type Color = {
    H: number;
    S: number;
    B: number;
};

type AppData = {
    ruleNumber: number;
    W: number;
    H: number;
    firstLine: boolean[];
};

export type {AppData, Color};
