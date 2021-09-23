import { faSearch, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import teacherImg from "./teacher.png";
import iconStudent from "../../icons/iconStudent.png";
import coinIcon from "./../../icons/coins.png";
import starIcon from "./../../icons/star.png";
import { Link, NavLink } from "react-router-dom";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import GroupTeachersWrapper from "./groupTeachrsWrapper";
import { Button } from "@material-ui/core";
const Teachers = [
  {
    img: teacherImg,
    nameTech: "Abdujalol Xalimov",

    hour: "44 000",
    star: 4,
    person: 16,
    students: 55,
    experience: "1 yil",
    bridge: "C1",
    certificate: "IELTS-6.5",
    lenguages: "Rus tili,Ingliz tili",
  },
  {
    img: teacherImg,
    nameTech: "Abdujalol Xalimov",

    hour: "44 000",
    star: 4,
    person: 16,
    students: 55,
    experience: "1 yil",
    bridge: "C1",
    certificate: "IELTS-6.5",
    lenguages: "Rus tili,Ingliz tili",
  },
  {
    img: teacherImg,
    nameTech: "Abdujalol Xalimov",

    hour: "44 000",
    star: 4,
    person: 16,
    students: 55,
    experience: "1 yil",
    bridge: "C1",
    certificate: "IELTS-6.5",
    lenguages: "Rus tili,Ingliz tili",
  },
  {
    img: teacherImg,
    nameTech: "Abdujalol Xalimov",

    hour: "44 000",
    star: 4,
    person: 16,
    students: 55,
    experience: "1 yil",
    bridge: "C1",
    certificate: "IELTS-6.5",
    lenguages: "Rus tili,Ingliz tili",
  },
];
const GroupTeachrs = () => {
  return (
    <GroupTeachersWrapper>
      <div className=" ">
        {" "}
        <div className="cause w-100">
          <div className="container py-5">
            <InputGroup>
              <Input className="Input" placeholder="Izlash..." />
              <InputGroupAddon addonType="prepend">
                <InputGroupText className="p-3 input_headPage">
                  {" "}
                  <Link to="/groupTeachrs" className="text-white">
                    <FontAwesomeIcon icon={faSearch} />{" "}
                  </Link>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <div></div>
          </div>
        </div>
        <div className="container ">
          <div className="py-5">
            <div className="row ">
              {Teachers.map((value) => (
                <div className="col-md-6 my-2  ">
                  <div className="informationTecher">
                    <div className="row d-flex align-items-center ">
                      <div className="col-md-6 w-md-100 px-0">
                        <img src={value.img} alt="" />
                      </div>
                      <div className="col-md-6 px-0">
                        <h1> {value.nameTech}</h1>
                        <p className="colorSucces ">
                          <img className="pe-2" src={iconStudent} alt="" />
                          <span>Matematika</span>
                        </p>
                        <p className="colorSucces ">
                          <img className="pe-2" src={coinIcon} alt="" />{" "}
                          <span className="colorPrimary h4 mb-0">
                            {" "}
                            {value.hour}
                          </span>
                          <span>/soat</span> <img src={starIcon} alt="" />{" "}
                          <span className="colorPrimary h4 mb-0">
                            {" "}
                            {value.star}{" "}
                          </span>
                          <span className="colorGreen"> {value.person} </span>
                          shaxs
                        </p>
                        <p className="colorSucces ">
                          <FontAwesomeIcon icon={faUserFriends} />{" "}
                          <span className="colorGreen">{value.students} </span>
                          talaba{" "}
                        </p>
                        <p className="colorSucces ">
                          Tajriba:{" "}
                          <span className="colorGreen">
                            {" "}
                            {value.experience}
                          </span>{" "}
                          , Daraja:{" "}
                          <span className="colorGreen"> {value.bridge}</span> ,
                          Sertifikat:{" "}
                          <span className="colorGreen">
                            {" "}
                            {value.certificate}
                          </span>{" "}
                          , Qaysi tillarni biladi:{" "}
                          <span className="colorGreen">{value.lenguages}</span>{" "}
                          .</p>
                       <div className="d-flex justify-content-between p-3">
                       
                        <Link className="text-start ">
                          <span className="colorGreen w-100 pt-3 text-start">
                            Batafsil
                          </span>
                        </Link>
                        <Button className="mx-2 kirish" variant="outlined">
                          <NavLink
                            className=" colorPrimary kirishText"
                            activeClassName="disActive"
                            to=""
                          >
                            Band qilish
                          </NavLink>
                        </Button>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GroupTeachersWrapper>
  );
};

export default GroupTeachrs;
