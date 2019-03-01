import React,{Component} from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Profile.css';
import CustPhoto from '../../Assets/images.png';

class ProfilePage extends Component{
    render()
    {
        return (
            <div id="divid">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={2}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Details</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Posts Posted</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Change Password</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Edit Profile1</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <h1 style={{color:'red'}}>Your Profile Details</h1>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <h1 style={{color:'red'}}>Your Posts</h1>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <h1 style={{color:'red'}}>Change Your Password</h1>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
          <h1 style={{color:'red'}}>Change Your Profile</h1>
        </Tab.Pane>
      </Tab.Content>
    </Col>
    <Col id="colid" sm={2}>
        <Tab.Pane eventKey="first">
        <img id="f1" src={CustPhoto}/>
        <p >This is Photo</p>
        </Tab.Pane>
    </Col>
   
    
  </Row>
</Tab.Container>  
</div>      
        );
    }
    
}
export default ProfilePage;