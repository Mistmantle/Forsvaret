<template>
        <article class="col-sm-12 col-md-6 col-lg-4" >
            <div class=" p-3 text-center weaponBox">
                <p>id: {{id}}</p>
                <p>våpen type: {{weaponType}}</p>
                <p>Modell: {{model}}</p>
                <p>Registernummer: {{registrationNumber}}</p>
                <p>I tjeneste: {{inService}}</p>
            </div>
        </article>
</template>

<script>
export default {
    props: {
        id: Number,
        weaponType: String,
        model: String,
        registrationNumber: Number,
        inService: Boolean
    }
}
</script>

<style>
    .weaponBox{
        margin-top: 20px;
        background-color: whitesmoke;
        border: whitesmoke;
        border-style: solid;
        border-width: 5px;
        font-style: bold;
    }
</style>