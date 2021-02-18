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
    <h4>
        Share your helpful links <span> Start learning from best resources</span>
    </h4>
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
    h4 {
        color: #3F403F;
        font-size: 1.8rem;
        font-weight: 600;
    }
    span {
        margin-left: 4rem;
    }
</style>