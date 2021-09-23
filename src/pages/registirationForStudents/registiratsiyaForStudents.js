import React from "react";
import RegistirationForStudentsWrapper from "./registiratsiyaForStudentsWrapper";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const RegistiratsiyaForStudents = () => {
  return (
    <RegistirationForStudentsWrapper>
      <div>
        <div className="py-5 register-for-studen">
          <div className="container ">
            <h3 className="text-center">
              Ro'yxatdan o'tish (O'quvchilar uchun)
            </h3>
            <p className="text-center">
              Iltimos, ro'yxatdan o'tish uchun quyidagi formani to'ldiring:
            </p>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row py-5">
              <div className="col-md-6 py-2">
                {" "}
                <FormGroup>
                  <Label className="text-start w-100 " for="exampleEmail">
                    Ismingiz
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Kiriting"
                  />
                </FormGroup>
              </div>
              <div className="col-md-6 py-2">
                {" "}
                <FormGroup>
                  <Label className="text-start w-100" for="examplePassword">
                  Elektron pochtangiz
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Kiriting"
                  />
                </FormGroup>
              </div>
              <div className="col-md-6 py-2">
                {" "}
                <FormGroup>
                  <Label className="text-start w-100" for="exampleEmail">
                  Telefon raqamingiz
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Kiriting"
                  />
                </FormGroup>
              </div>
              <div className="col-md-6 py-2">
                {" "}
                <FormGroup>
                  <Label className="text-start w-100" for="examplePassword">
                  Telegram akkauntingiz yoki raqamingiz
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Kiriting"
                  />
                </FormGroup>
              </div>
              <div className="col-md-6 py-2">
                {" "}
                <FormGroup>
                  <Label className="text-start w-100" for="examplePassword">
                  Shaxsiy kabinetingiz uchun yangi parol o'ylab toping
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Kiriting"
                  />
                </FormGroup>
              </div>
              <div className="col-md-6 py-2">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Men taklif shartlarini qabul qilaman"
                  />
                  
                </FormGroup>
                <Button className="register" variant="contained">
                  <Link className=" registertext ">Registratsiya</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RegistirationForStudentsWrapper>
  );
};

export default RegistiratsiyaForStudents;
