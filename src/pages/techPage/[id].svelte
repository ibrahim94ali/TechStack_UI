<script>
import Post from "../../Post.svelte";
import { technologies } from "../../stores";
import { editPost, deletePost } from '../../data-service';
import Header from "../../Header.svelte";
import PostForm from "../../PostForm.svelte";

export let id;

let title;
let posts = [];
let index;

const unsbubTechs = technologies.subscribe(techs => {
    if(techs.length) {
        index = techs.findIndex(tech => tech.id === id);
        title = techs[index].name;
        posts = techs[index].posts
    };
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
    ul {
        list-style: none;
        padding: 0;
    }
    .no-posts {
        text-align: center;
        font-size: 1.6rem;
        color: #e6e8e6;
        margin-top: 2rem;
    }
    .posts-container {
        padding: 2rem;
    }
    #new-post {
        margin-bottom: 5rem;
        box-shadow: none;
    }
</style>
    
    
  <Header {title} posts={posts.length}/>
  <div class="posts-container">
      <div id="new-post">
        <PostForm techId={id} />
    </div>
    {#if posts.length == 0}
        <p class="no-posts"> No posts yet... </p>
        {:else}
            <ul>
                {#each posts as post}
                <li>
                    <Post {...post} on:edit={onPostEdit} on:delete={onPostDelete(post.id)}/>
                </li>
                {/each}
            </ul> 
    {/if}
</div>   
    
    
    