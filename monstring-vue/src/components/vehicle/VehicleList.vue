<template>
    <section class="container">
        <h2>Kjøretøy i hæren</h2>
        <div class="row">
            <vehicle-item
                v-for="(vehicle, i) in vehicles"
                :key="i"
                :id="vehicle.id"
                :vehicleType="vehicle.vehicleType"
                :model="vehicle.model"
                :registrationNumber="vehicle.registrationNumber"
                :inService="vehicle.inService"
            ></vehicle-item>
        </div>
    </section>
</template>

<script>
import VehicleItem from "./VehicleItem.vue"
import vehicleService from "../../services/vehicleService.js"

export default {
    setup(){
        const vehicles = vehicleService.getAll();

        return {
            vehicles
        }
    },
    components: {
        VehicleItem
    }
    
}
</script>