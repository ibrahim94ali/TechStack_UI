import { writable } from 'svelte/store';

export let technologies = writable([]);
export let selectedTechIndex = writable(null);