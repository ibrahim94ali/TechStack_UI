<script>
import NewPost from "../NewPost.svelte";
import Post from "../Post.svelte";
import { technologies, selectedTechIndex } from "../stores";
import { editPost, deletePost } from '../data-service';

    let title;
    let posts = [];
    export let params;

    let index;

    const unsubIndex = selectedTechIndex.subscribe(i => index = i);

    const unsbubTechs = technologies.subscribe(techs => {
        title = techs[index].name;
        posts = techs[index].posts
    })

    async function onPostEdit({detail}) {
    const { title, owner, link, id} = detail;
    const now = new Date().getTime();
	await editPost(title, owner, link, now, id);
}
async function onPostDelete(id) {
	await deletePost(id);
}

</script>

<style>
    h2 {
        text-align: center;
        font-size: 35px;
        font-weight: bold;
        letter-spacing: 1px;
        color: #58355E;
    }
    ul {
        list-style: none;
    }
    .no-posts {
        text-align: center;
        font-size: 20px;
    }
</style>


<h2>{title}</h2>
<NewPost techId={params.id}/>
{#if posts.length == 0}
    <p class="no-posts"> No posts yet... </p>
    {:else}
    <div class="posts-container">
        <ul>
            {#each posts as post}
            <li>
                <Post {...post} on:edit={onPostEdit} on:delete={onPostDelete(post.id)}/>
            </li>
            {/each}
        </ul>
    </div>    
{/if}


