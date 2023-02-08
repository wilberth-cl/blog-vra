import Layout from "../component/layout/Layout";
import { usePosts } from "../hooks/posts/usePosts";
import ListPosts from "../component/posts/ListsPosts";
import { SectionTitlePage } from "../component/layout/SectionTitlePage";

function Posts(props){
    const posts = usePosts();

    return(
        <Layout>
            <SectionTitlePage text={props.pageName}/>
    
            {!posts.length && <p>Loading...</p>}
            {posts.length && (
                <ListPosts posts={posts} />
            )}
            
        </Layout>
    );

}

export default Posts;