import Layout from '../component/layout/Layout'
import { SectionTitlePage } from '../component/layout/SectionTitlePage';

function Otro(props){
    return (
        <Layout>
            <SectionTitlePage text={props.pageName} />
        </Layout>
    );
}

export default Otro;