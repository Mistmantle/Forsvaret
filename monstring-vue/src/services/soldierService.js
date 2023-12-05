import axios from "axios";
import { ref } from 'vue'

const soldierService = (function(){

    const soldiers = ref([]);

    const soldierControllerUrl = "https://localhost:7084/soldier";
    const imageUploadControllerUrl = "https://localhost:7084/ImageUpload/PostImage";
        (async () => {
            const request = await axios.get(soldierControllerUrl);
            soldiers.value = request.data;
        })()
    
    const getAll = () => soldiers;

    const postSoldier = async (newSoldier, image) => {
        await axios.post(soldierControllerUrl, newSoldier);

        axios({
            method: "POST",
            url: imageUploadControllerUrl,
            data: image,
            config: {header: {"Content-Type": "multipart/form-data"}}
        });
    }
    const getById = async (id) => {
        const request = await axios.get(`https://localhost:7084/soldier/${id}`);
        return request.data;
    }
    const putSoldier = async (editedSoldier) => {
        await axios.put(soldierControllerUrl, editedSoldier)
        
        const temporaryArray = JSON.parse(JSON.stringify(soldiers.value));
        
        const index = temporaryArray.findIndex( soldier => parseInt(soldier.id) === parseInt(editedSoldier.id))
        
        soldiers.value[index].name = editedSoldier.name;
        soldiers.value[index].image = editedSoldier.image;
        soldiers.value[index].position = editedSoldier.position;
        soldiers.value[index].age = editedSoldier.age;
        soldiers.value[index].inService = editedSoldier.inService;
    }

    const deleteSoldier = async (soldierToDeleteId) => {
        await axios.delete(`https://localhost:7084/soldier/${soldierToDeleteId}`)
    }

    return {
        getAll,
        postSoldier,
        putSoldier,
        getById,
        deleteSoldier
        
    }



}())

export default soldierService;