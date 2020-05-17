import React, {useState, useEffect} from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";

const Chart3 = () => {
    const [chartData, setChartData] = useState({});

    let r = {};
  
    const fetchData = () => {
        axios.get("http://terremotos-api.herokuapp.com/babyfood/count/all").then(res => {
            // console.log(res);  
            r.bf = res.data;
        });

        axios.get("http://terremotos-api.herokuapp.com/powergenerator/count/all").then(res => {
            // console.log(res);  
            r.pg = res.data;
        });

        axios.get("http://terremotos-api.herokuapp.com/battery/count/all").then(res => {
            // console.log(res);  
            r.ba = res.data;
        });
        axios.get("http://terremotos-api.herokuapp.com/cannedfood/count/all").then(res => {
            // console.log(res);  
            r.cf = res.data;
        });
        axios.get("http://terremotos-api.herokuapp.com/clothing/count/all").then(res => {
            // console.log(res);  
            r.cl = res.data;
        });
        axios.get("http://terremotos-api.herokuapp.com/diesel/count/all").then(res => {
            // console.log(res);  
            r.d = res.data;
        });
        axios.get("http://terremotos-api.herokuapp.com/tool/count/all").then(res => {
            // console.log(res);  
            r.t = res.data;
        });
        axios.get("http://terremotos-api.herokuapp.com/gasoline/count/all").then(res => {
            // console.log(res);  
            r.gas = res.data;
        });
        axios.get("http://terremotos-api.herokuapp.com/heavyequipment/count/all").then(res => {
            // console.log(res);  
            r.he = res.data;
        });
        axios.get("http://terremotos-api.herokuapp.com/ice/count/all").then(res => {
            // console.log(res);  
            r.ice = res.data;
        });
        axios.get("http://terremotos-api.herokuapp.com/medicaldevices/count/all").then(res => {
            // console.log(res);  
            r.md = res.data;
        });
        axios.get("http://terremotos-api.herokuapp.com/medication/count/all").then(res => {
            // console.log(res);  
            r.meds = res.data;
        });
        axios.get("http://terremotos-api.herokuapp.com/propane/count/all").then(res => {
            // console.log(res);  
            r.pr = res.data;
        });
        axios.get("http://terremotos-api.herokuapp.com/water/count/all").then(res => {
            // console.log(res);  
            r.w = res.data;
        });
        setTimeout(function(){ axios.get("http://terremotos-api.herokuapp.com/dryfood/count/all").then(res => {
            // console.log(res);  
            r.df = res.data;
            console.log(r);
            setChartData({
                labels: ["Baby Food", "Canned Food", "Dry Food", "Water", "Battery", "Propane", "Tool", "PowerGen", "Ice", 
                        "Medical Devices", "Medications", "Heavy Equipment", "Gas", "Diesel", "Clothing"],
                datasets: [
                    {
                      label: "Resource",
                      fill: true,
                      backgroundColor: ["rgba(119,52,169,0)"],
                      hoverBackgroundColor: ["rgba(119,52,169,0)"],
                      borderColor: "#d048b6",
                      borderWidth: 2,
                      borderDash: [],
                      borderDashOffset: 0.0,
                      data: [r.bf, r.cf, r.df, r.w, r.ba, r.pr, r.t, r.pg, r.ice, r.md, r.meds, r.he, r.gas, r.d, r.cl]
                    }
                  ]
              });
        });  }, 5000);
        axios.get("http://terremotos-api.herokuapp.com/dryfood/count/all").then(res => {
            // console.log(res);  
            r.df = res.data;
            console.log(r);
            setChartData({
                labels: ["Baby Food", "Canned Food", "Dry Food", "Water", "Battery", "Propane", "Tool", "PowerGen", "Ice", 
                        "Medical Devices", "Medications", "Heavy Equipment", "Gas", "Diesel", "Clothing"],
                datasets: [
                    {
                      label: "Resource",
                      fill: true,
                      backgroundColor: ["rgba(119,52,169,0)"],
                      hoverBackgroundColor: ["rgba(119,52,169,0)"],
                      borderColor: "#d048b6",
                      borderWidth: 2,
                      borderDash: [],
                      borderDashOffset: 0.0,
                      data: [r.bf, r.cf, r.df, r.w, r.ba, r.pr, r.t, r.pg, r.ice, r.md, r.meds, r.he, r.gas, r.d, r.cl]
                    }
                  ]
              });
        });      
    }
  
    useEffect(() => {
      fetchData();
    }, []);

    // let ctx = canvas.getContext("2d");

    // let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    // gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    // gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    // gradientStroke.addColorStop(0, "rgba(119,52,169,0)");
  
    return (
    <div className="chart-area">
        <Bar
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
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
            },
            responsive: true,
            scales: {
            yAxes: [
                {
                gridLines: {
                    drawBorder: false,
                    color: "rgba(225,78,202,0.1)",
                    zeroLineColor: "transparent"
                },
                ticks: {
                    suggestedMin: 10,
                    suggestedMax: 50,
                    padding: 20,
                    fontColor: "#9e9e9e"
                }
                }
            ],
            xAxes: [
                {
                gridLines: {
                    drawBorder: false,
                    color: "rgba(225,78,202,0.1)",
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "#9e9e9e"
                }
                }
            ]
            }
          }}
        />
      </div>
  );
};

export default Chart3;

/* <Card className="card-chart">
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
</Card> */