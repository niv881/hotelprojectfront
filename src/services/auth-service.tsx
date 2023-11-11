import axios from "axios"

const baseUrl = 'http://localhost:8080/auth'


export const register = (username:string,email:string,password:string) =>{

return axios.post(`${baseUrl}/signup`,{username,email,password})

}

export const registerManager = (username:string,email:string,password:string) =>{

    const userData = localStorage.getItem("user") ?? `{token:''}`;
    //parse
    const user = JSON.parse(userData);
    //get the token from the user:
    const token = user.token;
    return axios.post(`${baseUrl}/signup/manager`,{username,email,password},{
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })
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
    }).catch((e) => {
        return e
    } ) 
        
}
export const logout = ()=>{
    localStorage.removeItem("user");
}

const authService = {
    register,
    login,
    logout,
    registerManager
}

export default authService