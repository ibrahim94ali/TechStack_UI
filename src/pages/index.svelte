<script>
import Technology from "../Technology.svelte";
import { technologies } from "../stores";
import { editTech, deleteTech } from "../data-service";
import Header from "../Header.svelte";

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
		padding: 3rem 4rem;
	}
	.tech-cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
		grid-gap: 6rem;
	}
	
</style>
<Header title="Technologies" isAddBtn />
{#if techs.length == 0}
	Loading...
	{:else}
	<div class="techs">
		<ul class="tech-cards">
	{#each techs as tech}
	<li>
		<Technology on:edit={onTechEdit} on:delete={onTechDelete(tech.id)} name="{tech.name}" id="{tech.id}" nOfPosts="{tech.posts.length}"/>
	</li>	
{/each}
</ul>
</div>
{/if}