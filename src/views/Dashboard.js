
import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import ATable from "./AgregateTable";
import Chart3 from "./TotalRes";
import Chart1 from "./UserCount";


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartExample3,
  chartExample4
} from "variables/charts.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Resource count per category</h5>
                      <CardTitle tag="h2">Total Resources</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Chart3 />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="12">
              <Chart1 />
            </Col>
            <Col lg="6" md="12">
              <ATable />
            </Col>
            {/* <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Daily Sales</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    3,500€
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Completed Tasks</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 12,100K
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample4.data}
                      options={chartExample4.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
          {/* <Row>
            <Col lg="6" md="12">
              <ATable />
            </Col>
            <Col lg="6" md="12">
              {/* <Tables />                  
            </Col>
          </Row> */}
        </div>
      </>
    );
  }
}

export default Dashboard;
