
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
    axios.get("http://terremotos-api.herokuapp.com/supplier/fetch").then(res => {
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
        <td>{supplier.email}</td>
      </tr>
    )
  })
};

const Users = () => {
  const [users, setUser] = useState([]);

  const fetchUsers = () => {
    axios.get("http://terremotos-api.herokuapp.com/consumer/fetch").then(res => {
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
        <td>{user.email}</td>
      </tr>
    )
  })
};

const Admin = () => {
  const [admins, setAdmins] = useState([]);

  const fetchAdmins = () => {
    axios.get("http://terremotos-api.herokuapp.com/admin/fetch").then(res => {
      console.log(res);
      setAdmins(res.data);
    });
  }

  useEffect(() => {
    fetchAdmins();
  }, []);

  return admins.map((admin, index) => {
    return (
        <tr>
          <td>{admin.id}</td>
          <td>{admin.firstName} {admin.lastName}</td>
          <td>{admin.city}</td>
          <td>{admin.email}</td>
        </tr>
    )
  })
};

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Registered Admins</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                    <tr>
                      <th>System ID</th>
                      <th>Name</th>
                      <th>City</th>
                      <th>Email Address</th>

                    </tr>
                    </thead>
                    <tbody>
                    <Admin />
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Registered Consumers</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>System ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Email Address</th>
                        
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
                  <CardTitle tag="h4">Registered Suppliers</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>System ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Email Address</th>
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
