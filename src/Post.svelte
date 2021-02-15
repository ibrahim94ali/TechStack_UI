<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let title;
    export let owner;
    export let link;
    export let date;
    export let id;

    let isEditing = false;
    let newTitle = title;
    let newOwner = owner;
    let newLink = link;
    let isValidForm = false;

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
        newTitle = title;
        newOwner = owner;
        newLink = link;
    }

    function onPostEdit() {
        isEditing = true;
    }

    function onSaveEditing() {
        isEditing = false;
        dispatch('edit', {title: newTitle, owner: newOwner, link: newLink, id: id});
    }
    function onPostDelete() {
        dispatch('delete');
    }

    function validator() {
        if (!newTitle || !newOwner || !newLink || (title === newTitle && owner === newOwner && link === newLink)) {
            isValidForm = false;
        } else {
            isValidForm = true;
        }
    }
</script>

<style>

    .post-container {
        background-color: #58355E;
        padding: 20px;
        color: #E6E8E6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70%;
        margin: 0 auto;
        margin-top: 20px;

    }
    .meta-container {
        display: flex;
        flex-direction: column;
    }
    h5 {
        font-size: 22px;
    }
    a {
        color: #E6E8E6;
    }
    span {
        font-weight: 700;
        margin-left: 10px;
    }

    input {
        width: 300px;
    }

    label {
        margin: 0 10px;
    }

    form {
        display: flex;
        flex: 2;
        justify-content: center;
        align-items: center;
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

</style>

<div class="post-container" on:keydown="{onKeyDown}">
    {#if !isEditing}
    <div class="meta-container">
        <p>By: <span>{owner}</span> </p>
        <p>Date: <span>{new Date(+date).toLocaleDateString()}</span></p>
    </div>
        <h5>
        <a href={link} target="_blank">{title}</a>
        </h5>  
        {:else}
        <form on:submit|preventDefault="{onSaveEditing}" on:input="{validator}">
            <label for="owner">By:</label>
            <input id="owner" bind:value="{newOwner}">
            <label for="title">Title:</label>
            <input id="title" bind:value="{newTitle}">
            <label for="link">Link:</label>
            <input id="link" bind:value="{newLink}">
        </form>
        {/if}
    <div class="btns-container">
        {#if !isEditing}
        <button  id="btn-edit-cancel" on:click={onPostEdit}> Edit </button>
        <button id="btn-del"  on:click={onPostDelete}> Delete </button>
        {:else}
        <button id="btn-save" on:click={onSaveEditing} disabled="{!isValidForm}"> Save </button>
        <button id="btn-edit-cancel" on:click={onCancelEditing}> Cancel </button>
        {/if}

    </div>
</div>
