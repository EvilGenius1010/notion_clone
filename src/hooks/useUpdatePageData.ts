import axios from "axios"
//define return types


export default async function useUpdatePageData(accessToken:string,updates:string) {
//   const pagedata: any = axios.post("http://localhost:3000/api/protected/fetchdata",
//     {
//       owner: owner
//     }
//   ).then(function (response) {
//     return response.data
//   })
//     .catch(function (error) {
//       console.log(error);
//     });

  const mainURL ="/api/protected/savedata"

  const apiClient = axios.create({
    baseURL:process.env.BASE_URL,
    headers: {
      "Content-Type": "application/json", // Default header
    },
  })
  apiClient.interceptors.request.use((config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });


  apiClient.post(mainURL,{updates:updates})
  .then(response=>{
    return response.data
  })
  .catch(err=>{
    console.log(err)
    return err
  })

}