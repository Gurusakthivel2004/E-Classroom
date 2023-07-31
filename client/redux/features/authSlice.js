import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    userpicture: "",
    current: "",
    token: "",
    posts: [],
    friends: [],
    notes: [],
    group: {}
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUsername(state,action) {
            state.username = action.payload
        },
        setCurrent(state,action){
            state.current = action.payload
        },
        setUserPicture(state,action){
            state.userpicture = action.payload
        },
        setcurrentGroup(state,action){
            state.group = action.payload
        },
        setPosts(state,action){
            state.posts = action.payload
        },
        setFriends(state,action){
            state.friends = action.payload
        },
        setNotes(state,action){
            state.notes = action.payload
        },
        setToken(state,action){
            state.token = action.payload
        },
        setDefault(state){
            state.username = ""
            state.userpicture = "",
            state.current = "",
            state.token = "",
            state.posts = [],
            state.friends = [],
            state.notes = [],
            state.group = {}
        }
    }
})

export const { setUsername, setCurrent, setUserPicture, setcurrentGroup, setToken, setPosts, setFriends, setNotes, setDefault } = authSlice.actions;
export default authSlice.reducer;