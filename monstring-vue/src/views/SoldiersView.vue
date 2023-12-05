<template>
    <section>
        <delete-soldier></delete-soldier>
        <put-soldier></put-soldier>
        <add-soldier></add-soldier>
        <soldier-list></soldier-list>
    </section>
</template>

<script>
import SoldierList from "../components/soldier/SoldierList.vue"
import AddSoldier from "../components/soldier/AddSoldier.vue"
import PutSoldier from "../components/soldier/PutSoldier.vue"
import DeleteSoldier from "../components/soldier/DeleteSoldier.vue"

export default {
    components: {
        SoldierList,
        AddSoldier,
        PutSoldier,
        DeleteSoldier
    }
}
</script>