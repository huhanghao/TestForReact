/**
 * Created by huhanghao on 2017/12/7.
 */
import axios from 'axios';
import UrlUtils from 'UrlUtils'

const ApiUtils = {


    TIME_OUT: 5 * 1000,

    getRequest(mUrl, params){

        let mBaseUrl = UrlUtils.IS_ONLINE_MODE ? UrlUtils.BASE_URL_ONLINE : UrlUtils.TOKEN_URL_ONLINE;

        axios({
            baseURL: mBaseUrl,
            timeout: 3000,
            method: 'get',
            url: mUrl,
            data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
            },
        }).get(params);
    },

    postRequest(url, params){
        axios({
            baseURL: mBaseUrl,
            timeout: 3000,
            method: 'post',
            url: mUrl,
            data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
            },
        }).post(params);
    }
}

var saxioInstance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default ApiUtils;











