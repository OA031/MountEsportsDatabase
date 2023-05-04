import axios from "axios";

const COMMON_URL_OVERWATCH = "http://localhost:8000/api/overwatchg";
class OverwatchService{
    overwatchRegistration = (data) => {
        try {
            return axios.post(COMMON_URL_OVERWATCH, data);
        } catch (error) {
            console.log(error);
        }
    }

    getOverwatchList = () => {
        try {
            return axios.get(COMMON_URL_OVERWATCH);
        } catch (error) {
            console.log(error);
        }
    }
}
const overwatchServiceInstance = new OverwatchService();
export default overwatchServiceInstance;