import React from "react";
import { Link, NavLink } from "react-router-dom";
import RegisterationWrapper from "./registerationWrapper";
import Button from "@material-ui/core/Button";
import forTeacher from "./registrationForTeacher.png";
import forStudent from "./registrationForStuden.png";
const Registeration = () => {
  return (
    <RegisterationWrapper>
      <div className="registeration">
        <div className="textRegistiration py-5">
          <h3 className="text-center">
            Ro‘yxatdan o‘tish(O‘qituvchi va o‘quvchilar uchun)
          </h3>
          <p className="text-center">
            Iltimos, ro‘yxatdan o‘tish uchun bo‘limni tanlang
          </p>
        </div>
        <div className="container">
          <div className="row my-5">
          <div className="col-md-6 ">
             <div className="py-5 cardRegister">
             <img className="" src={forTeacher} alt="" />
             <div className="w-100 p-4">
             <Button className="register" variant="contained">
                <Link  className=" registertext " to="/registiratsiyaForStudents">
                  Registratsiya
                </Link>
              </Button>
             </div>
             </div>
            </div>
            <div className="col-md-6  ">
            <div className="py-5 cardRegister">
             <img className="" src={forStudent} alt="" />
             <div className="w-100 p-4">
             <Button className="register" variant="contained">
                <Link className=" registertext " to="/registeration">
                  Registratsiya
                </Link>
              </Button>
             </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </RegisterationWrapper>
  );
};

export default Registeration;
