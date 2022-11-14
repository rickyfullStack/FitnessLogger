import axios from 'axios';

const NUTRITION_API_BASE_URL = "http://localhost:8080/api/v1/nutrition";

class NutritionService {

    getNutrition(){
        return axios.get(NUTRITION_API_BASE_URL);
    }

    async createNutrition(nutrition){
        axios.post(NUTRITION_API_BASE_URL, nutrition);
    }

    getNutritionById(nutrition_id){
        return axios.get(NUTRITION_API_BASE_URL + '/' + nutrition_id);
    
    }
    updateNutrition(nutrition, nutrition_id){
        return axios.put(NUTRITION_API_BASE_URL + '/' + nutrition_id, nutrition);
    }

    deleteNutrition(nutrition_id){
        return axios.delete(NUTRITION_API_BASE_URL + '/' + nutrition_id);
    }
}

export default new NutritionService()