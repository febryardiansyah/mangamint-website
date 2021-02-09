import axios from "axios"

axios.defaults.baseURL = 'https://mangamint.kaedenoki.net/api/'
export class AxiosService{
    static fetch = async(url)=>{
        return new Promise(async(resolve,reject)=>{
            try {
                const resp = await axios.get(url);
                return resolve(resp)
            } catch (error) {
                return reject(error)
            }
        })
    }
}