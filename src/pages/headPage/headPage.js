import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import HeadPageWrapper from "./headPageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import howelessonTimeImg from "./ice_screenshot_20210921-091415.png";
import teacherImg from "./teacher.png";
import iconStudent from "../../icons/iconStudent.png";
import coinIcon from "./../../icons/coins.png";
import starIcon from "./../../icons/star.png";
import { Link } from "react-router-dom";
import causeimg1 from "./causeimg1.png";
import causeimg2 from "./causeimg2.png";
import causeimg3 from "./causeimg3.png";
import causeimg4 from "./causeimg4.png";
import sardor from "./Sardor.png";
import Marjona from "./Marjona.png";
import AzizaXojayeva from "./AzizaXojayeva.png";
import eco from "./eco.png";
import nur from "./nur.png";
import ITPark from "./ITPark.png";
import preper from "./Preper.png";
import studyOne from "./StudyOne.png";
import yoshlarAkademiyasi from "./Yoshlar-akademiyasi-50x48 1.png";
import iconLenguage from "./../../icons/iconLenguage.png";
import iconsirkul from "./../../icons/iconSircul.png";
import iconsirkul2 from "./../../icons/iconSirkulP.png";
import menzurk1 from "./../../icons/menzurca1.png";
import komputer from "./../../icons/compyuter.png";
import book from "./../../icons/iconBook.png";
import axios from "axios";
import TeachersApi from "../../date/date";
console.log(TeachersApi.hour);
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
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
const cause = [
  {
    img: causeimg1,
    text: "O’quvchi o’qituvchi  bilan online jonli muloqot",
  },
  {
    img: causeimg2,
    text: "Eng qulay vaqtda hohlagan joyingizdan  o’qish imkoni",
  },
  {
    img: causeimg3,
    text: "Darajangizdan kelib  chiqib individual   yondashuvv",
  },
  {
    img: causeimg4,
    text: "Istalgan vaqtda  o’qituvchiga bog’lanib savol so’rang",
  },
];
const comunuty = [
  {
    img: sardor,
    nameTeacher: "Sardor Xudoyberdiyev",
    task: "Loyiha asoschisi",
    text: "Loyihaning boshqarilishi va  kelajagiga javobberadi. Mijozlarga maximum xizmat  ko'rsatilishini nazorat qiladi.",
  },
  {
    img: AzizaXojayeva,
    nameTeacher: "Nargiza Azizxo'jayeva",
    task: "Bosh menejer",
    text: "Xodimlarimiz va  o'qituvchilarimizning mijozlar  bilan ishlash sifatini tekshiradi.",
  },
  {
    img: Marjona,
    nameTeacher: "Marjona  Makhmudovna",
    task: "Sifat nazorati Menejeri",
    text: "Darslarning sifatli hamda  o'quvchilarimizning yuqori natijalarga erishishi uchun  javob beradi.",
  },
  {
    img: sardor,
    nameTeacher: "Sardor Xudoyberdiyev",
    task: "Loyiha asoschisi",
    text: "Loyihaning boshqarilishi va  kelajagiga javobberadi. Mijozlarga maximum xizmat  ko'rsatilishini nazorat qiladi.",
  },
];

const confidence = [
  {
    img: eco,
  },
  {
    img: ITPark,
  },
  {
    img: studyOne,
  },
  {
    img: nur,
  },
  {
    img: preper,
  },
  {
    img: yoshlarAkademiyasi,
  },
];
const HeadPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // SEACH COURSE FUNCTION!!!!!!!!!!11
  function searchCours(event) {
    console.log(event.target.value);
  }
  return (
    <HeadPageWrapper>
      <div>
        <div className="headPage">
          <div className="container ">
            <div className="headPageContainer">
              <h4 className="py-3 ">Saralangan o‘qituvchilar online bazasi</h4>
              <InputGroup>
                <Input
                  className="Input"
                  onChange={searchCours}
                  placeholder="Izlash..."
                />
                <InputGroupAddon addonType="prepend">
                  <Link to="/groupTeachrs" className="text-white">
                    <InputGroupText className="p-3 input_headPage">
                      <FontAwesomeIcon icon={faSearch} />{" "}
                    </InputGroupText>
                  </Link>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="row p-3">
              <div className="col-md-4">
                <Link className=" ">
                  <div className="category d-flex">
                    <img src={iconLenguage} alt="" />
                    <div className="colorPrimary px-2">
                      <h5 className="">Tillar</h5>
                      <p>26 ta o‘qituvchi</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link>
                  <div className="category categorysirc d-flex">
                    <img src={iconsirkul} alt="" />
                    <img className="iconsirkul2" src={iconsirkul2} alt="" />
                    <div className="colorPrimary px-2 ">
                      <h5 className="">Aniq fanlar</h5>
                      <p>26 ta o‘qituvchi</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link>
                  <div className="category d-flex">
                    <img src={menzurk1} alt="" />
                    <div className="colorPrimary px-2">
                      <h5 className="">Tabiy fanlar</h5>
                      <p>26 ta o‘qituvchi</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6">
                <Link>
                  <div className="category w-75 categorycomp me-0 mt-4 d-flex">
                    <img src={komputer} alt="" />
                    <div className="  px-2">
                      <h5 className="">IT texnologiyalari</h5>
                      <p>26 ta o‘qituvchi</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6">
                <Link>
                  <div className="category categoryBook  ms-0 mt-4 w-75 d-flex">
                    <img src={book} alt="" />
                    <div className="colorPrimary px-2">
                      <h5 className="">IT texnologiyalari</h5>
                      <p>26 ta o‘qituvchi</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="howelessonTime">
          <div className="container">
            <div className="row container">
              <div className="col-md-6 questionText">
                <h2 className="py-3">Darslar qay tarzda o'tiladi?</h2>
                <p className="questionTextp">
                  Online va individual tarzda shaxsiy o‘qituvchi bilan, uyda,
                  ishxonada, va umuman o‘zingizga qulay vaqtdava qulay joyda
                  masofadan o‘rganing.
                </p>
              </div>
              <div className="col-md-6 md-none-padding ps-0">
                <img
                  className="w-100 h-100 howelessonTimeImg"
                  src={howelessonTimeImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ourTeachersTop">
          <div className="container">
            <h1>Bizning TOP o'qituvchilarimiz</h1>
            <p className="pb-2">
              Hoziroq o'zingizga ma'qul ustozni tanlang va o'rganishni boshlang.
              MyTeacher sizga.O'zbekistonning barchaburchagidan eng kuchli va
              saralangan ustozlarni topadi va ushbu ro'yhatda ko'rsatadi.
              DarTslar individual tarzdao'tiladi, har bir dars 1 soatdan davom
              etadi.
            </p>
            <div className="row ">
              {Teachers.map((value) => (
                <div className="col-md-6 my-2  ">
                  <div className="informationTecher">
                    <div className="row d-flex ps-4 align-items-center ">
                      <div className="col-md-5   w-md-100 px-0">
                        <img src={value.img} alt="" />
                      </div>
                      <div className="col-md-7 ps-0 startPadding">
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
                        <Link className="text-start ">
                          <p className="colorGreen w-100 pt-3 text-start">
                            Batafsil
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <Slider {...settings}>
         {mapRoom.map(v=> <div className="p-3">
            <div>
            <img className="w-100 h-100" src= {v.img} alt="" />
            </div>
          </div>)}
         </Slider> */}

            <div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="cause py-5">
          <div className="container ">
            <h1 className="pb-5">Nega aynan MyTeacher?</h1>

            <div className="row ">
              {cause.map((v) => (
                <div className="col-md-3 mt-1">
                  <div className="bg-white py-4   shadowCauce">
                    <img src={v.img} alt="" />
                    <h4 className="text-center">{v.text}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="comunuty py-5">
          <div className="container">
            <h1 className="pb-5">Bizning Professional Jamoa</h1>
            <div className="row ">
              {comunuty.map((v) => (
                <div className="col-md-3 mt-1 px-3">
                  <div className="bg-white py-4   shadowComunity">
                    <img className="imgTeachers" src={v.img} alt="" />
                    <h4 className="text-center text-center py-1">
                      {v.nameTeacher}
                    </h4>
                    <p className="fw-bold text-center py-2">{v.task}</p>
                    <p className="text-center">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <h1 className="py-5">Bizga ishonishadi</h1>
            <div className="row">
              {confidence.map((v) => (
                <div className="col-6 col-md-2">
                  <img src={v.img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HeadPageWrapper>
  );
};

export default HeadPage;
