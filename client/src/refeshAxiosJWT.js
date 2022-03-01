import axios from "axios";
import jwtDecode from "jwt-decode";
const refeshtoken = async () => {
    try {
        const res = await axios.post("http://localhost:5000/user/refesh", {
            withCredentials: true
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
export const refeshAxiosJWT = (user, dispatch, stateSuccesss) => {
    const newJWT = axios.create();
    newJWT.interceptors.request.use(
        async (config) => {
            const decodeToken = jwtDecode(user?.tokensign);
            let day = new Date();
            console.log(day.getTime());
            if (decodeToken.exp < day.getTime() / 1000) {
                const refesh = await refeshtoken();
                const refeshUser = {
                    ...user,
                    tokensign: refesh.tokensign
                }
                dispatch(stateSuccesss(refeshUser));
                config.headers["token"] = "Bearer " + refesh.tokensign;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    )
    return newJWT;
};
