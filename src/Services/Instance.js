import axios from "axios";
//import AuthConfig from "../config/AuthConfig";

const Instance = axios.create({
  // baseURL: "http://192.168.0.179:3700/",
  // baseURL : "http://192.168.0.179:3700/",
  baseURL: "http://45.32.70.221/api/",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
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
