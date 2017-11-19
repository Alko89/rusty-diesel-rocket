import React from "react";

export default class Post extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        const { title, body } = this.props;

        return (
            <div>
                <h2 className="content-subhead">{title}</h2>
                <p dangerouslySetInnerHTML={ {__html: body} } />
            </div>
        );
    }
}