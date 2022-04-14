import {writable} from 'svelte/store';

const animationStore = writable({
    play: true,
    fps: 20
});

export {animationStore};
