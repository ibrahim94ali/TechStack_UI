<script>
import { addPost } from "./data-service";
    let title, link, owner;
    export let techId;

    async function onSavePost() {
        const date = +(new Date);
        await addPost(title, owner, link, techId , date).then(() => {
            title = '';
            link = '';
            owner = '';
        })
    }
</script>

<style>

    .container {
        text-align: center;
    }

    input {
        width: 800px;
        font-size: 18px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #save-btn {
        background-color: #58355E;
        color: #e6e8e6;
    }

</style>

<div class="container">
    <form on:submit|preventDefault="{onSavePost}">
    <input placeholder="Post title" bind:value="{title}">
    <input placeholder="Created by" bind:value="{owner}">
    <input placeholder="Link" bind:value="{link}">
    </form>

    <button id="save-btn" type="submit" on:click="{onSavePost}" disabled="{!title || !link || !owner}">Save Post</button>

</div>