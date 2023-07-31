import axios from "axios";
import { useAppSelector } from "@/redux/hook";

export function isFriend(username:any) {
    const current = useAppSelector(state => state.username)
    axios.post('http://localhost:6001/isFriend',{currentUser: current,requestedUser : username })
    .then(data => data)
    .catch(error => error)
}
export function addFriend(username:any) {
    const current = useAppSelector(state => state.username)
    axios.post('http://localhost:6001/addFriend',{currentUser: current,requestedUser : username })
    .then(data => data)
    .catch(error => error)
}

