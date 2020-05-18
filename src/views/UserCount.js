import React, {useState, useEffect} from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle
  } from "reactstrap";

const ChartUser = () => {
    const [chartData, setChartData] = useState({});
    const [totalUsers, setTotalUsers] = useState([])

    let u = {};
  
    const fetchData = () => {
        axios.get("http://terremotos-api.herokuapp.com/admin/count/all").then(res => {
            u.admin = res.data;
        });
        axios.get("http://terremotos-api.herokuapp.com/supplier/count/all").then(res => {
            u.supplier = res.data;
        });
        setTimeout(function(){ axios.get("http://terremotos-api.herokuapp.com/consumer/count/all").then(res => {
            u.consumer = res.data;
            console.log(u);
            setChartData({
                labels: ["Admin", "Supplier", "Consumer"],
                datasets: [
                    {
                      label: "User",
                      fill: true,
                      borderColor: "rgba(29,140,248,0.1)",
                      borderWidth: 1,
                      backgroundColor: ['rgba(29,140,248,0.5)', 'rgba(72,72,176,0.6)', 'rgba(66,134,121,0.5)'],
                      hoverBackgroundColor: ['#1f8ef1', '#d048b6', '#00d6b4'],
                      borderDash: [],
                      data: [u.admin, u.supplier, u.consumer]
                    }
                  ]
              });
              setTotalUsers([u.admin+u.supplier+u.consumer]);
        });  }, 2000);
            
    }
  
    useEffect(() => {
      fetchData();
    }, []);
    
    return (
        <Card className="card-chart">
            <CardHeader>
                <h5 className="card-category">Total Users</h5>
                <CardTitle tag="h3">
                <i className="tim-icons icon-single-02 text-info" />{" "}
                {totalUsers}
                </CardTitle>
            </CardHeader>
            <CardBody>
                <div className="chart-area">
                    <Pie
                    data={chartData}
                    options={{
                        maintainAspectRatio: false,
                        legend: {
                        display: false
                        },
                        tooltips: {
                        backgroundColor: "#f5f5f5",
                        titleFontColor: "#333",
                        bodyFontColor: "#666",
                        xPadding: 12,
                        mode: "nearest",
                        intersect: 0,
                        position: "nearest"
                        },
                        responsive: true,
                    }}
                    />
                </div>
            </CardBody>
        </Card>
  );
};

export default ChartUser;
