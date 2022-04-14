import type {Color} from './data.types';

type AnimationStore = {
    play: boolean;
    fps: number;
};

type ColorStore = {
    background: Color;
    fill: Color;
    firstLineFill: Color;
};

export type {AnimationStore};
