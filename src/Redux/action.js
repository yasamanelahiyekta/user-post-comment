import axios from "axios"
import { comments } from "./reducer"

export const getUsers = () => async (dispatch, getstate) => {
    try {
        dispatch({ type: "getUsers", payload: { data: [], loading: true, error: "" } })
        const { data } = await axios("https://jsonplaceholder.typicode.com/users")
        const newData = JSON.parse(JSON.stringify(data))
        dispatch({ type: "getUsers", payload: { data: [...newData], loading: false, error: "" } })
    } catch (error) {
        dispatch({ type: "getUsers", payload: { data: [], loading: false, error: error.message } })
        console.log(error);
    }
}
export const getPosts = (id) => async (dispatch, getstate) => {
    try {
        dispatch({ type: "getPosts", payload: { data: [], loading: true, error: "" } })
        const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        const newData = JSON.parse(JSON.stringify(data))
        dispatch({ type: "getPosts", payload: { data: [...newData], loading: false, error: "" } })
    } catch (error) {
        dispatch({ type: "getPosts", payload: { data: [], loading: false, error: error.message } })
        console.log(error);
    }
}
export const getComments = (id) => async (dispatch, getstate) => {
    try {
        dispatch({ type: "getComments", payload: { data: [], loading: true, error: "" } })
        const { data } = await axios(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        const newData = JSON.parse(JSON.stringify(data))
        dispatch({ type: "getComments", payload: { data: [...newData], loading: false, error: "" } })
    } catch (error) {
        dispatch({ type: "getComments", payload: { data: [], loading: false, error: error.message } })
        console.log(error);
    }
}