import App from './App.svelte';
import {writable, get} from 'svelte/store';
import {automatonStore, automatonDimensionsStore, rule} from './stores';
import {generateAutomaton} from './services/automaton-services';

const app = new App({
    target: document.body,
    props: {}
});

const newAutomaton = generateAutomaton({ruleNumber: 110, W: 50, H: 50});
automatonStore.set({A: newAutomaton});

rule.subscribe((value) => {
    const newAutomaton = generateAutomaton({ruleNumber: value, W: 50, H: 50});
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

export default app;
