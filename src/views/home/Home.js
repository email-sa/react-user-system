import React from "react";
import Silder from "../../components/nav/LeftNav";

import "./index.scss";

class Home extends React.Component {
    render() {
        return (
            <div className="user-home flex flex-grow">
                <Silder className="user-home-left"></Silder>
                <div className="user-home-right">1111</div>
            </div>
        );
    }
}
export default Home;
