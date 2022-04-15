<script lang="ts">
    import {viewStore} from '../../stores';
    import type {SimulationType} from '../../types/simulation.types';
    let viewOptions: SimulationType[] = ['square', 'circle', 'circle_inv', 'webgl'];

    const toggleSetting = (option: SimulationType) => {
        $viewStore[option] = !$viewStore[option];
    };
</script>

<main>
    <div class="center controlSectionDiv">
        <details open>
            <summary>
                <h3>Views controls</h3>
            </summary>
            <div>
                <p>Select views to show</p>
                <table class="full-width">
                    <tr>
                        {#each viewOptions as option}
                            <td>
                                <button
                                    class='width-90'
                                    class:enabled={$viewStore[option]}
                                    on:click ={() => toggleSetting(option)}>
                                    {option}
                                </button>
                            </td>
                        {/each}
                    </tr>
                </table>
            </div>
        </details>
    </div>
</main>
