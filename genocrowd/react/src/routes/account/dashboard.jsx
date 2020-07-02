import React, { Component } from "react";
import {
  Button,
  CardBody,
  Row,
  Container,
  Col,
  Card,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardHeader,
  Progress,
  ListGroup,
  ListGroupItem,
  Table,
} from "reactstrap";
import PropTypes from "prop-types";
import Identicon from "react-identicons";
import { Redirect } from "react-router";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
    };
    this.setStart = this.setStart.bind(this);
  }

  setStart() {
    this.setState({ start: true });
  }
  render() {
    let html = <Redirect to="/annotator" />;
    if (this.state.start === false) {
      html = (
        <Container>
          <Row>
            <Col>
              <Card className="dashboard-usercards">
                <br></br>
                <CardTitle tag="h3">
                  {this.props.config.user.username}
                </CardTitle>
                <CardSubtitle>GroupName</CardSubtitle>
                <CardBody>
                  <br></br>
                  <Container></Container>
                  <Progress value={2 * 5}></Progress>
                  <br></br>
                  <Identicon
                    size={100}
                    string={this.props.config.user.username}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card body outline className="dashboard-progresscards">
                <CardTitle>Project progress</CardTitle>
                <CardImg
                  size="100%"
                  src="../../../../static/logo/fauxcamembert.png"
                ></CardImg>
                <hr></hr>
                <Button success>Get Started</Button>
              </Card>
            </Col>
            <Col>
              <Row>
                <Card className="dashboard-statcards">
                  <CardHeader>Annotated genes</CardHeader>
                  <CardBody>1000</CardBody>
                </Card>
              </Row>
              <Row>
                <Card className="dashboard-statcards">
                  <CardHeader>Number of annotators</CardHeader>
                  <CardBody>150</CardBody>
                </Card>
              </Row>
              <Row>
                <Card className="dashboard-statcards">
                  <CardHeader>Number of groups</CardHeader>
                  <CardBody>15</CardBody>
                </Card>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="dashboard-hystorycards">
                <ListGroup>
                  <ListGroupItem color="warning ">
                    gene <Button color="success">Resume</Button>
                  </ListGroupItem>
                  <ListGroupItem color="danger">
                    gene <Button color="success">Resume</Button>
                  </ListGroupItem>
                  <ListGroupItem color="success">
                    gene <Button color="success">Resume</Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col>
              <Card>
                <Col>
                  <Card>
                    <CardHeader className="center-div">
                      Top annotators
                    </CardHeader>
                    <CardBody>
                      <Table className="center-div">
                        <thead>
                          <tr>
                            <th>Weekly</th>
                            <th>Global</th>
                          </tr>
                        </thead>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardHeader className="center-div">Top groups</CardHeader>
                    <CardBody>
                      <Table className="center-div">
                        <thead>
                          <tr>
                            <th>Weekly</th>
                            <th>Global</th>
                          </tr>
                        </thead>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
    return html;
  }
}
Dashboard.propTypes = {
  config: PropTypes.object,
};
