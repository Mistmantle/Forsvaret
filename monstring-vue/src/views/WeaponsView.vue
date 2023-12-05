<template>
    <section>
        <delete-weapon></delete-weapon>
        <put-weapon></put-weapon>
        <add-weapon></add-weapon>
        <weapon-list></weapon-list>
    </section>
</template>

<script>
import WeaponList from "../components/weapon/WeaponList.vue"
import AddWeapon from "../components/weapon/AddWeapon.vue"
import PutWeapon from "../components/weapon/PutWeapon.vue"
import DeleteWeapon from "../components/weapon/DeleteWeapon.vue"

export default {
    components: {
        WeaponList,
        AddWeapon,
        PutWeapon,
        DeleteWeapon
    }
}
</script>