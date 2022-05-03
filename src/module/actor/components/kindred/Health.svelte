<script lang="ts">
    export let healthValue: number;
    </script>
    
    <div class="health-box">
        <h3>Health</h3>
    <ul>
        {#each Array(15) as i,index}
        {#if healthValue >= index + 1}
        <li class="health-fill"></li>
        {:else}
        <li></li>
        {/if}
        {/each}
    </ul>
    </div>
    
    <style>
        h3 {
            display: flex;
            align-self: center;
        }
        li {
            border: solid black;
            width: 1.5em;
            height: 1.5em;
            margin-right: 0.1em;
            margin-left: 0.1em;
        }
        ul {
            display: flex;
            list-style-type: none;
            margin-top: 0;
        }
        .health-box {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
        }
        .health-fill {
            background-color: red;
        }
    </style>
    
    