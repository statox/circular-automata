import type {Automaton} from './automaton.types';

type Color = {
    H: number;
    S: number;
    B: number;
};

type AppData = {
    firstLine: boolean[];
};

export type {AppData, Color};
