<script>
import { url } from "@sveltech/routify";
import { createEventDispatcher } from 'svelte';
import { fly } from 'svelte/transition';
const dispatch = createEventDispatcher();
export let name;
export let id;
export let nOfPosts;

let isEditing = false;
let newName = name;

function onCancelEditing() {
    isEditing = false;
    newName = name;
}

function onTechEdit() {
    isEditing = true;
}

function onSaveEditing() {
    isEditing = false;
    dispatch('edit', {name: newName, id: id});
}
function onTechDelete() {
    dispatch('delete');
}
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 15rem;
        padding: 2rem 3rem;
        background-color: #E6E8E6;
        color: #58355E;
        border-radius: 2rem;
        box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.3);
    }
    .title {
        font-size: 3rem;
        font-weight: bold;
        cursor: pointer;
    }
    .posts {
        font-size: 1.6rem;
        margin-left: 2rem;
    }
    .btns {
        display: flex;
        margin-top: 1rem;
    }

    button {
        width: 8rem;
        font-size: 1.4rem;
    }

    .post-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #58355E;
        width: 100%;
    }

    #btn-del-tech {
        margin-left: 10px;
        background-color: #B43333;
        color: #E6E8E6;
    }
    #btn-save-tech {
        margin-right: 1rem;
        background-color: #58355E;
        color: #E6E8E6;
    }
    #btn-cancel-tech {
        background-color: #E6E8E6;
        color: #58355E;
    }
</style>

<div class="container" transition:fly|local="{{y: 100, duration: 500}}">
    <div class="post-header">
        {#if !isEditing}
            <a href="{$url(`techPage/${id}`)}">
                <h2 class="title">{name}</h2>
            </a>
            {:else}
            <form on:submit|preventDefault="{onSaveEditing}">
                <input id="new-name" bind:value="{newName}" autofocus autocomplete="off">
            </form>
            {/if}
        <span class="posts"> #{nOfPosts} Posts</span>
    </div>
    <div class="btns">
        {#if !isEditing}
        <button id="btn-edit-tech" on:click={onTechEdit}>Edit</button>
        <button id="btn-del-tech" on:click={onTechDelete}>Delete</button>
        {:else}
        <button id="btn-save-tech" type="submit" disabled={!newName || newName === name}>Save</button>
        <button id="btn-cancel-tech" type="button" on:click={onCancelEditing}>Cancel</button>
        {/if}
    </div>

</div>