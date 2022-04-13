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
    };
};

export type {AppData};
