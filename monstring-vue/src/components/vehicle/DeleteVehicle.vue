<template>
    <section>
        <div class="container">
            <div class="row row-cols-1 row-cols-2 row-cols-lg-6 g-2 g-lg-3 ">
                <div class="col ">
                    <div class=" p-4 text-center bg-light p-3">
                        <p>Slett kjøretøy med id:</p>
                        <input class="w-75" v-model="id" type="text">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center bg-light p-3">
                        <p>Slett kjøretøy</p>
                        <input class="w-75" @click="deleteVehicle" type="button" value="slett kjøretøy">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import vehicleService from "../../services/vehicleService.js"
import {reactive, toRefs} from 'vue'

export default {
    setup(){
        const formVehicle = reactive({
            id: "",
            
        });

        const getVehicle = async () => {
            await vehicleService.getById(formVehicle.id);            
            
        }

        const deleteVehicle = async () => {
            vehicleService.deleteVehicle(formVehicle.id)
        }

        return {
            getVehicle,
            deleteVehicle,
            ...toRefs(formVehicle)
        }
    },
}
</script>