<script>
    import { url } from "@sveltech/routify";
	export let title = '';
	export let isAddBtn = false;
	export let posts = null;
</script>

<style>
	.header {
	position: relative;
	background-color: #58355E;
	height: 7rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	}	

    h2 {
        color: #e6e8e6;
        margin: 0;
    }

	p {
		color: #E6E8E6;
		font-size: 1.6rem;
	}

	#add-btn {
		position: absolute;
		right: 8rem;
		top: 50%;
        transform: translate(0, -50%);
		width: 14rem;
		font-size: 1.6rem;
		color: #58355E;
	}
</style>

<div class="header">
	<h2>{title}</h2>
	<a href="{$url('addTech')}">
	{#if isAddBtn}
		<button id="add-btn">Add New Tech</button>
	{/if}
	</a>
	{#if posts}
		<p>#{posts} Posts</p>
	{/if}
</div>