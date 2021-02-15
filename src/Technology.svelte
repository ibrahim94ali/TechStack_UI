<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let name;
    export let id;
    export let nOfPosts;

    let isEditing = false;
    let newName = name;

    function onKeyDown(ev) {
        if(ev.keyCode === 27) {
            onCancelEditing();
        }

        if(ev.keyCode === 13 && !document.getElementById('btn-save').disabled) {
            onSaveEditing();
        }
    }

    function onCancelEditing() {
        isEditing = false;
        newName = name;
    }

    function onTechClick() {
        dispatch('tech');
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
        width: 70%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        padding: 20px 30px;
        margin-top: 20px;
        background-color: #3F403F;
        color: #E6E8E6;
    }
    .title {
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
    }
    .posts {
        font-size: 20px;
        margin-left: 20px;
    }
    .btns {
        margin-left: auto;
        display: flex;
    }
    :global(button) {
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: #E6E8E6;
        color: #3F403F;
    }

    #btn-del {
        margin-left: 10px;
        background-color: #ec4c4c;
        color: #E6E8E6;
        width: 60px;
    }
    #btn-save {
        margin-right: 10px;
        background-color: #ec4c4c;
        color: #E6E8E6;
        width: 60px;
    }
    #btn-edit-cancel {
        background-color: #E6E8E6;
        color: #3F403F;
        width: 60px;
    }
    
    :global(button:disabled) {
        background-color: gray !important;
        cursor:default !important;
    }
</style>

<div class="container" on:keydown="{onKeyDown}">
    {#if !isEditing}
        <span on:click="{onTechClick}" class="title">{name}</span>
        {:else}
        <input id="new-name" bind:value="{newName}" autofocus>
        {/if}
    <span class="posts"> #{nOfPosts} Posts</span>
    <div class="btns">
        {#if !isEditing}
        <button id="btn-edit-cancel" on:click={onTechEdit}>Edit</button>
        <button id="btn-del" on:click={onTechDelete}>Delete</button>
        {:else}
        <button id="btn-save" on:click={onSaveEditing} disabled={!newName || newName === name}>Save</button>
        <button id="btn-edit-cancel" on:click={onCancelEditing}>Cancel</button>
        {/if}
    </div>

</div>