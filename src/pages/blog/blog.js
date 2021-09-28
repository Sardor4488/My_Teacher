import React from "react";
import BlogWrapper from "./blogWrapper";
import daryoUz from "./daryoUz.png";
import xabarUz from "./xabar.uz.png";
import invest from "./Sardor.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const blog = [
  {
    img: invest,
    title: "Bizga inveTTstitsiya kiriting…",
    name: "Assalomu alaykum, mening ismim Sardor.",
    text: "Men WEBCLASS/MYTEACHER onlayn  maktabining asoschisiman, u odamlarga har qanday chet tilini individual o'qituvchi...",
    to:"/blogInformation"
  },
    {
      img: daryoUz,
      title:
        "Daryo.uz maqolasi: Audio kursmi yoki onlayn dars? Qay biri samaraliroq?",
      text: "Hozirgi kunda til o‘rganish uchun intensiv audio kurs, degan tushuncha keng tarqalib, shov-shuvlarga sabab bo‘lmoqda...",
    },
  {
    img: xabarUz,
    title:
      "Xabar.uz maqolasi: Ikki yosh filolog yaxshi daromad topish yo'lini topishdi. Qanday qilib?",
    text: "Yaqinda Buxoroda aholiga IT-mutaxassisliklarni hamda kompyuter texnologiyalari va internetdan  samarali foydalanishni o'rgatishga mo'ljallangan yangi IT-markaz o'z eshiklarini...",
  },
];
const Blog = () => {
  return (
    <BlogWrapper>
      <div>
        <div className="blog">
          <h1>MyTeacher yangiliklari va xabarlari</h1>
        </div>
        <div className="information">
          <div className="container py-5">
            <div className="row">
              {blog.map((v) => (
                <div className="col-md-4 ps-0 my-2">
                  <div className=" informationCard pb-4">
                    <img src={v.img} className="informationImg" alt="" />
                    <div className="p-3 text-center pb-4">
                      <h5 className="text-center">{v.title}</h5>
                      <p className="py-2 text-center">{v.name}</p>
                      <p className="text-center">{v.text}</p>
                    </div>
                    <Button className="batafsil" variant="contained">
                      <Link className="text-white" to={v.to} >Batafsil</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BlogWrapper>
  );
};

export default Blog;
