<script>
    import { url } from "@sveltech/routify";
</script>
<div class="toolbar-container">
    <a href="{$url('/')}">
        <img src="../logo.png" alt="Logo">
    </a>

    <h1>
        Welcome to Tech Stack
    </h1>
    <h2>
        <span>Share your helpful links </span> 
        <span>Start learning from best resources</span>
    </h2>
</div>

<style>
    .toolbar-container {
        background-color: #E6E8E6;
        padding: 1rem 2rem;
        text-align: center;
        position: relative;
        height: 7rem;
    }
    h1 {
        color: #58355E;
        margin: 0;
    }
    img {
        position: absolute;
        left: 10rem;
        top: 50%;
        transform: translate(0, -50%);
        cursor: pointer;
    }
    h2 {
        color: #3F403F;
        font-size: 1.8rem;
        font-weight: 600;
    }
     h2 > span:last-child {
        margin-left: 4rem;
    }
</style>