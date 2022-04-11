<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let data: AppData;

    const increaseRuleNumber = () => {
        data.ruleNumber = data.ruleNumber+1;
        dispatch('updateData', data)
    }
    const decreaseRuleNumber = () => {
        data.ruleNumber = data.ruleNumber-1;
        dispatch('updateData', data)
    }

    const increaseWidth = () => {
        data.W = data.W+1;
        dispatch('updateData')
    }
    const decreaseWidth = () => {
        data.W = data.W-1;
        dispatch('updateData')
    }


    const increaseHeight = () => {
        data.H = data.H+1;
        dispatch('updateData')
    }
    const decreaseHeight = () => {
        data.H = data.H-1;
        dispatch('updateData')
    }

    const toggleViewType = () => {
        data.type = data.type === 'square' ? 'circle' : 'square';
        dispatch('updateData')
    }
</script>

<main>
    <div>
        <button on:click={toggleViewType}>Toggle view</button>
        <span>{data.type}</span>
    </div>
    <div>
        <button on:click={decreaseRuleNumber}>Decrement rule number</button>
        <button on:click={increaseRuleNumber}>Increment rule number</button>
        <span>rule number: {data.ruleNumber}</span>
    </div>
    <div>
        <button on:click={decreaseWidth}>Decrement lines width</button>
        <button on:click={increaseWidth}>Increment lines width</button>
        <span>rule number: {data.W}</span>
    </div>
    <div>
        <button on:click={decreaseHeight}>Decrement number of lines</button>
        <button on:click={increaseHeight}>Increment number of lines</button>
        <span>rule number: {data.H}</span>
    </div>
</main>
