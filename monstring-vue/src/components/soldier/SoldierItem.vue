<template>
        <article class="col-sm-12 col-md-6 col-lg-4" >
            <div class=" p-3 text-center soldierBox">
                <img class="soldierPicture" :src="`https://localhost:7084/Images/${image}`">
                <p>Navn: {{name}} id:{{id}}</p>
                <p>Stilling: {{position}}</p>
                <p>Alder: {{age}}</p>
                <p>I tjeneste: {{inService}}</p>
            </div>
        </article>
</template>

<script>
export default {
    props: {
        id: Number,
        image: String,
        position: String,
        age: Number,
        name: String,
        inService: Boolean
    }
}
</script>

<style>
    .soldierPicture{
        width: 100%;
    }
    .soldierBox{
        margin-top: 20px;
        background-color: whitesmoke;
        border: whitesmoke;
        border-style: solid;
        border-width: 5px;

        font-style: bold;
    }
</style>