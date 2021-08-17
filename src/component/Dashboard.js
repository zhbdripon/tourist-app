import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Table, FormGroup, FormControl, Container, Row, Col } from 'react-bootstrap';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search:""
    }
  }

  handleChange = (e) =>{
    this.setState({search: e.target.value.toLowerCase()});
  }

  render(){
    const filteredSpots = this.props.spots.filter(spot=> spot.name.toLowerCase().includes(this.state.search));
    return (
      <Container>
        <FormGroup as={Row}>
          <Col sm={6}>
            <FormControl 
              name="search" 
              autoComplete="off" 
              value={this.state.search} 
              onChange={this.handleChange} 
              placeholder="Enter name to search" />
          </Col>
        </FormGroup>
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
            {filteredSpots.map((spot,ind)=>{
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
                      src={spot.picture}/>
                  </td>
                  <td> 
                      <div className="TableButtonContainer">
                        <Link to={'/'+spot.id}><Button>Update</Button></Link>
                        <Button className="btn btn-danger" onClick={()=>this.props.onDelete(spot.id)}>Delete</Button>
                      </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <Link to={{pathname:'/new'}}><Button className="CreateNewButton">Create New Tourist Place</Button></Link>
      </Container>
    )
  }
}

export default Dashboard;
