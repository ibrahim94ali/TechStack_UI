<script>
import Technology from "../Technology.svelte";
import { technologies } from "../stores";
import { editTech, deleteTech } from "../data-service";
import Header from "../Header.svelte";
import { fade } from 'svelte/transition';

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

	p {
		font-size: 2rem;
		text-align: center;
		color: #e6e8e6;
		margin-top: 2rem;
	}
	
</style>
<Header title="Technologies" isAddBtn />
{#if techs.length == 0}
	<p>Loading...</p>
	{:else}
	<div class="techs">
		<ul class="tech-cards">
	{#each techs as tech, i}
	<li in:fade={{duration: 400, delay: i * 50 }}>
		<Technology on:edit={onTechEdit} on:delete={onTechDelete(tech.id)} name="{tech.name}" id="{tech.id}" nOfPosts="{tech.posts.length}"/>
	</li>	
{/each}
</ul>
</div>
{/if}