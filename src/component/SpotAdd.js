import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, FormControl, Container, Form, Row, Col } from 'react-bootstrap';

const INITIAL_FORM = {
    name : "",
    address : "",
    rating : "",
    type : "",
    picture: ""
}

class SpotForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        formData : INITIAL_FORM
      }
    }
  
    componentDidMount(){
      if(this.props.location.pathname!=="/new"){
        console.log("Here")
        const updateSpotId = this.props.match.params.id;
        const updateSpot = this.props.spots.find(spot=> spot.id===Number(updateSpotId));
        this.setState({
          formData : {
            ...updateSpot
          }
        })
      }
    }
  
    handleSubmit = (e) =>{
      e.preventDefault();
      this.props.onSpotAddUpdate(this.state.formData);
      this.props.history.push('/');
    }
  
    getRandomNumber = () => {
      return Math.round(Math.random() * (220 - 180) + 180)
    }
  
    handleChange = (e) =>{
      let {value,name} = e.target;
      if(name==='picture'){
        value = `http://picsum.photos/${this.getRandomNumber()}/${this.getRandomNumber()}`;
      }
      const newFormData = Object.assign({},this.state.formData);
      newFormData[name] = value;
      this.setState({formData: newFormData});
    }

    handleReset = () =>{
        this.setState({formData:INITIAL_FORM})
    }
  
    render(){
      const { formData } = this.state;
      return (
        <Container className="FormContainer">
          <Row className="FormHeaderRaw"> <h3>Add a new Tourist Place</h3> </Row>
          <Form onSubmit={this.handleSubmit}>
  
            <Form.Group as={Row} >
              <Form.Label column sm={2}>Name: </Form.Label>
              <Col sm={10}>
                <Form.Control 
                  name="name" 
                  type="text"
                  autoComplete="off" 
                  value={formData.name} 
                  onChange={this.handleChange} 
                />
              </Col>
            </Form.Group>
  
            <Form.Group as={Row} >
              <Form.Label column sm={2}>Address: </Form.Label>
              <Col sm={10}>
                <Form.Control 
                  name="address" 
                  type="text"
                  autoComplete="off" 
                  value={formData.address} 
                  onChange={this.handleChange} 
                  />
              </Col>
            </Form.Group>
  
            <Form.Group as={Row} >
              <Form.Label column sm={2}>Rating: </Form.Label>
              <Col sm={10}>
                <Form.Control 
                  name="rating"
                  type="text"
                  autoComplete="off" 
                  value={formData.rating} 
                  onChange={this.handleChange} 
                />
              </Col>
            </Form.Group>
  
            <Form.Group as={Row}>
              <Form.Label column sm={2}>Type: </Form.Label>
              <Col sm={10}>
                <FormControl as="select" name="type" value={formData.type} onChange={this.handleChange} >
                  <option>select</option>
                  {this.props.spotTypes.map(spotType=>(
                    <option 
                      key={spotType}
                    >
                        {spotType}
                    </option>
                  ))}
                </FormControl>
              </Col>
            </Form.Group>
  
            <Form.Group as={Row} >
              <Form.Label column sm={2}>
                Picture:
              </Form.Label>
              <Col sm={10}>
                <input name="picture" type="file" onChange={this.handleChange} className="form-control"/>
              </Col>
            </Form.Group>
            
            <Form.Group as={Row} >
              <Col sm={4} className="FormButtonColumn">
                <Button className="btn btn-warning" onClick={this.handleReset}>Reset</Button>
                <Button className="btn btn-success" type="submit" >Submit</Button>
              </Col>
            </Form.Group>
          </Form>
            <Link to={{pathname:"/"}}><ul><p className="BackToTouristList">Back to Tourist Place List</p></ul></Link>
        </Container>
      )
    }
}

const mapStateToProps = (state) =>{
  return {
    spots: state.spots,
    spotTypes: state.spotTypes
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onSpotAddUpdate : (data)=> dispatch({type:"ADD_UPDATE_SPOT",data:data})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SpotForm);

