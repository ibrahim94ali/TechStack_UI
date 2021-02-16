<script>
import { addTech } from "../data-service";
import { technologies } from '../stores';
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
    // router('/');
}
async function onSave() {
    // await addTech(name).then(router('/'));
}
</script>

<style>
    .container {
        text-align: center;
    }
    h2 {
        font-size: 30px;
    }

    #save-btn {
        width: 60px;
        background-color: #58355E;
        color: #E6E8E6;
    }
    #cancel-btn {
        width: 60px;
    }

</style>

<div class="container"  on:keydown="{onKeyDown}">
<h2>Add New Technology Form</h2>

<input id=newTechName bind:value="{name}" placeholder="Name" autofocus>
<div>
<button on:click="{onSave}" id="save-btn" disabled="{!name || techNames.includes(name)}">Save</button>
<button on:click="{onCancel}" id="cancel-btn">Cancel</button>
</div>
</div>