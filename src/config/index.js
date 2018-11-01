import api from './api'
import axios from '../common/axiosbreak/axiosbreak.js'
const baseUrl = 'http://60.191.29.210:9090/EquipmentInspection/'
for (const key in api) {
    api[key] = baseUrl + api[key];
}
// --------------------接口--------------------------------
export const aaaa = (data) =>{
    return axios.get(api.aaa,data)
}