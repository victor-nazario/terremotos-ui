/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";
import Resources from "./views/Resources";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/resource",
    name: "Resources",
    icon: "tim-icons icon-cart",
    component: Resources,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Manage Users",
    icon: "tim-icons icon-single-02",
    component: TableList,
    layout: "/admin"
  }  
];
export default routes;
