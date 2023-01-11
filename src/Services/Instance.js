import axios from "axios";
//import AuthConfig from "../config/AuthConfig";

const Instance = axios.create({
  baseURL: "http://192.168.0.179:3700",

  headers: {
    "Content-Type": "application/json",
  },
});
// Instance.interceptors.request.use( function(AuthConfig) {
//   const accessToken = (localStorage.getItem("accessToken")) || "public" ;
//   return {
//    // ...AuthConfig,
//     // headers: {
//     //   authorization: accessToken ? `Bearer ${accessToken}` : null,
//     // },
//   };
// });
export default Instance;
