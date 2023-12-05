<template>
    <section>
        <div class="container">
            <div class="row row-cols-1 row-cols-2 row-cols-lg-6 g-2 g-lg-3 ">
                <div class="col ">
                    <div class=" p-4 text-center bg-light p-3">
                        <p>Slett våpen med id:</p>
                        <input class="w-75" v-model="id" type="text">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center bg-light p-3">
                        <p>Slett våpen</p>
                        <input class="w-75" @click="deleteWeapon" type="button" value="slett våpen">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import weaponService from "../../services/weaponService.js"
import {reactive, toRefs} from 'vue'

export default {
    setup(){
        const formWeapon = reactive({
            id: "",
            
        });

        const getWeapon = async () => {
            await weaponService.getById(formWeapon.id);            
            
        }

        const deleteWeapon = async () => {
            weaponService.deleteWeapon(formWeapon.id)
        }

        return {
            getWeapon,
            deleteWeapon,
            ...toRefs(formWeapon)
        }
    },
}
</script>