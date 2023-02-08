import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component{
    render(){

        return(

            <div className="mx-auto h-full text-center bg-slate-900 border-console">
                <Header />
                    <main>{this.props.children}</main>
                <Footer />
            </div>

        );

    }
}

export default Layout;