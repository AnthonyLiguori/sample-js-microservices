import axios, {AxiosResponse } from "axios";
 
export class Controller {
  static getMovie(id : string) : Promise<AxiosResponse> {
    return axios.get(`http://localhost:8001/sessions/${id}`)
  }
  static getJeux(id : string) : Promise<AxiosResponse> {
    return axios.get(`http://localhost:8001/sessions/${id}`)
  }
}