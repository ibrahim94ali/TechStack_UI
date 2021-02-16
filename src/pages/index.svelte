<script>
import Technology from "../Technology.svelte";
import { technologies } from "../stores";
import { editTech, deleteTech } from "../data-service";
import { url } from "@sveltech/routify";

let techs = [];
const unsub = technologies.subscribe(data => techs = data);

async function onTechEdit({detail}) {
	await editTech(detail.id, detail.name);
}
async function onTechDelete(id) {
	await deleteTech(id);
}

</script>

<style>
	ul {
		list-style: none;
	}
	.techs {
		margin: 40px 0;
	}

	:global(a) {
		color: unset !important;
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
	<div class="header">
	<h2>Technologies</h2>
	<a href="{$url('addTech')}">
	<button id="add-btn">Add New</button>
	</a>
</div>
{#if techs.length == 0}
	Loading...
	{:else}
	<div class="techs">
		<ul>
	{#each techs as tech, i }
	<li>
		<Technology on:edit={onTechEdit} on:delete={onTechDelete(tech.id)} name="{tech.name}" id="{tech.id}" nOfPosts="{tech.posts.length}"/>
	</li>	
{/each}
</ul>
</div>
{/if}