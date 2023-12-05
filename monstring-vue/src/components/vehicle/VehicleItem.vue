<template>
        <article class="col-sm-12 col-md-6 col-lg-4" >
            <div class=" p-3 text-center vehicleBox">
                <p>Id: {{id}}</p>
                <p>Kjøretøy: {{vehicleType}}</p>
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
        vehicleType: String,
        model: String,
        registrationNumber: Number,
        inService: Boolean
    }
}
</script>

<style>
    .vehicleBox{
        margin-top: 20px;
        background-color: whitesmoke;
        border: whitesmoke;
        border-style: solid;
        border-width: 5px;
        font-style: bold;
    }
</style>