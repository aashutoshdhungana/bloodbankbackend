import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8000',
});

apiClient.defaults.withCredentials = true;
apiClient.defaults.withCredentials = true;

export default apiClient;