import React, { Component } from 'react';
import './AdminHome.css';

class AdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: ["Loading..."],
            users: ["Loading..."]
        };
    }

    componentDidMount() {
        fetch('/admin', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.props.email
            })
        }).then(res => res.json())
        .then(data => {
            this.setState({
                issues: data.issues,
                users: data.users
            });
        });
    }

    render() {
        let { issues, users } = this.state;
        return (
            <div id="adminHomeRoot">
                <div id="issuesContainer">
                    <p id="containerTitle">Current Issues</p>
                    {issues.map((issue, index) => <p id="issues" key={index}>{issue}</p> )}
                </div>
                <div id="usersContainer">
                    <p id="containerTitle">Users</p>
                    {users.map((user, index) => <p id="users" key={index}>{user}</p> )}
                </div>
            </div>
        );
    }
}

export default AdminHome;