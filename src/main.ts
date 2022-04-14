import App from './App.svelte';
import {get} from 'svelte/store';
import {
    animationStore,
    automatonStore,
    automatonDimensionsStore,
    colorStore,
    generationControlsStore,
    rule
} from './stores';
import {animationStep, generateAutomaton} from './services/automaton-services';
import {getRandomColors, updateAppWithRandomAutomaton} from './services/generation-services';

const app = new App({
    target: document.body,
    props: {}
});

// Initialize the automaton in the store then use it in updateAppWithRandomAutomaton()
// to make a random first state
const newAutomaton = generateAutomaton({ruleNumber: 110, W: 50, H: 50});
automatonStore.set({A: newAutomaton});
updateAppWithRandomAutomaton();
colorStore.set(getRandomColors());

/*
 * Reactive updates of the application state when controls are modified
 */

rule.subscribe((value) => {
    const currentAutomaton = get(automatonStore).A;
    const newAutomaton = generateAutomaton({
        ruleNumber: value,
        W: currentAutomaton.W,
        H: currentAutomaton.H,
        firstLine: [...currentAutomaton.cells[0]]
    });
    automatonStore.set({A: newAutomaton});
});

automatonDimensionsStore.subscribe((newSettings) => {
    const {W, H} = newSettings;

    const currentAutomaton = get(automatonStore).A;
    const firstLine = [...currentAutomaton.cells[0]];

    let cnt = 0;
    while (W < firstLine.length) {
        if (cnt % 2) {
            firstLine.pop();
        } else {
            firstLine.shift();
        }
        cnt++;
    }
    while (W > firstLine.length) {
        if (cnt % 2) {
            firstLine.push(false);
        } else {
            firstLine.unshift(false);
        }
        cnt++;
    }

    const newAutomaton = generateAutomaton({ruleNumber: currentAutomaton.ruleNumber, W, H, firstLine});
    automatonStore.set({A: newAutomaton});
});

let updateTimer: NodeJS.Timer;
generationControlsStore.subscribe((newControls) => {
    if (updateTimer) {
        clearInterval(updateTimer);
    }
    if (newControls.enableAutomaticGeneration) {
        updateTimer = setInterval(updateAppWithRandomAutomaton, newControls.interval);
    }
});

let animationTimer: NodeJS.Timer;
animationStore.subscribe((newControls) => {
    if (animationTimer) {
        clearInterval(animationTimer);
    }
    if (newControls.play) {
        if (newControls.fps === 0) {
            throw new Error("Can't set a fps of 0");
        }
        const interval = 1000 / newControls.fps;
        animationTimer = setInterval(() => {
            animationStep(get(automatonStore).A);
        }, interval);
    }
});

export default app;
