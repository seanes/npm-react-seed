import React from 'react';

import MyComponent from '../src/index';

class Example extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MyComponent />
            </div>
        )
    }
}

export default Example;