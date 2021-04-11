import React from "react";
import Silder from "../../components/nav/Silder";

import "./index.scss";

class Home extends React.Component {
    render() {
        return (
            <div className="user-home flex flex-grow">
                <Silder {...this.props} className="user-home-left"></Silder>
                <div className="user-home-right padding-20">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default Home;
