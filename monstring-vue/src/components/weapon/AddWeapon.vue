<template>
    <section>
        <div class="container">
            <div class="row row-cols-1 row-cols-2 row-cols-lg-6 g-2 g-lg-3 ">
                <div class="col ">
                    <div class=" p-4 text-center bg-light p-3">
                        <p>Lagre våpen</p>
                    </div>
                </div>
                <div class="col">
                    <div class="text-center bg-light p-3">
                        <p>type våpen</p>
                        <input class="w-75" v-model="weaponType" type="text">
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
                        <input class="w-75" @click="postWeapon" type="button" value="lagre våpen">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {reactive, toRefs} from "vue";
import WeaponService from "../../services/weaponService.js"

export default {
    setup(){
        const formWeapon = reactive({
            weaponType: "",
            model: "",
            registrationNumber: "",
            inService: ""
        });

        const postWeapon = () => {
            const newWeapon = {
                weaponType: formWeapon.weaponType,
                model: formWeapon.model,
                registrationNumber: formWeapon.registrationNumber,
                inService: JSON.parse(formWeapon.inService)
            };
            WeaponService.postWeapon(newWeapon);
        }

        return {
            postWeapon,
            ...toRefs(formWeapon)
        }
    }
}
</script>
<style>

</style>