import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Box,
  Button,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import DashboardCss from "./dashboardCss";
import profil from "./profil.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MailIcon from "@mui/icons-material/Mail";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import { Planes } from "./pages/plane";
import bookIcon from "./icons8-book-64.png";
import studentIcon from "./icons8-student-48.png";
import messageIcon from "./icons8-message-64.png";
import settingsIcon from "./icons8-настройки-24.png";
import LessonSchedule from "./pages/lessonSchedule";
import iconBars from "./icons8-меню-24.png"
function Dashboard() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [selectedValue, setSelectedValue] = useState(false);

  const hideBar = () => {
    setSelectedValue(!selectedValue);
  };

  return (
    <DashboardCss>
      <div className="d-flex w-100">
        <div className={`information ${selectedValue ? "d-block" : "d-none"} `}>
          <h1 className="text-center pb-3 title text-white">Kabinet</h1>

          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <span>
                  <img src={bookIcon} className="icons" alt="" /> O'quv jarayoni
                </span>
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}> </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <NavLink defaultChecked activeClassName="active" to="/plane">
                  <span>O'quv reja</span>
                </NavLink>
                <NavLink activeClassName="active" to="/lessonSchedule">
                  <span>Dars Jadval</span>
                </NavLink>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              {/* <Typography sx={{ width: '33%', flexShrink: 0 }}> </Typography> */}
              <Typography sx={{ color: "text.secondary" }}>
                <span>
                  {" "}
                  <img src={studentIcon} className="icons" alt="" /> Talaba
                  Ma'lumoti
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <img src={messageIcon} className="icons" alt="" /> Xabarlar
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <span>
                  {" "}
                  <img src={settingsIcon} className="icons" alt="" /> Sozlamalar
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="content ">
          {" "}
          <header className="shadow  d-flex justify-content-between    align-content-center">
            <Button className="bar my-0  py-2 " onClick={hideBar}>
             <img src={iconBars} alt="" />
            </Button>{" "}
            <div className="d-flex  align-items-center">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>{" "}
              <h5>Sardor Temirov</h5>
              <img className="profil p-2" src={profil} alt="" />
            </div>
          </header>
          <Switch>
            <Route path="/plane" exact>
              <Planes />
            </Route>
            <Route path="/lessonSchedule" exact>
              <LessonSchedule />
            </Route>
          </Switch>
        </div>
      </div>
    </DashboardCss>
  );
}

export default Dashboard;
