<template>
    <section>
        <delete-vehicle></delete-vehicle>
        <put-vehicle></put-vehicle>
        <add-vehicle></add-vehicle>
        <vehicle-list></vehicle-list>
    </section>
</template>

<script>
import VehicleList from "../components/vehicle/VehicleList.vue"
import AddVehicle from "../components/vehicle/AddVehicle.vue"
import putVehicle from "../components/vehicle/PutVehicle.vue"
import deleteVehicle from "../components/vehicle/DeleteVehicle.vue"

export default {
    components: {
        VehicleList,
        AddVehicle,
        putVehicle,
        deleteVehicle

    }
}
</script>