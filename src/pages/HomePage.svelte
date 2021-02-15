<script>
import router from "page";
import Technology from "../Technology.svelte";
import { technologies, selectedTechIndex } from "../stores";
import { editTech, deleteTech } from "../data-service";

let techs = [];
export let params;

const unsub = technologies.subscribe(data => techs = data);

function onTechClick(i, tech) {
	selectedTechIndex.set(i);
	router(`/techPage/${tech.id}`);
}
async function onTechEdit({detail}) {
	await editTech(detail.id, detail.name);
}
async function onTechDelete(id) {
	await deleteTech(id);
}

function onaddTech() {
	router('/newTech');
}

</script>
	<div class="header">
	<h2>Technologies</h2>
	<button id="add-btn" on:click="{onaddTech}">Add New</button>
</div>
{#if techs.length == 0}
	Loading...
	{:else}
	<div class="techs">
		<ul>
	{#each techs as tech, i }
	<li>
		<Technology on:tech={onTechClick(i, tech)} on:edit={onTechEdit} on:delete={onTechDelete(tech.id)} name="{tech.name}" id="{tech.id}" nOfPosts="{tech.posts.length}"/>
	</li>	
{/each}
</ul>
</div>
{/if}


<style>
	ul {
		list-style: none;
	}
	.techs {
		margin: 40px 0;
	}

	h2 {
		text-align: center;
		font-size: 35px;
	}

	.header {
		position: relative;
		/* justify-content: center; */
	}

	#add-btn {
		position: absolute;
		right: 50px;
		top: 0;
	}
</style>