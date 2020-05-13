
import React, {useState, useEffect} from "react";
import axios from "axios";
//terremotos-api.herokuapp.com
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";


const Resource = () => {
  const [resources, setResource] = useState([]);

  const fetchresources = () => {
    axios.get("http://localhost:8085/resource/fetch").then(res => {
      console.log(res);  
      setResource(res.data);
    });
  }

  useEffect(() => {
    fetchresources();
  }, []);

  return resources.map((resource, index) => {
    return (
      <tr>
        <td>{resource.name}</td>
        <td>{resource.brand}</td>
        <td>&#36; {resource.price}</td>
        <td>{resource.category}</td>
        <td>{resource.available}</td>
      </tr>
    )
  })
};


class Resources extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Resource Table</CardTitle>
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
                      <Resource />
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
