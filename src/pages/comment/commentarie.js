import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import CommentWrapper from "./commentWrapper";
  import imgTeach from "./imgTeach.png"
 const Comments = [
   {
     img:imgTeach,
     nameTeacher:"Shukrullo",
     function:"MyTeacher/Webclass o'quvchisi",
     text:"Assalomu alaykum.  Hamma darslar tushunarli bo‘lyapti.  Manga ma‘qul keldi. Ustozim ham hamma mavzuni tushunarli qilib yaxshi o‘tib   beryaptilar, Ancha o‘zimda o'zgarish bo'ldi.                "
   },
   {
    img:imgTeach,
    nameTeacher:"Shukrullo",
    function:"MyTeacher/Webclass o'quvchisi",
    text:"На протяжении последних двух месяцев занимаюсь с Джавохиром изучением математики. С момента окончания последнего учебного заведения прошел десяток лет, и полученные в те времена знания растерялись. Так вот Джавохир помогает мне их собирать, и открывать для  себя по новому, методично, шаг за шагом, задача за задачей. Что-то дается легко, что-то дается сложно, но Джавохир всегда находит способ донести информацию так чтобы она была полностью усвоена. С административной стороны никаких вопросов не возникало - все четко,  вовремя и предсказуемо. И если сейчас у меня спросить об учителе математики, я в первую очередь буду советовать Джавохира. "
  },
  {
    img:imgTeach,
    nameTeacher:"Shukrullo",
    function:"MyTeacher/Webclass o'quvchisi",
    text:"Assalomu alaykum.  Hamma darslar tushunarli bo‘lyapti.  Manga ma‘qul keldi. Ustozim ham hamma mavzuni tushunarli qilib yaxshi o‘tib   beryaptilar, Ancha o‘zimda o'zgarish bo'ldi.                "
  },
  {
    img:imgTeach,
    nameTeacher:"Shukrullo",
    function:"MyTeacher/Webclass o'quvchisi",
    text:"На протяжении последних двух месяцев занимаюсь с Джавохиром изучением математики. С момента окончания последнего учебного заведения прошел десяток лет, и полученные в те времена знания растерялись. Так вот Джавохир помогает мне их собирать, и открывать для  себя по новому, методично, шаг за шагом, задача за задачей. Что-то дается легко, что-то дается сложно, но Джавохир всегда находит способ донести информацию так чтобы она была полностью усвоена. С административной стороны никаких вопросов не возникало - все четко,  вовремя и предсказуемо. И если сейчас у меня спросить об учителе математики, я в первую очередь буду советовать Джавохира. "
  },
 ]
const Commentarie = () => {
  return (
    <CommentWrapper>
     <div className="commentPage w-100">
          <div className="container">
            <h1 className="w-100 text-center text-white ">
              O'quvchilarimiz fikrlari
            </h1>
            <Button  className="mx-2 commentButton" variant="outlined">
             <Link to="/thought" className="colorPrimary">  Fikr qoldirish</Link>
            </Button>
          </div>
        </div>
        <div className="comments">
          <div className="container">
            <div className="row">
             {Comments.map((v) => (
              <div className="col-12 mt-3 bg-white p-5 shadow">
                <div className="d-flex align-items-center">
                  <img className="pe-2" src={v.img} alt="" />
                  <div className="">
                    <h5 > {v.nameTeacher}</h5>
                    <p> {v.function}</p>
                  </div>
                </div>
                <p>
                {v.text}
                </p>
              </div>
             ))}
              
            </div>
         </div>
      </div>
    </CommentWrapper>
  );
};

export default Commentarie;
