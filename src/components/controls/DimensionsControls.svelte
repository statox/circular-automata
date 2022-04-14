<script lang="ts">
    import {automatonDimensionsStore} from '../../stores';
    import {AUTOMATON_MAX_DIMENSIONS} from '../../defaults';

    const {W: MAX_W, H: MAX_H} = AUTOMATON_MAX_DIMENSIONS;
</script>

<main>
    <div class="center controlSectionDiv">
        <h3>Dimensions controls</h3>
        <table class="full-width">
            <tr>
                <td>
                    <span>
                        Line width: {$automatonDimensionsStore.W}
                        <br/>
                        <input class="width-90" type=range bind:value={$automatonDimensionsStore.W} min=0 max={MAX_W}>
                    </span>
                </td>
                <td>
                    <span>
                        Number of lines: {$automatonDimensionsStore.H}
                        <br/>
                        <input class="width-90" type=range bind:value={$automatonDimensionsStore.H} min=0 max={MAX_H}>
                    </span>
                </td>
            </tr>
        </table>
    </div>
</main>
