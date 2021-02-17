<script>
import { addTech } from "../data-service";
import Header from "../Header.svelte";
import { technologies } from '../stores';
import { goto } from "@sveltech/routify";
let name;
let techNames = [];
const unsub = technologies.subscribe(data => techNames = data.map(tech => tech.name))

function onKeyDown(ev) {
        if(ev.keyCode === 27) {
            onCancel();
        }

        if(ev.keyCode === 13 && !document.getElementById('save-btn').disabled) {
            onSave();
        }
    }

function onCancel() {
    $goto('/');
}
async function onSave() {
    await addTech(name).then($goto('/'));
}
</script>

<style>
    .container {
        text-align: center;
        margin-top: 3rem;
    }

    button {
        width: 8rem;
        margin-top: 1rem;
    }

    input {
        width: 30rem;
    }

    #save-btn {
        background-color: #58355E;
        color: #E6E8E6;
        margin-right: 1rem;
    }

</style>

<Header title="Add New Technology" />

<div class="container"  on:keydown="{onKeyDown}">
    <input bind:value="{name}" placeholder="Name" autofocus>
    <div class="btns">
        <button on:click="{onSave}" id="save-btn" disabled="{!name || techNames.includes(name)}">Save</button>
        <button on:click="{onCancel}" id="cancel-btn">Cancel</button>
    </div>
</div>