import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import HeaderWrapper from "./headerWrapper";
import logo from "./Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import { Router } from "react-router";
import { Nav } from "reactstrap";

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

const Header = () => {
  const category = Router;
  console.log(category);
  return (
    <HeaderWrapper>
      <div className="header   ">
        <div className="container headerContainer">
          <img src={logo} className="logo" alt="" />
          <ul>
            {headerMap.map((v, i) => {
              return (
                <li key={i}>
                  <NavLink
                    exact={v.exact}
                    className="linksHeader"
                    activeClassName="active"
                    to={v.to}
                  >
                    {v.title}
                  </NavLink>
                </li>
              );
            })}
            <li>
              <NavLink className=" " to="/registeration">
                <Button className="register" variant="contained">
                  Registratsiya
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink className=" " activeClassName="disActive" to="">
                <Button className="mx-2 kirish" variant="outlined">
                  Kirish
                </Button>
              </NavLink>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
