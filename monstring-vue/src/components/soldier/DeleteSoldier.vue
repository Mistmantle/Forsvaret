<template>
    <section>
        <div class="container">
            <div class="row row-cols-1 row-cols-2 row-cols-lg-6 g-2 g-lg-3 ">
                <div class="col ">
                    <div class=" p-4 text-center bg-light p-3">
                        <p>Slett soldat med id:</p>
                        <input class="w-75" v-model="id" type="text">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center bg-light p-3">
                        <p>Slett soldat</p>
                        <input class="w-75" @click="deleteSoldier" type="button" value="slett soldat">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import soldierService from "../../services/soldierService.js"
import { reactive, toRefs } from 'vue'

export default {
    setup(){
        const formSoldier = reactive({
            id: "",
            
        });

        const getSoldier = async () => {
            await soldierService.getById(formSoldier.id);            
            
        }

        const deleteSoldier = async () => {
            soldierService.deleteSoldier(formSoldier.id)
        }

        return {
            getSoldier,
            deleteSoldier,
            ...toRefs(formSoldier)
        }
    },
}
</script>