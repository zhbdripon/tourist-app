import './App.css';
import React from 'react';
import { Button, Table, FormGroup, FormControl, Container, Form, Row, Col } from 'react-bootstrap';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      spots : [
        {
          id : 1,
          name: 'Lalbagh Fort',
          address: 'Lalbagh',
          rating: '2',
          picture: "./images/lalbagh.jpg"
        },
        {
          id : 2,
          name: 'Lalbagh Fort',
          address: 'Lalbagh',
          rating: '2',
          picture: "./images/lalbagh.jpg"
        },
        {
          id : 3,
          name: 'Lalbagh Fort',
          address: 'Lalbagh',
          rating: '2',
          picture: "./images/lalbagh.jpg"
        }
      ]
    }
  }

  handleItemDelete = (id) => {
    const newSpotsList = this.state.spots.filter(item=> item.id!==id);
    this.setState({spots:newSpotsList});
  }

  render(){
    return (
      <Container>
        <form>
          <FormGroup>
            <FormControl placeholder="Enter name to search" />
          </FormGroup>
        </form>
        <Table responsive>
          <thead>
            <tr>
              <th>NAME</th>
              <th>ADDRESS</th>
              <th>RATING</th>
              <th>PICTURE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {this.state.spots.map((spot,ind)=>{
              return (
                <tr key={spot.id} className={ind%2?"TableRowOdd":null}>
                  <td>{spot.name}</td>
                  <td>{spot.address}</td>
                  <td>{spot.rating}</td>
                  <td>
                    <img 
                      alt={spot.name}
                      height={200}
                      width={200} 
                      src={require(`${spot.picture}`).default}/>
                  </td>
                  <td> 
                      <div className="TableButtonContainer">
                        <Button>Update</Button>
                        <Button onClick={()=>this.handleItemDelete(spot.id)}>Delete</Button>
                      </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <Button className="CreateNewButton">Create New Tourist Place</Button>
      </Container>
    )
  }
}

class SpotForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      formData : {
        name : "",
        address : "",
        rating : "",
        type : "",
        Picture: ""
      }
    }
  }

  render(){
    return (
      <Container className="FormContainer">
        <Row className="FormHeaderRaw">
          <h3>Add a new Tourist Place</h3>
        </Row>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Name:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Address:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Rating:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} >
            <Form.Label column sm={2}>
              Type:
            </Form.Label>
            <Col sm={10}>
            <select class="form-control">
              <option>Select Type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            </Col>

          </Form.Group>
          <Form.Group as={Row} >
            <Form.Label column sm={2}>
              Picture:
            </Form.Label>
            <Col sm={10}>
              <input type="file" class="form-control"/>
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} >
            {/* <Col sm={8}>md=4</Col> */}
            <Col sm={4} className="FormButtonColumn">
              <Button type="submit">Sign in</Button>
              <Button >Reset</Button>
            </Col>
          </Form.Group>
        </Form>
          <p className="BackToTouristList"><ul>Back to Tourist Place List</ul></p>
      </Container>
    )
  }
}

function App() {
  return (
    <div className="App-header">
      <Dashboard/>
      <SpotForm/>
    </div>
  );
}

export default App;
