<script>
    export let title;
    export let owner;
    export let link;
    export let date;
    export let id;
</script>

<style>

    .post-container {
        background-color: #58355E;
        padding: 20px;
        color: #E6E8E6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70%;
        margin: 0 auto;
        margin-top: 20px;

    }
    .meta-container {
        display: flex;
        flex-direction: column;
    }
    h5 {
        font-size: 22px;
    }
    a {
        color: #E6E8E6;
    }
    span {
        font-weight: 700;
        margin-left: 10px;
    }

</style>

<div class="post-container">
    <h5>
        <a href={link} target="_blank">{title}</a>
    </h5>  
    <div class="meta-container">
        <p>By: <span>{owner}</span> </p>
        <p>Date: <span>{new Date(+date).toLocaleDateString()}</span></p>
</div>
</div>
