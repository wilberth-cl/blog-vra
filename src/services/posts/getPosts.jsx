import axios from "axios";

export default async function getPosts(){
    try{
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log("success!", posts);
        return posts;
    }catch(error){
        console.log(error);
        return [];
    }
}