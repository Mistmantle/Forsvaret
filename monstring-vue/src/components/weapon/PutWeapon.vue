<template>
    <section>
        <div class="container">
            <div class="row row-cols-1 row-cols-2 row-cols-lg-6 g-2 g-lg-3 ">
                <div class="col ">
                    <div class=" p-4 text-center bg-light p-3">
                        <p>Endre våpen med id:</p>
                        <input class="w-75" v-model="id" type="text"><br>
                        <input class="w-75" @click="getWeapon" type="button" value="Hent">
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
                        <input class="w-75" @click="changeWeapon" type="button" value="lagre endring">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import weaponService from "../../services/weaponService.js"
import {reactive, toRefs} from "vue"

export default {
    setup(){
        const formWeapon = reactive({
            id: "",
            weaponType: "",
            model: "",
            registrationNumber: "",
            inService: ""
        });

        const getWeapon = async () => {
            const weapon = await weaponService.getById(formWeapon.id);            
            formWeapon.weaponType = weapon.weaponType;
            formWeapon.model = weapon.model;
            formWeapon.registrationNumber = weapon.registrationNumber;
            formWeapon.inService = weapon.inService;
        }

        const changeWeapon = async () => {

            const editedweapon = {
                id: parseInt(formWeapon.id),
                weaponType: formWeapon.weaponType,
                model: formWeapon.model,
                registrationNumber: parseInt(formWeapon.registrationNumber),
                inService: JSON.parse(formWeapon.inService)
            }

            weaponService.putWeapon(editedweapon);
        }

        return {
            getWeapon,
            changeWeapon,
            ...toRefs(formWeapon)
        }
    },
}
</script>