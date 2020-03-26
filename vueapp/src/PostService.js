import axios from 'axios';

const url = 'http://localhost:5000/api/posts';

class PostService {
    static async getPosts() {
        const res = await axios.get(url);
        const arr =  res.data.map((el) => {
            return {
                ...el,
                options: JSON.parse(el.answerOptions)
            }
        });
        return arr

    }
    static InsertPost(text) {
        return axios.post(url, {
            text
        })
    }

    static deletePost(id){
        return axios.delete(`${url}${id}`)
    }

}

export default PostService