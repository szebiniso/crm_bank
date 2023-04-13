import axios from "axios";

// const APIwithToken = axios.create({
//   withCredentials: true,
//   baseURL: process.env.REACT_APP_API_URL,
//   headers: {
//     // Authorization: `Bearer ${token}`,
//     "Content-Type": "application/json",
//   },
// });

const APIwithToken = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    // 'accept': 'application/json',
  }
})

APIwithToken.interceptors.request.use(
  async req => {
    req.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    return req;
  }
)
// APIwithToken.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
// })
//
// APIwithToken.interceptors.request.use((config) => {
//   return config
// }, async (error) => {
//   if(error.response.status == 401) {
//     try{
//       const response = await axios.get( `${process.env.REACT_APP_API_URL}/refresh`, {withCredentials: true})
//       localStorage.setItem('token', response.data.access)
//     } catch (e) {
//       console.log('Не авторизован')
//     }
//   }
// })

// axios.defaults.withCredentials = true

export default APIwithToken;
