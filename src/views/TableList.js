
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


const Supplier = () => {
  const [suppliers, setSupplier] = useState([]);

  const fetchSuppliers = () => {
    axios.get("http://localhost:8085/supplier/fetch").then(res => {
      console.log(res);  
      setSupplier(res.data);
    });
  }

  useEffect(() => {
    fetchSuppliers();
  }, []);

  return suppliers.map((supplier, index) => {
    return (
      <tr>
        <td>{supplier.id}</td>
        <td>{supplier.firstName} {supplier.lastName}</td>
        <td>{supplier.city}</td>
        <td>{supplier.zipCode}</td>
      </tr>
    )
  })
};

const Users = () => {
  const [users, setUser] = useState([]);

  const fetchUsers = () => {
    axios.get("http://localhost:8085/consumer/fetch").then(res => {
      console.log(res);  
      setUser(res.data);
    });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return users.map((user, index) => {
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.firstName} {user.lastName}</td>
        <td>{user.city}</td>
        <td>{user.zipCode}</td>
      </tr>
    )
  })
};

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="card-tasks">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Consumer Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>zipCode</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                     <Users />
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Supplier Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>zipCode</th>
                      </tr>
                    </thead>
                    <tbody>
                      <Supplier />
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

export default Tables;
