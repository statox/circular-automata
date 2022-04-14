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
    colors?: {
        background: Color;
        fill: Color;
        firstLineFill: Color;
    };
    automaton: Automaton | null;
};

export type {AppData};
