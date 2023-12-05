<template>
    <section>
        <div class="container">
            <div class="row row-cols-1 row-cols-2 row-cols-lg-6 g-2 g-lg-3 ">
                <div class="col ">
                    <div class=" p-4 text-center bg-light p-3">
                        <p>Lagre Kjøretøy</p>
                    </div>
                </div>
                <div class="col">
                    <div class="text-center bg-light p-3">
                        <p>type Kjøretøy</p>
                        <input class="w-75" v-model="vehicleType" type="text">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center bg-light p-3">
                        <p class="">modell</p>
                        <input class="w-75" v-model="model" type="text">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center bg-light p-3">
                        <p>Registernummer</p>
                        <input class="w-75" v-model="registrationNumber" type="text">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center bg-light p-3">
                        <p>I tjeneste? false | true</p>
                        <input class="w-75" v-model="inService" type="text">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center bg-light p-4">
                        <i class="bi bi-check"></i><br>
                        <input class="w-75" @click="postVehicle" type="button" value="lagre kjøretøy">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {reactive, toRefs} from "vue";
import vehicleService from "../../services/vehicleService.js"

export default {
    setup(){
        const formVehicle = reactive({
            vehicleType: "",
            model: "",
            registrationNumber: "",
            inService: ""
        });

        const postVehicle = () => {
            const newVehicle = {
                vehicleType: formVehicle.vehicleType,
                model: formVehicle.model,
                registrationNumber: formVehicle.registrationNumber,
                inService: JSON.parse(formVehicle.inService)
            };
            vehicleService.postVehicle(newVehicle);
        }

        return {
            postVehicle,
            ...toRefs(formVehicle)
        }
    }
}
</script>
<style>

</style>