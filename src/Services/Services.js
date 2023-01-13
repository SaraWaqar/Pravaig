 import request from "./Instance";
import axios, { AxiosResponse } from "axios";

const Services = {
  async getAll() {

    const res = await request.get("cars/");
  
    return res;
  },
};

export default Services;
