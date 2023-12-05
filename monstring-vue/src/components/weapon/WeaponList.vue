<template>
    <section class="container">
        <h2>våpen i hæren</h2>
        <div class="row">
            <weapon-item
                v-for="(weapon, i) in weapons"
                :key="i"
                :id="weapon.id"
                :weaponType="weapon.weaponType"
                :model="weapon.model"
                :registrationNumber="weapon.registrationNumber"
                :inService="weapon.inService"
            ></weapon-item>
        </div>
    </section>
</template>

<script>
import WeaponItem from "./WeaponItem.vue"
import WeaponService from "../../services/weaponService.js"

export default {
    setup(){
        const weapons = WeaponService.getAll();

        return {
            weapons
        }
    },
    components: {
        WeaponItem
    }
    
}
</script>