import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import LogInWrapper from "./logInWrapper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <LogInWrapper>
      <div className="logIn">
        <div className="bgSucces">
          <div className="container py-5">
            <h3 className="pb-3 text-center">Kirish</h3>
            <p className="text-center">
              Shaxsiy kabinetingizga kirishingiz uchun quyidagi formani
              to'ldiring:
            </p>
          </div>
        </div>
        <div className="container text-start py-5">
          <FormGroup>
            <p className="text-start" for="exampleEmail">
              E-mail
            </p>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="E-mail"
            />
          </FormGroup>
          <FormGroup className="py-4">
            <p className="text-start" for="exampleEmail">
              parol
            </p>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Parol"
            />
          </FormGroup>
          <FormGroup className="text-start">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Eslab qolish"
            />
          </FormGroup>
          <Link className=" registertext " to="/">
            <Button className="register text-start" variant="contained">
              Kirish
            </Button>
          </Link>
        </div>
      </div>
    </LogInWrapper>
  );
};

export default LogIn;
