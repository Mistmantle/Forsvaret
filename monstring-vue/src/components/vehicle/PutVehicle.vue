<template>
    <section>
        <div class="container">
            <div class="row row-cols-1 row-cols-2 row-cols-lg-6 g-2 g-lg-3 ">
                <div class="col ">
                    <div class=" p-4 text-center bg-light p-3">
                        <p>Endre kjøretøy med id:</p>
                        <input class="w-75" v-model="id" type="text"><br>
                        <input class="w-75" @click="getVehicle" type="button" value="Hent">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center bg-light p-3">
                        <p>type kjøretøy</p>
                        <input class="w-75" v-model="vehicleType" type="text">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center bg-light p-3">
                        <p>modell</p>
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
                    <div class="text-center bg-light p-3">
                        <input class="w-75" @click="changeVehicle" type="button" value="lagre endring">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import vehicleService from "../../services/vehicleService.js"
import {reactive, toRefs} from "vue"

export default {
    setup(){
        const formVehicle = reactive({
            id: "",
            vehicleType: "",
            model: "",
            registrationNumber: "",
            inService: ""
        });

        const getVehicle = async () => {
            const vehicle = await vehicleService.getById(formVehicle.id);            
            formVehicle.vehicleType = vehicle.vehicleType;
            formVehicle.model = vehicle.model;
            formVehicle.registrationNumber = vehicle.registrationNumber;
            formVehicle.inService = vehicle.inService;
        }

        const changeVehicle = async () => {

            const editedvehicle = {
                id: parseInt(formVehicle.id),
                vehicleType: formVehicle.vehicleType,
                model: formVehicle.model,
                registrationNumber: parseInt(formVehicle.registrationNumber),
                inService: JSON.parse(formVehicle.inService)
            }

            vehicleService.putVehicle(editedvehicle);
        }

        return {
            getVehicle,
            changeVehicle,
            ...toRefs(formVehicle)
        }
    },
}
</script>