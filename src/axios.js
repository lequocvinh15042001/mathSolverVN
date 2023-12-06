import axios from 'axios';
import _ from 'lodash';
require('dotenv').config();

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    //  withCredentials: true
});

// Vinh đóng axios
if (localStorage.getItem("token")) {
    instance.interceptors.request.use(
        config => {
            config.headers.authorization = "Bearer " + localStorage.getItem("token").replaceAll('"', '')

            return config
        },
        error => {
            return Promise.reject(error)
        }
    );
}



// instance.interceptors.response.use(
//     (res) => {
//       return res;
//     },
//     async (err) => {
//       const originalConfig = err.config;
//       if (originalConfig.url !== "/login" && err.response) {

//         // Access Token was expired
//         if (err.response.status === 500 &&err.response.data.message.includes("expired") && !originalConfig._retry) {
//           originalConfig._retry = true;
//           try {
//             let refreshtoken = localStorage.getItem("refreshtoken")
//             localStorage.setItem("token",refreshtoken)
//             return instance(originalConfig);
//           } catch (_error) {
//             return Promise.reject(_error);
//           }
//         }
//       }
//       return Promise.reject(err);
//     }
//   );


// Vinh tạo lại để sửa lỗi CORS
// instance.interceptors.request.use((config) => { //tất cả request đều phải qua đây 
//     const user = localStorage.getItem('user');
//     if (user) { // nếu có đăng nhập thì thực hiện
//       const { accessToken } = JSON.parse(user)
//       config.headers.common.Authorization = `Bearer ${accessToken}`;
//       // console.log(accessToken);
//     }
//     return config;
//   })

instance.interceptors.response.use(
    (response) => {
        // Thrown error for request with OK status code
        const { data } = response;
        return response.data
    }
);

// console.log('====================================');
// console.log("API: ", process.env.REACT_APP_BACKEND_URL);
// console.log('====================================');
export default instance;
