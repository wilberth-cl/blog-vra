import Layout from '../component/layout/Layout';

function Home(props){
    return(
        <Layout>
            <h1>{props.pageName}</h1>
        </Layout>
    );
}

export default Home;