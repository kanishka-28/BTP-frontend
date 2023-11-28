import axios from "axios" 

export const fetchNames = async () => {
    return await axios.get("http://127.0.0.1:5000/passing");
}

export const markAttendance = (credentials)=>{
    console.log(credentials);
    return axios.post("/user/update", {credentials})
}

export const addstudent = (credentials)=>{
    return axios.post("/user/add", {credentials})
}

export const getstudents = ()=>{
    return axios.get("/user/list")
}