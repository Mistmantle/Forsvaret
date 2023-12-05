<template>
    <section>
        <div class="container">
            <div class="row row-cols-1 row-cols-2 row-cols-lg-6 g-2 g-lg-3 ">
                <div class="col ">
                    <div class=" p-4 text-center bg-light p-3">
                        <p>Endre soldat med id:</p>
                        <input class="w-75" v-model="id" type="text"><br>
                        <input class="w-75" @click="getSoldier" type="button" value="Hent">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center bg-light p-3">
                        <p>Navn</p>
                        <input class="w-75" v-model="name" type="text">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center bg-light p-3">
                        <p>Alder</p>
                        <input class="w-75" v-model="age" type="text">
                    </div>
                </div>
                <div class="col">
                    <div class="text-center bg-light p-3">
                        <p>Posisjon</p>
                        <input class="w-75" v-model="position" type="text">
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
                        <p>bilde av person</p>
                        <input class="w-75" @change="setImage" type="file">
                        <input class="w-75" @click="changeSoldier" type="button" value="lagre endring">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import soldierService from "../../services/soldierService.js"
import {reactive, toRefs} from "vue"

export default {
    setup(){
        const image = new FormData();
        const formSoldier = reactive({
            id: "",
            name: "",
            age: "",
            position: "",
            image: "",
            inService: ""
        });

        const getSoldier = async () => {
            const soldier = await soldierService.getById(formSoldier.id);            
            formSoldier.name = soldier.name;
            formSoldier.age = soldier.age;
            formSoldier.position = soldier.position;
            formSoldier.image = soldier.image;
            formSoldier.inService = soldier.inService;
        }
        const setImage = (a) => {
            image.append("file", a.target.files[0]);
            formSoldier.image = a.target.files[0].name;
        }

        const changeSoldier = async () => {

            const editedSoldier = {
                id: parseInt(formSoldier.id),
                name: formSoldier.name,
                age: parseInt(formSoldier.age),
                position: formSoldier.position,
                image: formSoldier.image,
                inService: JSON.parse(formSoldier.inService)
            }

            soldierService.putSoldier(editedSoldier);
        }

        return {
            getSoldier,
            changeSoldier,
            setImage,
            ...toRefs(formSoldier)
        }
    },
}
</script>