<script>
    import { addPost, editPost } from "./data-service";
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';

    const dispatch = createEventDispatcher();
    export let title = '', link = '', owner = '', techId;

    let oldTitle = title;
    let oldLink = link;
    let oldOwner = owner;

    export let isEditing = false;
    let isValidForm = false;

    async function onSavePost() {
        const date = +(new Date);
        await addPost(title, owner, link, techId , date).then(() => {
            title = '';
            link = '';
            owner = '';
        })
    }

    async function onEditPost() {
        const date = +(new Date);
        await editPost(title, owner, link, date, techId).then(() => {
            dispatch('cancel');
        });
    }

    function validator() {
    if (!title || !owner || !link || (title === oldTitle && owner === oldOwner && link === oldLink)) {
        isValidForm = false;
    } else {
        isValidForm = true;
    }
    }

    function onCancelEditing() {
        dispatch('cancel');
    }

    </script>
    
    <style>
        .container {
            background-color: #E6E8E6;
            padding: 2rem;
            color: #58355E;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 70%;
            height: 7rem;
            margin: 2rem auto;
            border-radius: 2rem;
            transition: opacity 0.4s;
        }
    
        input {
            width: 35rem;
        }

        .meta-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 1.6rem;
        }

        .btn-container {
            margin-left: 1rem;
        }

        .input-group {
            display: flex;
            align-items: center;
        }

        .title-container {
            max-width: 50rem;
        }

        .title {
            flex: 2;
        }

        label {
            margin-right: 1rem;
            font-weight: 300;
        }

        #save-btn {
            background-color: #58355E;
            color: #e6e8e6;
            margin-right: 1rem;
        }

        .empty-post {
            opacity: 0.5;
        }
    
    </style>
    
    <form class="container"  on:submit|preventDefault={isEditing ? onEditPost : onSavePost} on:input="{validator}" class:empty-post={!isEditing && !title && !owner && !link} in:fade>
            <div class="input-group title-container" class:title={isEditing}>
                <label for="title">Title:</label>
                <input placeholder="{isEditing ? "Post title" : "New Post Title"}" id="title" bind:value="{title}" autocomplete="off" autofocus="{isEditing}">
            </div>
            <div class="meta-container">
                <div class="input-group">
                    <label for="owner">By:</label>
                    <input placeholder="Created by" id="owner" bind:value="{owner}" autocomplete="off">
                </div>
                <div class="input-group">
                    <label for="link">Link:</label>
                    <input placeholder="Link" id="link" bind:value="{link}" autocomplete="off">
                </div>
            </div> 

            {#if !isEditing}
        
            <button id="save-btn" type="submit" disabled="{!title || !link || !owner}">Save Post</button>
            {:else }
            <div class="btn-container">
                <button id="save-btn" type="submit" disabled="{!isValidForm}">Update</button>
                <button id="cancel-btn" type="button" on:click="{onCancelEditing}" >Cancel</button>
            </div>
            {/if}
        </form>