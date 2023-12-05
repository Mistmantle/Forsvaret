import axios from "axios";
import { ref } from 'vue'

const vehicleService = (function(){

    const vehicles = ref([]);

    const vehicleControllerUrl = "https://localhost:7084/vehicle";
        (async () => {
            const request = await axios.get(vehicleControllerUrl);
            vehicles.value = request.data;
        })()
    
    const getAll = () => vehicles;

    const postVehicle = (newVehicle) => {
        axios.post(vehicleControllerUrl, newVehicle);
    }
    const getById = async (id) => {
        const request = await axios.get(`https://localhost:7084/vehicle/${id}`);
        return request.data;
    }
    const putVehicle = async (editedVehicle) => {
        await axios.put(vehicleControllerUrl, editedVehicle)
        
        const temporaryArray = JSON.parse(JSON.stringify(vehicles.value));
        
        const index = temporaryArray.findIndex( vehicle => parseInt(vehicle.id) === parseInt(editedVehicle.id))
        
        vehicles.value[index].vehicleType = editedVehicle.vehicleType;
        vehicles.value[index].model = editedVehicle.model;
        vehicles.value[index].registrationNumber = editedVehicle.registrationNumber;
        vehicles.value[index].inService = editedVehicle.inService;
    }
    const deleteVehicle = async (vehicleToDeleteId) => {
        await axios.delete(`https://localhost:7084/vehicle/${vehicleToDeleteId}`)
    }

    return {
        getAll,
        postVehicle,
        getById,
        putVehicle,
        deleteVehicle
    }



}())

export default vehicleService;