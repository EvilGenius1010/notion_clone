import axios from "axios"

export default async function ReqtoAPI(owner: string) {
  const pagedata: any = axios.post("http://localhost:3000/api/protected/fetchdata",
    {
      owner: owner
    }
  ).then(function (response) {
    return response.data
  })
    .catch(function (error) {
      console.log(error);
    });
}
