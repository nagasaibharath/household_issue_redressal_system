import React,{Component} from 'react';
import './ChangePassword.css'

class ChangePassword extends Component{

    constructor(props){
        super(props);
        this.state={
            email:this.props.email,
            passW:"null",
        }
    }
    

    componentDidMount() {
        //fetch issue details from backend
        fetch('/password', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email
            })
        }).then(res => res.json())
        .then(data => {
            this.setState({ passW: data.password });
            console.log(data.password)
        });
    }

    render()
    {
        return(
            <div>
                <p id="oldPW">
                    Current Password : {this.state.passW}
                </p>
                <p id="NewPW">New Password</p><input type="text" /><br/>
                <p id="ConfirmPW">Confirm Password</p><input type="text"  /><br/>
                <input type="submit"/>
            </div>
        );
    }
}

export default ChangePassword;