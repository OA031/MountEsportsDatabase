import axios from "axios";

const COMMON_URL_VALORANT = "http://localhost:8000/api/valorantg";
class ValorantService{

    valorantRegistration = (data) => {
        try {
            return axios.post(COMMON_URL_VALORANT, data);
        } catch (error) {
            console.log(error);
        }
    }

    getValorantList = () => {
        try {
            return axios.get(COMMON_URL_VALORANT);
        } catch (error) {
            console.log(error);
        }
    }

}

const valorantServiceInstance = new ValorantService();
export default valorantServiceInstance;