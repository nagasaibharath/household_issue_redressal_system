import React,{Component} from 'react';
import './ViewDetails.css';

class ViewDetails extends Component{
    render() {
        return(
            <div id="viewDetailsRoot">
                <table id="abcd">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{this.props.user.fname}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>Customer Address</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>Customer Age</td>
                    </tr>
                    <tr>
                        <td>Phone no</td>
                        <td>Customer Phone no</td>
                    </tr>
                </tbody>
                </table>
            </div>
        );
    }
}

export default ViewDetails;