<script>
import { Router } from "@sveltech/routify";
import { routes } from "@sveltech/routify/tmp/routes";
import { onMount } from "svelte";
import { getTechs } from "./data-service";

onMount(async () => {
		await getTechs();
});

</script>

<Router {routes} />
