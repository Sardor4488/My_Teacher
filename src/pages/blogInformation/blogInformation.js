import React from "react";
import BlogInformationWrapper from "./blogInformationWrapper";
import imgInformation from "./blogInformation.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF, faOdnoklassniki, faTelegram, faTelegramPlane, faTwitter, faVk, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

const BlogInformation = () => {
  return (
    <BlogInformationWrapper>
      <div className="py-5 bgSucces">
       <div className="container">
       <div className="row">
          <div className="col-md-6 pe-0 ps-0">
            <img className="w-100 radiusImg  " src={imgInformation} alt="" />
          </div>
          <div className="col-md-6 bg-white radiusText  p-3">
            <h3>Bizga investitsiya kiriting…</h3>
            <h5>Assalomu alaykum, mening ismim Sardor.</h5>
            <p>
              Men WEBCLASS/MYTEACHER onlayn maktabining asoschisiman, u
              odamlarga har qanday chet tilini individual o'qituvchi bilan uyda,
              ishxonada yoki istalgan joyda, va qulay vaqtda o'rganishga yordam
              beradi. Bizning darslarimiz onlayn tarzda Zoom va Skype kabi
              dasturlar yordamida o'qitiladi.
              <span className="py-2">
                Bizning loyihamiz, avvalambor, ishsizlik, qulay, sifatli va
                arzon ta'lim olish kabi muammolarni hal qilishga qaratilgan.
              </span>
              Bu fikr menga Buxoroda o'qib yurganimda va "Zargaron"
              mehmonxonasida ishlaganimda kelgan. Meni o'z mutaxassisligim
              o’qituvchi, lekin har doim shu ishim bilan bir necha cheklangan
              odamga emas ta’lim sohasida barcha o’qituvchilarni jamlab,
              millionlab odamlarga foydam tegishini orzu qilardim. Va bir kuni,
              2018 yilning kuzida, men YouTube-da SkyEng onlayn maktabining
              asoschisi Georgi Soloviev bilan intervyu ko'rdim. Va shu vaqtdan
              boshlab menda xuddi shu onlayn maktabni O'zbekistonda tashkil
              etish fikri paydo bo'ldi, chunki menda IT va biznesga qiziqish
              juda katta edi. To'g'ri, u paytlari bunday biznesni boshlash hali
              juda erta edi, chunki...
            </p>
          </div>
        </div>
        <p className=" d-flex w-100 text-end py-5">
         <Link  className="vk m-1" > <FontAwesomeIcon icon={faVk}/> </Link>
         <Link  className="Facebook m-1" > <FontAwesomeIcon icon={faFacebookF}/> </Link>
         <Link  className="odna m-1" > <FontAwesomeIcon icon={faOdnoklassniki}/> </Link>
         <Link  className="tg m-1" > <FontAwesomeIcon icon={faTelegramPlane}/> </Link>
         <Link  className="twitter m-1" > <FontAwesomeIcon icon={faTwitter}/> </Link>
         <Link  className="whatsap m-1" > <FontAwesomeIcon icon={faWhatsapp}/> </Link>
        </p>
       </div>
      </div>
    </BlogInformationWrapper>
  );
};

export default BlogInformation;
