import * as Constant from './../constants'
import { AxiosAPI } from './../global/config'
export const callApi = (endpoint, method, body) => {
    return AxiosAPI({
        url: `${Constant.url_api}/${endpoint}`,
        method,
        data: body
    }).catch((error) => {
        console.log(error)
    });
}