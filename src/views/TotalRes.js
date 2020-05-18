import React, {useState, useEffect} from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

const Chart3 = () => {
    const [chartData, setChartData] = useState({});

    let r = {};
  
    const fetchData = () => {
        axios.get("https://terremotos-api.herokuapp.com/babyfood/count/all").then(res => {
            r.bf = res.data;
        });
        axios.get("https://terremotos-api.herokuapp.com/powergenerator/count/all").then(res => {
            r.pg = res.data;
        });
        axios.get("https://terremotos-api.herokuapp.com/battery/count/all").then(res => {
            r.ba = res.data;
        });
        axios.get("https://terremotos-api.herokuapp.com/cannedfood/count/all").then(res => {
            r.cf = res.data;
        });
        axios.get("https://terremotos-api.herokuapp.com/clothing/count/all").then(res => {
            r.cl = res.data;
        });
        axios.get("https://terremotos-api.herokuapp.com/diesel/count/all").then(res => {
            r.d = res.data;
        });
        axios.get("https://terremotos-api.herokuapp.com/tool/count/all").then(res => {
            r.t = res.data;
        });
        axios.get("https://terremotos-api.herokuapp.com/gasoline/count/all").then(res => {
            r.gas = res.data;
        });
        axios.get("https://terremotos-api.herokuapp.com/heavyequipment/count/all").then(res => {
            r.he = res.data;
        });
        axios.get("https://terremotos-api.herokuapp.com/ice/count/all").then(res => {
            r.ice = res.data;
        });
        axios.get("https://terremotos-api.herokuapp.com/medicaldevices/count/all").then(res => {
            r.md = res.data;
        });
        axios.get("https://terremotos-api.herokuapp.com/medication/count/all").then(res => {
            r.meds = res.data;
        });
        axios.get("https://terremotos-api.herokuapp.com/propane/count/all").then(res => {
            r.pr = res.data;
        });
        axios.get("https://terremotos-api.herokuapp.com/water/count/all").then(res => {
            r.w = res.data;
        });
        setTimeout(function(){ axios.get("https://terremotos-api.herokuapp.com/dryfood/count/all").then(res => {
            r.df = res.data;
            console.log(r);
            setChartData({
                labels: ["Baby Food", "Canned Food", "Dry Food", "Water", "Battery", "Propane", "Tool", "PowerGen", "Ice", 
                        "Medical Devices", "Medications", "Heavy Equipment", "Gas", "Diesel", "Clothing"],
                datasets: [
                    {
                      label: "Resource",
                      fill: true,
                      backgroundColor: ["rgba(29,140,248,0.2)"],
                      hoverBackgroundColor: ["rgba(29,140,248,0.2)"],
                      borderColor: "#1f8ef1",
                      borderWidth: 2,
                      borderDash: [],
                      borderDashOffset: 0.0,
                      data: [r.bf, r.cf, r.df, r.w, r.ba, r.pr, r.t, r.pg, r.ice, r.md, r.meds, r.he, r.gas, r.d, r.cl]
                    }
                  ]
              });
        });  }, 2000);
            
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
                    color: "rgba(29,140,248,0.0)",
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
                    color: "rgba(29,140,248,0.1)",
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
