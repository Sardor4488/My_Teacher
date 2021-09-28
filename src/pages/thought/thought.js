import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextareaAutosize } from "@material-ui/core";
import React, { useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import { Link, NavLink, useParams } from "react-router-dom";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import ThoughtWrapper from "./thoughtWrapper";
import iconCamera from "./../../icons/2561351_camera_icon.png";
const Thought = () => {
  const [imgvalue, setImgvalue] = useState("");
  var preview = useRef(null);
  function previewFile(event) {
    console.log(event.target);
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      preview.current.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.current.src = "";
    }
  }

  console.log(imgvalue);
  return (
    <ThoughtWrapper>
      <div className="thought">
        <h1 className="text-center p-5 bg-succes">Fikr qoldirish</h1>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              {" "}
              <FormGroup>
                <Label className="text-start" for="exampleEmail">
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
            <div className="col-md-6">
              {" "}
              <FormGroup>
                <Label className="text-start" for="examplePassword">
                  O‘qish yoki ish joyingiz
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Kiriting"
                />
              </FormGroup>
            </div>
            <div className="row py-4">
              <div className="col-md-2 py-3 pt-5 px-0">
                <label htmlFor="img" className="putImg">
                  <input
                    accept=".jpg, .jpeg, .png"
                    multiple
                    type="file"
                    id="img"
                    onChange={(event) => previewFile(event)}
                    className="visually-hidden"
                  />
                  <img
                    className="iconCamera"
                    ref={preview}
                    src={imgvalue[0]}
                    alt=""
                  />
                </label>
              </div>
              <div className="col-md-10 ">
                <p className="py-2">WebClass haqida fikringiz</p>{" "}
                <TextareaAutosize
                  className="textArea p-3"
                  placeholder="Fikir qoldirish"
                  name="comment"
                  id=""
                  cols="30"
                  rows="10"
                ></TextareaAutosize>
              </div>
            </div>{" "}
            <div className="text-end ">
              <Button className="mx-2 kirish colorPrimary" variant="outlined">
                Bekor qilish
              </Button>
              <Button className="register me-4 text-white" variant="contained">
                Saqlash
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-succes">
          <div className="container">
            <div className="  row p-5">
              <div className="col-md-3">
                <h1 className="text-center">1232</h1>
                <p className="text-center">Talabalar</p>
              </div>
              <div className="col-md-3">
                <h1 className="text-center">10000</h1>
                <p className="text-center">Darslar</p>
              </div>
              <div className="col-md-3">
                <h1 className="text-center">42</h1>
                <p className="text-center">Tadbirlar</p>
              </div>
              <div className="col-md-3">
                <h1 className="text-center">35</h1>
                <p className="text-center">O'qituvchilar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThoughtWrapper>
  );
};

export default Thought;
