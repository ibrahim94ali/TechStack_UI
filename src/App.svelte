<script>
import router from "page";
import HomePage from "./pages/HomePage.svelte";
import TechPage from "./pages/TechPage.svelte";
import Toolbar from "./Toolbar.svelte";
import { onMount } from "svelte";
import { getTechs } from "./data-service";
import AddNewTech from "./pages/AddNewTech.svelte";

let page;
let params = {}
onMount(async () => {
		await getTechs();
});

router('/', () => page = HomePage);
router('/newTech', () => page = AddNewTech);
router('/techPage/:id', (ctx, next) => {
	params = ctx.params;
	page = TechPage;
	// next();
});

router.start();

function goHome() {
	router('/');
}

</script>

<Toolbar on:click="{goHome}"/>

<svelte:component this={page} {params}/>