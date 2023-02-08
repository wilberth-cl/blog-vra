import Layout from '../component/layout/Layout';
import { SectionTitlePage } from '../component/layout/SectionTitlePage';

function Home(props){
    return(
        <Layout>
            <SectionTitlePage text={props.pageName} />
        </Layout>
    );
}

export default Home;