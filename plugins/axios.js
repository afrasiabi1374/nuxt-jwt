import qs from "qs"
import { handleErrors, handleResponse } from "../helpers/responseHelper"
export default function ({ $axios, ...context }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        common: {
          Accept: 'application/json'
        }
      },
      // واسه اینه که بتونیم پارامتر بصورت آرایه ای بدیم به ای پی ای مون
      paramsSerializer: (params) => {
        return qs.stringify(params, {arrayFormat: 'brackets'})
      }
    })
  
    // Set baseURL to something different
    api.setBaseURL('https://978v6.mocklab.io')
    // POST METHOD_!
    api._post = function(url, body, config = {}){
      const {cc, ...requestConfig} = config
      return api
      .post(url, body, requestConfig)
      .then((response)=>{
        return handleResponse(response)
      })
      .catch((e)=>{
        handleErrors(e, cc, context)
      })
    }

    // GET METHOD_!
    api._get = function(url, config = {}){
      const {cc, ...requestConfig} = config
      return api
      .get(url, requestConfig)
      .then((response)=>{
        return handleResponse(response)
      })
      .catch((e)=>{
        handleErrors(e, cc, context)
      })
    }    


    // Inject to context as $api
    inject('api', api)

}