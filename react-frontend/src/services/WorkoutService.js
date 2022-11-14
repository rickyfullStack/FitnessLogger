import axios from 'axios';

const EXCERCISE_API_BASE_URL = "http://localhost:8080/api/v1/excercises";

class WorkoutService {

    getExcercise(){
        return axios.get(EXCERCISE_API_BASE_URL);
    }

    createExcercise(excercise){
        return axios.post(EXCERCISE_API_BASE_URL, excercise);
    }

    getExcerciseById(id){
        return axios.get(EXCERCISE_API_BASE_URL + '/' + id);
    
    }
    updateExcercise(excercise, id){
        return axios.put(EXCERCISE_API_BASE_URL + '/' + id, excercise);
    }

    deleteExcercise(id){
        return axios.delete(EXCERCISE_API_BASE_URL + '/' + id);
    }
}

export default new WorkoutService()