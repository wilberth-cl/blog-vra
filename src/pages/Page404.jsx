import Layout from '../component/layout/Layout'
import { SectionTitlePage } from '../component/layout/SectionTitlePage';

function Page404(props){
    retunr (
        <Layout>
            <SectionTitlePage text={props.msgPage} />
        </Layout>
    );
}

export default Page404;