import React,{Component} from 'react';

class ViewDetails extends Component{
    render() {
        return(
            <div>
            <h3>Name      : Customer Name</h3>
            <h3>Id        : Customer Id</h3>
            <h3>Address   : Customer Address</h3>
            <h3>Age       : Customer Age</h3>
            <h3>Mobile No : Phone no</h3>
            </div>
        );
    }
}

export default ViewDetails;