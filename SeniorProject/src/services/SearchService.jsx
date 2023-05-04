import axios from "axios";

let COMMON_URL = "http://localhost:8000/api/search";

class SearchService {
    getSearchByUser = (name) => {
        try {
            return axios.get(COMMON_URL + "/" + name);
        } catch (error) {
            console.log(error);
        }
    }

}

const searchServiceInstance = new SearchService();
export default searchServiceInstance;
