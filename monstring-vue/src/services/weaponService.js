import axios from "axios";
import { ref } from 'vue'

const weaponService = (function(){

    const weapons = ref([]);

    const weaponControllerUrl = "https://localhost:7084/weapon";
        (async () => {
            const request = await axios.get(weaponControllerUrl);
            weapons.value = request.data;
        })()
    
    const getAll = () => weapons;

    const postWeapon = (newWeapon) => {
        axios.post(weaponControllerUrl, newWeapon);
    }

    const getById = async (id) => {
        const request = await axios.get(`https://localhost:7084/weapon/${id}`);
        return request.data;
    }
    const putWeapon = async (editedWeapon) => {
        await axios.put(weaponControllerUrl, editedWeapon)
        
        const temporaryArray = JSON.parse(JSON.stringify(weapons.value));
        
        const index = temporaryArray.findIndex( weapon => parseInt(weapon.id) === parseInt(editedWeapon.id))
        
        weapons.value[index].weaponType = editedWeapon.weaponType;
        weapons.value[index].model = editedWeapon.model;
        weapons.value[index].registrationNumber = editedWeapon.registrationNumber;
        weapons.value[index].inService = editedWeapon.inService;
    }
    const deleteWeapon = async (weaponToDeleteId) => {
        await axios.delete(`https://localhost:7084/weapon/${weaponToDeleteId}`)
    }

    return {
        getAll,
        postWeapon,
        getById,
        putWeapon,
        deleteWeapon
    }

}())

export default weaponService;