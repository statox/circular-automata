import App from './App.svelte';
import {automatonStore, rule} from './stores';
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

export default app;
