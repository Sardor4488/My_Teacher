import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import HeaderWrapper from "./headerWrapper";
import logo from "./Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import { Router } from "react-router";
import { Nav } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { Fade, Typography } from "@material-ui/core";
//  import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
//  import Typography from '@mui/material/Typography';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};  
const headerMap = [
  {
    title: "Asosiy",
    to: "",
    exact: true,
  },
  {
    title: "Biz haqimizda",
    to: "/about",
    exact: true,
  },
  {
    title: "Blog",
    to: "/blog",
    exact: true,
  },
  {
    title: "Fikrlar",
    to: "/comment",
    exact: true,
  },
];

export default class Header extends Component {
  
  state = { a: false };
  showNav = () => {
    this.setState((state) => {
      return { a: !state.a };
    });
  };

  render() {
    return (
      <HeaderWrapper>
        <div className="header    ">
          <div className="container headerContainer">
            <img src={logo} className="logo" alt="" />
            <ul className="d-flex align-items-center">
              {headerMap.map((v, i) => {
                return (
                  <li
                    className={`md_hide    ${
                      (this.state.a && "nav_start") || ""  }`}  key={i}
                  >
                     
                    <NavLink
                      exact={v.exact}
                      className="linksHeader me-2"
                      activeClassName="active"
                      to={v.to}
                    >
                      {v.title}
                    </NavLink>
                  </li>
                );
              })}
              <li>
                  <Button className="register"     variant="contained">
                <Link className=" registertext " to="/registeration">
                    Registratsiya
                </Link>
                  </Button>
              </li>
              <li>
                  <Button   className="mx-2 kirish" variant="outlined">
                <Link className=" colorPrimary kirishText" activeClassName="disActive" to="">
                    Kirish
                </Link>
                  </Button>
              </li>
              <li className="textPrimary md_show d-none">
                <FontAwesomeIcon
                  onClick={this.showNav}
                  className="ms-3"
                  icon={this.state.a ? faTimes : faBars}
                />
              </li>
             </ul>
          </div>
          {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal> */}
        </div>
      </HeaderWrapper>
    );
  }
}
