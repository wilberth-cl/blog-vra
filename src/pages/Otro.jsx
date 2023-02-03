import Layout from '../component/layout/Layout'

function Otro(props){
    return (
        <Layout>
            <h1>{props.pageName}</h1>
        </Layout>
    );
}

export default Otro;