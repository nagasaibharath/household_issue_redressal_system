import React,{Component} from 'react';
import './MyPosts.css';

class MyPosts extends Component{    

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            issues: []
        }
        // console.log("abcd");
        // console.log(this.props.email);
    }

    componentDidMount() {
        //fetch issue details from backend
        fetch('/feed', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email
            })
        }).then(res => res.json())
        .then(data => {
            // console.log(data);
            this.setState({ issues: data });
        });
    }


    render()
    {
        let {issues} = this.state;
        return (
            <div id="profileFeedRoot">
                {issues.map((issue,index) =>
                <p id="issues" key={index}>
                    {issue.complaintName}
                </p>
                )}
            </div>
        );
    }
}

export default MyPosts;