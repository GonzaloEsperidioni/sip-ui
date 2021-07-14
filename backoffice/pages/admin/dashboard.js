import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Dashboard() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="dark" stats icon>
              <CardIcon color="dark">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Empleados</p>
              <h3 className={classes.cardTitle}>402</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                Ultimo mes 400 usuarios accedieron
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="dark" stats icon>
              <CardIcon color="dark">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Partidas jugadas</p>
              <h3 className={classes.cardTitle}>1206</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                Promedio 3 partidas por usuario
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="dark" stats icon>
              <CardIcon color="dark">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Canjes realizados</p>
              <h3 className={classes.cardTitle}>262</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>Puntos usados 26.000</div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="dark" stats icon>
              <CardIcon color="dark">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Puntos regalados</p>
              <h3 className={classes.cardTitle}>500</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>10 regalos</div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>
                Respuestas diarias de la semana
              </h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                Ultimo mes.
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Partidas Jugadas</h4>
              <p className={classes.cardCategory}>
                Juego:{" "}
                <select>
                  <option>Todo</option>
                  <option>Quiz Battle</option>
                </select>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Bar"
                options={completedTasksChart.options}
                responsiveOptions={completedTasksChart.responsiveOptions}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Canjes realizados</h4>
              <p className={classes.cardCategory}>
                Producto:{" "}
                <select>
                  <option>Todo</option>
                  <option>Cafe starbucks</option>
                  <option>Descuento Curso UDEMY</option>
                </select>
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <h4>Seccion preguntas diarias</h4>
      <input type="date" defaultValue="2021-07-14" />
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Respuestas hoy</p>
              <h3 className={classes.cardTitle}>352</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Ultimas 24 hs
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>vs Dia anterior</p>
              <h3 className={classes.cardTitle}>+ 14%</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>.</div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Porcentaje de respuestas</p>
              <h3 className={classes.cardTitle}>87%</h3>
            </CardHeader>
            <CardFooter stats icon>
              <div className={classes.stats}>
                <Warning />
                352 / 402
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>
                Que tan conforme estas con los beneficios ofrecios por la
                empresa?
              </h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Respuesta", "Cantidad"]}
                tableData={[
                  ["Muy conforme", "202"],
                  ["Conforme", "50"],
                  ["Disconforme", "59"],
                  ["Muy disconforme", "41"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
