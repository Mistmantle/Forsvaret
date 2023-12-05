<template>
    <section class="container">
        <h2>Tjenestefolk i hæren</h2>
        <div class="row">
            <soldier-item
                v-for="(soldier, i) in soldiers"
                :key="i"
                :id="soldier.id"
                :image="soldier.image"
                :position="soldier.position"
                :age="soldier.age"
                :name="soldier.name"
                :inService="soldier.inService"
            ></soldier-item>
        </div>
    </section>
</template>

<script>
import SoldierItem from "./SoldierItem.vue"
import soldierService from '../../services/soldierService.js'

export default {
    setup(){
        const soldiers = soldierService.getAll();

        return {
            soldiers
        }
    },
    components: {
        SoldierItem
    }
    
}
</script>