import axios from "axios"

const baseUrl = 'http://localhost:8080/auth'

export const register = (username:string,email:string,password:string) =>{

return axios.post(`${baseUrl}/signup`,{username,email,password})

}
export const login = (username:string , password:string) =>{
    return axios.post(`${baseUrl}/signin`,{username,password})
    .then((res) => {
        const token = res.data.jwt
        const role = res.data.Role
        if(token){
        localStorage.setItem("user",JSON.stringify({
            token,
            username,
            role
        }))
        }

        return res
    })
}
export const logout = ()=>{
    localStorage.removeItem("user");
}

const authService = {
    register,
    login,
    logout
}

export default authService