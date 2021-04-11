import React, { Component } from "react";

export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            };
        }
        async componentDidMount() {
            let { default: component } = await importComponent();
            console.log("component", component);
            this.setState({ component });
        }
        render() {
            let MyComponent = this.state.component;
            return MyComponent ? <MyComponent {...this.props} /> : null;
        }
    }
    return AsyncComponent;
}
