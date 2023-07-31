import axios from "axios";

export async function addPost(data:any) {
    try {
        // console.log(data);
        await axios.post('http://localhost:6001/addPost', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }).then(data => data).catch(error => error.message)
    } catch (error: any) {
        return error.response?.data.msg || 'An error occurred.'
    }
}

