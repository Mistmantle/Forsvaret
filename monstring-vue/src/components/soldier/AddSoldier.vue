<template>
    <section>
        <div class="container">
            <div class="row row-cols-1 row-cols-2 row-cols-lg-6 g-2 g-lg-3 ">
                <div class="col ">
                    <div class=" p-4 text-center bg-light p-3">
                        <p>Lagre soldat</p>
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
                        <p class="">Alder</p>
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
                        <input class="w-75" @click="postSoldier" type="button" value="lagre soldat">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {reactive, toRefs} from "vue"
import soldierService from "../../services/soldierService.js"

export default {
    setup(){
        const image = new FormData();
        const formSoldier = reactive({
            name: "",
            age: "",
            position: "",
            inService: "",
            image: ""
        });

        const setImage = (a) => {
            image.append("file", a.target.files[0]);
            formSoldier.image = a.target.files[0].name;
        }

        const postSoldier = () => {
            const newSoldier = {
                name: formSoldier.name,
                age: formSoldier.age,
                position: formSoldier.position,
                inService: JSON.parse(formSoldier.inService),
                image: formSoldier.image
            };
            soldierService.postSoldier(newSoldier, image);
        }

        return {
            setImage,
            postSoldier,
            ...toRefs(formSoldier)
        }
    }
}
</script>
<style>

</style>