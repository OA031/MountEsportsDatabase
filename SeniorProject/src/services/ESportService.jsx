import axios from "axios";

let COMMON_URL_ESPORTS = "http://localhost:8000/api/smash";
class ESportService{

    esportsRegistration = (data) => {
        try {
            return axios.post(COMMON_URL_ESPORTS, data);
        } catch (error) {
            console.log(error);
        }
    }

    getEsportsPlayers = () => {
        try {
            return axios.get(COMMON_URL_ESPORTS);
        } catch (error) {
            console.log(error);
        }
    }

}
const esportServiceInstance = new ESportService();
export default esportServiceInstance;