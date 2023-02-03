import React from "react";
class Footer extends React.Component{
    render(){

        return(
            
            <footer className="footer absolute bottom-1 rounded-lg">
                <span className="text-sm sm:text-center"><a href="https://github.com/wilberth-cl" target="_blank" className="hover:underline">wilberth-cl</a> power by <a href="https://github.com/" target="_blank" className="hover:underline">GitHub, Inc</a>.
                </span>
            </footer>

        );

    }
}

export default Footer;