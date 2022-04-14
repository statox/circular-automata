<script lang="ts">
    import {viewStore} from '../../stores';
    import type {SimulationType} from '../../types/simulation.types';
    let viewOptions: SimulationType[] = ['square', 'circle', 'circle_inv'];

    const toggleSetting = (option) => {
        console.log($viewStore);
        $viewStore[option] = !$viewStore[option];
        console.log($viewStore);
    };
</script>

<main>
    <div class="center controlSectionDiv">
        <h3>Views controls</h3>
        <div>
            <p>Select views to show</p>
            <table style="width: 100%">
                <tr>
                    {#each viewOptions as option}
                        <td>
                            <button
                                style="width: 100%"
                                class:enabled={$viewStore[option]}
                                on:click ={() => toggleSetting(option)}>
                                {option}
                            </button>
                        </td>
                    {/each}
                </tr>
            </table>
        </div>
    </div>
</main>

<style src="./Controls.css"></style>
