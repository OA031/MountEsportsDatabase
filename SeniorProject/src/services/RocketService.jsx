import axios from "axios";

const COMMON_URL_ROCKET = "http://localhost:8000/api/rocketg";
class RocketService {
    rocketRegistration = (data) => {
        try {
            return axios.post(COMMON_URL_ROCKET, data);
        } catch (error) {
            console.log(error);
        }
    }

    getRocketList = () => {
        try {
            return axios.get(COMMON_URL_ROCKET);
        } catch (error) {
            console.log(error);
        }
    }
}

const rocketServiceInstance = new RocketService();
export default rocketServiceInstance;
