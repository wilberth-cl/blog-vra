import React, { useEffect, useState } from 'react';
import getPosts from '../../services/posts/getPosts';

export function usePosts(){
    const [posts, setPosts ] = useState([]);
    useEffect(() => {
        async function fetchPosts(){
            const { data } = await getPosts();
            setPosts(data);
        }
        fetchPosts();
    }, []);

    return posts;
}