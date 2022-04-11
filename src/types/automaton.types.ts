type Automaton = {
    cells: Line[];
    rules: Rules;
    ruleNumber: number;
    W: number;
    H: number;
};
type Line = boolean[];
type Rules = {
    [key: string]: boolean;
};

export type {Automaton, Line, Rules};
