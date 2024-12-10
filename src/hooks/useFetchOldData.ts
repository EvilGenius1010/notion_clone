import axios from "axios"
//check existence of user.
export default async function useFetchPageContent(accessToken:string,pageTitle:string) {
  // const checkUserExistence = await prisma.user.findUnique({
  //   where: {
  //     email: email
  //   }
  // })


  //check this code
  // const checkUserExistence = await axios.post("/api/protected/fetchdata", {
  //   email: email,
  //   username: username
  // })
  // console.log(checkUserExistence.data)
  // return checkUserExistence.data


  const mainURL ="/api/protected/fetchdata"

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


  apiClient.post(mainURL,{pageTitle:pageTitle})
  .then(response=>{
    return response.data
  })
  .catch(err=>{
    console.log(err)
    return err
  })



}
