import { faSearch, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import teacherImg from "./teacher.png";
import iconStudent from "../../icons/iconStudent.png";
import coinIcon from "./../../icons/coins.png";
import starIcon from "./../../icons/star.png";
import { Link, NavLink } from "react-router-dom";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  FormGroup,
  Col,
  Label,
} from "reactstrap";
import GroupTeachersWrapper from "./groupTeachrsWrapper";
import { FormLabel, Slider } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/system";
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
function valuetext(value) {
  return `${value}°C`;
}

function GroupTeachrs() {
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <GroupTeachersWrapper>
      <div className=" ">
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
            <div className="ps-2 pb-0 d-flex row container m-0 justify-content-center  text-center">
              <div className="col-md-4 p-lg-5 pe-lg-0 pt-2 text-center">
                <Box sx={{ width: 224 }}>
                  <FormLabel className="text-center pb-4">
                    Narxni tanlang(ming UZS)
                  </FormLabel>
                  <Slider
                    classes="slider"
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Box>
              </div>
              <div className="col-md-4 py-3 p-lg-5 px-lg-0">
                <FormGroup row>
                  <FormLabel for="exampleSelect" className="pb-4 ">
                    Kursni tanlang
                  </FormLabel>
                  <div>
                    <Input
                      className="m-auto"
                      type="select"
                      name="select"
                      id="exampleSelect"
                    >
                      <option>Kursni tanlang</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </div>
                </FormGroup>
              </div>
             <div className="col-md-4 p-lg-5 d-flex align-content-center justify-content-center">
             <Link Link
                
                className=" justify-content-center colorPrimary kirishText"
                activeClassName="disActive"
              >
                <Button className="mx-2 kirish" variant="outlined">
                  Qidirish
                </Button>
              </Link>
             </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="py-5">
            <div className="row m-0  container ">
              {Teachers.map((value) => (
                <div className="col-md-6 my-2  ">
                  <div className="informationTecher px-2">
                    <div className="row d-flex align-items-center ">
                      <div className="col-md-6 w-md-100 px-0">
                        <img src={value.img} alt="" />
                      </div>
                      <div className="col-md-6 ">
                        <h3> {value.nameTech}</h3>
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
                          .
                        </p>
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
}

export default GroupTeachrs;
