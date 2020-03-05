import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col, ListGroup, ListGroupItem, Card, CardText, Button, CardColumns, CardTitle, CardBody } from 'reactstrap'
import update from 'react-addons-update'
import PropTypes from 'prop-types'
import Iframe from 'react-iframe'

export default class Annotator extends Component {
  constructor (props) {
    super(props)
    
  }

  componentDidMount () {

    if (this.props.config.user) {
      
      console.log(this.props.config)
      }
    else {
      axios.post('/api/auth/check')
      .then(Response => {
        this.props.setStateNavbar({
          config: update(this.props.config,{
            user: {$set: Response.data.user},
            logged: {$set: !Response.data.error}
          })
        })

      })
    }
    }
  render () {
    return (
        
        <div className="center-div">
            <br/>
            <h4>Annotator Tool </h4>
            <hr/>
            <br/>
            <Row>
        <Col xs="3"><h3>Questions </h3>
          <ListGroup>
            <ListGroupItem tag="button" action>Is the START seq at the right coordinates?</ListGroupItem>
            <ListGroupItem tag="button" action>Are the Introns and Exons at the right place?</ListGroupItem>
            <ListGroupItem tag="button" action>Other Question</ListGroupItem>
            <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem tag="button" action>Vestibulum at eros</ListGroupItem>
          </ListGroup></Col>
        <Col xs="auto"><Iframe url="https://www.youtube.com/embed/kv4bhktzSZ4"
            width="800px"
            height="512px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/></Col>
        <Col xs="3">
          <h3>Current studied position </h3>
          <ListGroup>
            <ListGroupItem tag="button" action>Chromosome: </ListGroupItem>
            <ListGroupItem tag="button" action>Centisome: </ListGroupItem>
            <ListGroupItem tag="button" action>Position: </ListGroupItem>
            <ListGroupItem tag="button" action>Gene Expression data:</ListGroupItem>
            <ListGroupItem tag="button" action>Strand:</ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      
      <Card width="50%" body outline color="secondary" >
        <CardTitle>Awesome Question Text</CardTitle>
        <CardBody xs='auto'>
          <Button color="success">True</Button>
          <Button color="danger">False</Button>
        </CardBody>
      </Card>
      <br/>
      <hr/>
      <br/>
      </div>
        
    )
  }
}


Annotator.propTypes = {
  waitForStart: PropTypes.bool,
  config: PropTypes.object,
  setStateNavbar: PropTypes.func
}

