<script>
    import { url } from "@sveltech/routify";
</script>
<div class="toolbar-container">
    <a href="{$url('/')}">
        <img src="{$url('logo.png')}" alt="Logo">
    </a>

    <h1>
        Welcome to Tech Stack
    </h1>
    <h4>
        Share your helpful links <span> Start learning from best resources</span>
    </h4>
</div>

<style>
    .toolbar-container {
        background-color: #E6E8E6;
        color: #58355E;
        padding: 10px 20px;
        text-align: center;
    }
    img {
        position: absolute;
        left: 100px;
        top: 0px;
        cursor: pointer;
    }
    h1 {
        font-size: 35px;
    }
    h4 {
        color: #3F403F;
    }
    span {
        margin-left: 40px;
    }
</style>