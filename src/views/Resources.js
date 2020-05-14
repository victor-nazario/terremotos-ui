
import React, {useState, useEffect} from "react";
import axios from "axios";
import classNames from "classnames";
//terremotos-api.herokuapp.com
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";


const Resource = props => {
  const [resources, setResource] = useState([]);

  const fetchresources = () => {
    if (props.name == 'all') {
      axios.get("http://localhost:8085/resource/fetch").then(res => {
      console.log(res);  
      setResource(res.data);
      });
    } else {
      axios.get("http://localhost:8085/resource/available").then(res => {
      console.log(res);  
      setResource(res.data);
      });
    }
    
  }

  useEffect(() => {
    fetchresources();
  });

  return resources.map((resource, index) => {
    return (
      <tr>
        <td>{resource.name}</td>
        <td>{resource.brand}</td>
        <td>&#36; {resource.price}</td>
        <td>{resource.category}</td>
        <td>{resource.available.toString().toUpperCase()}</td>
      </tr>
    )
  })
};


class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: "all"
    };
  }
  setTableData = name => {
    this.setState({
      tableData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
              <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category"></h5>
                      <CardTitle tag="h2">Resource Table</CardTitle>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        <Button
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.tableData === "all"
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setTableData("all")}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            All
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.tableData === "available"
                          })}
                          onClick={() => this.setTableData("available")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Available
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2" />
                          </span>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Available</th>
                      </tr>
                    </thead>
                    <tbody>
                      <Resource name = {this.state.tableData}/>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Resources;
