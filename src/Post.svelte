<script>
    import { createEventDispatcher } from 'svelte';
    import PostForm from './PostForm.svelte';
    const dispatch = createEventDispatcher();
    export let title;
    export let owner;
    export let link;
    export let date;
    export let id;

    let isEditing = false;

    function onPostDelete() {
        dispatch('delete');
    }
</script>

<style>
    .post-container {
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
        box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.3);
    }

    .meta-container {
        display: flex;
        flex-direction: column;
        font-size: 1.6rem;
    }
    h2 {
        font-size: 1.8rem;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 600;
        font-style: italic;
        max-width: 50rem;
        flex: 2;
    }

    p {
        font-weight: 300;
        margin: 0;
    }

    span {
        font-weight: 400;
        margin-left: 10px;
    }

    button {
        width: 8rem;
        font-size: 1.4rem;
    }

    #btn-del {
        margin-left: 10px;
        background-color: #B43333;
        color: #E6E8E6;
    }
    #btn-edit {
        background-color: #E6E8E6;
        color: #58355E;
    }
</style>

    {#if !isEditing}
    <div class="post-container">
    <h2>
        <a href={link} target="_blank">{title}</a>
    </h2> 
    <div class="meta-container">
        <p>By: <span>{owner}</span> </p>
        <p>Date: <span>{new Date(+date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit'})}</span></p>
    </div> 
    <div class="btns-container">
        <button  id="btn-edit" on:click={() => isEditing = true}> Edit </button>
        <button id="btn-del"  on:click={onPostDelete}> Delete </button>
    </div>
</div>

    {:else}
        <PostForm techId={id} isEditing {title} {owner} {link} on:cancel={() => isEditing = false}/>
    {/if}

