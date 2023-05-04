import axios from "axios";

let COMMON_URL_SMASH = "http://localhost:8000/api/sgames";
class SmashService{
    smashRegistration = (data) => {
        try {
            return axios.post(COMMON_URL_SMASH, data);
        } catch (error) {
            console.log(error);
        }
    }

    getSmashList = () => {
        try {
            return axios.get(COMMON_URL_SMASH);
        } catch (error) {
            console.log(error);
        }
    }
}
const smashServiceInstance = new SmashService();
export default smashServiceInstance;
