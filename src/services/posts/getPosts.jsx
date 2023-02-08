import axios from "axios";
import { GET_POSTS_URL } from "../../constants/posts";

export default async function getPosts(){
    try{
        const posts = await axios.get(GET_POSTS_URL);
        console.log("success!", posts);
        return posts;
    }catch(error){
        console.log(error);
        return [];
    }
}